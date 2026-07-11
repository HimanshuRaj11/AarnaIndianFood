"use server";

import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { revalidatePath } from "next/cache";

interface CartItemInput {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

export async function submitInvoice(
  items: CartItemInput[],
  paymentMode: "CASH" | "CARD" | "UPI" | "NET_BANKING" | "CHEQUE",
  discount: number,
  tableNo?: string,
  clientName?: string,
  clientPhone?: string,
  branchIdOverride?: string
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

    // Atomically increment the branch invoice sequence
    const updatedBranch = await prisma.branch.update({
      where: { id: branchId },
      data: { invoiceSequence: { increment: 1 } },
    });

    const sequenceNo = updatedBranch.invoiceSequence;
    const branchPrefix = updatedBranch.name.substring(0, 4).replace(/\s/g, "").toUpperCase();
    const invoiceId = `${branchPrefix}-INV-${sequenceNo}`;
    const invoiceIdTrack = invoiceId;

    // Calculate invoice totals
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    
    // Apply 14% VAT rate as requested
    const taxRate = 0.14;
    const taxAmount = Math.round((subtotal - discount) * taxRate * 100) / 100;
    const total = Math.round((subtotal - discount + taxAmount) * 100) / 100;

    const invoice = await prisma.$transaction(async (tx) => {
      const inv = await tx.invoice.create({
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
          clientName: clientName || "",
          clientPhone: clientPhone || "",
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

      // Find KOTs for the same branch and table where invoiceMongoId is null (active KOTs)
      if (tableNo && tableNo.trim() !== "") {
        await tx.kOT.updateMany({
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
      }

      return inv;
    });

    revalidatePath("/overview");
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
        branchName: updatedBranch.name,
        branchAddress: `${updatedBranch.street}, ${updatedBranch.city}`,
        branchPhone: updatedBranch.phone,
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
            notes: notes || "",
          })),
        },
      },
      include: {
        items: true,
      },
    });

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
      },
    };
  } catch (error: any) {
    console.error("Submit KOT Error:", error);
    return { success: false, error: "Failed to place KOT." };
  }
}
