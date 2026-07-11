import React from "react";
import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import KOTBoard from "./_components/KOTBoard";
import { ChefHat } from "lucide-react";

export const revalidate = 0; // Disable cache for live status operations

export default async function KOTHistoryPage() {
  const user = await getCurrentUser();
  if (!user || user.role !== "ADMIN") {
    return (
      <div className="p-8 max-w-4xl mx-auto mt-12 bg-zinc-900 border border-zinc-800 rounded-2xl">
        <h2 className="text-2xl font-bold text-red-500 mb-2">Access Denied</h2>
        <p className="text-zinc-400">Only authenticated System Administrators can view KOT history logs.</p>
      </div>
    );
  }

  // Fetch all KOTs from DB, including items and branch details
  const dbKots = await prisma.kOT.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      items: true,
      branch: {
        select: { name: true }
      }
    }
  });

  const kotsList = dbKots.map((kot) => ({
    id: kot.id,
    kotNo: kot.kotNo,
    branchName: kot.branch.name,
    tableNo: kot.tableNo,
    status: kot.status as "PENDING" | "PREPARING" | "SERVED" | "CANCELLED",
    invoiceId: kot.invoiceId || "Not Checked out",
    createdAt: kot.createdAt.toISOString(),
    items: kot.items.map((item) => ({
      id: item.id,
      name: item.name,
      quantity: item.quantity,
      notes: item.notes || "None"
    }))
  }));

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-5xl mx-auto select-none">
      <div className="border-b border-zinc-800/80 pb-6 flex items-center gap-3">
        <div className="p-2.5 bg-amber-500/10 rounded-xl text-amber-500">
          <ChefHat className="w-8 h-8" />
        </div>
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white">Kitchen Ticket Board</h1>
          <p className="text-zinc-400 text-sm mt-1">
            Track active prep queues, change KOT statuses in real-time, and monitor order delivery progress.
          </p>
        </div>
      </div>

      <KOTBoard initialKots={kotsList} />
    </div>
  );
}
