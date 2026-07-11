"use client";

import React from "react";
import { 
  Utensils, 
  RotateCcw, 
  CheckCircle, 
  AlertCircle, 
  Minus, 
  Plus, 
  Sliders, 
  Gift, 
  Trash2, 
  Coins, 
  CreditCard, 
  QrCode, 
  Landmark, 
  Building2 
} from "lucide-react";
import { usePOSStore } from "@/lib/store";

interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  isComplement: boolean;
  specification?: string;
}

interface RightSummaryPanelProps {
  cart: CartItem[];
  clearCart: () => void;
  message: { type: "success" | "error"; text: string } | null;
  updateQuantity: (id: string, isFree: boolean, delta: number) => void;
  openEditModal: (item: CartItem) => void;
  toggleComplement: (id: string, isFree: boolean) => void;
  removeFromCart: (id: string, isFree: boolean) => void;
  discountType: "PERCENT" | "FLAT" | "NONE" | "EXEMPTED";
  discountValue: number;
  paymentMode: "CASH" | "CARD" | "UPI" | "NET_BANKING" | "CHEQUE";
  setPaymentMode: (mode: "CASH" | "CARD" | "UPI" | "NET_BANKING" | "CHEQUE") => void;
  handleCheckout: () => void;
  loading: boolean;
  billType: "BILL" | "KOT";
}

export default function RightSummaryPanel({
  cart,
  clearCart,
  message,
  updateQuantity,
  openEditModal,
  toggleComplement,
  removeFromCart,
  discountType,
  discountValue,
  paymentMode,
  setPaymentMode,
  handleCheckout,
  loading,
  billType
}: RightSummaryPanelProps) {
  const company = usePOSStore((state) => state.company);
  const currencySymbol = company?.currencySymbol || "$";

  // Compute price totals
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  let discountAmount = 0;
  if (discountType === "PERCENT") {
    discountAmount = subtotal * (discountValue / 100);
  } else if (discountType === "FLAT") {
    discountAmount = discountValue;
  } else if (discountType === "EXEMPTED") {
    discountAmount = subtotal;
  }
  
  const taxableAmount = Math.max(0, subtotal - discountAmount);
  const taxAmount = taxableAmount * 0.14; // 14% VAT
  const grandTotal = taxableAmount + taxAmount;

  return (
    <div className="lg:col-span-4 flex flex-col h-full bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
      
      {/* Header */}
      <div className="px-4 py-3 border-b border-zinc-800 bg-zinc-950/40 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="text-[11px] font-bold text-white uppercase tracking-wider">Bill Summary</span>
          <span className="px-2 py-0.5 bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-full text-[10px] font-black">
            {cart.reduce((sum, item) => sum + item.quantity, 0)} items
          </span>
        </div>
        <button
          onClick={clearCart}
          className="text-[9px] bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-white px-2 py-1 rounded font-bold uppercase tracking-wider flex items-center gap-1 cursor-pointer transition-all"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset</span>
        </button>
      </div>

      {/* Message Banner */}
      {message && (
        <div className={`mx-4 mt-4 p-3 border rounded-xl text-xs flex items-start gap-2.5 animate-in fade-in slide-in-from-top-1 duration-200 shrink-0 ${
          message.type === "success" 
            ? "bg-emerald-950/30 border-emerald-500/20 text-emerald-300"
            : "bg-red-950/30 border-red-500/20 text-red-300"
        }`}>
          {message.type === "success" ? (
            <CheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
          ) : (
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" />
          )}
          <span>{message.text}</span>
        </div>
      )}

      {/* Cart Item Lines */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2.5 scrollbar-thin">
        {cart.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-zinc-650 gap-2">
            <Utensils className="w-8 h-8 opacity-30 text-amber-500 animate-pulse" />
            <span className="text-xs font-semibold">Add menu items to compile invoice</span>
          </div>
        ) : (
          cart.map((item) => (
            <div
              key={`${item.productId}-${item.isComplement ? "free" : "paid"}`}
              className="flex items-center justify-between p-3 bg-zinc-950/40 border border-zinc-900 rounded-xl hover:border-zinc-850 transition-all"
            >
              <div className="flex-1 min-w-0 pr-3">
                <div className="flex items-center gap-1.5">
                  <h5 className="text-xs font-bold text-white truncate">{item.name}</h5>
                  {item.isComplement && (
                    <span className="text-[7px] bg-amber-500/10 text-amber-500 px-1.5 py-0.5 rounded font-black uppercase">
                      Free
                    </span>
                  )}
                </div>
                {billType !== "KOT" && (
                  <span className="text-[10px] text-zinc-500 font-extrabold mt-0.5 block">
                    {currencySymbol}{item.price} each
                  </span>
                )}
                {item.specification && (
                  <span className="text-[9px] bg-zinc-900 border border-zinc-800 text-amber-500 font-bold px-1.5 py-0.5 rounded mt-1.5 inline-block">
                    Spec: {item.specification}
                  </span>
                )}
              </div>
              
              <div className="flex items-center gap-3">
                {/* Quantity adjusts */}
                <div className="flex items-center bg-zinc-950 border border-zinc-850 rounded-lg p-0.5">
                  <button
                    onClick={() => updateQuantity(item.productId, item.isComplement, -1)}
                    className="p-1 text-zinc-400 hover:text-white rounded transition-colors cursor-pointer"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="w-6 text-center text-[11px] font-black text-white">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.productId, item.isComplement, 1)}
                    className="p-1 text-zinc-400 hover:text-white rounded transition-colors cursor-pointer"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>

                {/* Edit button */}
                <button
                  onClick={() => openEditModal(item)}
                  className="p-1.5 text-zinc-550 hover:text-amber-500 rounded-lg transition-all cursor-pointer"
                  title="Edit item details"
                >
                  <Sliders className="w-3.5 h-3.5" />
                </button>

                {/* Complement switch */}
                {billType !== "KOT" && (
                  <button
                    onClick={() => toggleComplement(item.productId, item.isComplement)}
                    className={`p-1.5 border rounded-lg transition-all cursor-pointer ${
                      item.isComplement 
                        ? "bg-amber-500/10 border-amber-500 text-amber-500"
                        : "bg-zinc-950 border-zinc-850 text-zinc-500 hover:text-zinc-400"
                    }`}
                    title="Toggle complement state"
                  >
                    <Gift className="w-3.5 h-3.5" />
                  </button>
                )}

                {/* Delete button */}
                <button
                  onClick={() => removeFromCart(item.productId, item.isComplement)}
                  className="p-1.5 text-zinc-650 hover:text-red-400 rounded-lg transition-all cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Checkout Calculations */}
      <div className="p-3.5 border-t border-zinc-800 bg-zinc-950/20 space-y-3 shrink-0">
        {billType !== "KOT" && (
          <>
            <div className="space-y-1 text-[11px] text-zinc-400">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-white font-bold">{currencySymbol}{subtotal.toFixed(2)}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-red-400">
                  <span>Discount</span>
                  <span className="font-bold">-{currencySymbol}{discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Vat (14%)</span>
                <span className="text-white font-bold">{currencySymbol}{taxAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-t border-zinc-850 pt-1.5 text-xs">
                <span className="font-bold text-white">Grand Total</span>
                <span className="text-amber-500 font-black text-base">{currencySymbol}{grandTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Payment Modes Grid */}
            <div className="space-y-1">
              <span className="text-[8.5px] font-bold uppercase tracking-wider text-zinc-500">Payment Mode</span>
              <div className="grid grid-cols-5 gap-1.5">
                {[
                  { id: "CASH", label: "Cash", icon: Coins },
                  { id: "CARD", label: "Card", icon: CreditCard },
                  { id: "UPI", label: "UPI", icon: QrCode },
                  { id: "NET_BANKING", label: "NetBank", icon: Landmark },
                  { id: "CHEQUE", label: "Cheque", icon: Building2 }
                ].map((mode) => {
                  const Icon = mode.icon;
                  return (
                    <button
                      key={mode.id}
                      onClick={() => setPaymentMode(mode.id as any)}
                      className={`py-1.5 px-1 rounded-lg border flex flex-col items-center justify-center gap-0.5 transition-all cursor-pointer ${
                        paymentMode === mode.id
                          ? "bg-amber-500 border-amber-600 text-black font-black"
                          : "bg-zinc-950 border-zinc-850 text-zinc-450 hover:text-white"
                      }`}
                      title={mode.label}
                    >
                      <Icon className="w-3.5 h-3.5 shrink-0" />
                      <span className="text-[7px] uppercase font-bold tracking-tight whitespace-nowrap">{mode.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </>
        )}

        {/* Create Invoice / Submit KOT Button */}
        <button
          onClick={handleCheckout}
          disabled={loading || cart.length === 0}
          className="w-full py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-black text-[11px] uppercase tracking-wider rounded-lg transition-all shadow-xl shadow-orange-500/10 cursor-pointer disabled:opacity-40 disabled:pointer-events-none flex items-center justify-center gap-1"
        >
          <span>{billType === "KOT" ? "Submit KOT to Kitchen" : "Create Invoice"}</span>
        </button>
      </div>

    </div>
  );
}
