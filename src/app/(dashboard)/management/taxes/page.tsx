import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import TaxTable from "./_components/TaxTable";
import TaxModal from "./_components/TaxModal";

export default async function TaxesPage() {
  const admin = await getCurrentUser();
  if (!admin || admin.role !== "ADMIN") {
    return (
      <div className="p-8 max-w-4xl mx-auto mt-12 bg-zinc-900 border border-zinc-800 rounded-2xl">
        <h2 className="text-2xl font-bold text-red-500 mb-2">Access Denied</h2>
        <p className="text-zinc-400">
          Only authenticated System Administrators can manage tax rates.
        </p>
      </div>
    );
  }

  // Fetch taxes from database
  const taxes = await prisma.tax.findMany({
    orderBy: { taxName: "asc" },
  });

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800/80 pb-6">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white">Tax Configurations</h1>
          <p className="text-zinc-400 text-sm mt-1">
            Setup VAT, GST, or other sales taxes to be computed during POS checkouts.
          </p>
        </div>
        <TaxModal />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold text-zinc-300">Active Tax Schemes</h3>
        <TaxTable taxes={JSON.parse(JSON.stringify(taxes))} />
      </div>
    </div>
  );
}
