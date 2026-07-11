"use server";

import prisma from "@/lib/prisma";

interface CartItemInput {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

export async function submitOnlineOrder(
  branchId: string,
  clientName: string,
  clientPhone: string,
  tableNo: string,
  items: CartItemInput[]
) {
  try {
    if (items.length === 0) {
      return { success: false, error: "Cart is empty." };
    }

    if (!branchId) {
      return { success: false, error: "Please select a branch to place your order." };
    }

    // Fetch the branch details to update invoice sequence
    const branch = await prisma.branch.findUnique({
      where: { id: branchId }
    });

    if (!branch) {
      return { success: false, error: "Selected branch does not exist." };
    }

    // Find a system user (ADMIN or STAFF) to associate the invoice with, since it's an online order
    const systemUser = await prisma.user.findFirst({
      where: { branchId },
    }) || await prisma.user.findFirst();

    if (!systemUser) {
      return { success: false, error: "No system operator found to process online orders for this branch." };
    }

    // Atomically increment the branch invoice sequence
    const updatedBranch = await prisma.branch.update({
      where: { id: branchId },
      data: { 
        invoiceSequence: { increment: 1 },
        kotSequence: { increment: 1 }
      },
    });

    const sequenceNo = updatedBranch.invoiceSequence;
    const branchPrefix = updatedBranch.name.substring(0, 4).replace(/\s/g, "").toUpperCase();
    const invoiceId = `${branchPrefix}-ONL-${sequenceNo}`;
    const invoiceIdTrack = invoiceId;

    // Calculate totals
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const taxRate = 0.14; // 14% VAT
    const taxAmount = Math.round(subtotal * taxRate * 100) / 100;
    const total = Math.round((subtotal + taxAmount) * 100) / 100;

    // Create KOT Sequence Number
    const kotNo = `${branchPrefix}-KOT-${updatedBranch.kotSequence}`;

    const invoice = await prisma.$transaction(async (tx) => {
      // Create Invoice
      const inv = await tx.invoice.create({
        data: {
          invoiceId,
          invoiceIdTrack,
          branchId,
          billedById: systemUser.id,
          subtotal,
          discount: 0,
          taxAmount,
          total,
          paymentMode: "UPI", // Default online mode
          invoiceStatus: "Pending Checkout",
          clientName,
          clientPhone,
          notes: `Online Order - Table: ${tableNo || "Delivery"}`,
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

      // Create KOT (Kitchen Ticket) linked to that branch
      await tx.kOT.create({
        data: {
          kotNo,
          branchId,
          tableNo: tableNo || "Online Order",
          status: "PENDING",
          invoiceMongoId: inv.id,
          invoiceId: inv.invoiceId,
          items: {
            create: items.map((item) => ({
              productId: item.productId,
              name: item.name,
              quantity: item.quantity,
              notes: "Online customer order",
            })),
          },
        },
      });

      return inv;
    });

    return {
      success: true,
      invoiceId: invoice.id,
      invoiceNo: invoice.invoiceId,
    };
  } catch (error: any) {
    console.error("Online Checkout Error:", error);
    return { success: false, error: "Failed to place your online order. Please try again." };
  }
}
