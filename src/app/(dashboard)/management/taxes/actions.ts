"use server";

import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function createTax(taxName: string, percentage: number, taxCode?: string) {
  try {
    const admin = await getCurrentUser();
    if (!admin || admin.role !== "ADMIN") {
      return { success: false, error: "Unauthorized. Only Admin can manage taxes." };
    }

    if (!taxName.trim() || percentage === undefined) {
      return { success: false, error: "Tax Name and Percentage are required." };
    }

    await prisma.tax.create({
      data: {
        taxName: taxName.trim(),
        percentage,
        taxCode: taxCode?.trim() || null,
      },
    });

    revalidatePath("/management/taxes");
    return { success: true };
  } catch (error: any) {
    console.error("Create Tax Error:", error);
    return { success: false, error: "Failed to create tax." };
  }
}

export async function updateTax(id: string, taxName: string, percentage: number, taxCode: string, isActive: boolean) {
  try {
    const admin = await getCurrentUser();
    if (!admin || admin.role !== "ADMIN") {
      return { success: false, error: "Unauthorized. Only Admin can update taxes." };
    }

    if (!taxName.trim() || percentage === undefined) {
      return { success: false, error: "Tax Name and Percentage are required." };
    }

    await prisma.tax.update({
      where: { id },
      data: {
        taxName: taxName.trim(),
        percentage,
        taxCode: taxCode?.trim() || null,
        isActive,
      },
    });

    revalidatePath("/management/taxes");
    return { success: true };
  } catch (error: any) {
    console.error("Update Tax Error:", error);
    return { success: false, error: "Failed to update tax." };
  }
}

export async function deleteTax(id: string) {
  try {
    const admin = await getCurrentUser();
    if (!admin || admin.role !== "ADMIN") {
      return { success: false, error: "Unauthorized. Only Admin can delete taxes." };
    }

    await prisma.tax.delete({ where: { id } });
    revalidatePath("/management/taxes");
    return { success: true };
  } catch (error: any) {
    console.error("Delete Tax Error:", error);
    return { success: false, error: "Failed to delete tax." };
  }
}
