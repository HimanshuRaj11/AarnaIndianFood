"use server";

import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { signJWT } from "@/lib/auth";
import { cookies } from "next/headers";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

export async function loginUser(prevState: any, formData: FormData) {
  try {
    const emailInput = formData.get("email") as string;
    const passwordInput = formData.get("password") as string;

    const validatedFields = loginSchema.safeParse({
      email: emailInput,
      password: passwordInput,
    });

    if (!validatedFields.success) {
      return {
        success: false,
        error: validatedFields.error.flatten().fieldErrors,
      };
    }

    const { email, password } = validatedFields.data;

    // Auto-seed if database has no users
    const userCount = await prisma.user.count();
    if (userCount === 0) {
      // Create default company
      let company = await prisma.company.findFirst();
      if (!company) {
        company = await prisma.company.create({
          data: {
            name: "Aarna Indian Foods Corp",
            street: "12 Radial Road, Connaught Place",
            city: "New Delhi",
            state: "Delhi",
            country: "India",
            zipCode: "110001",
            phone: "+91 11 2341 5678",
            currencySymbol: "₹",
            currencyCode: "INR",
            currencyName: "Indian Rupee",
          },
        });
      }

      // Create default branch
      let branch = await prisma.branch.findFirst();
      if (!branch) {
        branch = await prisma.branch.create({
          data: {
            name: "Aarna India - Delhi Main",
            street: "12 Radial Road, Connaught Place",
            city: "New Delhi",
            state: "Delhi",
            country: "India",
            zipCode: "110001",
            phone: "+91 11 2341 5678",
            invoiceSequence: 1000,
            kotSequence: 1,
            companyId: company.id,
          },
        });
      }

      // Create admin user
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash("admin123", salt);
      await prisma.user.create({
        data: {
          name: "Global Admin",
          email: "admin@aarna.com",
          passwordHash,
          role: "ADMIN",
          branchId: branch.id,
        },
      });

      // Create default categories
      const categories = ["Main Course", "Breads", "Beverages", "Desserts"];
      for (const cat of categories) {
        await prisma.category.upsert({
          where: { name: cat },
          update: {},
          create: { name: cat, isActive: true },
        });
      }

      // Create default tax
      const taxCount = await prisma.tax.count();
      if (taxCount === 0) {
        await prisma.tax.create({
          data: {
            taxName: "GST",
            percentage: 5.0,
            taxCode: "GST-5",
            isActive: true,
          },
        });
      }

      // Create default products
      const productCount = await prisma.product.count();
      if (productCount === 0) {
        await prisma.product.createMany({
          data: [
            { name: "Butter Chicken", code: "BC100", price: 380, category: "Main Course", isAvailable: true, branchId: branch.id },
            { name: "Paneer Tikka Masala", code: "PT101", price: 320, category: "Main Course", isAvailable: true, branchId: branch.id },
            { name: "Garlic Naan", code: "GN200", price: 60, category: "Breads", isAvailable: true, branchId: branch.id },
            { name: "Tandoori Roti", code: "TR201", price: 30, category: "Breads", isAvailable: true, branchId: branch.id },
            { name: "Dal Makhani", code: "DM102", price: 290, category: "Main Course", isAvailable: true, branchId: branch.id },
            { name: "Veg Biryani", code: "VB300", price: 280, category: "Rice & Biryani", isAvailable: true, branchId: branch.id },
            { name: "Chicken Biryani", code: "CB301", price: 350, category: "Rice & Biryani", isAvailable: true, branchId: branch.id },
            { name: "Mango Lassi", code: "ML400", price: 120, category: "Beverages", isAvailable: true, branchId: branch.id },
            { name: "Masala Chai", code: "MC401", price: 50, category: "Beverages", isAvailable: true, branchId: branch.id },
            { name: "Gulab Jamun", code: "GJ500", price: 90, category: "Desserts", isAvailable: true, branchId: branch.id },
          ],
        });
      }
    }

    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });
    if (!user) {
      return { success: false, error: "Invalid email or password" };
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return { success: false, error: "Invalid email or password" };
    }

    if (!user.isActive) {
      return { success: false, error: "User account is suspended." };
    }

    // Sign JWT payload
    const token = signJWT({
      userId: user.id,
      name: user.name,
      email: user.email,
      role: user.role as any,
      branchId: user.branchId ? user.branchId : undefined,
    });

    // Save as cookie
    const cookieStore = await cookies();
    cookieStore.set("aarna_auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    return { success: true };
  } catch (error: any) {
    console.error("Login Error:", error);
    return { success: false, error: "An unexpected error occurred. Please try again." };
  }
}

export async function logoutUser() {
  const cookieStore = await cookies();
  cookieStore.delete("aarna_auth_token");
  return { success: true };
}
