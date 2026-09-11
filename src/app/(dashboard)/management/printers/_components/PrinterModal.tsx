"use client";

import { useState } from "react";
import { createPrinter, updatePrinter } from "../actions";
import { Plus, X, Loader2, AlertCircle, Edit, Printer as PrinterIcon, RefreshCw, CheckCircle2 } from "lucide-react";
import { getAvailablePrinters } from "@/lib/printer/qz";

interface Branch {
  id: string;
  name: string;
}

interface PrinterModalProps {
  printer?: any;
  branches: Branch[];
}

export default function PrinterModal({ printer, branches }: PrinterModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(printer?.name || "");
  const [printerName, setPrinterName] = useState(printer?.printerName || "");
  const [branchId, setBranchId] = useState(printer?.branchId || (branches[0]?.id || ""));
  const [type, setType] = useState<"RECEIPT" | "KOT" | "BOTH">(printer?.type || "RECEIPT");
  const [isDefault, setIsDefault] = useState(printer ? printer.isDefault : false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Auto-detect local printers via QZ Tray
  const [detecting, setDetecting] = useState(false);
  const [detectedPrinters, setDetectedPrinters] = useState<string[]>([]);
  const [detectNotice, setDetectNotice] = useState<string | null>(null);

  const isEdit = !!printer;

  const handleDetectPrinters = async () => {
    setDetecting(true);
    setDetectNotice(null);
    try {
      const list = await getAvailablePrinters();
      if (list && list.length > 0) {
        setDetectedPrinters(list);
        setDetectNotice(`Found ${list.length} printer(s) on this device.`);
      } else {
        setDetectNotice("No printers returned. Ensure QZ Tray desktop app is active.");
      }
    } catch {
      setDetectNotice("Could not reach QZ Tray. Please ensure the desktop client is running.");
    }
    setDetecting(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("printerName", printerName);
    formData.append("branchId", branchId);
    formData.append("type", type);
    formData.append("isDefault", String(isDefault));

    const res = isEdit ? await updatePrinter(printer.id, formData) : await createPrinter(formData);

    if (res.success) {
      if (!isEdit) {
        setName("");
        setPrinterName("");
        setIsDefault(false);
      }
      setIsOpen(false);
    } else {
      setError(res.error || "Operation failed.");
    }
    setLoading(false);
  };

  return (
    <>
      {isEdit ? (
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 text-zinc-400 hover:text-amber-500 rounded-lg hover:bg-zinc-800 transition-all cursor-pointer inline-flex items-center"
          title="Edit Printer Station"
        >
          <Edit className="w-4 h-4" />
        </button>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold rounded-xl text-sm shadow-md shadow-orange-500/5 transition-all cursor-pointer active:scale-[0.98]"
        >
          <Plus className="w-4 h-4" />
          <span>Add Printer Station</span>
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800/80">
              <div className="flex items-center gap-2.5">
                <PrinterIcon className="w-5 h-5 text-amber-500" />
                <h3 className="text-lg font-bold text-white">
                  {isEdit ? "Configure Printer Station" : "Register Printer Station"}
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-zinc-800 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[85vh] overflow-y-auto scrollbar-thin">
              {error && (
                <div className="p-3 bg-red-950/50 border border-red-500/30 rounded-xl text-red-200 text-sm flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Station Friendly Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-300 uppercase block">
                  Station Display Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Counter 1 Thermal, Kitchen Master Line"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 bg-zinc-950/80 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-amber-500/50"
                />
              </div>

              {/* Branch Selection */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-300 uppercase block">Branch Outlet</label>
                <select
                  value={branchId}
                  onChange={(e) => setBranchId(e.target.value)}
                  className="w-full px-4 py-2.5 bg-zinc-950/80 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500/50 cursor-pointer"
                >
                  {branches.map((b) => (
                    <option key={b.id} value={b.id} className="bg-zinc-950 text-white">
                      {b.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Station Type */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-300 uppercase block">Station Purpose / Role</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "RECEIPT", label: "Receipt / POS" },
                    { id: "KOT", label: "Kitchen (KOT)" },
                    { id: "BOTH", label: "Both (All Jobs)" },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setType(t.id as any)}
                      className={`py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                        type === t.id
                          ? "bg-amber-500/15 border-amber-500 text-amber-400 shadow-sm"
                          : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white"
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Device Identifier / Printer Name */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-zinc-300 uppercase block">
                    OS / QZ Tray Device Name
                  </label>
                  <button
                    type="button"
                    onClick={handleDetectPrinters}
                    disabled={detecting}
                    className="text-[10px] font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 bg-amber-500/10 hover:bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/20 cursor-pointer"
                  >
                    <RefreshCw className={`w-3 h-3 ${detecting ? "animate-spin" : ""}`} />
                    <span>Detect Local Printers</span>
                  </button>
                </div>

                <input
                  type="text"
                  required
                  list="detected-printers-list"
                  placeholder="e.g. POS-80, EPSON-TM-T88, Thermal-80mm"
                  value={printerName}
                  onChange={(e) => setPrinterName(e.target.value)}
                  className="w-full px-4 py-2.5 bg-zinc-950/80 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-amber-500/50"
                />

                <datalist id="detected-printers-list">
                  {detectedPrinters.map((p, idx) => (
                    <option key={idx} value={p} />
                  ))}
                </datalist>

                {detectedPrinters.length > 0 && (
                  <div className="flex items-center gap-2 flex-wrap pt-1">
                    <span className="text-[10px] text-zinc-500 font-semibold">Detected:</span>
                    {detectedPrinters.map((p, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setPrinterName(p)}
                        className={`text-[10px] px-2 py-0.5 rounded font-mono border transition-all cursor-pointer ${
                          printerName === p
                            ? "bg-emerald-500/20 border-emerald-500 text-emerald-300"
                            : "bg-zinc-800 text-zinc-300 border-zinc-700 hover:border-amber-500"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                )}

                {detectNotice && (
                  <p className="text-[11px] text-amber-400/90 italic">{detectNotice}</p>
                )}
              </div>

              {/* Default checkbox */}
              <div className="flex items-center gap-3 pt-3 border-t border-zinc-800/80">
                <input
                  type="checkbox"
                  id="printer-default-chk"
                  checked={isDefault}
                  onChange={(e) => setIsDefault(e.target.checked)}
                  className="w-4 h-4 accent-amber-500 bg-zinc-950 border-zinc-800 text-amber-500 rounded"
                />
                <label
                  htmlFor="printer-default-chk"
                  className="text-xs font-semibold text-zinc-300 uppercase cursor-pointer select-none"
                >
                  Set as branch default for this station role
                </label>
              </div>

              <div className="pt-4 flex gap-3">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 py-2.5 border border-zinc-800 hover:bg-zinc-800/60 text-zinc-300 hover:text-white font-semibold rounded-xl text-sm transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold rounded-xl text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Saving...</span>
                    </>
                  ) : (
                    <span>{isEdit ? "Update Station" : "Register Station"}</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
