"use server";

import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function updateUserPrinterPreferences(
  receiptPrinterId: string | null,
  kotPrinterId: string | null
) {
  try {
    const session = await getCurrentUser();
    if (!session) {
      return { success: false, error: "Authentication session expired." };
    }

    // Verify printers belong to user's branch if user has branchId
    if (receiptPrinterId) {
      const p = await prisma.printer.findUnique({ where: { id: receiptPrinterId } });
      if (!p) {
        return { success: false, error: "Selected receipt printer not found." };
      }
    }

    if (kotPrinterId) {
      const p = await prisma.printer.findUnique({ where: { id: kotPrinterId } });
      if (!p) {
        return { success: false, error: "Selected KOT printer not found." };
      }
    }

    await prisma.user.update({
      where: { id: session.userId },
      data: {
        receiptPrinterId: receiptPrinterId || null,
        kotPrinterId: kotPrinterId || null,
      },
    });

    revalidatePath("/profile");
    revalidatePath("/pos");
    return { success: true };
  } catch (error: any) {
    console.error("Update Printer Preferences Error:", error);
    return { success: false, error: "Failed to update printer settings." };
  }
}
