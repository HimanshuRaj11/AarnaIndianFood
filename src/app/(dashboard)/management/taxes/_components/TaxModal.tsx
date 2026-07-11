"use client";

import { useState } from "react";
import { createTax, updateTax } from "../actions";
import { Plus, X, Loader2, AlertCircle, Edit } from "lucide-react";

interface TaxModalProps {
  tax?: any;
}

export default function TaxModal({ tax }: TaxModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [taxName, setTaxName] = useState(tax?.taxName || "");
  const [percentage, setPercentage] = useState(tax?.percentage || 0);
  const [taxCode, setTaxCode] = useState(tax?.taxCode || "");
  const [isActive, setIsActive] = useState(tax ? tax.isActive : true);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isEdit = !!tax;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const res = isEdit 
      ? await updateTax(tax.id, taxName, Number(percentage), taxCode, isActive) 
      : await createTax(taxName, Number(percentage), taxCode);

    if (res.success) {
      if (!isEdit) {
        setTaxName("");
        setPercentage(0);
        setTaxCode("");
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
        >
          <Edit className="w-4 h-4" />
        </button>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold rounded-xl text-sm shadow-md shadow-orange-500/5 transition-all cursor-pointer active:scale-[0.98]"
        >
          <Plus className="w-4 h-4" />
          <span>Add Tax</span>
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800/80">
              <h3 className="text-lg font-bold text-white">{isEdit ? "Update Tax Scheme" : "Create New Tax"}</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-zinc-800 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {error && (
                <div className="p-3 bg-red-950/50 border border-red-500/30 rounded-xl text-red-200 text-sm flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-300 uppercase block">Tax Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. VAT, GST, CGST"
                  value={taxName}
                  onChange={(e) => setTaxName(e.target.value)}
                  className="w-full px-4 py-2.5 bg-zinc-950/80 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-amber-500/50 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-300 uppercase block">Percentage (%)</label>
                <input
                  type="number"
                  step="0.01"
                  required
                  placeholder="e.g. 5, 18"
                  value={percentage || ""}
                  onChange={(e) => setPercentage(Number(e.target.value))}
                  className="w-full px-4 py-2.5 bg-zinc-950/80 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-amber-500/50 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-300 uppercase block">Tax Code</label>
                <input
                  type="text"
                  placeholder="e.g. GST-18"
                  value={taxCode}
                  onChange={(e) => setTaxCode(e.target.value)}
                  className="w-full px-4 py-2.5 bg-zinc-950/80 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-amber-500/50 transition-all"
                />
              </div>

              {isEdit && (
                <div className="flex items-center gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="tax-active-chk"
                    checked={isActive}
                    onChange={(e) => setIsActive(e.target.checked)}
                    className="w-4 h-4 accent-amber-500 bg-zinc-950 border-zinc-800 text-amber-500 rounded"
                  />
                  <label htmlFor="tax-active-chk" className="text-xs font-semibold text-zinc-300 uppercase cursor-pointer select-none">
                    Tax Active / Applicable
                  </label>
                </div>
              )}

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
                    <span>{isEdit ? "Update" : "Create"}</span>
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
