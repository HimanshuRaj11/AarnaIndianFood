"use server";

import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function createProduct(formData: FormData) {
  try {
    const admin = await getCurrentUser();
    if (!admin || admin.role !== "ADMIN") {
      return { success: false, error: "Unauthorized. Only Admin can create products." };
    }

    const name = formData.get("name") as string;
    const code = formData.get("code") as string;
    const price = Number(formData.get("price"));
    const description = formData.get("description") as string;
    const category = formData.get("category") as string;
    const branchId = formData.get("branchId") as string; // Optional (empty means global)

    if (!name || !code || price === undefined || !category) {
      return { success: false, error: "Missing required fields." };
    }

    // Check if code already exists
    const existing = await prisma.product.findUnique({
      where: { code: code.trim().toUpperCase() },
    });
    if (existing) {
      return { success: false, error: `Product code "${code}" already exists.` };
    }

    await prisma.product.create({
      data: {
        name: name.trim(),
        code: code.trim().toUpperCase(),
        price,
        description: description || null,
        category,
        branchId: branchId || null,
        isAvailable: true,
      },
    });

    revalidatePath("/management/products");
    return { success: true };
  } catch (error: any) {
    console.error("Create Product Error:", error);
    return { success: false, error: "Failed to create product." };
  }
}

export async function updateProduct(id: string, formData: FormData) {
  try {
    const admin = await getCurrentUser();
    if (!admin || admin.role !== "ADMIN") {
      return { success: false, error: "Unauthorized. Only Admin can update products." };
    }

    const name = formData.get("name") as string;
    const code = formData.get("code") as string;
    const price = Number(formData.get("price"));
    const description = formData.get("description") as string;
    const category = formData.get("category") as string;
    const branchId = formData.get("branchId") as string; // Optional (empty means global)
    const isAvailable = formData.get("isAvailable") === "true";

    if (!name || !code || price === undefined || !category) {
      return { success: false, error: "Missing required fields." };
    }

    // Check if code already exists on another product
    const existing = await prisma.product.findFirst({
      where: {
        code: code.trim().toUpperCase(),
        NOT: { id },
      },
    });
    if (existing) {
      return { success: false, error: `Product code "${code}" is already in use by another product.` };
    }

    await prisma.product.update({
      where: { id },
      data: {
        name: name.trim(),
        code: code.trim().toUpperCase(),
        price,
        description: description || null,
        category,
        branchId: branchId || null,
        isAvailable,
      },
    });

    revalidatePath("/management/products");
    return { success: true };
  } catch (error: any) {
    console.error("Update Product Error:", error);
    return { success: false, error: "Failed to update product." };
  }
}

export async function deleteProduct(id: string) {
  try {
    const admin = await getCurrentUser();
    if (!admin || admin.role !== "ADMIN") {
      return { success: false, error: "Unauthorized. Only Admin can delete products." };
    }

    await prisma.product.delete({ where: { id } });
    revalidatePath("/management/products");
    return { success: true };
  } catch (error: any) {
    console.error("Delete Product Error:", error);
    return { success: false, error: "Failed to delete product." };
  }
}
