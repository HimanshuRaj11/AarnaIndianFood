"use client";

import { useState } from "react";
import { getBranchInvoices, deleteInvoices, resequenceInvoices } from "../actions";
import { Trash2, Shuffle, ShieldAlert, CheckCircle2, Loader2 } from "lucide-react";

interface Invoice {
  id: string;
  invoiceId: string;
  invoiceIdTrack: string;
  clientName: string;
  clientPhone: string;
  subtotal: number;
  discount: number;
  taxAmount: number;
  total: number;
  paymentMode: string;
  cashier: string;
  createdAt: string;
  itemsCount: number;
}

interface Branch {
  id: string;
  name: string;
}

interface InvoiceListProps {
  branches: Branch[];
  initialInvoices: Invoice[];
  initialBranchId: string;
  currencySymbol: string;
}

export default function InvoiceList({ branches, initialInvoices, initialBranchId, currencySymbol }: InvoiceListProps) {
  const [branchId, setBranchId] = useState(initialBranchId);
  const [invoices, setInvoices] = useState<Invoice[]>(initialInvoices);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  
  // Date filters
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleBranchChange = async (newBranchId: string) => {
    setBranchId(newBranchId);
    setSelectedIds([]);
    setLoading(true);
    setError(null);
    setSuccess(null);

    const res = await getBranchInvoices(newBranchId);
    if (res.success && res.invoices) {
      setInvoices(res.invoices);
    } else {
      setError(res.error || "Failed to load invoices.");
    }
    setLoading(false);
  };

  const handleSelectAll = (checked: boolean, filteredList: Invoice[]) => {
    if (checked) {
      setSelectedIds(filteredList.map((inv) => inv.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectOne = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedIds((prev) => [...prev, id]);
    } else {
      setSelectedIds((prev) => prev.filter((item) => item !== id));
    }
  };

  const handleDeleteSelected = async () => {
    if (selectedIds.length === 0) return;

    if (!confirm(`Are you sure you want to delete ${selectedIds.length} invoice(s)? This will soft-delete them from sales.`)) {
      return;
    }

    setActionLoading(true);
    setError(null);
    setSuccess(null);

    const res = await deleteInvoices(selectedIds);
    if (res.success) {
      setSuccess(`Successfully soft-deleted ${selectedIds.length} invoice(s).`);
      setSelectedIds([]);
      // Reload invoices
      const reload = await getBranchInvoices(branchId);
      if (reload.success && reload.invoices) {
        setInvoices(reload.invoices);
      }
    } else {
      setError(res.error || "Failed to delete invoices.");
    }
    setActionLoading(false);
  };

  const handleResequence = async () => {
    if (!branchId || branchId === "ALL") {
      setError("Please select a specific branch to re-sequence. Re-sequencing is not supported for 'All Branches'.");
      return;
    }

    if (!confirm("Re-sequence will arrange all remaining invoices consecutively by date. Original tracking ID (invoiceIdTrack) will remain unchanged. Proceed?")) {
      return;
    }

    setActionLoading(true);
    setError(null);
    setSuccess(null);

    const res = await resequenceInvoices(branchId);
    if (res.success) {
      setSuccess("Invoices re-sequenced consecutively successfully!");
      // Reload invoices
      const reload = await getBranchInvoices(branchId);
      if (reload.success && reload.invoices) {
        setInvoices(reload.invoices);
      }
    } else {
      setError(res.error || "Failed to re-sequence invoices.");
    }
    setActionLoading(false);
  };

  // Perform date filtering
  const filteredInvoices = invoices.filter((inv) => {
    if (!startDate && !endDate) return true;
    const invDate = new Date(inv.createdAt);
    if (startDate) {
      const start = new Date(startDate);
      start.setHours(0, 0, 0, 0);
      if (invDate < start) return false;
    }
    if (endDate) {
      const end = new Date(endDate);
      end.setHours(23, 59, 59, 999);
      if (invDate > end) return false;
    }
    return true;
  });

  return (
    <div className="space-y-6">
      
      {/* Filters Toolbar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 bg-zinc-900 border border-zinc-800 p-5 rounded-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-grow max-w-3xl">
          {/* Branch Filter */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block">Select Branch Outlet</label>
            <select
              value={branchId}
              onChange={(e) => handleBranchChange(e.target.value)}
              className="w-full px-3 py-2.5 bg-zinc-950/80 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-amber-500/50"
            >
              <option value="ALL">All Branches</option>
              {branches.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.name}
                </option>
              ))}
            </select>
          </div>

          {/* Start Date */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block">Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full px-3 py-2.5 bg-zinc-950/80 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-amber-500/50"
            />
          </div>

          {/* End Date */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block">End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full px-3 py-2.5 bg-zinc-950/80 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-amber-500/50"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 self-end">
          {selectedIds.length > 0 && (
            <button
              onClick={handleDeleteSelected}
              disabled={actionLoading}
              className="flex items-center gap-2 px-4 py-2.5 bg-red-950/40 border border-red-500/30 text-red-400 hover:text-red-300 font-semibold rounded-xl text-xs transition-all cursor-pointer disabled:opacity-50"
            >
              {actionLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
              <span>Delete ({selectedIds.length})</span>
            </button>
          )}

          <button
            onClick={handleResequence}
            disabled={actionLoading || invoices.length === 0 || branchId === "ALL"}
            className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold rounded-xl text-xs shadow-md shadow-orange-500/5 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            title={branchId === "ALL" ? "Select a single branch to re-sequence" : ""}
          >
            {actionLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Shuffle className="w-4 h-4" />}
            <span>Re-sequence Numbers</span>
          </button>
        </div>
      </div>

      {/* Banners */}
      {error && (
        <div className="p-4 bg-red-950/40 border border-red-500/20 text-red-200 text-sm flex items-start gap-2.5 rounded-2xl">
          <ShieldAlert className="w-4 h-4 mt-0.5 shrink-0 text-red-400" />
          <span>{error}</span>
        </div>
      )}

      {success && (
        <div className="p-4 bg-emerald-950/40 border border-emerald-500/20 text-emerald-200 text-sm flex items-start gap-2.5 rounded-2xl">
          <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-emerald-400" />
          <span>{success}</span>
        </div>
      )}

      {/* Invoices Table */}
      <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-900/40">
        <table className="w-full border-collapse text-left text-sm text-zinc-300">
          <thead className="bg-zinc-900/80 text-xs font-semibold uppercase tracking-wider text-zinc-400 border-b border-zinc-800">
            <tr>
              <th className="px-6 py-4 w-12 text-center">
                <input
                  type="checkbox"
                  checked={filteredInvoices.length > 0 && selectedIds.length === filteredInvoices.length}
                  onChange={(e) => handleSelectAll(e.target.checked, filteredInvoices)}
                  className="w-4 h-4 accent-amber-500 bg-zinc-950 border-zinc-800 text-amber-500 rounded"
                />
              </th>
              <th className="px-6 py-4">Invoice ID</th>
              <th className="px-6 py-4">Track ID</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Customer</th>
              <th className="px-6 py-4">Cashier</th>
              <th className="px-6 py-4">Payment</th>
              <th className="px-6 py-4 text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/60">
            {loading ? (
              <tr>
                <td colSpan={8} className="px-6 py-16 text-center text-zinc-500">
                  <div className="flex flex-col items-center gap-2.5">
                    <Loader2 className="w-8 h-8 animate-spin text-amber-500" />
                    <span>Loading billing history...</span>
                  </div>
                </td>
              </tr>
            ) : filteredInvoices.length === 0 ? (
              <tr>
                <td colSpan={8} className="px-6 py-12 text-center text-zinc-500">
                  No invoices recorded matching filters.
                </td>
              </tr>
            ) : (
              filteredInvoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-zinc-800/10 transition-colors">
                  <td className="px-6 py-4 w-12 text-center">
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(inv.id)}
                      onChange={(e) => handleSelectOne(inv.id, e.target.checked)}
                      className="w-4 h-4 accent-amber-500 bg-zinc-950 border-zinc-800 text-amber-500 rounded"
                    />
                  </td>
                  <td className="px-6 py-4 font-mono font-bold text-white text-xs">
                    {inv.invoiceId}
                  </td>
                  <td className="px-6 py-4 font-mono text-zinc-500 text-xs italic">
                    {inv.invoiceIdTrack}
                  </td>
                  <td className="px-6 py-4 text-zinc-400 text-xs">
                    {new Date(inv.createdAt).toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-white">{inv.clientName}</div>
                    <div className="text-zinc-500 text-xs mt-0.5">{inv.clientPhone}</div>
                  </td>
                  <td className="px-6 py-4 text-zinc-400 text-xs">{inv.cashier}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-0.5 bg-zinc-800 text-[10px] rounded font-semibold text-zinc-300 border border-zinc-700">
                      {inv.paymentMode}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right font-black text-amber-500">
                    {currencySymbol}{inv.total.toFixed(2)}
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
