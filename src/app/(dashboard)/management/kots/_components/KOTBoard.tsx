"use client";

import React, { useState } from "react";
import { updateKOTStatus } from "../actions";
import { ChefHat, Check, Play, Ban, RefreshCw, Clock, MapPin, Layers } from "lucide-react";

interface KOTItem {
  id: string;
  name: string;
  quantity: number;
  notes: string;
}

interface KOT {
  id: string;
  kotNo: string;
  branchName: string;
  tableNo: string;
  status: "PENDING" | "PREPARING" | "SERVED" | "CANCELLED";
  invoiceId: string;
  createdAt: string;
  items: KOTItem[];
}

interface KOTBoardProps {
  initialKots: KOT[];
}

export default function KOTBoard({ initialKots }: KOTBoardProps) {
  const [kots, setKots] = useState<KOT[]>(initialKots);
  const [selectedStatus, setSelectedStatus] = useState<string>("ACTIVE"); // "ACTIVE", "ALL", "PENDING", "PREPARING", "SERVED", "CANCELLED"
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const handleStatusUpdate = async (kotId: string, newStatus: "PENDING" | "PREPARING" | "SERVED" | "CANCELLED") => {
    setUpdatingId(kotId);
    const res = await updateKOTStatus(kotId, newStatus);
    if (res.success) {
      setKots((prev) =>
        prev.map((kot) => (kot.id === kotId ? { ...kot, status: newStatus } : kot))
      );
    } else {
      alert(res.error || "Failed to update ticket status.");
    }
    setUpdatingId(null);
  };

  const filteredKots = kots.filter((kot) => {
    if (selectedStatus === "ALL") return true;
    if (selectedStatus === "ACTIVE") return kot.status === "PENDING" || kot.status === "PREPARING";
    return kot.status === selectedStatus;
  });

  return (
    <div className="space-y-6 select-none">
      
      {/* Board Filters */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none border-b border-zinc-900">
        {[
          { label: "Active Queue", value: "ACTIVE" },
          { label: "All Tickets", value: "ALL" },
          { label: "Pending", value: "PENDING" },
          { label: "Preparing", value: "PREPARING" },
          { label: "Served / Done", value: "SERVED" },
          { label: "Cancelled", value: "CANCELLED" }
        ].map((t) => (
          <button
            key={t.value}
            onClick={() => setSelectedStatus(t.value)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              selectedStatus === t.value
                ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md shadow-orange-500/10"
                : "bg-zinc-900 border border-zinc-850 text-zinc-450 hover:text-white"
            }`}
          >
            {t.label} ({
              t.value === "ACTIVE" 
                ? kots.filter(k => k.status === "PENDING" || k.status === "PREPARING").length
                : t.value === "ALL"
                  ? kots.length
                  : kots.filter(k => k.status === t.value).length
            })
          </button>
        ))}
      </div>

      {/* Tickets Grid */}
      {filteredKots.length === 0 ? (
        <div className="text-center py-20 bg-zinc-900/15 border border-zinc-800 rounded-3xl text-zinc-550 space-y-2">
          <Layers className="w-10 h-10 mx-auto text-amber-500/30" />
          <p className="text-xs font-semibold">Kitchen queue is empty in this filter.</p>
          <p className="text-[10px] text-zinc-650">No tickets matching the selection.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredKots.map((kot) => (
            <div
              key={kot.id}
              className={`bg-zinc-900 border border-zinc-850 rounded-2xl overflow-hidden flex flex-col justify-between hover:shadow-xl hover:shadow-black/15 transition-all duration-300 ${
                kot.status === "PENDING" 
                  ? "border-l-4 border-l-red-500" 
                  : kot.status === "PREPARING"
                    ? "border-l-4 border-l-amber-500"
                    : kot.status === "SERVED"
                      ? "border-l-4 border-l-emerald-500"
                      : "border-l-4 border-l-zinc-700"
              }`}
            >
              
              {/* Header block */}
              <div className="p-4 bg-zinc-950/20 border-b border-zinc-850 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 font-bold uppercase tracking-wider block">
                    {kot.kotNo}
                  </span>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-sm font-black text-white">{kot.tableNo}</span>
                  </div>
                </div>
                
                <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase border tracking-wider ${
                  kot.status === "PENDING"
                    ? "bg-red-500/5 border-red-500/20 text-red-400"
                    : kot.status === "PREPARING"
                      ? "bg-amber-500/5 border-amber-500/20 text-amber-500"
                      : kot.status === "SERVED"
                        ? "bg-emerald-500/5 border-emerald-500/20 text-emerald-450"
                        : "bg-zinc-800 border-zinc-700 text-zinc-400"
                }`}>
                  {kot.status}
                </span>
              </div>

              {/* Items Detail */}
              <div className="p-4 flex-grow space-y-3.5">
                <div className="divide-y divide-zinc-850/60 text-xs">
                  {kot.items.map((item) => (
                    <div key={item.id} className="py-2 first:pt-0 last:pb-0">
                      <div className="flex justify-between items-start gap-4">
                        <span className="font-bold text-white uppercase">{item.name}</span>
                        <span className="font-mono text-zinc-450 font-bold">x {item.quantity}</span>
                      </div>
                      {item.notes !== "None" && item.notes && (
                        <p className="text-[10px] text-amber-500 italic mt-0.5">Note: {item.notes}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Meta & Actions */}
              <div className="p-4 bg-zinc-950/10 border-t border-zinc-850/60 flex flex-col space-y-3">
                <div className="flex justify-between items-center text-[10px] text-zinc-500 font-medium">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-zinc-650" /> {kot.branchName}
                  </span>
                  <span className="flex items-center gap-1 font-mono">
                    <Clock className="w-3.5 h-3.5 text-zinc-650" /> {new Date(kot.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>

                {/* Operations buttons */}
                {updatingId === kot.id ? (
                  <div className="py-2.5 text-center text-xs text-zinc-450 font-bold flex items-center justify-center gap-2 border border-dashed border-zinc-800 rounded-xl">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Kitchen syncing...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    {kot.status === "PENDING" && (
                      <>
                        <button
                          onClick={() => handleStatusUpdate(kot.id, "PREPARING")}
                          className="flex-grow py-2.5 px-3 bg-amber-500 hover:bg-amber-600 text-black text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                        >
                          <Play className="w-3.5 h-3.5" />
                          <span>Start Cooking</span>
                        </button>
                        <button
                          onClick={() => handleStatusUpdate(kot.id, "CANCELLED")}
                          className="py-2.5 px-3 border border-zinc-800 hover:border-red-950/20 text-zinc-500 hover:text-red-400 rounded-xl transition-all cursor-pointer"
                          title="Cancel Order"
                        >
                          <Ban className="w-3.5 h-3.5" />
                        </button>
                      </>
                    )}

                    {kot.status === "PREPARING" && (
                      <button
                        onClick={() => handleStatusUpdate(kot.id, "SERVED")}
                        className="w-full py-2.5 px-3 bg-emerald-500 hover:bg-emerald-600 text-black text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                      >
                        <Check className="w-3.5 h-3.5" />
                        <span>Ready / Served</span>
                      </button>
                    )}
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>
      )}

    </div>
  );
}
