import React from "react";
import prisma from "@/lib/prisma";
import CartWorkspace from "./_components/CartWorkspace";

export const revalidate = 0; // Disable cache for cart operations

export default async function PublicCartPage() {
  // Fetch active branches for order routing selection
  const branchesDb = await prisma.branch.findMany({
    where: { active: true },
    orderBy: { name: "asc" },
  });

  const branches = branchesDb.map((b) => ({
    id: b.id,
    name: b.name,
  }));

  const company = await prisma.company.findFirst();
  const currencySymbol = company?.currencySymbol || "$";

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-12">
      <div className="text-center space-y-3">
        <span className="text-[10px] text-amber-500 font-extrabold uppercase tracking-widest block">Checkout Summary</span>
        <h1 className="text-4xl font-black text-white">Your Shopping Cart</h1>
        <p className="text-zinc-400 text-sm max-w-md mx-auto">
          Review your items, select your closest branch, and place your order.
        </p>
      </div>

      <CartWorkspace branches={branches} currencySymbol={currencySymbol} />
    </div>
  );
}
