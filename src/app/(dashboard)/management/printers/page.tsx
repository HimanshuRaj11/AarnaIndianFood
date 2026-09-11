import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Printer, Radio, ChefHat, Receipt } from "lucide-react";
import PrinterModal from "./_components/PrinterModal";
import PrinterTable from "./_components/PrinterTable";

export const revalidate = 0;

export default async function PrintersManagementPage() {
  const user = await getCurrentUser();
  if (!user || (user.role !== "ADMIN" && user.role !== "OWNER")) {
    redirect("/pos");
  }

  // Fetch active branches
  const branches = await prisma.branch.findMany({
    where: { active: true },
    select: { id: true, name: true },
    orderBy: { name: "asc" },
  });

  // Fetch all registered printer stations
  const rawPrinters = await prisma.printer.findMany({
    include: {
      branch: {
        select: { id: true, name: true },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  const printers = rawPrinters.map((p) => ({
    id: p.id,
    name: p.name,
    printerName: p.printerName,
    type: p.type,
    isDefault: p.isDefault,
    branchId: p.branchId,
    branch: p.branch,
    createdAt: p.createdAt.toISOString(),
  }));

  const totalPrinters = printers.length;
  const receiptCount = printers.filter((p) => p.type === "RECEIPT" || p.type === "BOTH").length;
  const kotCount = printers.filter((p) => p.type === "KOT" || p.type === "BOTH").length;

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-[1400px] mx-auto select-none">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-850 pb-6">
        <div className="flex items-center gap-3.5">
          <div className="p-2.5 bg-gradient-to-tr from-amber-500/20 to-orange-500/10 border border-amber-500/20 rounded-2xl text-amber-500 shadow-inner">
            <Printer className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-black tracking-tight text-white flex items-center gap-2">
              Printer Stations & Hardware
            </h1>
            <p className="text-zinc-400 text-xs md:text-sm mt-0.5">
              Register and map thermal printers across branch counters, dining rooms, and kitchen stations.
            </p>
          </div>
        </div>

        <PrinterModal branches={branches} />
      </div>

      {/* Summary KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-zinc-900/50 border border-zinc-850 rounded-2xl p-4.5 flex items-center justify-between shadow-sm">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block">
              Active Stations
            </span>
            <span className="text-2xl font-black text-white">{totalPrinters}</span>
          </div>
          <div className="p-3 bg-zinc-950 rounded-xl text-amber-500 border border-zinc-800">
            <Radio className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-850 rounded-2xl p-4.5 flex items-center justify-between shadow-sm">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">
              Receipt / POS Stations
            </span>
            <span className="text-2xl font-black text-white">{receiptCount}</span>
          </div>
          <div className="p-3 bg-zinc-950 rounded-xl text-emerald-400 border border-zinc-800">
            <Receipt className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-850 rounded-2xl p-4.5 flex items-center justify-between shadow-sm">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider block">
              Kitchen (KOT) Stations
            </span>
            <span className="text-2xl font-black text-white">{kotCount}</span>
          </div>
          <div className="p-3 bg-zinc-950 rounded-xl text-cyan-400 border border-zinc-800">
            <ChefHat className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Printers Table Component */}
      <PrinterTable printers={printers} branches={branches} />
    </div>
  );
}
