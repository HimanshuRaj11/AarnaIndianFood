import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import CategoryTable from "./_components/CategoryTable";
import CategoryModal from "./_components/CategoryModal";

export default async function CategoriesPage() {
  const admin = await getCurrentUser();
  if (!admin || admin.role !== "ADMIN") {
    return (
      <div className="p-8 max-w-4xl mx-auto mt-12 bg-zinc-900 border border-zinc-800 rounded-2xl">
        <h2 className="text-2xl font-bold text-red-500 mb-2">Access Denied</h2>
        <p className="text-zinc-400">
          Only authenticated System Administrators can manage menu categories.
        </p>
      </div>
    );
  }

  // Fetch categories from database
  const categories = await prisma.category.findMany({
    orderBy: { name: "asc" },
  });

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800/80 pb-6">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white">Menu Categories</h1>
          <p className="text-zinc-400 text-sm mt-1">
            Create, update, and manage categories for organizing your restaurant menu items.
          </p>
        </div>
        <CategoryModal />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold text-zinc-300">Active Categories</h3>
        <CategoryTable categories={JSON.parse(JSON.stringify(categories))} />
      </div>
    </div>
  );
}
