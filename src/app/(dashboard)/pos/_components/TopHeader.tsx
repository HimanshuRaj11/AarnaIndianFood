"use client";

import React from "react";
import { Building2 } from "lucide-react";

interface TopHeaderProps {
  branchName: string;
  role: "ADMIN" | "MANAGER" | "STAFF";
  branchId: string;
  setBranchId: (val: string) => void;
  branches: Array<{ id: string; name: string }>;
}

export default function TopHeader({
  branchName,
  role,
  branchId,
  setBranchId,
  branches
}: TopHeaderProps) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl shrink-0">
      <div className="flex items-center gap-3">
        <div className="p-2.5 bg-amber-500/10 rounded-xl text-amber-500 shrink-0">
          <Building2 className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[9px] text-zinc-505 font-bold uppercase tracking-wider block">Operational Location</span>
          <span className="text-sm font-black text-white">{branchName}</span>
        </div>
      </div>

      <div className="flex items-center gap-4 shrink-0">
        {role === "ADMIN" ? (
          <div className="flex items-center gap-2 bg-zinc-950 border border-zinc-850 rounded-xl px-3 py-1.5 shadow-inner">
            <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider">Switch Outlet:</span>
            <select
              value={branchId}
              onChange={(e) => setBranchId(e.target.value)}
              className="bg-transparent text-amber-500 font-extrabold text-xs focus:outline-none cursor-pointer"
            >
              {branches.map((b) => (
                <option key={b.id} value={b.id} className="bg-zinc-950 text-white">
                  {b.name}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <div className="bg-amber-500/5 border border-amber-500/15 rounded-xl px-4.5 py-1.5 text-center animate-pulse">
            <span className="text-[9px] text-amber-500 font-black uppercase tracking-wider block">Active Branch Session</span>
            <span className="text-xs font-extrabold text-amber-450 block mt-0.5">{branchName}</span>
          </div>
        )}
      </div>
    </div>
  );
}
