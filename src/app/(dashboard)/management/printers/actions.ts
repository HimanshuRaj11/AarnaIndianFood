"use server";

import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const printerSchema = z.object({
  name: z.string().min(2, "Station name must be at least 2 characters"),
  printerName: z.string().min(1, "Device printer name is required"),
  branchId: z.string().min(1, "Branch is required"),
  type: z.enum(["RECEIPT", "KOT", "BOTH"]),
  isDefault: z.boolean().default(false),
});

export async function createPrinter(formData: FormData) {
  try {
    const user = await getCurrentUser();
    if (!user || (user.role !== "ADMIN" && user.role !== "OWNER")) {
      return { success: false, error: "Unauthorized. Admin permissions required." };
    }

    const name = formData.get("name") as string;
    const printerName = formData.get("printerName") as string;
    const branchId = formData.get("branchId") as string;
    const type = (formData.get("type") as "RECEIPT" | "KOT" | "BOTH") || "RECEIPT";
    const isDefault = formData.get("isDefault") === "true";

    const parsed = printerSchema.safeParse({ name, printerName, branchId, type, isDefault });
    if (!parsed.success) {
      return {
        success: false,
        error: Object.values(parsed.error.flatten().fieldErrors).flat().join(", "),
      };
    }

    // If marked as default, unset other defaults of matching type in the same branch
    if (isDefault) {
      await prisma.printer.updateMany({
        where: {
          branchId,
          type: { in: [type, "BOTH"] },
          isDefault: true,
        },
        data: { isDefault: false },
      });
    }

    await prisma.printer.create({
      data: {
        name,
        printerName,
        branchId,
        type,
        isDefault,
      },
    });

    revalidatePath("/management/printers");
    revalidatePath("/pos");
    revalidatePath("/profile");
    return { success: true };
  } catch (error: any) {
    console.error("Create Printer Error:", error);
    return { success: false, error: "Failed to create printer record." };
  }
}

export async function updatePrinter(id: string, formData: FormData) {
  try {
    const user = await getCurrentUser();
    if (!user || (user.role !== "ADMIN" && user.role !== "OWNER")) {
      return { success: false, error: "Unauthorized. Admin permissions required." };
    }

    const name = formData.get("name") as string;
    const printerName = formData.get("printerName") as string;
    const branchId = formData.get("branchId") as string;
    const type = (formData.get("type") as "RECEIPT" | "KOT" | "BOTH") || "RECEIPT";
    const isDefault = formData.get("isDefault") === "true";

    const parsed = printerSchema.safeParse({ name, printerName, branchId, type, isDefault });
    if (!parsed.success) {
      return {
        success: false,
        error: Object.values(parsed.error.flatten().fieldErrors).flat().join(", "),
      };
    }

    // If marked as default, unset other defaults in the branch
    if (isDefault) {
      await prisma.printer.updateMany({
        where: {
          branchId,
          type: { in: [type, "BOTH"] },
          isDefault: true,
          id: { not: id },
        },
        data: { isDefault: false },
      });
    }

    await prisma.printer.update({
      where: { id },
      data: {
        name,
        printerName,
        branchId,
        type,
        isDefault,
      },
    });

    revalidatePath("/management/printers");
    revalidatePath("/pos");
    revalidatePath("/profile");
    return { success: true };
  } catch (error: any) {
    console.error("Update Printer Error:", error);
    return { success: false, error: "Failed to update printer record." };
  }
}

export async function deletePrinter(id: string) {
  try {
    const user = await getCurrentUser();
    if (!user || (user.role !== "ADMIN" && user.role !== "OWNER")) {
      return { success: false, error: "Unauthorized. Admin permissions required." };
    }

    await prisma.printer.delete({
      where: { id },
    });

    revalidatePath("/management/printers");
    revalidatePath("/pos");
    revalidatePath("/profile");
    return { success: true };
  } catch (error: any) {
    console.error("Delete Printer Error:", error);
    return { success: false, error: "Failed to delete printer." };
  }
}
