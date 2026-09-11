"use client";

import React, { useState } from "react";
import { Search, ShoppingCart, Check } from "lucide-react";

interface Product {
  id: string;
  name: string;
  code: string;
  price: number;
  description: string;
  category: string;
}

interface PublicMenuProps {
  initialProducts: Product[];
  categories: string[];
  currencySymbol: string;
}

export default function PublicMenu({ initialProducts, categories, currencySymbol }: PublicMenuProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});

  const filteredProducts = initialProducts.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product: Product) => {
    try {
      const stored = localStorage.getItem("aarna_customer_cart");
      let cart = [];
      if (stored) {
        cart = JSON.parse(stored);
      }

      const existingIndex = cart.findIndex((item: any) => item.productId === product.id);
      if (existingIndex > -1) {
        cart[existingIndex].quantity += 1;
      } else {
        cart.push({
          productId: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
        });
      }

      localStorage.setItem("aarna_customer_cart", JSON.stringify(cart));
      window.dispatchEvent(new Event("aarna_cart_update"));

      // Trigger "Added" animation check
      setAddedItems((prev) => ({ ...prev, [product.id]: true }));
      setTimeout(() => {
        setAddedItems((prev) => ({ ...prev, [product.id]: false }));
      }, 1000);
    } catch (err) {
      console.error("Cart error:", err);
    }
  };

  return (
    <div className="space-y-8 select-none">
      
      {/* Search & Category Header */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
        {/* Search */}
        <div className="relative flex-grow">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-500 pointer-events-none">
            <Search className="w-4.5 h-4.5" />
          </span>
          <input
            type="text"
            placeholder="Search items by name or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-amber-500/50"
          />
        </div>

        {/* Categories Tab Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none shrink-0">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`px-4.5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === "All"
                ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md shadow-orange-500/10"
                : "bg-zinc-900 border border-zinc-850 text-zinc-400 hover:text-white"
            }`}
          >
            All Items
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4.5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md shadow-orange-500/10"
                  : "bg-zinc-900 border border-zinc-850 text-zinc-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products Cards Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 text-zinc-500 bg-zinc-900/10 border border-zinc-900 rounded-3xl">
          <p className="text-sm font-semibold">No products found matching your filter selection.</p>
          <p className="text-xs text-zinc-600 mt-1">Please try searching with another keyword or select another category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            const added = addedItems[product.id];
            return (
              <div
                key={product.id}
                className="bg-zinc-900/40 border border-zinc-850 hover:border-zinc-800 rounded-2xl p-5 flex flex-col justify-between hover:bg-zinc-900/60 transition-all duration-300"
              >
                <div>
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-extrabold text-white text-base leading-snug">
                      {product.name}
                    </h3>
                    <span className="text-[9px] bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded font-mono">
                      {product.code}
                    </span>
                  </div>
                  <p className="text-zinc-400 text-xs mt-2 line-clamp-3 leading-relaxed font-medium">
                    {product.description}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-zinc-850 mt-5 pt-4">
                  <span className="text-base font-black text-amber-500">{currencySymbol}{product.price}</span>
                  <button
                    onClick={() => addToCart(product)}
                    className={`py-2 px-4 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-all ${
                      added
                        ? "bg-emerald-500 text-black shadow-md shadow-emerald-500/25"
                        : "bg-amber-500 hover:bg-amber-600 text-black hover:scale-[1.03] active:scale-[0.97]"
                    }`}
                  >
                    {added ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-3.5 h-3.5" />
                        <span>Add to Cart</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
}
