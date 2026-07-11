"use server";

import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function updateKOTStatus(kotId: string, status: "PENDING" | "PREPARING" | "SERVED" | "CANCELLED") {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return { success: false, error: "Session expired. Please log in again." };
    }

    await prisma.kOT.update({
      where: { id: kotId },
      data: { status }
    });

    revalidatePath("/management/kots");
    revalidatePath("/overview");
    
    return { success: true };
  } catch (error: any) {
    console.error("Update KOT Error:", error);
    return { success: false, error: "Failed to update KOT state." };
  }
}
