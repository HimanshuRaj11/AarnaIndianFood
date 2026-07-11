import React from "react";
import prisma from "@/lib/prisma";
import { Search, ChefHat, CheckCircle2, Clock, Ban, ArrowRight, UtensilsCrossed } from "lucide-react";
import Link from "next/link";

interface PageProps {
  searchParams: Promise<{ id?: string }>;
}

export default async function PublicOrderPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const orderNo = params.id ? params.id.trim() : "";

  let orderData = null;
  let errorMsg = "";

  if (orderNo) {
    try {
      const invoice = await prisma.invoice.findFirst({
        where: {
          invoiceId: {
            equals: orderNo,
            mode: "insensitive"
          },
          delete: false
        },
        include: {
          items: true,
          kots: {
            orderBy: { createdAt: "desc" }
          }
        }
      });

      if (invoice) {
        // Get the status from the latest associated KOT
        const latestKOT = invoice.kots[0];
        const status = latestKOT ? latestKOT.status : "PENDING";
        
        orderData = {
          invoiceNo: invoice.invoiceId,
          clientName: invoice.clientName || "Valued Customer",
          total: invoice.total,
          createdAt: invoice.createdAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          date: invoice.createdAt.toLocaleDateString(),
          status: status, // "PENDING" | "PREPARING" | "SERVED" | "CANCELLED"
          items: invoice.items.map(item => ({
            name: item.name,
            quantity: item.quantity
          }))
        };
      } else {
        errorMsg = "Order invoice number not found. Please verify the code and try again.";
      }
    } catch (err) {
      console.error(err);
      errorMsg = "An error occurred while looking up your order.";
    }
  }

  // Helper values for status steps
  const getStepActive = (currentStatus: string, step: number) => {
    if (currentStatus === "CANCELLED") return false;
    if (step === 1) return true; // Always confirmed
    if (step === 2) return currentStatus === "PREPARING" || currentStatus === "SERVED";
    if (step === 3) return currentStatus === "SERVED";
    return false;
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-10 select-none">
      
      {/* Title */}
      <div className="text-center space-y-3">
        <span className="text-[10px] text-amber-500 font-extrabold uppercase tracking-widest block">Live Status</span>
        <h1 className="text-4xl font-black text-white">Order Tracking</h1>
        <p className="text-zinc-400 text-sm max-w-md mx-auto">
          Monitor your kitchen preparation status in real-time.
        </p>
      </div>

      {/* Lookup Bar */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl">
        <form method="GET" action="/order" className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-grow">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-500 pointer-events-none">
              <Search className="w-4.5 h-4.5" />
            </span>
            <input
              type="text"
              name="id"
              defaultValue={orderNo}
              placeholder="Enter your Invoice ID (e.g. DELI-ONL-1001)..."
              className="w-full pl-10 pr-4 py-3 bg-zinc-950 border border-zinc-850 rounded-xl text-white placeholder-zinc-700 text-xs focus:outline-none focus:border-amber-500/50"
            />
          </div>
          <button
            type="submit"
            className="py-3 px-6 bg-amber-500 hover:bg-amber-600 text-black font-extrabold rounded-xl text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>Track Order</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
        {errorMsg && (
          <p className="text-xs text-red-400 font-semibold mt-3.5 flex items-center gap-1.5">
            <Ban className="w-4 h-4 shrink-0" /> {errorMsg}
          </p>
        )}
      </div>

      {/* Tracker Details */}
      {orderData ? (
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-300">
          
          {/* Header Info */}
          <div className="p-6 bg-zinc-950/40 border-b border-zinc-850 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Invoice Number</span>
              <h3 className="font-extrabold text-white text-base font-mono mt-0.5">{orderData.invoiceNo}</h3>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Placed At</span>
              <p className="text-xs text-zinc-300 font-bold mt-0.5">{orderData.createdAt} on {orderData.date}</p>
            </div>
          </div>

          {/* Visual Progress Steps */}
          <div className="p-8 border-b border-zinc-850">
            {orderData.status === "CANCELLED" ? (
              <div className="p-4 bg-red-950/20 border border-red-500/20 text-red-300 rounded-2xl flex items-center gap-3 text-sm">
                <Ban className="w-6 h-6 text-red-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-white">Order Cancelled</h4>
                  <p className="text-xs text-red-400/90 mt-0.5">This order ticket was flagged as cancelled by the kitchen supervisor.</p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-3 relative">
                {/* Connector line */}
                <div className="absolute top-5 left-[16.6%] right-[16.6%] h-[2px] bg-zinc-800 z-0">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-500" 
                    style={{ 
                      width: orderData.status === "SERVED" ? "100%" : orderData.status === "PREPARING" ? "50%" : "0%" 
                    }}
                  />
                </div>

                {/* Step 1: Confirmed */}
                <div className="flex flex-col items-center text-center space-y-2 relative z-10">
                  <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                    getStepActive(orderData.status, 1)
                      ? "bg-amber-500/10 border-amber-500 text-amber-500 shadow-lg shadow-amber-500/10"
                      : "bg-zinc-950 border-zinc-850 text-zinc-650"
                  }`}>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-300">Order Confirmed</span>
                </div>

                {/* Step 2: Preparing */}
                <div className="flex flex-col items-center text-center space-y-2 relative z-10">
                  <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                    getStepActive(orderData.status, 2)
                      ? "bg-amber-500/10 border-amber-500 text-amber-500 shadow-lg shadow-amber-500/10"
                      : "bg-zinc-950 border-zinc-850 text-zinc-600"
                  }`}>
                    <ChefHat className={`w-5 h-5 ${orderData.status === "PREPARING" ? "animate-bounce" : ""}`} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-300">Kitchen Prep</span>
                </div>

                {/* Step 3: Served */}
                <div className="flex flex-col items-center text-center space-y-2 relative z-10">
                  <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                    getStepActive(orderData.status, 3)
                      ? "bg-emerald-500/10 border-emerald-500 text-emerald-400 shadow-lg shadow-emerald-500/10"
                      : "bg-zinc-950 border-zinc-850 text-zinc-600"
                  }`}>
                    <Clock className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-300">Ready / Served</span>
                </div>
              </div>
            )}
          </div>

          {/* Item Summaries */}
          <div className="p-6 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400">Order Items</h4>
            <div className="divide-y divide-zinc-850/60 text-xs">
              {orderData.items.map((item, idx) => (
                <div key={idx} className="flex justify-between py-2.5 first:pt-0 last:pb-0">
                  <span className="font-bold text-white uppercase">{item.name}</span>
                  <span className="font-mono text-zinc-450">x {item.quantity}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-zinc-850 pt-4 flex justify-between items-center text-xs">
              <span className="text-zinc-500 uppercase font-bold tracking-wider">Total Charge</span>
              <span className="text-sm font-black text-amber-500">₹{orderData.total}</span>
            </div>
          </div>

        </div>
      ) : (
        !orderNo && (
          <div className="text-center py-16 bg-zinc-900/15 border border-zinc-900 rounded-3xl text-zinc-500 space-y-3">
            <UtensilsCrossed className="w-10 h-10 mx-auto text-amber-500/30" />
            <p className="text-xs font-semibold">Enter your order ID to see live progress.</p>
            <p className="text-[10px] text-zinc-600">Your invoice ID is printed on your checkout bill.</p>
          </div>
        )
      )}

    </div>
  );
}
