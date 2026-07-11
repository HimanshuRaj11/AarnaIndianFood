"use client";

import { useState } from "react";
import { deleteBranch } from "../actions";
import { Trash2, ShieldAlert, Loader2 } from "lucide-react";
import BranchModal from "./BranchModal";

interface Branch {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  printerName: string | null;
  invoiceSequence: number;
  street: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  active: boolean;
}

interface BranchTableProps {
  branches: Branch[];
}

export default function BranchTable({ branches }: BranchTableProps) {
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete branch "${name}"? This action cannot be undone.`)) {
      return;
    }

    setDeletingId(id);
    setError(null);

    const res = await deleteBranch(id);
    if (!res.success) {
      setError(res.error || "Failed to delete branch.");
      setDeletingId(null);
    } else {
      setDeletingId(null);
    }
  };

  return (
    <div className="w-full space-y-4">
      {error && (
        <div className="p-3 bg-red-950/50 border border-red-500/30 rounded-xl text-red-200 text-sm flex items-start gap-2 max-w-md">
          <ShieldAlert className="w-4 h-4 mt-0.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-900/40">
        <table className="w-full border-collapse text-left text-sm text-zinc-300">
          <thead className="bg-zinc-900/80 text-xs font-semibold uppercase tracking-wider text-zinc-400 border-b border-zinc-800">
            <tr>
              <th className="px-6 py-4">Branch Details</th>
              <th className="px-6 py-4">Address</th>
              <th className="px-6 py-4">Printer</th>
              <th className="px-6 py-4">Sequence No</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/60">
            {branches.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-10 text-center text-zinc-500">
                  No branches registered.
                </td>
              </tr>
            ) : (
              branches.map((b) => (
                <tr key={b.id} className="hover:bg-zinc-800/20 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-semibold text-white">{b.name}</div>
                    <div className="text-zinc-500 text-xs mt-0.5">{b.phone} | {b.email || "No Email"}</div>
                  </td>
                  <td className="px-6 py-4 text-zinc-400 text-xs">
                    {b.street}, {b.city}, {b.state} - {b.zipCode}
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-0.5 bg-zinc-800 text-[10px] rounded font-semibold text-zinc-300 border border-zinc-700">
                      {b.printerName || "Not Configured"}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-mono font-semibold text-amber-500 text-xs">
                    {b.invoiceSequence}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${
                        b.active
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          : "bg-zinc-800 text-zinc-500 border border-zinc-700"
                      }`}
                    >
                      {b.active ? "Operational" : "Inactive"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="inline-flex items-center gap-2">
                      <BranchModal branch={b} />
                      <button
                        onClick={() => handleDelete(b.id, b.name)}
                        disabled={deletingId === b.id}
                        className="p-2 text-zinc-500 hover:text-red-400 rounded-lg hover:bg-red-500/5 transition-all cursor-pointer inline-flex items-center"
                      >
                        {deletingId === b.id ? (
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
