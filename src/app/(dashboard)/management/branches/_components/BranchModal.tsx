"use client";

import { useState } from "react";
import { createBranch, updateBranch } from "../actions";
import { Plus, X, Loader2, AlertCircle, Edit } from "lucide-react";

interface BranchModalProps {
  branch?: any;
}

export default function BranchModal({ branch }: BranchModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(branch?.name || "");
  const [phone, setPhone] = useState(branch?.phone || "");
  const [email, setEmail] = useState(branch?.email || "");
  const [printerName, setPrinterName] = useState(branch?.printerName || "");
  const [invoiceSequence, setInvoiceSequence] = useState(branch?.invoiceSequence || 1000);
  const [street, setStreet] = useState(branch?.street || "");
  const [city, setCity] = useState(branch?.city || "");
  const [state, setState] = useState(branch?.state || "");
  const [country, setCountry] = useState(branch?.country || "");
  const [zipCode, setZipCode] = useState(branch?.zipCode || "");
  const [active, setActive] = useState(branch ? branch.active : true);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isEdit = !!branch;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("printerName", printerName);
    formData.append("invoiceSequence", String(invoiceSequence));
    formData.append("street", street);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("country", country);
    formData.append("zipCode", zipCode);
    formData.append("active", String(active));

    const res = isEdit ? await updateBranch(branch.id, formData) : await createBranch(formData);

    if (res.success) {
      if (!isEdit) {
        setName("");
        setPhone("");
        setEmail("");
        setPrinterName("");
        setInvoiceSequence(1000);
        setStreet("");
        setCity("");
        setState("");
        setCountry("");
        setZipCode("");
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
          <span>Add Branch</span>
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800/80">
              <h3 className="text-lg font-bold text-white">{isEdit ? "Update Branch" : "Create New Branch"}</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-zinc-800 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto scrollbar-thin">
              {error && (
                <div className="p-3 bg-red-950/50 border border-red-500/30 rounded-xl text-red-200 text-sm flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-xs font-semibold text-zinc-300 uppercase block">Branch Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aarna India - Noida Sector 62"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 bg-zinc-950/80 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-amber-500/50"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-300 uppercase block">Phone</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. +91 999999999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 bg-zinc-950/80 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-amber-500/50"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-300 uppercase block">Email</label>
                  <input
                    type="email"
                    placeholder="e.g. outlet@aarnaindia.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 bg-zinc-950/80 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-amber-500/50"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-300 uppercase block">Printer Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Thermal-80mm"
                    value={printerName}
                    onChange={(e) => setPrinterName(e.target.value)}
                    className="w-full px-4 py-2.5 bg-zinc-950/80 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-amber-500/50"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-300 uppercase block">Invoice Sequence Start</label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={invoiceSequence}
                    onChange={(e) => setInvoiceSequence(Number(e.target.value))}
                    className="w-full px-4 py-2.5 bg-zinc-950/80 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500/50"
                  />
                </div>
              </div>

              {/* Address detail */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-500 border-b border-zinc-800 pb-1">Address Details</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="md:col-span-3 space-y-1.5">
                    <label className="text-[10px] font-semibold text-zinc-400 uppercase">Street</label>
                    <input
                      type="text"
                      required
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                      className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-white text-xs focus:outline-none focus:border-amber-500/50"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-semibold text-zinc-400 uppercase">City</label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-white text-xs focus:outline-none focus:border-amber-500/50"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-semibold text-zinc-400 uppercase">State</label>
                    <input
                      type="text"
                      required
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-white text-xs focus:outline-none focus:border-amber-500/50"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-semibold text-zinc-400 uppercase">ZIP</label>
                    <input
                      type="text"
                      required
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-white text-xs focus:outline-none focus:border-amber-500/50"
                    />
                  </div>
                  <div className="md:col-span-3 space-y-1.5">
                    <label className="text-[10px] font-semibold text-zinc-400 uppercase">Country</label>
                    <input
                      type="text"
                      required
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-white text-xs focus:outline-none focus:border-amber-500/50"
                    />
                  </div>
                </div>
              </div>

              {isEdit && (
                <div className="flex items-center gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="branch-active-chk"
                    checked={active}
                    onChange={(e) => setActive(e.target.checked)}
                    className="w-4 h-4 accent-amber-500 bg-zinc-950 border-zinc-800 text-amber-500 rounded"
                  />
                  <label htmlFor="branch-active-chk" className="text-xs font-semibold text-zinc-300 uppercase cursor-pointer select-none">
                    Branch Active / Operational
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
                    <span>{isEdit ? "Update Branch" : "Create Branch"}</span>
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
