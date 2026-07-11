"use client";

import React from "react";
import { X } from "lucide-react";
import { usePOSStore } from "@/lib/store";

interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  isComplement: boolean;
}

interface EditProductDetailsModalProps {
  editingCartItem: CartItem | null;
  setEditingCartItem: (val: CartItem | null) => void;
  editName: string;
  setEditName: (val: string) => void;
  editPrice: number;
  setEditPrice: (val: number) => void;
  editQuantity: number;
  setEditQuantity: (val: number) => void;
  editIsComplement: boolean;
  setEditIsComplement: (val: boolean) => void;
  editSpecification: string;
  setEditSpecification: (val: string) => void;
  saveEditedItem: () => void;
}

export default function EditProductDetailsModal({
  editingCartItem,
  setEditingCartItem,
  editName,
  setEditName,
  editPrice,
  setEditPrice,
  editQuantity,
  setEditQuantity,
  editIsComplement,
  setEditIsComplement,
  editSpecification,
  setEditSpecification,
  saveEditedItem
}: EditProductDetailsModalProps) {
  const company = usePOSStore((state) => state.company);
  const currencySymbol = company?.currencySymbol || "$";

  if (!editingCartItem) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-250">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800/80 bg-zinc-950/20">
          <h3 className="text-xs font-bold text-white uppercase tracking-wider">Edit Product Details</h3>
          <button
            onClick={() => setEditingCartItem(null)}
            className="text-zinc-450 hover:text-white p-1 rounded-lg hover:bg-zinc-800 transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4 text-xs text-zinc-300">
          {/* Name */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Name</label>
            <input
              type="text"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-850 rounded-lg text-white placeholder-zinc-700 text-xs focus:outline-none focus:border-amber-500/50"
            />
          </div>

          {/* Rate & Quantity */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Rate ({currencySymbol})</label>
              <input
                type="number"
                min="0"
                value={editPrice}
                onChange={(e) => {
                  const val = Math.max(0, Number(e.target.value));
                  setEditPrice(val);
                  if (val > 0) {
                    setEditIsComplement(false);
                  }
                }}
                className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-850 rounded-lg text-white text-xs focus:outline-none focus:border-amber-500/50"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Quantity</label>
              <input
                type="number"
                min="1"
                value={editQuantity}
                onChange={(e) => setEditQuantity(Math.max(1, Number(e.target.value)))}
                className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-850 rounded-lg text-white text-xs focus:outline-none focus:border-amber-500/50"
              />
            </div>
          </div>

          {/* Mark as Free */}
          <div className="flex items-center gap-2 pt-1">
            <input
              type="checkbox"
              id="edit-free-checkbox"
              checked={editIsComplement}
              onChange={(e) => {
                setEditIsComplement(e.target.checked);
                if (e.target.checked) {
                  setEditPrice(0);
                }
              }}
              className="w-4 h-4 accent-amber-500 bg-zinc-950 border-zinc-850 rounded text-amber-500 cursor-pointer"
            />
            <label htmlFor="edit-free-checkbox" className="text-[10px] font-bold uppercase tracking-wider text-zinc-350 cursor-pointer">
              Mark item as Free
            </label>
          </div>

          {/* Specification Dropdown */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Specification</label>
            <select
              value={editSpecification}
              onChange={(e) => setEditSpecification(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-850 rounded-lg text-white text-xs focus:outline-none focus:border-amber-500/50 transition-all cursor-pointer"
            >
              <option value="">Select Specification</option>
              {[
                "Spicy",
                "Extra spicy",
                "Super spicy",
                "Medium spicy",
                "Little spicy",
                "Mild",
                "Gravy",
                "Dry",
                "Semi Gravy",
                "Extra Roasted",
                "no pepper",
                "less oil",
                "takeaway"
              ].map((spec) => (
                <option key={spec} value={spec} className="bg-zinc-950 text-white">
                  {spec}
                </option>
              ))}
            </select>
          </div>

          {/* Final Amount display */}
          <div className="border-t border-zinc-800/80 pt-4 mt-2 flex items-center justify-between">
            <span className="font-bold text-zinc-450 uppercase tracking-wider">Final Amount:</span>
            <span className="text-base font-black text-amber-500">
              {currencySymbol}{(editIsComplement ? 0 : editPrice * editQuantity).toFixed(2)}
            </span>
          </div>

          {/* Buttons */}
          <div className="pt-2 flex gap-3">
            <button
              type="button"
              onClick={() => setEditingCartItem(null)}
              className="flex-1 py-2.5 border border-zinc-800 hover:bg-zinc-800/60 text-zinc-300 hover:text-white font-semibold rounded-xl text-xs transition-all cursor-pointer text-center font-bold"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={saveEditedItem}
              className="flex-1 py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold rounded-xl text-sm transition-all flex items-center justify-center cursor-pointer text-center"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
