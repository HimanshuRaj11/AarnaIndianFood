"use client";

import React from "react";
import { Building2, Printer, RefreshCw, Receipt, ChefHat } from "lucide-react";

export interface PrinterStationItem {
  id: string;
  name: string;
  printerName: string;
  type: string;
  isDefault: boolean;
  branchId?: string;
}

interface TopHeaderProps {
  branchName: string;
  role: "ADMIN" | "MANAGER" | "STAFF" | "OWNER";
  branchId: string;
  setBranchId: (val: string) => void;
  branches: Array<{
    id: string;
    name: string;
    printerName?: string;
    printers?: PrinterStationItem[];
  }>;
  printerStatus?: "connected" | "disconnected" | "checking";
  onReconnectPrinter?: () => void;
  activeReceiptPrinter?: string;
  setActiveReceiptPrinter?: (val: string) => void;
  activeKotPrinter?: string;
  setActiveKotPrinter?: (val: string) => void;
  availablePrinters?: PrinterStationItem[];
}

export default function TopHeader({
  branchName,
  role,
  branchId,
  setBranchId,
  branches,
  printerStatus = "checking",
  onReconnectPrinter,
  activeReceiptPrinter = "",
  setActiveReceiptPrinter,
  activeKotPrinter = "",
  setActiveKotPrinter,
  availablePrinters = [],
}: TopHeaderProps) {
  const receiptStations = availablePrinters.filter(
    (p) => p.type === "RECEIPT" || p.type === "BOTH"
  );
  const kotStations = availablePrinters.filter(
    (p) => p.type === "KOT" || p.type === "BOTH"
  );

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 shadow-xl shrink-0">
      <div className="flex items-center gap-3">
        <div className="p-2.5 bg-amber-500/10 rounded-xl text-amber-500 shrink-0">
          <Building2 className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider block">
            Operational Location
          </span>
          <span className="text-sm font-black text-white">{branchName}</span>
        </div>
      </div>

      <div className="flex items-center gap-2.5 shrink-0 flex-wrap w-full lg:w-auto justify-start lg:justify-end">
        {/* Active Station / Hardware Selectors */}
        {setActiveReceiptPrinter && (
          <div className="flex items-center gap-1.5 bg-zinc-950 border border-zinc-850 rounded-xl px-2.5 py-1.5 shadow-inner">
            <Receipt className="w-3 h-3 text-emerald-400 shrink-0" />
            <span className="text-[8.5px] text-zinc-500 font-bold uppercase tracking-wider">
              Bill Station:
            </span>
            <select
              value={activeReceiptPrinter}
              onChange={(e) => setActiveReceiptPrinter(e.target.value)}
              className="bg-transparent text-emerald-400 font-extrabold text-[10px] focus:outline-none cursor-pointer max-w-[130px] truncate"
              title="Select active thermal receipt printer for this station"
            >
              <option value="" className="bg-zinc-950 text-zinc-400">
                Auto / Branch Default
              </option>
              {receiptStations.map((p) => (
                <option key={p.id} value={p.printerName} className="bg-zinc-950 text-white">
                  {p.name} ({p.printerName})
                </option>
              ))}
            </select>
          </div>
        )}

        {setActiveKotPrinter && (
          <div className="flex items-center gap-1.5 bg-zinc-950 border border-zinc-850 rounded-xl px-2.5 py-1.5 shadow-inner">
            <ChefHat className="w-3 h-3 text-cyan-400 shrink-0" />
            <span className="text-[8.5px] text-zinc-500 font-bold uppercase tracking-wider">
              Kitchen Station:
            </span>
            <select
              value={activeKotPrinter}
              onChange={(e) => setActiveKotPrinter(e.target.value)}
              className="bg-transparent text-cyan-400 font-extrabold text-[10px] focus:outline-none cursor-pointer max-w-[130px] truncate"
              title="Select active kitchen KOT printer for this station"
            >
              <option value="" className="bg-zinc-950 text-zinc-400">
                Auto / Kitchen Default
              </option>
              {kotStations.map((p) => (
                <option key={p.id} value={p.printerName} className="bg-zinc-950 text-white">
                  {p.name} ({p.printerName})
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Printer status indicator */}
        <div className="flex items-center gap-2 bg-zinc-950 border border-zinc-850 rounded-xl px-2.5 py-1.5 shadow-inner">
          <div className="flex items-center gap-1.5">
            <span
              className={`w-2 h-2 rounded-full ${
                printerStatus === "connected"
                  ? "bg-emerald-500 shadow-sm shadow-emerald-500/50"
                  : printerStatus === "checking"
                  ? "bg-amber-400 animate-pulse"
                  : "bg-zinc-600"
              }`}
            />
            <Printer className="w-3.5 h-3.5 text-zinc-400" />
            <span className="text-[9px] font-bold uppercase tracking-wider text-zinc-400">
              {printerStatus === "connected"
                ? "QZ Ready"
                : printerStatus === "checking"
                ? "Checking..."
                : "Offline (Browser Print)"}
            </span>
          </div>

          {onReconnectPrinter && (
            <button
              type="button"
              onClick={onReconnectPrinter}
              title="Refresh Printer Connection"
              className="text-zinc-500 hover:text-amber-400 p-0.5 rounded transition-colors cursor-pointer"
            >
              <RefreshCw className="w-2.5 h-2.5" />
            </button>
          )}
        </div>

        {/* Branch Switcher (Admin) or Active Branch display */}
        {role === "ADMIN" ? (
          <div className="flex items-center gap-2 bg-zinc-950 border border-zinc-850 rounded-xl px-3 py-1.5 shadow-inner">
            <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider">
              Outlet:
            </span>
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
          <div className="bg-amber-500/5 border border-amber-500/15 rounded-xl px-3.5 py-1.5 text-center">
            <span className="text-[8.5px] text-amber-500 font-black uppercase tracking-wider block">
              Branch Session
            </span>
            <span className="text-[11px] font-extrabold text-amber-450 block mt-0.5">
              {branchName}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
