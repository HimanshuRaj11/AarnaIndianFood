"use server";

import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { revalidatePath } from "next/cache";

interface CartItemInput {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  specification?: string;
  isComplement?: boolean;
}

export async function submitInvoice(
  items: CartItemInput[],
  paymentMode: "CASH" | "CARD" | "UPI" | "NET_BANKING" | "CHEQUE",
  discount: number,
  tableNo?: string,
  clientName?: string,
  clientPhone?: string,
  branchIdOverride?: string,
  existingHeldId?: string,
  existingKotId?: string
) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return { success: false, error: "Authentication session expired. Please log in again." };
    }

    if (items.length === 0) {
      return { success: false, error: "Cart is empty." };
    }

    const branchId = branchIdOverride || user.branchId;
    if (!branchId) {
      return { success: false, error: "Branch context is required." };
    }

    const branch = await prisma.branch.findUnique({
      where: { id: branchId },
    });
    if (!branch) {
      return { success: false, error: "Branch not found." };
    }

    // Calculate invoice totals
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const taxRate = 0.14; // 14% VAT
    const taxAmount = Math.round((subtotal - discount) * taxRate * 100) / 100;
    const total = Math.round((subtotal - discount + taxAmount) * 100) / 100;

    const invoice = await prisma.$transaction(async (tx) => {
      let inv;

      if (existingHeldId) {
        // Update existing held invoice to finalized "Done" status
        const existingHeld = await tx.invoice.findUnique({
          where: { id: existingHeldId },
        });

        if (existingHeld) {
          await tx.invoiceItem.deleteMany({
            where: { invoiceId: existingHeldId },
          });

          inv = await tx.invoice.update({
            where: { id: existingHeldId },
            data: {
              subtotal,
              discount,
              taxAmount,
              total,
              paymentMode,
              invoiceStatus: "Done",
              clientName: clientName || "",
              clientPhone: clientPhone || "",
              notes: tableNo ? `Table: ${tableNo}` : "",
              items: {
                create: items.map((item) => ({
                  productId: item.productId,
                  name: item.name,
                  price: item.price,
                  quantity: item.quantity,
                  total: item.price * item.quantity,
                })),
              },
            },
          });
        }
      }

      if (!inv) {
        // Atomically increment the branch invoice sequence
        const updatedBranch = await tx.branch.update({
          where: { id: branchId },
          data: { invoiceSequence: { increment: 1 } },
        });

        const sequenceNo = updatedBranch.invoiceSequence;
        const branchPrefix = updatedBranch.name.substring(0, 4).replace(/\s/g, "").toUpperCase();
        const invoiceId = `${branchPrefix}-INV-${sequenceNo}`;
        const invoiceIdTrack = invoiceId;

        inv = await tx.invoice.create({
          data: {
            invoiceId,
            invoiceIdTrack,
            branchId,
            billedById: user.userId,
            subtotal,
            discount,
            taxAmount,
            total,
            paymentMode,
            invoiceStatus: "Done",
            clientName: clientName || "",
            clientPhone: clientPhone || "",
            notes: tableNo ? `Table: ${tableNo}` : "",
            items: {
              create: items.map((item) => ({
                productId: item.productId,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
                total: item.price * item.quantity,
              })),
            },
          },
        });
      }

      // Link existing KOT if specified or find active KOT for this table
      let linkedKot = false;
      if (existingKotId) {
        await tx.kOT.update({
          where: { id: existingKotId },
          data: {
            invoiceMongoId: inv.id,
            invoiceId: inv.invoiceId,
            status: "SERVED",
          },
        });
        linkedKot = true;
      } else if (tableNo && tableNo.trim() !== "") {
        const matchingKots = await tx.kOT.updateMany({
          where: {
            branchId,
            tableNo: tableNo.trim(),
            invoiceMongoId: null,
          },
          data: {
            invoiceMongoId: inv.id,
            invoiceId: inv.invoiceId,
            status: "SERVED",
          },
        });
        if (matchingKots.count > 0) {
          linkedKot = true;
        }
      }

      // Ensure a KOT is permanently stored in database for every checkout if none was previously linked
      if (!linkedKot) {
        const branchForKot = await tx.branch.update({
          where: { id: branchId },
          data: { kotSequence: { increment: 1 } },
        });
        const branchPrefix = branchForKot.name.substring(0, 4).replace(/\s/g, "").toUpperCase();
        const autoKotNo = `${branchPrefix}-KOT-${branchForKot.kotSequence}`;

        await tx.kOT.create({
          data: {
            kotNo: autoKotNo,
            branchId,
            tableNo: (tableNo && tableNo.trim()) || "Direct Checkout",
            status: "SERVED",
            invoiceMongoId: inv.id,
            invoiceId: inv.invoiceId,
            items: {
              create: items.map((item) => ({
                productId: item.productId,
                name: item.name,
                quantity: item.quantity,
                notes: item.specification || "Direct billing",
              })),
            },
          },
        });
      }

      return inv;
    });

    revalidatePath("/overview");
    revalidatePath("/pos");
    revalidatePath("/management/kots");
    revalidatePath("/management/invoices");

    return {
      success: true,
      invoiceNo: invoice.invoiceId,
      invoice: {
        id: invoice.id,
        invoiceNo: invoice.invoiceId,
        items: items.map((item) => ({
          name: item.name,
          quantity: item.quantity,
          price: item.price,
          total: item.price * item.quantity,
        })),
        subtotal: invoice.subtotal,
        discount: invoice.discount,
        taxAmount: invoice.taxAmount,
        total: invoice.total,
        paymentMode: invoice.paymentMode,
        createdAt: invoice.createdAt.toISOString(),
        branchName: branch.name,
        branchAddress: `${branch.street}, ${branch.city}`,
        branchPhone: branch.phone,
        cashier: user.name,
      },
    };
  } catch (error: any) {
    console.error("Submit Invoice Error:", error);
    return { success: false, error: "Failed to finalize the invoice." };
  }
}

export async function submitKOT(
  tableNo: string,
  items: CartItemInput[],
  notes?: string,
  branchIdOverride?: string
) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return { success: false, error: "Authentication session expired." };
    }

    if (items.length === 0) {
      return { success: false, error: "KOT items cannot be empty." };
    }

    if (!tableNo.trim()) {
      return { success: false, error: "Please specify a Table Number." };
    }

    const branchId = branchIdOverride || user.branchId;
    if (!branchId) {
      return { success: false, error: "Branch context is required." };
    }

    // Atomically increment the branch KOT sequence
    const updatedBranch = await prisma.branch.update({
      where: { id: branchId },
      data: { kotSequence: { increment: 1 } },
    });

    const sequenceNo = updatedBranch.kotSequence;
    const branchPrefix = updatedBranch.name.substring(0, 4).replace(/\s/g, "").toUpperCase();
    const kotNo = `${branchPrefix}-KOT-${sequenceNo}`;

    const newKOT = await prisma.kOT.create({
      data: {
        kotNo,
        branchId,
        tableNo: tableNo.trim(),
        status: "PENDING",
        items: {
          create: items.map((item) => ({
            productId: item.productId,
            name: item.name,
            quantity: item.quantity,
            notes: notes || item.specification || "",
          })),
        },
      },
      include: {
        items: true,
      },
    });

    revalidatePath("/overview");
    revalidatePath("/pos");
    revalidatePath("/management/kots");

    return {
      success: true,
      kotNo: newKOT.kotNo,
      kot: {
        id: newKOT.id,
        kotNo: newKOT.kotNo,
        tableNo: newKOT.tableNo,
        items: newKOT.items,
        status: newKOT.status,
        createdAt: newKOT.createdAt.toISOString(),
        branchName: updatedBranch.name,
        branchAddress: `${updatedBranch.street}, ${updatedBranch.city}`,
        branchPhone: updatedBranch.phone,
        cashier: user.name,
      },
    };
  } catch (error: any) {
    console.error("Submit KOT Error:", error);
    return { success: false, error: "Failed to place KOT." };
  }
}

export async function updateKOT(
  kotId: string,
  tableNo: string,
  items: CartItemInput[],
  notes?: string
) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return { success: false, error: "Authentication session expired." };
    }

    if (items.length === 0) {
      return { success: false, error: "KOT items cannot be empty." };
    }

    if (!tableNo.trim()) {
      return { success: false, error: "Table Number is required." };
    }

    const existingKOT = await prisma.kOT.findUnique({
      where: { id: kotId },
      include: { branch: true },
    });

    if (!existingKOT) {
      return { success: false, error: "KOT not found in database." };
    }

    const updatedKOT = await prisma.$transaction(async (tx) => {
      await tx.kOTItem.deleteMany({
        where: { kotId },
      });

      return tx.kOT.update({
        where: { id: kotId },
        data: {
          tableNo: tableNo.trim(),
          items: {
            create: items.map((item) => ({
              productId: item.productId,
              name: item.name,
              quantity: item.quantity,
              notes: notes || item.specification || "",
            })),
          },
        },
        include: {
          items: true,
          branch: true,
        },
      });
    });

    revalidatePath("/pos");
    revalidatePath("/management/kots");

    return {
      success: true,
      kotNo: updatedKOT.kotNo,
      kot: {
        id: updatedKOT.id,
        kotNo: updatedKOT.kotNo,
        tableNo: updatedKOT.tableNo,
        items: updatedKOT.items,
        status: updatedKOT.status,
        createdAt: updatedKOT.createdAt.toISOString(),
        branchName: updatedKOT.branch.name,
        branchAddress: `${updatedKOT.branch.street}, ${updatedKOT.branch.city}`,
        branchPhone: updatedKOT.branch.phone,
        cashier: user.name,
      },
    };
  } catch (error: any) {
    console.error("Update KOT Error:", error);
    return { success: false, error: "Failed to update KOT." };
  }
}

export async function holdBill(
  items: CartItemInput[],
  tableNo: string,
  clientName: string,
  clientPhone: string,
  discount: number,
  discountType: string,
  discountValue: number,
  paymentMode: string,
  kotNotes: string,
  branchIdOverride?: string,
  existingHeldDbId?: string
) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return { success: false, error: "Authentication session expired." };
    }

    if (items.length === 0) {
      return { success: false, error: "Cart is empty." };
    }

    const branchId = branchIdOverride || user.branchId;
    if (!branchId) {
      return { success: false, error: "Branch context is required." };
    }

    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const taxRate = 0.14;
    const taxAmount = Math.round((subtotal - discount) * taxRate * 100) / 100;
    const total = Math.round((subtotal - discount + taxAmount) * 100) / 100;

    const notesPayload = JSON.stringify({
      kotNotes: kotNotes || "",
      discountType,
      discountValue,
      tableNo: tableNo || "",
    });

    if (existingHeldDbId) {
      const existing = await prisma.invoice.findUnique({
        where: { id: existingHeldDbId },
      });

      if (existing) {
        const updated = await prisma.$transaction(async (tx) => {
          await tx.invoiceItem.deleteMany({
            where: { invoiceId: existingHeldDbId },
          });

          return tx.invoice.update({
            where: { id: existingHeldDbId },
            data: {
              subtotal,
              discount,
              taxAmount,
              total,
              clientName: clientName || "",
              clientPhone: clientPhone || "",
              paymentMode,
              notes: notesPayload,
              items: {
                create: items.map((item) => ({
                  productId: item.productId,
                  name: item.name,
                  price: item.price,
                  quantity: item.quantity,
                  total: item.price * item.quantity,
                })),
              },
            },
            include: { items: true },
          });
        });

        revalidatePath("/pos");
        return {
          success: true,
          heldId: updated.id,
          invoiceNo: updated.invoiceId,
        };
      }
    }

    // New held invoice in DB
    const updatedBranch = await prisma.branch.update({
      where: { id: branchId },
      data: { invoiceSequence: { increment: 1 } },
    });
    const branchPrefix = updatedBranch.name.substring(0, 4).replace(/\s/g, "").toUpperCase();
    const invoiceId = `${branchPrefix}-HOLD-${updatedBranch.invoiceSequence}`;

    const heldInvoice = await prisma.invoice.create({
      data: {
        invoiceId,
        invoiceIdTrack: invoiceId,
        branchId,
        billedById: user.userId,
        subtotal,
        discount,
        taxAmount,
        total,
        paymentMode,
        invoiceStatus: "HELD",
        clientName: clientName || "",
        clientPhone: clientPhone || "",
        notes: notesPayload,
        items: {
          create: items.map((item) => ({
            productId: item.productId,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            total: item.price * item.quantity,
          })),
        },
      },
      include: { items: true },
    });

    revalidatePath("/pos");
    return {
      success: true,
      heldId: heldInvoice.id,
      invoiceNo: heldInvoice.invoiceId,
    };
  } catch (error: any) {
    console.error("Hold Bill Error:", error);
    return { success: false, error: "Failed to hold bill." };
  }
}

export async function deleteHeldInvoice(invoiceId: string) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return { success: false, error: "Session expired." };
    }

    await prisma.invoice.update({
      where: { id: invoiceId },
      data: { delete: true },
    });

    revalidatePath("/pos");
    return { success: true };
  } catch (error: any) {
    console.error("Delete Held Invoice Error:", error);
    return { success: false, error: "Failed to remove held bill." };
  }
}
