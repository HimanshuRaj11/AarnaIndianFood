import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import CompanySettingsForm from "./_components/CompanySettingsForm";

export default async function CompanyPage() {
  const admin = await getCurrentUser();
  if (!admin || admin.role !== "ADMIN") {
    return (
      <div className="p-8 max-w-4xl mx-auto mt-12 bg-zinc-900 border border-zinc-800 rounded-2xl">
        <h2 className="text-2xl font-bold text-red-500 mb-2">Access Denied</h2>
        <p className="text-zinc-400">
          Only authenticated System Administrators can update corporate or company accounts.
        </p>
      </div>
    );
  }

  // Fetch company info
  const company = await prisma.company.findFirst();

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-4xl mx-auto">
      <div className="border-b border-zinc-800/80 pb-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-white">Company Configuration</h1>
        <p className="text-zinc-400 text-sm mt-1">
          Manage corporate billing rules, address defaults, logos, and currency symbols across all branches.
        </p>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
        <CompanySettingsForm company={company ? JSON.parse(JSON.stringify(company)) : null} />
      </div>
    </div>
  );
}
