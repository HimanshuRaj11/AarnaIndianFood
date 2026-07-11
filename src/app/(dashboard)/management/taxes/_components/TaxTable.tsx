"use client";

import { useState } from "react";
import { deleteTax } from "../actions";
import { Trash2, ShieldAlert, Loader2 } from "lucide-react";
import TaxModal from "./TaxModal";

interface Tax {
  id: string;
  taxName: string;
  percentage: number;
  taxCode: string | null;
  isActive: boolean;
}

interface TaxTableProps {
  taxes: Tax[];
}

export default function TaxTable({ taxes }: TaxTableProps) {
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete tax scheme "${name}"?`)) {
      return;
    }

    setDeletingId(id);
    setError(null);

    const res = await deleteTax(id);
    if (!res.success) {
      setError(res.error || "Failed to delete tax.");
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
              <th className="px-6 py-4">Tax Name</th>
              <th className="px-6 py-4">Percentage</th>
              <th className="px-6 py-4">Tax Code</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/60">
            {taxes.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-10 text-center text-zinc-500">
                  No taxes configured.
                </td>
              </tr>
            ) : (
              taxes.map((t) => (
                <tr key={t.id} className="hover:bg-zinc-800/20 transition-colors">
                  <td className="px-6 py-4 font-semibold text-white">{t.taxName}</td>
                  <td className="px-6 py-4 font-mono font-bold text-amber-500">{t.percentage}%</td>
                  <td className="px-6 py-4 text-zinc-400">
                    {t.taxCode ? (
                      <span className="px-2 py-0.5 bg-zinc-800 text-[10px] rounded font-semibold text-zinc-300 border border-zinc-700 font-mono">
                        {t.taxCode}
                      </span>
                    ) : (
                      <span className="text-zinc-600 italic">None</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${
                        t.isActive
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          : "bg-zinc-800 text-zinc-500 border border-zinc-700"
                      }`}
                    >
                      {t.isActive ? "Applicable" : "Inactive"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="inline-flex items-center gap-2">
                      <TaxModal tax={t} />
                      <button
                        onClick={() => handleDelete(t.id, t.taxName)}
                        disabled={deletingId === t.id}
                        className="p-2 text-zinc-500 hover:text-red-400 rounded-lg hover:bg-red-500/5 transition-all cursor-pointer inline-flex items-center"
                      >
                        {deletingId === t.id ? (
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
