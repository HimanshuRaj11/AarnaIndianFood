import React from "react";
import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import { BarChart3, TrendingUp, Sparkles, Award, ShoppingBag, DollarSign } from "lucide-react";

export const revalidate = 10; // Auto update statistics

export default async function DataSummaryPage() {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/login");
  }

  const company = await prisma.company.findFirst();
  const currencySymbol = company?.currencySymbol || "$";

  const whereClause: any = {
    invoice: {
      delete: false,
    },
  };

  if (user.role !== "ADMIN" && user.branchId) {
    whereClause.invoice.branchId = user.branchId;
  }

  // Fetch all completed, undeleted invoice items
  const invoiceItems = await prisma.invoiceItem.findMany({
    where: whereClause,
    select: {
      productId: true,
      name: true,
      price: true,
      quantity: true,
      total: true,
    },
  });

  // Get branch header context
  let branchHeaderName = "All Branches (Global)";
  if (user.role !== "ADMIN" && user.branchId) {
    const branch = await prisma.branch.findUnique({
      where: { id: user.branchId },
      select: { name: true }
    });
    branchHeaderName = branch ? branch.name : "Assigned Branch";
  }

  // Fetch product category mappings
  const dbProducts = await prisma.product.findMany({
    select: {
      id: true,
      category: true,
    },
  });
  const productCategoryMap = new Map(dbProducts.map((p) => [p.id, p.category]));

  // Compute metrics in memory
  const productSalesMap = new Map<string, { name: string; qty: number; revenue: number; price: number }>();
  const categorySalesMap = new Map<string, { category: string; qty: number; revenue: number }>();

  let grandTotalUnits = 0;
  let grandTotalRevenue = 0;

  for (const item of invoiceItems) {
    const key = item.productId || item.name;
    const existingP = productSalesMap.get(key) || { name: item.name, qty: 0, revenue: 0, price: item.price };
    existingP.qty += item.quantity;
    existingP.revenue += item.total;
    productSalesMap.set(key, existingP);

    const category = (item.productId && productCategoryMap.get(item.productId)) || "Uncategorized";
    const existingC = categorySalesMap.get(category) || { category, qty: 0, revenue: 0 };
    existingC.qty += item.quantity;
    existingC.revenue += item.total;
    categorySalesMap.set(category, existingC);

    grandTotalUnits += item.quantity;
    grandTotalRevenue += item.total;
  }

  const productSales = Array.from(productSalesMap.values()).sort((a, b) => b.qty - a.qty);
  const categorySales = Array.from(categorySalesMap.values()).sort((a, b) => b.revenue - a.revenue);

  // Stats summaries
  const bestSeller = productSales[0] || { name: "N/A", qty: 0 };
  const leadingCategory = categorySales[0] || { category: "N/A", revenue: 0 };
  
  const maxQty = bestSeller.qty || 1;
  const maxRevenue = Math.max(...productSales.map((p) => p.revenue), 1);

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-6xl mx-auto select-none">
      
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800/80 pb-6">
        <div>
          <div className="flex items-center gap-2 text-amber-500 font-semibold text-xs uppercase tracking-widest mb-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Product Statistics</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white">Data Summary & Sales Metrics</h1>
          <p className="text-zinc-400 text-sm mt-1">
            Detailed performance aggregates for <span className="text-amber-500 font-bold">{branchHeaderName}</span>.
          </p>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        {/* Total Quantities */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 relative overflow-hidden">
          <div className="flex items-center gap-3 text-zinc-400 text-xs font-bold uppercase tracking-wider">
            <div className="p-2 bg-amber-500/10 rounded-lg text-amber-500">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <span>Units Sold</span>
          </div>
          <div className="mt-4">
            <span className="text-2xl font-black text-white">{grandTotalUnits.toLocaleString()}</span>
            <span className="text-zinc-500 text-xs block mt-1.5">Total food items prepared</span>
          </div>
        </div>

        {/* Total Revenues */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 relative overflow-hidden">
          <div className="flex items-center gap-3 text-zinc-400 text-xs font-bold uppercase tracking-wider">
            <div className="p-2 bg-amber-500/10 rounded-lg text-amber-500">
              <DollarSign className="w-4 h-4" />
            </div>
            <span>Revenue</span>
          </div>
          <div className="mt-4">
            <span className="text-2xl font-black text-white">{currencySymbol}{grandTotalRevenue.toLocaleString()}</span>
            <span className="text-zinc-500 text-xs block mt-1.5">Accumulated sales volume</span>
          </div>
        </div>

        {/* Best Selling Item */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 relative overflow-hidden">
          <div className="flex items-center gap-3 text-zinc-400 text-xs font-bold uppercase tracking-wider">
            <div className="p-2 bg-amber-500/10 rounded-lg text-amber-500">
              <Award className="w-4 h-4" />
            </div>
            <span>Best Seller</span>
          </div>
          <div className="mt-4">
            <span className="text-sm font-extrabold text-white block truncate">{bestSeller.name}</span>
            <span className="text-zinc-500 text-xs block mt-1">({bestSeller.qty} units sold)</span>
          </div>
        </div>

        {/* Leading Category */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 relative overflow-hidden">
          <div className="flex items-center gap-3 text-zinc-400 text-xs font-bold uppercase tracking-wider">
            <div className="p-2 bg-amber-500/10 rounded-lg text-amber-500">
              <TrendingUp className="w-4 h-4" />
            </div>
            <span>Top Category</span>
          </div>
          <div className="mt-4">
            <span className="text-sm font-extrabold text-white block truncate">{leadingCategory.category}</span>
            <span className="text-zinc-500 text-xs block mt-1">({currencySymbol}{Math.round(leadingCategory.revenue).toLocaleString()} sales)</span>
          </div>
        </div>

      </div>

      {/* Main grids */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Left Side: Product Leaderboard */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-6">
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Item Sales Volume</h3>
            <p className="text-[10px] text-zinc-500 mt-0.5">Ranked by quantities sold.</p>
          </div>

          <div className="space-y-4 max-h-[400px] overflow-y-auto pr-1 scrollbar-thin">
            {productSales.length === 0 ? (
              <p className="text-center py-10 text-xs text-zinc-500">No products sales logged yet.</p>
            ) : (
              productSales.map((product, idx) => {
                const percentage = Math.round((product.qty / maxQty) * 100);
                return (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-zinc-200">{product.name}</span>
                      <span className="text-amber-500 font-extrabold">{product.qty} units</span>
                    </div>
                    <div className="w-full bg-zinc-950 rounded-full h-1.5 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-amber-500 to-orange-600 h-full rounded-full transition-all duration-300"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Right Side: Product Revenue & Category Breakdown */}
        <div className="space-y-6">
          
          {/* Item Revenue Card */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-6">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Revenue Breakdown</h3>
              <p className="text-[10px] text-zinc-500 mt-0.5">Gross revenue contributions per menu item.</p>
            </div>

            <div className="space-y-4 max-h-[220px] overflow-y-auto pr-1 scrollbar-thin">
              {productSales.length === 0 ? (
                <p className="text-center py-10 text-xs text-zinc-500">No revenue data logged yet.</p>
              ) : (
                productSales.map((product, idx) => {
                  const percentage = Math.round((product.revenue / maxRevenue) * 100);
                  return (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-zinc-200">{product.name}</span>
                        <span className="text-emerald-400 font-extrabold">{currencySymbol}{product.revenue.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-zinc-950 rounded-full h-1.5 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-emerald-500 to-teal-600 h-full rounded-full transition-all duration-300"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Category Breakdown Table */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
            <div className="px-6 py-4 bg-zinc-950/20 border-b border-zinc-800/80 flex items-center justify-between">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-amber-500" />
                <span>Category Performance</span>
              </h3>
            </div>
            <div className="overflow-x-auto text-xs text-zinc-300">
              <table className="w-full text-left">
                <thead className="bg-zinc-950/40 text-[9px] font-bold uppercase text-zinc-500 border-b border-zinc-800">
                  <tr>
                    <th className="px-6 py-3">Category</th>
                    <th className="px-6 py-3">Units Sold</th>
                    <th className="px-6 py-3 text-right">Gross Revenue</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-850/60">
                  {categorySales.length === 0 ? (
                    <tr>
                      <td colSpan={3} className="px-6 py-6 text-center text-zinc-500">No categories stats.</td>
                    </tr>
                  ) : (
                    categorySales.map((cat, idx) => (
                      <tr key={idx} className="hover:bg-zinc-800/10 transition-colors">
                        <td className="px-6 py-3 font-semibold text-white">{cat.category}</td>
                        <td className="px-6 py-3 text-zinc-400">{cat.qty} units</td>
                        <td className="px-6 py-3 text-right font-extrabold text-amber-500">{currencySymbol}{cat.revenue.toLocaleString()}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
