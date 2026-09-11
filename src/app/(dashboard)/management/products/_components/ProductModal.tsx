"use client";

import { useState } from "react";
import { createProduct, updateProduct } from "../actions";
import { Plus, X, Loader2, AlertCircle, Edit } from "lucide-react";

interface BranchOption {
  id: string;
  name: string;
}

interface ProductModalProps {
  product?: any;
  categories: string[];
  branches: BranchOption[];
  currencySymbol: string;
}

export default function ProductModal({ product, categories, branches, currencySymbol }: ProductModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(product?.name || "");
  const [code, setCode] = useState(product?.code || "");
  const [price, setPrice] = useState(product?.price || 0);
  const [description, setDescription] = useState(product?.description || "");
  const [category, setCategory] = useState(product?.category || categories[0] || "");
  const [branchId, setBranchId] = useState(product?.branchId || "");
  const [isAvailable, setIsAvailable] = useState(product ? product.isAvailable : true);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isEdit = !!product;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("code", code);
    formData.append("price", String(price));
    formData.append("description", description);
    formData.append("category", category);
    formData.append("branchId", branchId);
    formData.append("isAvailable", String(isAvailable));

    const res = isEdit ? await updateProduct(product.id, formData) : await createProduct(formData);

    if (res.success) {
      if (!isEdit) {
        setName("");
        setCode("");
        setPrice(0);
        setDescription("");
        setCategory(categories[0] || "");
        setBranchId("");
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
          <span>Add Menu Item</span>
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800/80">
              <h3 className="text-lg font-bold text-white">{isEdit ? "Update Menu Item" : "Create Menu Item"}</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-zinc-800 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto scrollbar-thin">
              {error && (
                <div className="p-3 bg-red-950/50 border border-red-500/30 rounded-xl text-red-200 text-sm flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-300 uppercase block">Product Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Butter Chicken"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 bg-zinc-950/80 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-amber-500/50"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-300 uppercase block">Short Code</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. BC100"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full px-4 py-2.5 bg-zinc-950/80 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-amber-500/50"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-300 uppercase block">Price ({currencySymbol})</label>
                  <input
                    type="number"
                    required
                    min="0"
                    placeholder="e.g. 380"
                    value={price || ""}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="w-full px-4 py-2.5 bg-zinc-950/80 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-amber-500/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-300 uppercase block">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-zinc-950/80 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500/50"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-300 uppercase block">Branch Bounds</label>
                  <select
                    value={branchId}
                    onChange={(e) => setBranchId(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-zinc-950/80 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500/50"
                  >
                    <option value="">All Outlets (Global)</option>
                    {branches.map((b) => (
                      <option key={b.id} value={b.id}>
                        {b.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-300 uppercase block">Description / Notes</label>
                <textarea
                  placeholder="Ingredients, spiciness levels, portion sizes..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={2}
                  className="w-full px-4 py-2.5 bg-zinc-950/80 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-amber-500/50"
                />
              </div>

              {isEdit && (
                <div className="flex items-center gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="prod-avail-chk"
                    checked={isAvailable}
                    onChange={(e) => setIsAvailable(e.target.checked)}
                    className="w-4 h-4 accent-amber-500 bg-zinc-950 border-zinc-800 text-amber-500 rounded"
                  />
                  <label htmlFor="prod-avail-chk" className="text-xs font-semibold text-zinc-300 uppercase cursor-pointer select-none">
                    Item Available / In Stock
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
                    <span>{isEdit ? "Update Item" : "Create Item"}</span>
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
