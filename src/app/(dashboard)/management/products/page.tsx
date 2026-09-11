import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import ProductTable from "./_components/ProductTable";
import ProductModal from "./_components/ProductModal";

export default async function ProductsPage() {
  const admin = await getCurrentUser();
  if (!admin || admin.role !== "ADMIN") {
    return (
      <div className="p-8 max-w-4xl mx-auto mt-12 bg-zinc-900 border border-zinc-800 rounded-2xl">
        <h2 className="text-2xl font-bold text-red-500 mb-2">Access Denied</h2>
        <p className="text-zinc-400">
          Only authenticated System Administrators can manage products.
        </p>
      </div>
    );
  }

  // Fetch products, categories and branches
  const products = await prisma.product.findMany({
    orderBy: [
      { category: "asc" },
      { name: "asc" }
    ],
  });

  const categories = await prisma.category.findMany({
    where: { isActive: true },
    orderBy: { name: "asc" },
  });

  const branches = await prisma.branch.findMany({
    where: { active: true },
    orderBy: { name: "asc" },
  });

  const branchesMap = new Map(branches.map((b) => [b.id, b.name]));

  const productsList = products.map((p) => ({
    id: p.id,
    name: p.name,
    code: p.code,
    price: p.price,
    category: p.category,
    isAvailable: p.isAvailable,
    branchId: p.branchId,
    branchName: p.branchId ? branchesMap.get(p.branchId) || "Unknown Branch" : "All Branches (Global)",
  }));

  const categoryList = categories.map((c) => c.name);
  const branchList = branches.map((b) => ({ id: b.id, name: b.name }));

  const company = await prisma.company.findFirst();
  const currencySymbol = company?.currencySymbol || "$";

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800/80 pb-6">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white">Menu Item Directory</h1>
          <p className="text-zinc-400 text-sm mt-1">
            CRUD menu cards, assign unique short-codes, categories, and branch operational mappings.
          </p>
        </div>
        <ProductModal categories={categoryList} branches={branchList} currencySymbol={currencySymbol} />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold text-zinc-300">Catalog Registry</h3>
        <ProductTable 
          products={productsList} 
          categories={categoryList} 
          branches={branchList} 
          currencySymbol={currencySymbol}
        />
      </div>
    </div>
  );
}
