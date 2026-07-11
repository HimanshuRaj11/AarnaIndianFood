import React from "react";
import prisma from "@/lib/prisma";
import PublicMenu from "./_components/PublicMenu";

export const dynamic = "force-dynamic";

export default async function PublicMenuPage() {
  // Fetch active categories
  const categoriesDb = await prisma.category.findMany({
    where: { isActive: true },
    orderBy: { name: "asc" },
  });

  // Fetch available products
  const productsDb = await prisma.product.findMany({
    where: { isAvailable: true },
    orderBy: [{ category: "asc" }, { name: "asc" }],
  });

  const categories = categoriesDb.map((c) => c.name);
  const products = productsDb.map((p) => ({
    id: p.id,
    name: p.name,
    code: p.code,
    price: p.price,
    description: p.description || "Freshly cooked to order with home-ground ingredients and classic recipe spices.",
    category: p.category,
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-12">
      <div className="text-center space-y-3">
        <span className="text-[10px] text-amber-500 font-extrabold uppercase tracking-widest block">Culinary Selection</span>
        <h1 className="text-4xl font-black text-white">Our Food Menu</h1>
        <p className="text-zinc-400 text-sm max-w-md mx-auto">
          Explore our wide selection of authentic appetizers, curries, tandoori items and desserts.
        </p>
      </div>

      <PublicMenu initialProducts={products} categories={categories} />
    </div>
  );
}
