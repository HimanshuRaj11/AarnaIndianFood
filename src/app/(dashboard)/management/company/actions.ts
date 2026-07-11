"use server";

import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function updateCompanyDetails(formData: FormData) {
  try {
    const admin = await getCurrentUser();
    if (!admin || admin.role !== "ADMIN") {
      return { success: false, error: "Unauthorized. Only Admin can update company details." };
    }

    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const website = formData.get("website") as string;
    const gstNumber = formData.get("gstNumber") as string;
    const logoUrl = formData.get("logoUrl") as string;
    const description = formData.get("description") as string;
    const street = formData.get("street") as string;
    const city = formData.get("city") as string;
    const state = formData.get("state") as string;
    const country = formData.get("country") as string;
    const zipCode = formData.get("zipCode") as string;
    const currencyName = formData.get("currencyName") as string;
    const currencyCode = formData.get("currencyCode") as string;
    const currencySymbol = formData.get("currencySymbol") as string;

    if (!name || !phone || !street || !city || !state || !country || !zipCode) {
      return { success: false, error: "Required fields cannot be empty." };
    }

    let company = await prisma.company.findFirst();
    if (company) {
      await prisma.company.update({
        where: { id: company.id },
        data: {
          name,
          phone,
          email: email || null,
          website: website || null,
          VATNumber: gstNumber || null,
          logoUrl: logoUrl || null,
          description: description || null,
          street,
          city,
          state,
          country,
          zipCode,
          currencyName,
          currencyCode,
          currencySymbol,
        },
      });
    } else {
      await prisma.company.create({
        data: {
          name,
          phone,
          email: email || null,
          website: website || null,
          VATNumber: gstNumber || null,
          logoUrl: logoUrl || null,
          description: description || null,
          street,
          city,
          state,
          country,
          zipCode,
          currencyName,
          currencyCode,
          currencySymbol,
        },
      });
    }

    revalidatePath("/management/company");
    return { success: true };
  } catch (error: any) {
    console.error("Update Company Error:", error);
    return { success: false, error: "Failed to update company details." };
  }
}
