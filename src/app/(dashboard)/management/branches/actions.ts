"use server";

import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function createBranch(formData: FormData) {
  try {
    const admin = await getCurrentUser();
    if (!admin || admin.role !== "ADMIN") {
      return { success: false, error: "Unauthorized. Only Admin can create branches." };
    }

    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const printerName = formData.get("printerName") as string;
    const invoiceSequence = Number(formData.get("invoiceSequence") || 1000);
    const street = formData.get("street") as string;
    const city = formData.get("city") as string;
    const state = formData.get("state") as string;
    const country = formData.get("country") as string;
    const zipCode = formData.get("zipCode") as string;

    if (!name || !phone || !street || !city || !state || !country || !zipCode) {
      return { success: false, error: "Missing required fields." };
    }

    const company = await prisma.company.findFirst();

    await prisma.branch.create({
      data: {
        name,
        phone,
        email: email || null,
        printerName: printerName || null,
        invoiceSequence,
        street,
        city,
        state,
        country,
        zipCode,
        companyId: company?.id || null,
      },
    });

    revalidatePath("/management/branches");
    return { success: true };
  } catch (error: any) {
    console.error("Create Branch Error:", error);
    return { success: false, error: "Failed to create branch." };
  }
}

export async function updateBranch(id: string, formData: FormData) {
  try {
    const admin = await getCurrentUser();
    if (!admin || admin.role !== "ADMIN") {
      return { success: false, error: "Unauthorized. Only Admin can update branches." };
    }

    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const printerName = formData.get("printerName") as string;
    const invoiceSequence = Number(formData.get("invoiceSequence") || 1000);
    const street = formData.get("street") as string;
    const city = formData.get("city") as string;
    const state = formData.get("state") as string;
    const country = formData.get("country") as string;
    const zipCode = formData.get("zipCode") as string;
    const active = formData.get("active") === "true";

    if (!name || !phone || !street || !city || !state || !country || !zipCode) {
      return { success: false, error: "Missing required fields." };
    }

    await prisma.branch.update({
      where: { id },
      data: {
        name,
        phone,
        email: email || null,
        printerName: printerName || null,
        invoiceSequence,
        street,
        city,
        state,
        country,
        zipCode,
        active,
      },
    });

    revalidatePath("/management/branches");
    return { success: true };
  } catch (error: any) {
    console.error("Update Branch Error:", error);
    return { success: false, error: "Failed to update branch." };
  }
}

export async function deleteBranch(id: string) {
  try {
    const admin = await getCurrentUser();
    if (!admin || admin.role !== "ADMIN") {
      return { success: false, error: "Unauthorized. Only Admin can delete branches." };
    }

    // Check if there are users in this branch
    const usersInBranch = await prisma.user.count({ where: { branchId: id } });
    if (usersInBranch > 0) {
      return { success: false, error: "Cannot delete branch with active staff assigned to it." };
    }

    await prisma.branch.delete({ where: { id } });
    revalidatePath("/management/branches");
    return { success: true };
  } catch (error: any) {
    console.error("Delete Branch Error:", error);
    return { success: false, error: "Failed to delete branch." };
  }
}
