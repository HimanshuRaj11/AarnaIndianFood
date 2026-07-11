"use client";

import React from "react";
import { Sparkles, FolderOpen, ChefHat } from "lucide-react";
import { usePOSStore } from "@/lib/store";

interface LeftOptionsPanelProps {
  clientName: string;
  setClientName: (val: string) => void;
  clientPhone: string;
  setClientPhone: (val: string) => void;
  tableNo: string;
  setTableNo: (val: string) => void;
  kotNotes: string;
  setKotNotes: (val: string) => void;
  generateKOT: boolean;
  setGenerateKOT: (val: boolean) => void;
  discountType: "PERCENT" | "FLAT" | "NONE" | "EXEMPTED";
  setDiscountType: (val: "PERCENT" | "FLAT" | "NONE" | "EXEMPTED") => void;
  discountValue: number;
  setDiscountValue: (val: number) => void;
  heldOrdersCount: number;
  setShowHeldModal: (val: boolean) => void;
  handleKOT: () => void;
  loading: boolean;
  billType: "BILL" | "KOT";
  setBillType: (val: "BILL" | "KOT") => void;
}

export default function LeftOptionsPanel({
  clientName,
  setClientName,
  clientPhone,
  setClientPhone,
  tableNo,
  setTableNo,
  kotNotes,
  setKotNotes,
  generateKOT,
  setGenerateKOT,
  discountType,
  setDiscountType,
  discountValue,
  setDiscountValue,
  heldOrdersCount,
  setShowHeldModal,
  handleKOT,
  loading,
  billType,
  setBillType
}: LeftOptionsPanelProps) {
  const company = usePOSStore((state) => state.company);
  const currencySymbol = company?.currencySymbol || "$";

  return (
    <div className="lg:col-span-3 flex flex-col h-full bg-zinc-900 border border-zinc-800 rounded-2xl p-3 overflow-y-auto space-y-3.5 scrollbar-thin">

      {/* Title / Action Banner */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
        <div className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <h3 className="text-[10px] font-bold text-white uppercase tracking-wider">POS Operator</h3>
        </div>
        <button
          onClick={() => setShowHeldModal(true)}
          className="text-[8.5px] bg-zinc-800 border border-zinc-700 text-amber-500 hover:bg-zinc-750 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider flex items-center gap-1 cursor-pointer"
        >
          <FolderOpen className="w-2.5 h-2.5" />
          <span>Held ({heldOrdersCount})</span>
        </button>
      </div>

      {/* Bill Type Selector */}
      <div className="space-y-1">
        <label className="text-[8.5px] font-bold uppercase tracking-wider text-zinc-500 block">Bill Type</label>
        <div className="grid grid-cols-2 gap-2">
          {["BILL", "KOT"].map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setBillType(type as "BILL" | "KOT")}
              className={`py-1.5 text-[9px] font-black uppercase tracking-wider rounded-lg border transition-all cursor-pointer ${billType === type
                  ? "bg-amber-500 border-amber-600 text-black shadow-md shadow-amber-500/10"
                  : "bg-zinc-950 border-zinc-850 text-zinc-400 hover:text-white"
                }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Customer Data */}
      <div className="space-y-2.5">
        <h4 className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest border-b border-zinc-900 pb-1">Customer Profile</h4>
        <div>
          <label className="text-[8px] font-bold uppercase tracking-wider text-zinc-450 block mb-0.5">Customer Name</label>
          <input
            type="text"
            placeholder="e.g. John Doe"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            className="w-full px-2.5 py-1.5 bg-zinc-950 border border-zinc-850 rounded-lg text-white placeholder-zinc-700 text-[11px] focus:outline-none focus:border-amber-500/50"
          />
        </div>
        <div>
          <label className="text-[8px] font-bold uppercase tracking-wider text-zinc-450 block mb-0.5">Phone Number</label>
          <input
            type="text"
            placeholder="e.g. +592 999999"
            value={clientPhone}
            onChange={(e) => setClientPhone(e.target.value)}
            className="w-full px-2.5 py-1.5 bg-zinc-950 border border-zinc-850 rounded-lg text-white placeholder-zinc-700 text-[11px] focus:outline-none focus:border-amber-500/50"
          />
        </div>
      </div>

      {/* Table & KOT Config */}
      <div className="space-y-2.5">
        <h4 className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest border-b border-zinc-900 pb-1">Table & KOT Config</h4>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="text-[8px] font-bold uppercase tracking-wider text-zinc-450 block mb-0.5">Table No</label>
            <input
              type="text"
              placeholder="e.g. Table 4"
              value={tableNo}
              onChange={(e) => setTableNo(e.target.value)}
              className="w-full px-2.5 py-1.5 bg-zinc-950 border border-zinc-850 rounded-lg text-white placeholder-zinc-700 text-[11px] focus:outline-none focus:border-amber-500/50"
            />
          </div>
          <div>
            <label className="text-[8px] font-bold uppercase tracking-wider text-zinc-450 block mb-0.5">KOT Notes</label>
            <input
              type="text"
              placeholder="Spicy, gravy..."
              value={kotNotes}
              onChange={(e) => setKotNotes(e.target.value)}
              className="w-full px-2.5 py-1.5 bg-zinc-950 border border-zinc-850 rounded-lg text-white placeholder-zinc-700 text-[11px] focus:outline-none focus:border-amber-500/50"
            />
          </div>
        </div>

        {/* Generate KOT Checkbox */}
        <div className="flex items-center gap-2 pt-0.5">
          <input
            type="checkbox"
            id="generate-kot-checkbox"
            checked={generateKOT}
            onChange={(e) => setGenerateKOT(e.target.checked)}
            className="w-3.5 h-3.5 accent-amber-500 bg-zinc-950 border-zinc-850 rounded text-amber-500 cursor-pointer"
          />
          <label htmlFor="generate-kot-checkbox" className="text-[8.5px] font-bold uppercase tracking-wider text-zinc-400 cursor-pointer select-none">
            Generate KOT on Checkout
          </label>
        </div>

        {/* Direct KOT send button */}
        <button
          type="button"
          onClick={handleKOT}
          disabled={loading}
          className="w-full py-1.5 bg-amber-500/10 border border-amber-500/20 hover:bg-amber-500/20 text-amber-400 font-bold rounded-lg text-[9px] uppercase tracking-wider flex items-center justify-center gap-1 transition-all cursor-pointer disabled:opacity-40"
        >
          <ChefHat className="w-3 h-3" />
          <span>Send KOT to Kitchen</span>
        </button>
      </div>

      {/* Bill Discounting Options */}
      <div className="space-y-2.5">
        <h4 className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest border-b border-zinc-900 pb-1">Bill Discounting</h4>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-1.5">
          {[
            { id: "NONE", label: "None" },
            { id: "PERCENT", label: "%" },
            { id: "FLAT", label: "Flat" },
            { id: "EXEMPTED", label: "Exempt" }
          ].map((mode) => (
            <button
              key={mode.id}
              onClick={() => {
                setDiscountType(mode.id as any);
                if (mode.id === "NONE" || mode.id === "EXEMPTED") setDiscountValue(0);
              }}
              className={`py-1.5 text-[9px] font-bold uppercase rounded-lg border transition-all cursor-pointer ${discountType === mode.id
                  ? "bg-amber-500 border-amber-600 text-black font-black"
                  : "bg-zinc-950 border-zinc-850 text-zinc-400 hover:text-white"
                }`}
            >
              {mode.label}
            </button>
          ))}
        </div>

        {/* Input */}
        {(discountType === "PERCENT" || discountType === "FLAT") && (
          <div className="space-y-1 animate-in fade-in slide-in-from-top-1 duration-200">
            <label className="text-[8px] font-bold uppercase tracking-wider text-zinc-450 block">
              {discountType === "PERCENT" ? "Discount Percentage (%)" : `Flat Discount Value (${currencySymbol})`}
            </label>
            <input
              type="number"
              min="0"
              placeholder="0"
              value={discountValue}
              onChange={(e) => setDiscountValue(Math.max(0, Number(e.target.value)))}
              className="w-full px-2.5 py-1.5 bg-zinc-950 border border-zinc-850 rounded-lg text-white placeholder-zinc-700 text-[11px] focus:outline-none focus:border-amber-500/50"
            />
          </div>
        )}
      </div>

    </div>
  );
}
