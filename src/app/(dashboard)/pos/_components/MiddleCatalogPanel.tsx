"use client";

import React from "react";
import { Search, Gift } from "lucide-react";
import { usePOSStore } from "@/lib/store";

interface ProductItem {
  id: string;
  name: string;
  code: string;
  price: number;
  category: string;
  isAvailable: boolean;
  branchName?: string;
}

interface MiddleCatalogPanelProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (val: string) => void;
  filteredProducts: ProductItem[];
  addToCart: (product: ProductItem, isComplement?: boolean) => void;
  focusedProductIndex: number;
  role: "ADMIN" | "MANAGER" | "STAFF" | "OWNER";
  openCustomComplement: () => void;
  billType: "BILL" | "KOT";
}

export default function MiddleCatalogPanel({
  searchQuery,
  setSearchQuery,
  categories,
  selectedCategory,
  setSelectedCategory,
  filteredProducts,
  addToCart,
  focusedProductIndex,
  role,
  openCustomComplement,
  billType
}: MiddleCatalogPanelProps) {
  const company = usePOSStore((state) => state.company);
  const currencySymbol = company?.currencySymbol || "$";

  return (
    <div className="lg:col-span-5 flex flex-col h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-4 overflow-hidden">
      
      {/* Search */}
      <div className="relative mb-4 shrink-0">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-500 pointer-events-none">
          <Search className="w-4 h-4" />
        </span>
        <input
          id="pos-product-search"
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-amber-500/50"
        />
      </div>

      {/* Categories Horizontal scrolling tabs */}
      <div className="flex gap-1.5 overflow-x-auto pb-3 mb-1 shrink-0 scrollbar-none">
        {["All", ...categories].map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-lg border text-[10px] font-black uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === cat
                ? "bg-amber-500 border-amber-600 text-black shadow-lg shadow-amber-500/10"
                : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Catalog Grid */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden pr-1 scrollbar-thin">
        <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-3 p-1 pb-4">
          
          {/* Card at index 0: Custom Complement Card */}
          <div 
            onClick={openCustomComplement}
            className="p-4 bg-amber-500/5 hover:bg-amber-500/10 border border-amber-500/35 hover:border-amber-500 rounded-2xl flex flex-col justify-between min-h-[145px] transition-all cursor-pointer hover:scale-[1.01] relative overflow-hidden group select-none"
          >
            <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-amber-500 text-black text-[9px] font-black rounded-lg uppercase tracking-wide">
              FREE
            </div>
            <div>
              <h4 className="font-extrabold text-[13px] text-amber-500 group-hover:text-amber-400 transition-colors uppercase tracking-wider block pr-10">
                + Custom Item
              </h4>
              <span className="text-[8px] font-bold text-zinc-500 bg-zinc-950 px-2 py-0.5 rounded-full mt-1.5 inline-block uppercase tracking-wider">
                Complementary
              </span>
            </div>
            {billType !== "KOT" && (
              <div className="border-t border-zinc-850/50 pt-2.5 mt-2.5">
                <span className="text-xs font-black text-amber-500 block mt-0.5">{currencySymbol}0.00</span>
              </div>
            )}
          </div>

          {filteredProducts.map((product, idx) => (
            <div
              key={product.id}
              onClick={() => product.isAvailable && addToCart(product)}
              className={`p-4 bg-zinc-900 border rounded-2xl flex flex-col justify-between min-h-[145px] transition-all relative overflow-hidden group select-none ${
                (idx + 1) === focusedProductIndex
                  ? "border-amber-500 shadow-lg shadow-amber-500/10 ring-1 ring-amber-500/50 scale-[1.02]"
                  : product.isAvailable 
                    ? "border-zinc-800/80 hover:border-zinc-700 hover:shadow-xl cursor-pointer hover:scale-[1.01]" 
                    : "border-zinc-850 opacity-40 cursor-not-allowed"
              }`}
            >
              {/* Product Code absolute at top right corner */}
              <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-zinc-950 border border-zinc-800 text-amber-500 text-[9px] font-black rounded-lg uppercase tracking-wide">
                {product.code}
              </div>

              <div>
                <h4 className="font-extrabold text-[13px] text-white group-hover:text-amber-500 transition-colors line-clamp-2 pr-10">
                  {product.name}
                </h4>
                
                {/* Category Tag */}
                <span className="text-[8px] font-bold text-zinc-500 bg-zinc-950 px-2 py-0.5 rounded-full mt-1.5 inline-block uppercase tracking-wider">
                  {product.category}
                </span>

                {/* Admin Branch Name */}
                {role === "ADMIN" && (
                  <div className="mt-1">
                    <span className="text-[7.5px] font-extrabold text-amber-500/75 bg-amber-500/5 border border-amber-500/10 px-2 py-0.5 rounded-full inline-block uppercase tracking-wider truncate max-w-full">
                      {product.branchName || "Global"}
                    </span>
                  </div>
                )}
              </div>

              {billType !== "KOT" && (
                <div className="flex justify-between items-end border-t border-zinc-850 pt-2.5 mt-2.5">
                  <div>
                    <span className="text-xs font-black text-amber-500 block mt-0.5">{currencySymbol}{product.price.toFixed(2)}</span>
                  </div>
                  {product.isAvailable && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product, true);
                      }}
                      className="p-1 text-[9px] font-black bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-black rounded-lg border border-amber-500/20 hover:border-amber-500 flex items-center gap-0.5 transition-all cursor-pointer uppercase tracking-wider shadow-inner shrink-0"
                      title="Add as Complementary"
                    >
                      <Gift className="w-2.5 h-2.5" />
                      <span>Free</span>
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
