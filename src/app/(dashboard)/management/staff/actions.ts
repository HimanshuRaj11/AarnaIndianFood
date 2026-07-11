"use server";

import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { getCurrentUser } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const staffSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.enum(["ADMIN", "MANAGER", "STAFF"]),
  branchId: z.string().min(1, "Branch assignment is required"),
});

export async function registerStaffMember(prevState: any, formData: FormData) {
  try {
    const admin = await getCurrentUser();
    if (!admin || admin.role !== "ADMIN") {
      return { success: false, error: "Unauthorized: Only Admins can register new members." };
    }

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const role = formData.get("role") as string;
    const branchId = formData.get("branchId") as string;

    const validated = staffSchema.safeParse({ name, email, password, role, branchId });
    if (!validated.success) {
      return {
        success: false,
        error: Object.values(validated.error.flatten().fieldErrors).flat().join(", "),
      };
    }

    // Check if email already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });
    if (existingUser) {
      return { success: false, error: "A user with this email address already exists." };
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    await prisma.user.create({
      data: {
        name,
        email: email.toLowerCase(),
        passwordHash,
        role,
        branchId,
      },
    });

    revalidatePath("/management/staff");
    return { success: true };
  } catch (error: any) {
    console.error("Staff Registration Error:", error);
    return { success: false, error: "An unexpected error occurred during registration." };
  }
}

export async function deleteStaffMember(userId: string) {
  try {
    const admin = await getCurrentUser();
    if (!admin || admin.role !== "ADMIN") {
      return { success: false, error: "Unauthorized: Only Admins can remove members." };
    }

    // Prevent admin from deleting themselves
    if (admin.userId === userId) {
      return { success: false, error: "Cannot delete your own admin account." };
    }

    await prisma.user.delete({
      where: { id: userId },
    });

    revalidatePath("/management/staff");
    return { success: true };
  } catch (error: any) {
    console.error("Delete Staff Error:", error);
    return { success: false, error: "Failed to delete staff member." };
  }
}
