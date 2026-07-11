"use server";

import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function getBranchInvoices(branchId: string) {
  try {
    const admin = await getCurrentUser();
    if (!admin || admin.role !== "ADMIN") {
      return { success: false, error: "Unauthorized." };
    }

    const whereClause: any = { delete: false };
    if (branchId && branchId !== "ALL") {
      whereClause.branchId = branchId;
    }

    const invoices = await prisma.invoice.findMany({
      where: whereClause,
      orderBy: { createdAt: "desc" },
      include: {
        items: true,
        billedBy: {
          select: { name: true }
        }
      }
    });

    const formatted = invoices.map((inv) => ({
      id: inv.id,
      invoiceId: inv.invoiceId,
      invoiceIdTrack: inv.invoiceIdTrack,
      clientName: inv.clientName || "Walk-in Customer",
      clientPhone: inv.clientPhone || "N/A",
      subtotal: inv.subtotal,
      discount: inv.discount,
      taxAmount: inv.taxAmount,
      total: inv.total,
      paymentMode: inv.paymentMode,
      cashier: inv.billedBy?.name || "Unknown",
      createdAt: inv.createdAt.toISOString(),
      itemsCount: inv.items.reduce((sum, item) => sum + item.quantity, 0)
    }));

    return { success: true, invoices: formatted };
  } catch (error) {
    console.error("Get Invoices Error:", error);
    return { success: false, error: "Failed to load invoices." };
  }
}

export async function deleteInvoices(ids: string[]) {
  try {
    const admin = await getCurrentUser();
    if (!admin || admin.role !== "ADMIN") {
      return { success: false, error: "Unauthorized. Only Admin can delete invoices." };
    }

    if (!ids || ids.length === 0) {
      return { success: false, error: "No invoices selected for deletion." };
    }

    // Soft delete invoices
    await prisma.invoice.updateMany({
      where: { id: { in: ids } },
      data: { delete: true },
    });

    revalidatePath("/management/invoices");
    return { success: true };
  } catch (error: any) {
    console.error("Delete Invoices Error:", error);
    return { success: false, error: "Failed to delete selected invoices." };
  }
}

export async function resequenceInvoices(branchId: string) {
  try {
    const admin = await getCurrentUser();
    if (!admin || admin.role !== "ADMIN") {
      return { success: false, error: "Unauthorized. Only Admin can resequence invoices." };
    }

    if (!branchId) {
      return { success: false, error: "Branch selection is required." };
    }

    const branch = await prisma.branch.findUnique({ where: { id: branchId } });
    if (!branch) {
      return { success: false, error: "Selected branch does not exist." };
    }

    const branchPrefix = branch.name.substring(0, 4).replace(/\s/g, "").toUpperCase();

    // Fetch all active invoices sorted by creation date
    const invoices = await prisma.invoice.findMany({
      where: { branchId, delete: false },
      orderBy: { createdAt: "asc" },
    });

    // Transactionally update all invoice sequences and sync branch counter
    await prisma.$transaction(async (tx) => {
      let index = 1;
      for (const inv of invoices) {
        const newInvoiceId = `${branchPrefix}-INV-${1000 + index}`;
        
        // Update Invoice ID (leaves invoiceIdTrack unchanged)
        await tx.invoice.update({
          where: { id: inv.id },
          data: { invoiceId: newInvoiceId },
        });

        // Sync linked KOTs invoice ID
        await tx.kOT.updateMany({
          where: { invoiceMongoId: inv.id },
          data: { invoiceId: newInvoiceId },
        });

        index++;
      }

      // Reset branch's current sequence tracker
      await tx.branch.update({
        where: { id: branchId },
        data: { invoiceSequence: 1000 + invoices.length },
      });
    });

    revalidatePath("/management/invoices");
    return { success: true };
  } catch (error: any) {
    console.error("Resequence Invoices Error:", error);
    return { success: false, error: "Failed to resequence invoice list." };
  }
}
