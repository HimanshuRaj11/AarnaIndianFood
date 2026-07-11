import React from "react";
import prisma from "@/lib/prisma";
import { MapPin, Phone, Mail, Clock, ShieldCheck } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function PublicBranchesPage() {
  const branches = await prisma.branch.findMany({
    where: { active: true },
    orderBy: { name: "asc" },
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-12 select-none">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="text-[10px] text-amber-500 font-extrabold uppercase tracking-widest block">Our Footprint</span>
        <h1 className="text-4xl font-black text-white">Our Restaurant Locations</h1>
        <p className="text-zinc-400 text-sm max-w-md mx-auto">
          Visit our locations or order directly online for fast, piping-hot home delivery.
        </p>
      </div>

      {/* Grid of Branches */}
      {branches.length === 0 ? (
        <div className="text-center py-20 bg-zinc-900/20 border border-zinc-900 rounded-3xl text-zinc-500">
          <MapPin className="w-12 h-12 mx-auto opacity-30 mb-4 text-amber-500 animate-pulse" />
          <p className="text-sm font-semibold">Our operational branch list is currently being updated.</p>
          <p className="text-xs text-zinc-600 mt-1">Please call our main support line for direct phone reservations.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((branch) => (
            <div
              key={branch.id}
              className="bg-zinc-900/40 border border-zinc-800 hover:border-amber-500/20 rounded-2xl p-6 flex flex-col justify-between group hover:bg-zinc-900/60 transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 bg-amber-500/10 text-amber-500 rounded-lg border border-amber-500/20">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {branch.name}
                  </h3>
                </div>
                
                <p className="text-zinc-300 text-xs leading-relaxed mb-6 font-medium">
                  {branch.street}, {branch.city}, {branch.state}, {branch.country} - {branch.zipCode}
                </p>

                <div className="space-y-3.5 border-t border-zinc-800/60 pt-5 text-xs text-zinc-400">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-zinc-500" />
                    <span>{branch.phone || "N/A"}</span>
                  </div>
                  {branch.email && (
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-zinc-500" />
                      <span className="truncate">{branch.email}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-zinc-500" />
                    <span>Open Daily: 11:00 AM - 11:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-850 flex items-center justify-between">
                <span className="text-[10px] text-emerald-400 font-extrabold uppercase tracking-wide flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Dine-In & Online Orders</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
