"use client";

import { useState } from "react";
import { updateUserPrinterPreferences } from "../actions";
import { Printer, ChefHat, Receipt, CheckCircle2, Loader2, AlertCircle, Laptop } from "lucide-react";

interface PrinterOption {
  id: string;
  name: string;
  printerName: string;
  type: string;
  isDefault: boolean;
}

interface UserPrinterPreferencesProps {
  printers: PrinterOption[];
  currentReceiptPrinterId?: string | null;
  currentKotPrinterId?: string | null;
  branchName?: string;
}

export default function UserPrinterPreferences({
  printers,
  currentReceiptPrinterId,
  currentKotPrinterId,
  branchName,
}: UserPrinterPreferencesProps) {
  const [receiptPrinterId, setReceiptPrinterId] = useState<string>(currentReceiptPrinterId || "");
  const [kotPrinterId, setKotPrinterId] = useState<string>(currentKotPrinterId || "");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const receiptOptions = printers.filter((p) => p.type === "RECEIPT" || p.type === "BOTH");
  const kotOptions = printers.filter((p) => p.type === "KOT" || p.type === "BOTH");

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const res = await updateUserPrinterPreferences(
      receiptPrinterId || null,
      kotPrinterId || null
    );

    if (res.success) {
      setMessage({ type: "success", text: "Station printer preferences saved successfully!" });
      // Also update local storage for seamless physical device switching
      try {
        if (receiptPrinterId) {
          const rec = receiptOptions.find((p) => p.id === receiptPrinterId);
          if (rec) localStorage.setItem("aarna_user_receipt_printer", rec.printerName);
        } else {
          localStorage.removeItem("aarna_user_receipt_printer");
        }

        if (kotPrinterId) {
          const kt = kotOptions.find((p) => p.id === kotPrinterId);
          if (kt) localStorage.setItem("aarna_user_kot_printer", kt.printerName);
        } else {
          localStorage.removeItem("aarna_user_kot_printer");
        }
      } catch (err) {
        console.error("Local storage error:", err);
      }
    } else {
      setMessage({ type: "error", text: res.error || "Failed to update settings." });
    }
    setLoading(false);
  };

  return (
    <div className="bg-zinc-900 border border-zinc-850 rounded-2xl p-6 space-y-6">
      <div className="flex items-center justify-between border-b border-zinc-850 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-amber-500/10 rounded-xl text-amber-500">
            <Laptop className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Station & Printer Preferences</h3>
            <p className="text-xs text-zinc-400 mt-0.5">
              Select the thermal printers associated with your current device or counter station.
            </p>
          </div>
        </div>

        {branchName && (
          <span className="text-[10px] bg-zinc-800 border border-zinc-700 text-zinc-300 font-bold px-2.5 py-1 rounded-lg">
            {branchName}
          </span>
        )}
      </div>

      {message && (
        <div
          className={`p-3 rounded-xl text-xs flex items-center gap-2 ${
            message.type === "success"
              ? "bg-emerald-950/40 border border-emerald-500/30 text-emerald-300"
              : "bg-red-950/40 border border-red-500/30 text-red-300"
          }`}
        >
          {message.type === "success" ? (
            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
          ) : (
            <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
          )}
          <span>{message.text}</span>
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-4">
        {/* Receipt Printer Selection */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-zinc-300 uppercase flex items-center gap-1.5">
            <Receipt className="w-3.5 h-3.5 text-emerald-400" />
            <span>Customer Tax Invoice / Receipt Printer</span>
          </label>
          <select
            value={receiptPrinterId}
            onChange={(e) => setReceiptPrinterId(e.target.value)}
            className="w-full px-4 py-2.5 bg-zinc-950/80 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-amber-500/50 cursor-pointer"
          >
            <option value="">Branch Default Receipt Printer</option>
            {receiptOptions.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name} ({p.printerName}) {p.isDefault ? "★ [Default]" : ""}
              </option>
            ))}
          </select>
          <p className="text-[10px] text-zinc-500">
            Dispatches billing receipts when completing checkout in the POS.
          </p>
        </div>

        {/* Kitchen KOT Printer Selection */}
        <div className="space-y-1.5 pt-1">
          <label className="text-xs font-semibold text-zinc-300 uppercase flex items-center gap-1.5">
            <ChefHat className="w-3.5 h-3.5 text-cyan-400" />
            <span>Kitchen Order Ticket (KOT) Printer</span>
          </label>
          <select
            value={kotPrinterId}
            onChange={(e) => setKotPrinterId(e.target.value)}
            className="w-full px-4 py-2.5 bg-zinc-950/80 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-amber-500/50 cursor-pointer"
          >
            <option value="">Branch Default Kitchen Printer</option>
            {kotOptions.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name} ({p.printerName}) {p.isDefault ? "★ [Default]" : ""}
              </option>
            ))}
          </select>
          <p className="text-[10px] text-zinc-500">
            Dispatches order tickets to kitchen preparation stations when sending KOTs.
          </p>
        </div>

        <div className="pt-3 flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold rounded-xl text-xs shadow-md shadow-orange-500/10 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50 active:scale-[0.98]"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Saving Preferences...</span>
              </>
            ) : (
              <>
                <Printer className="w-4 h-4" />
                <span>Save Station Preferences</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
