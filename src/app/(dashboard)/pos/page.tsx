import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import POSWorkspace from "./_components/POSWorkspace";
import { redirect } from "next/navigation";

export default async function POSPage() {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/login");
  }

  // Fetch all active branches
  const dbBranches = await prisma.branch.findMany({
    where: { active: true },
    orderBy: { name: "asc" }
  });
  const branches = dbBranches.map((b) => ({ id: b.id, name: b.name }));

  // Fetch all products available for this branch or global products (where branchId is null)
  const dbProducts = await prisma.product.findMany({
    where: user.role === "ADMIN" ? {} : {
      OR: [
        { branchId: user.branchId },
        { branchId: null }
      ]
    },
    orderBy: [
      { category: "asc" },
      { name: "asc" }
    ]
  });

  // Format products for POS component
  const products = dbProducts.map((p) => ({
    id: p.id,
    name: p.name,
    code: p.code,
    price: p.price,
    category: p.category,
    isAvailable: p.isAvailable,
    branchName: p.branchId ? branches.find((b) => b.id === p.branchId)?.name || "Unknown Branch" : "All Branches (Global)",
  }));

  // Fetch active categories from DB dynamically instead of using hardcoded ones
  const dbCategories = await prisma.category.findMany({
    where: { isActive: true },
    orderBy: { name: "asc" }
  });
  
  // Extract categories dynamically
  const categories = dbCategories.map((c) => c.name);

  const userBranch = branches.find((b) => b.id === user.branchId);
  const branchName = userBranch ? userBranch.name : "Aarna Indian Foods";

  // Fetch recent invoices (last 5)
  const dbRecentInvoices = await prisma.invoice.findMany({
    where: user.role === "ADMIN" ? { delete: false } : {
      branchId: user.branchId || undefined,
      delete: false
    },
    orderBy: { createdAt: "desc" },
    take: 5
  });
  
  const recentInvoices = dbRecentInvoices.map((inv) => ({
    id: inv.id,
    invoiceNo: inv.invoiceId,
    total: inv.total,
    createdAt: inv.createdAt.toISOString()
  }));

  // Fetch active KOTs (last 5 pending/preparing)
  const dbActiveKots = await prisma.kOT.findMany({
    where: user.role === "ADMIN" ? {
      status: { in: ["PENDING", "PREPARING"] }
    } : {
      branchId: user.branchId || undefined,
      status: { in: ["PENDING", "PREPARING"] }
    },
    orderBy: { createdAt: "desc" },
    take: 5
  });

  const activeKots = dbActiveKots.map((kot) => ({
    id: kot.id,
    kotNo: kot.kotNo,
    tableNo: kot.tableNo,
    status: kot.status as "PENDING" | "PREPARING" | "SERVED" | "CANCELLED",
    createdAt: kot.createdAt.toISOString()
  }));

  // Fetch company details
  let dbCompany = await prisma.company.findFirst();
  if (!dbCompany) {
    dbCompany = await prisma.company.create({
      data: {
        name: "Aarna Indian Foods",
        street: "Main St",
        city: "Georgetown",
        state: "Demerara",
        country: "Guyana",
        zipCode: "00000",
        phone: "+592-000-000",
        currencyName: "Guyanese Dollar",
        currencyCode: "GYD",
        currencySymbol: "$"
      }
    });
  }

  const initialCompany = {
    id: dbCompany.id,
    name: dbCompany.name,
    currencyCode: dbCompany.currencyCode,
    currencySymbol: dbCompany.currencySymbol
  };

  return (
    <POSWorkspace
      products={products}
      categories={categories}
      branches={branches}
      initialBranchId={user.branchId || ""}
      branchName={branchName}
      cashierName={user.name}
      role={user.role}
      recentInvoices={recentInvoices}
      activeKots={activeKots}
      initialCompany={initialCompany}
    />
  );
}
