"use client";

import React from "react";
import { X, Trash2, CheckCircle } from "lucide-react";

interface HeldOrder {
  id: string;
  dbId?: string;
  cart: any[];
  clientName: string;
  clientPhone: string;
  branchId: string;
  tableNo: string;
  kotNotes?: string;
  discountType: "PERCENT" | "FLAT" | "NONE" | "EXEMPTED";
  discountValue: number;
  paymentMode: "CASH" | "CARD" | "UPI" | "NET_BANKING" | "CHEQUE";
  createdAt: string;
}

interface HeldOrdersSelectionModalProps {
  showHeldModal: boolean;
  setShowHeldModal: (val: boolean) => void;
  heldOrders: HeldOrder[];
  resumeHeldOrder: (order: HeldOrder) => void;
  deleteHeldOrder: (id: string, dbId?: string) => void;
}

export default function HeldOrdersSelectionModal({
  showHeldModal,
  setShowHeldModal,
  heldOrders,
  resumeHeldOrder,
  deleteHeldOrder
}: HeldOrdersSelectionModalProps) {
  if (!showHeldModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-950/20">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">Held Invoices Registry</h3>
          </div>
          <button
            onClick={() => setShowHeldModal(false)}
            className="text-zinc-450 hover:text-white p-1 rounded-lg hover:bg-zinc-800 transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[400px] overflow-y-auto space-y-3 scrollbar-thin">
          {heldOrders.length === 0 ? (
            <div className="text-center py-12 text-zinc-500 text-xs">
              No orders are currently on hold.
            </div>
          ) : (
            heldOrders.map((order) => (
              <div 
                key={order.id}
                onClick={() => resumeHeldOrder(order)}
                className="p-4 bg-zinc-950/50 hover:bg-zinc-950/90 border border-zinc-850 hover:border-amber-500/50 rounded-xl flex items-center justify-between gap-4 cursor-pointer transition-all group"
              >
                <div className="space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-amber-500 group-hover:text-amber-400">{order.id}</span>
                    <span className="text-[9px] text-zinc-500">at {order.createdAt}</span>
                  </div>
                  <div className="text-zinc-300 font-medium">
                    {order.clientName ? `${order.clientName} (${order.clientPhone || "No Phone"})` : "Walk-in Customer"}
                  </div>
                  <div className="text-[10px] text-zinc-500">
                    Table: <span className="text-zinc-300 font-bold">{order.tableNo || "None"}</span> • Items: <span className="text-amber-500 font-bold">{order.cart.reduce((s, i) => s + i.quantity, 0)}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      resumeHeldOrder(order);
                    }}
                    className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-black font-extrabold text-[10px] uppercase tracking-wider rounded-lg transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Load</span>
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteHeldOrder(order.id, order.dbId);
                    }}
                    className="p-2 bg-zinc-900 hover:bg-red-950/30 text-zinc-500 hover:text-red-400 border border-zinc-800 rounded-lg transition-all cursor-pointer"
                    title="Delete Held Session"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
