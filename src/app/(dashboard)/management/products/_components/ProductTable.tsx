"use client";

import { useState } from "react";
import { deleteProduct } from "../actions";
import { Trash2, ShieldAlert, Loader2, BookOpen, Layers } from "lucide-react";
import ProductModal from "./ProductModal";

interface Product {
  id: string;
  name: string;
  code: string;
  price: number;
  category: string;
  isAvailable: boolean;
  branchId: string | null;
  branchName: string;
}

interface ProductTableProps {
  products: Product[];
  categories: string[];
  branches: Array<{ id: string; name: string }>;
}

export default function ProductTable({ products, categories, branches }: ProductTableProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete menu item "${name}"?`)) {
      return;
    }

    setDeletingId(id);
    setError(null);

    const res = await deleteProduct(id);
    if (!res.success) {
      setError(res.error || "Failed to delete product.");
      setDeletingId(null);
    } else {
      setDeletingId(null);
    }
  };

  const filteredProducts = products.filter((p) => {
    return selectedCategory === "All" || p.category === selectedCategory;
  });

  return (
    <div className="w-full space-y-6 select-none animate-in fade-in duration-300">
      {error && (
        <div className="p-3.5 bg-red-950/40 border border-red-500/20 rounded-2xl text-red-200 text-xs flex items-start gap-2.5 max-w-md">
          <ShieldAlert className="w-4.5 h-4.5 shrink-0 text-red-400 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-zinc-900">
        <button
          onClick={() => setSelectedCategory("All")}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
            selectedCategory === "All"
              ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md shadow-orange-500/10"
              : "bg-zinc-900 border border-zinc-850 text-zinc-450 hover:text-white"
          }`}
        >
          All Items ({products.length})
        </button>
        {categories.map((cat) => {
          const count = products.filter((p) => p.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md shadow-orange-500/10"
                  : "bg-zinc-900 border border-zinc-850 text-zinc-450 hover:text-white"
              }`}
            >
              {cat} ({count})
            </button>
          );
        })}
      </div>

      {/* Cards Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 bg-zinc-900/15 border border-zinc-800 rounded-3xl text-zinc-550 space-y-2">
          <Layers className="w-10 h-10 mx-auto text-amber-500/30" />
          <p className="text-xs font-semibold">No items registered in this category.</p>
          <p className="text-[10px] text-zinc-650">Use the Add Product button above to insert items.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className="bg-zinc-900/40 border border-zinc-850 hover:border-zinc-800 rounded-2xl p-5 flex flex-col justify-between h-[200px] hover:bg-zinc-900/60 hover:shadow-xl hover:shadow-black/25 transition-all duration-300 group"
            >
              <div>
                <div className="flex justify-between items-start gap-4">
                  <span className="text-[9px] bg-zinc-800 text-zinc-400 border border-zinc-750 px-2 py-0.5 rounded font-mono font-bold uppercase tracking-wider">
                    {p.code}
                  </span>
                  
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wide ${
                      p.isAvailable
                        ? "bg-emerald-500/10 text-emerald-450 border border-emerald-500/20"
                        : "bg-red-500/10 text-red-450 border border-red-500/20"
                    }`}
                  >
                    {p.isAvailable ? "In Stock" : "Out"}
                  </span>
                </div>

                <h3 className="font-extrabold text-white text-sm sm:text-base mt-3.5 group-hover:text-amber-400 transition-colors line-clamp-2 leading-snug">
                  {p.name}
                </h3>
                
                <span className="text-[10px] text-zinc-550 block mt-1.5 font-bold uppercase tracking-wider">
                  {p.category}
                </span>
              </div>

              <div className="border-t border-zinc-850/60 mt-4 pt-3.5 flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-base font-black text-amber-500 block">₹{p.price}</span>
                  <span className="text-[9px] text-zinc-500 font-semibold block truncate max-w-[120px]">
                    {p.branchName}
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 shrink-0">
                  <ProductModal 
                    product={p} 
                    categories={categories} 
                    branches={branches} 
                  />
                  <button
                    onClick={() => handleDelete(p.id, p.name)}
                    disabled={deletingId === p.id}
                    className="p-2 text-zinc-550 hover:text-red-400 bg-zinc-950 border border-zinc-850 hover:border-red-950/20 rounded-xl transition-all cursor-pointer inline-flex items-center"
                    title="Delete item"
                  >
                    {deletingId === p.id ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <Trash2 className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
