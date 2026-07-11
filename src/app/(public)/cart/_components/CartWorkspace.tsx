"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { submitOnlineOrder } from "../actions";
import { Trash2, Plus, Minus, CreditCard, ShoppingBag, ArrowRight, CheckCircle, AlertCircle } from "lucide-react";

interface BranchItem {
  id: string;
  name: string;
}

interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartWorkspaceProps {
  branches: BranchItem[];
}

export default function CartWorkspace({ branches }: CartWorkspaceProps) {
  const router = useRouter();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Form fields
  const [branchId, setBranchId] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [tableNo, setTableNo] = useState("Online Order");

  // Load cart from local storage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("aarna_customer_cart");
      if (stored) {
        setCart(JSON.parse(stored));
      }
    } catch (err) {
      console.error("Cart load error:", err);
    }
  }, []);

  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    try {
      localStorage.setItem("aarna_customer_cart", JSON.stringify(newCart));
      window.dispatchEvent(new Event("aarna_cart_update"));
    } catch (err) {
      console.error("Cart save error:", err);
    }
  };

  const updateQuantity = (productId: string, delta: number) => {
    const updated = cart
      .map((item) => {
        if (item.productId === productId) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      })
      .filter((item): item is CartItem => item !== null);
    saveCart(updated);
  };

  const removeItem = (productId: string) => {
    const updated = cart.filter((item) => item.productId !== productId);
    saveCart(updated);
  };

  const clearCart = () => {
    saveCart([]);
  };

  const cartSubtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const vatAmount = Math.round(cartSubtotal * 0.14 * 100) / 100;
  const cartTotal = Math.round((cartSubtotal + vatAmount) * 100) / 100;

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;
    if (!branchId) {
      setError("Please select a branch to place your order.");
      return;
    }
    if (!clientName.trim() || !clientPhone.trim()) {
      setError("Please enter your name and contact phone number.");
      return;
    }

    setLoading(true);
    setError(null);

    const res = await submitOnlineOrder(branchId, clientName, clientPhone, tableNo, cart);

    if (res.success && res.invoiceNo) {
      // Clear localStorage
      localStorage.removeItem("aarna_customer_cart");
      window.dispatchEvent(new Event("aarna_cart_update"));
      
      // Store in localStorage for status retrieval
      localStorage.setItem("aarna_last_order_no", res.invoiceNo);
      
      // Redirect to tracker
      router.push(`/order?id=${res.invoiceNo}`);
    } else {
      setError(res.error || "Failed to process order. Please try again.");
    }
    setLoading(false);
  };

  if (cart.length === 0) {
    return (
      <div className="text-center py-20 bg-zinc-900/20 border border-zinc-900 rounded-3xl text-zinc-500 space-y-4 max-w-lg mx-auto">
        <ShoppingBag className="w-12 h-12 mx-auto text-amber-500/40 animate-pulse" />
        <div>
          <h3 className="font-bold text-white text-base">Your Cart is Empty</h3>
          <p className="text-xs text-zinc-400 mt-1">Browse our rich culinary menu to add delicious Indian dishes.</p>
        </div>
        <button
          onClick={() => router.push("/menu")}
          className="mt-2 py-2.5 px-6 bg-amber-500 hover:bg-amber-600 text-black font-extrabold rounded-xl text-xs transition-all flex items-center justify-center gap-1.5 mx-auto cursor-pointer"
        >
          <span>Explore Menu</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 select-none">
      
      {/* Left: Cart Items Details (7 cols) */}
      <div className="lg:col-span-7 space-y-4">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Cart Items</h3>
            <button
              onClick={clearCart}
              className="text-xs text-zinc-500 hover:text-red-400 transition-colors"
            >
              Clear All
            </button>
          </div>

          <div className="divide-y divide-zinc-850 space-y-3 pt-1">
            {cart.map((item) => (
              <div key={item.productId} className="flex items-center justify-between py-3.5 first:pt-0">
                <div className="flex-grow min-w-0 pr-4">
                  <h4 className="font-extrabold text-white text-xs sm:text-sm truncate">{item.name}</h4>
                  <span className="text-[10px] text-amber-500 font-extrabold mt-0.5 block">
                    ₹{item.price} each
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center bg-zinc-950 border border-zinc-850 rounded-lg p-0.5">
                    <button
                      onClick={() => updateQuantity(item.productId, -1)}
                      className="p-1 text-zinc-400 hover:text-white rounded transition-colors"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-7 text-center text-xs font-extrabold text-white">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.productId, 1)}
                      className="p-1 text-zinc-400 hover:text-white rounded transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.productId)}
                    className="p-2 text-zinc-500 hover:text-red-450 hover:bg-red-500/5 rounded-lg transition-all"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Checkout details & form (5 cols) */}
      <div className="lg:col-span-5 space-y-5">
        <form onSubmit={handleCheckout} className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 space-y-5">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-zinc-800/80 pb-3">
            Place Order
          </h3>

          {error && (
            <div className="p-3 bg-red-950/40 border border-red-500/20 text-red-300 rounded-xl text-xs flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" />
              <span>{error}</span>
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1.5">Select Branch</label>
              <select
                required
                value={branchId}
                onChange={(e) => setBranchId(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-850 rounded-xl text-white text-xs focus:outline-none focus:border-amber-500/50"
              >
                <option value="">-- Choose Nearest Branch --</option>
                {branches.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1.5">Your Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Jane Doe"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-850 rounded-xl text-white placeholder-zinc-700 text-xs focus:outline-none focus:border-amber-500/50"
              />
            </div>

            <div>
              <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1.5">Phone Number</label>
              <input
                type="tel"
                required
                placeholder="e.g. +91 9999999999"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-850 rounded-xl text-white placeholder-zinc-700 text-xs focus:outline-none focus:border-amber-500/50"
              />
            </div>

            <div>
              <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1.5">Dining Table / Delivery Code</label>
              <input
                type="text"
                placeholder="e.g. Table 15 or Delivery"
                value={tableNo}
                onChange={(e) => setTableNo(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-850 rounded-xl text-white placeholder-zinc-700 text-xs focus:outline-none focus:border-amber-500/50"
              />
            </div>
          </div>

          <div className="border-t border-zinc-850 pt-4 space-y-2.5 text-xs text-zinc-400">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-semibold text-white">₹{cartSubtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>VAT (14%)</span>
              <span className="font-semibold text-white">₹{vatAmount}</span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-zinc-800 text-sm font-extrabold text-white">
              <span>Grand Total</span>
              <span className="text-base text-amber-500">₹{cartTotal}</span>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading || cart.length === 0}
            className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-extrabold rounded-xl text-xs transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            <CreditCard className="w-4 h-4" />
            <span>{loading ? "Processing Order..." : "Confirm & Place Order"}</span>
          </button>
        </form>
      </div>

    </div>
  );
}
