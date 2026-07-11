"use server";

import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function createCategory(name: string) {
  try {
    const admin = await getCurrentUser();
    if (!admin || admin.role !== "ADMIN") {
      return { success: false, error: "Unauthorized. Only Admin can create categories." };
    }

    if (!name.trim()) {
      return { success: false, error: "Category name is required." };
    }

    // Check if category name exists
    const existing = await prisma.category.findUnique({
      where: { name: name.trim() },
    });
    if (existing) {
      return { success: false, error: "Category already exists." };
    }

    await prisma.category.create({
      data: { name: name.trim() },
    });

    revalidatePath("/management/categories");
    return { success: true };
  } catch (error: any) {
    console.error("Create Category Error:", error);
    return { success: false, error: "Failed to create category." };
  }
}

export async function updateCategory(id: string, name: string, isActive: boolean) {
  try {
    const admin = await getCurrentUser();
    if (!admin || admin.role !== "ADMIN") {
      return { success: false, error: "Unauthorized. Only Admin can update categories." };
    }

    if (!name.trim()) {
      return { success: false, error: "Category name is required." };
    }

    // Check if name is taken by another category
    const existing = await prisma.category.findFirst({
      where: {
        name: name.trim(),
        NOT: { id },
      },
    });
    if (existing) {
      return { success: false, error: "Category name already exists." };
    }

    await prisma.category.update({
      where: { id },
      data: { name: name.trim(), isActive },
    });

    revalidatePath("/management/categories");
    return { success: true };
  } catch (error: any) {
    console.error("Update Category Error:", error);
    return { success: false, error: "Failed to update category." };
  }
}

export async function deleteCategory(id: string) {
  try {
    const admin = await getCurrentUser();
    if (!admin || admin.role !== "ADMIN") {
      return { success: false, error: "Unauthorized. Only Admin can delete categories." };
    }

    // Check if there are products in this category
    const category = await prisma.category.findUnique({ where: { id } });
    if (category) {
      const productCount = await prisma.product.count({
        where: { category: category.name },
      });
      if (productCount > 0) {
        return { success: false, error: `Cannot delete category because ${productCount} product(s) belong to it.` };
      }
    }

    await prisma.category.delete({ where: { id } });
    revalidatePath("/management/categories");
    return { success: true };
  } catch (error: any) {
    console.error("Delete Category Error:", error);
    return { success: false, error: "Failed to delete category." };
  }
}
