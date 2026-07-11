import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import DashboardStats from "./_components/DashboardStats";
import { redirect } from "next/navigation";

export default async function OverviewPage() {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/login");
  }

  const branchId = user.branchId;
  if (!branchId) {
    return (
      <div className="p-8 max-w-4xl mx-auto mt-12 bg-zinc-900 border border-zinc-800 rounded-2xl">
        <h2 className="text-2xl font-bold text-red-500 mb-2">Branch Context Required</h2>
        <p className="text-zinc-400">
          Your user profile does not hold an active branch association. 
          Please contact your System Administrator to assign your profile to an operating branch.
        </p>
      </div>
    );
  }

  // Fetch branch details
  const branch = await prisma.branch.findUnique({
    where: { id: branchId }
  });
  const branchName = branch ? branch.name : "Aarna India Foods";

  // Calculate gross sales metrics using Prisma aggregate
  const invoiceStats = await prisma.invoice.aggregate({
    where: { branchId, delete: false },
    _sum: { total: true },
    _count: { id: true },
    _avg: { total: true }
  });

  const stats = {
    totalRevenue: invoiceStats._sum.total || 0,
    totalOrders: invoiceStats._count.id || 0,
    avgOrderValue: invoiceStats._avg.total || 0,
    activeKOTs: 0
  };

  // Fetch count of active KOTs (pending or preparing)
  stats.activeKOTs = await prisma.kOT.count({
    where: {
      branchId,
      status: { in: ["PENDING", "PREPARING"] }
    }
  });

  // Category breakdown aggregation
  const invoiceItems = await prisma.invoiceItem.findMany({
    where: {
      invoice: {
        branchId,
        delete: false
      }
    },
    select: {
      productId: true,
      quantity: true
    }
  });

  // Load products to map categories
  const products = await prisma.product.findMany({
    select: {
      id: true,
      category: true
    }
  });
  const productCategoryMap = new Map(products.map((p) => [p.id, p.category]));

  const categoryQtyMap = new Map<string, number>();
  for (const item of invoiceItems) {
    const category = (item.productId && productCategoryMap.get(item.productId)) || "Uncategorized";
    categoryQtyMap.set(category, (categoryQtyMap.get(category) || 0) + item.quantity);
  }

  const categoryAggregation = Array.from(categoryQtyMap.entries())
    .map(([category, value]) => ({ category, value }))
    .sort((a, b) => b.value - a.value);

  // Fetch 5 recent invoices
  const recentDbInvoices = await prisma.invoice.findMany({
    where: { branchId, delete: false },
    orderBy: { createdAt: "desc" },
    take: 5,
    include: {
      items: true
    }
  });

  const recentInvoices = recentDbInvoices.map((inv: any) => ({
    id: inv.id,
    invoiceNo: inv.invoiceId,
    total: inv.total,
    paymentMode: inv.paymentMode,
    itemsCount: inv.items.reduce((sum: number, item: any) => sum + item.quantity, 0),
    createdAt: inv.createdAt.toISOString()
  }));

  // Fetch active KOTs list
  const activeDbKOTs = await prisma.kOT.findMany({
    where: {
      branchId,
      status: { in: ["PENDING", "PREPARING"] }
    },
    orderBy: { createdAt: "asc" },
    take: 5,
    include: {
      items: true
    }
  });

  const activeKOTsList = activeDbKOTs.map((kot: any) => ({
    id: kot.id,
    kotNo: kot.kotNo,
    tableNo: kot.tableNo,
    itemsCount: kot.items.reduce((sum: number, item: any) => sum + item.quantity, 0),
    status: kot.status,
    createdAt: kot.createdAt.toISOString()
  }));

  return (
    <DashboardStats
      stats={stats}
      recentInvoices={recentInvoices}
      activeKOTsList={activeKOTsList}
      categorySales={categoryAggregation}
      branchName={branchName}
    />
  );
}
