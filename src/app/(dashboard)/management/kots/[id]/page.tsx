import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import Link from "next/link";
import { ChefHat, ArrowLeft, Calendar, User, CreditCard, Clock, ClipboardList, Utensils } from "lucide-react";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function KOTDetailPage({ params }: PageProps) {
  const { id } = await params;
  const user = await getCurrentUser();
  if (!user) {
    return (
      <div className="p-8 max-w-4xl mx-auto mt-12 bg-zinc-900 border border-zinc-800 rounded-2xl">
        <h2 className="text-2xl font-bold text-red-500 mb-2">Access Denied</h2>
        <p className="text-zinc-400">Please authenticate to view kitchen order tickets.</p>
      </div>
    );
  }

  // Fetch invoice details and associated KOTs
  const invoice = await prisma.invoice.findUnique({
    where: { id },
    include: {
      items: true,
      billedBy: {
        select: { name: true }
      },
      kots: {
        orderBy: { createdAt: "asc" },
        include: {
          items: true
        }
      }
    }
  });

  if (!invoice || invoice.delete) {
    notFound();
  }

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-[1100px] mx-auto select-none">
      
      {/* Back Header */}
      <div className="flex items-center gap-4">
        <Link
          href="/management/kots"
          className="p-2 border border-zinc-800 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-xl transition-all cursor-pointer inline-flex items-center"
        >
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div>
          <span className="text-[10px] text-amber-500 font-bold uppercase tracking-widest">KOT Tracking Details</span>
          <h1 className="text-2xl font-extrabold tracking-tight text-white flex items-center gap-2">
            Invoice: <span className="font-mono text-zinc-300">{invoice.invoiceId}</span>
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* LEFT COLUMN: INVOICE PARTICULARS (5 cols) */}
        <div className="lg:col-span-5 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-amber-500 border-b border-zinc-800 pb-2">
            Invoice Particulars
          </h3>

          <div className="space-y-4">
            {/* Meta Items */}
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="space-y-1">
                <span className="text-zinc-500 block">Original Tracker ID</span>
                <span className="font-mono text-zinc-300">{invoice.invoiceIdTrack}</span>
              </div>
              <div className="space-y-1">
                <span className="text-zinc-500 block">Payment Mode</span>
                <span className="px-2 py-0.5 bg-zinc-800 text-zinc-300 border border-zinc-700 rounded font-semibold inline-block">
                  {invoice.paymentMode}
                </span>
              </div>
            </div>

            <div className="border-t border-zinc-800/60 pt-4 space-y-3">
              <div className="flex items-center gap-2.5 text-xs text-zinc-400">
                <Calendar className="w-4 h-4 text-zinc-500 shrink-0" />
                <span>Date: {new Date(invoice.createdAt).toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-zinc-400">
                <User className="w-4 h-4 text-zinc-500 shrink-0" />
                <span>Cashier: {invoice.billedBy?.name || "Unknown"}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-zinc-400">
                <Utensils className="w-4 h-4 text-zinc-500 shrink-0" />
                <span>Client Name: {invoice.clientName || "Walk-in Customer"}</span>
              </div>
              {invoice.clientPhone && (
                <div className="flex items-center gap-2.5 text-xs text-zinc-400 pl-6.5">
                  <span>Phone: {invoice.clientPhone}</span>
                </div>
              )}
            </div>

            {/* Item Breakdown */}
            <div className="border-t border-zinc-800/60 pt-4 space-y-3">
              <span className="text-xs font-bold text-zinc-400 block uppercase tracking-wider">Checkout Items</span>
              <div className="space-y-2.5">
                {invoice.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center text-xs bg-zinc-950/40 p-2.5 border border-zinc-950 rounded-xl">
                    <div>
                      <span className="font-bold text-white block">{item.name}</span>
                      <span className="text-zinc-500 text-[10px]">{item.quantity} x ₹{item.price}</span>
                    </div>
                    <span className="font-bold text-zinc-300">₹{item.total}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Financial Summary */}
            <div className="border-t border-zinc-800 pt-4 space-y-2 text-xs">
              <div className="flex justify-between text-zinc-400">
                <span>Subtotal</span>
                <span>₹{invoice.subtotal}</span>
              </div>
              {invoice.discount > 0 && (
                <div className="flex justify-between text-zinc-400">
                  <span>Discount</span>
                  <span>-₹{invoice.discount}</span>
                </div>
              )}
              <div className="flex justify-between text-zinc-400">
                <span>GST Tax</span>
                <span>₹{invoice.taxAmount}</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-zinc-800 text-sm font-extrabold">
                <span className="text-white uppercase tracking-wider">Total Billed</span>
                <span className="text-amber-500 text-base font-black">₹{invoice.total}</span>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: KOT TICKETS CHRONOLOGY (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="flex justify-between items-center border-b border-zinc-800/80 pb-4">
            <h3 className="text-lg font-bold text-zinc-200 flex items-center gap-2">
              <ChefHat className="w-5 h-5 text-amber-500" />
              <span>Kitchen Chronology Logs</span>
            </h3>
            <span className="px-2.5 py-0.5 bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-full text-xs font-bold">
              {invoice.kots.length} Ticket(s)
            </span>
          </div>

          <div className="space-y-6">
            {invoice.kots.map((kot, index) => (
              <div key={kot.id} className="bg-zinc-900/60 border border-zinc-800 rounded-2xl overflow-hidden shadow-lg relative group">
                
                {/* KOT Header */}
                <div className="px-6 py-4 bg-zinc-950/40 border-b border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <span className="font-black text-white text-base">{kot.kotNo}</span>
                      <span className="px-2 py-0.5 bg-amber-500/10 text-amber-500 border border-amber-500/20 text-[10px] rounded font-extrabold uppercase font-mono">
                        {kot.tableNo}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-zinc-500">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{new Date(kot.createdAt).toLocaleString()}</span>
                    </div>
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black tracking-wider uppercase border bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-sm">
                      {kot.status}
                    </span>
                  </div>
                </div>

                {/* KOT Items */}
                <div className="p-6 space-y-4">
                  <div className="divide-y divide-zinc-800/40">
                    {kot.items.map((kItem) => (
                      <div key={kItem.id} className="flex justify-between items-center py-2.5 text-xs">
                        <div className="flex items-center gap-2.5">
                          <span className="w-6 h-6 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center font-bold text-amber-500">
                            {kItem.quantity}
                          </span>
                          <span className="font-bold text-white">{kItem.name}</span>
                        </div>
                        {kItem.notes && (
                          <span className="px-2 py-0.5 bg-red-950/20 border border-red-500/10 text-[9px] rounded font-semibold text-red-300 max-w-[200px] truncate">
                            {kItem.notes}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* KOT Notes footer */}
                  {kot.status === "PENDING" && (
                    <div className="p-3 bg-amber-950/20 border border-amber-500/10 rounded-xl text-amber-200 text-xs">
                      Note: Waiting on kitchen confirmation.
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
}
