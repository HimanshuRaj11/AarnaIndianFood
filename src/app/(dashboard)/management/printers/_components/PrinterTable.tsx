"use client";

import { useState } from "react";
import { deletePrinter } from "../actions";
import { Trash2, Loader2, Printer, Star, ShieldAlert } from "lucide-react";
import PrinterModal from "./PrinterModal";

interface PrinterItem {
  id: string;
  name: string;
  printerName: string;
  type: string;
  isDefault: boolean;
  branchId: string;
  branch: {
    id: string;
    name: string;
  };
  createdAt: string;
}

interface Branch {
  id: string;
  name: string;
}

interface PrinterTableProps {
  printers: PrinterItem[];
  branches: Branch[];
}

export default function PrinterTable({ printers, branches }: PrinterTableProps) {
  const [selectedBranchId, setSelectedBranchId] = useState<string>("ALL");
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const filteredPrinters = printers.filter((p) => {
    if (selectedBranchId === "ALL") return true;
    return p.branchId === selectedBranchId;
  });

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to remove printer station "${name}"?`)) {
      return;
    }

    setDeletingId(id);
    setError(null);

    const res = await deletePrinter(id);
    if (!res.success) {
      setError(res.error || "Failed to delete printer.");
    }
    setDeletingId(null);
  };

  return (
    <div className="w-full space-y-4">
      {error && (
        <div className="p-3 bg-red-950/50 border border-red-500/30 rounded-xl text-red-200 text-sm flex items-start gap-2 max-w-md">
          <ShieldAlert className="w-4 h-4 mt-0.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Filter by branch */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-1.5 shadow-inner">
          <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Filter Branch:</span>
          <select
            value={selectedBranchId}
            onChange={(e) => setSelectedBranchId(e.target.value)}
            className="bg-transparent text-amber-500 font-extrabold text-xs focus:outline-none cursor-pointer"
          >
            <option value="ALL" className="bg-zinc-950 text-white">
              All Branches ({printers.length})
            </option>
            {branches.map((b) => (
              <option key={b.id} value={b.id} className="bg-zinc-950 text-white">
                {b.name}
              </option>
            ))}
          </select>
        </div>

        <div className="text-xs text-zinc-500">
          Showing <span className="text-white font-bold">{filteredPrinters.length}</span> station(s)
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-900/40">
        <table className="w-full border-collapse text-left text-sm text-zinc-300">
          <thead className="bg-zinc-900/80 text-xs font-semibold uppercase tracking-wider text-zinc-400 border-b border-zinc-800">
            <tr>
              <th className="px-6 py-4">Station Name</th>
              <th className="px-6 py-4">Branch Outlet</th>
              <th className="px-6 py-4">Device Identifier (QZ / OS)</th>
              <th className="px-6 py-4">Station Role</th>
              <th className="px-6 py-4 text-center">Default Station</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/60">
            {filteredPrinters.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center text-zinc-500">
                  <div className="flex flex-col items-center gap-2">
                    <Printer className="w-8 h-8 text-zinc-700" />
                    <span>No printer stations configured for this outlet.</span>
                  </div>
                </td>
              </tr>
            ) : (
              filteredPrinters.map((p) => (
                <tr key={p.id} className="hover:bg-zinc-800/20 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-bold text-white flex items-center gap-2">
                      <Printer className="w-4 h-4 text-amber-500/80" />
                      <span>{p.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-zinc-300 font-semibold">{p.branch?.name || "Unassigned"}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 bg-zinc-950 font-mono text-xs rounded-lg font-bold text-amber-400 border border-zinc-800">
                      {p.printerName}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border ${
                        p.type === "RECEIPT"
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                          : p.type === "KOT"
                          ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
                          : "bg-purple-500/10 text-purple-400 border-purple-500/20"
                      }`}
                    >
                      {p.type === "RECEIPT"
                        ? "Receipt / POS"
                        : p.type === "KOT"
                        ? "Kitchen (KOT)"
                        : "Both Roles"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    {p.isDefault ? (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-bold">
                        <Star className="w-3 h-3 fill-amber-400" />
                        <span>Branch Default</span>
                      </span>
                    ) : (
                      <span className="text-zinc-600 text-xs">—</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="inline-flex items-center gap-2">
                      <PrinterModal printer={p} branches={branches} />
                      <button
                        onClick={() => handleDelete(p.id, p.name)}
                        disabled={deletingId === p.id}
                        className="p-2 text-zinc-500 hover:text-red-400 rounded-lg hover:bg-red-500/5 transition-all cursor-pointer inline-flex items-center"
                        title="Delete Station"
                      >
                        {deletingId === p.id ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <Trash2 className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
