import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import BranchTable from "./_components/BranchTable";
import BranchModal from "./_components/BranchModal";

export default async function BranchesPage() {
  const admin = await getCurrentUser();
  if (!admin || admin.role !== "ADMIN") {
    return (
      <div className="p-8 max-w-4xl mx-auto mt-12 bg-zinc-900 border border-zinc-800 rounded-2xl">
        <h2 className="text-2xl font-bold text-red-500 mb-2">Access Denied</h2>
        <p className="text-zinc-400">
          Only authenticated System Administrators can manage branches.
        </p>
      </div>
    );
  }

  // Fetch branches
  const branches = await prisma.branch.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800/80 pb-6">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white">Branch Management</h1>
          <p className="text-zinc-400 text-sm mt-1">
            Configure restaurant outlets, thermal printer names, and invoice sequences.
          </p>
        </div>
        <BranchModal />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold text-zinc-300">Active Branches</h3>
        <BranchTable branches={JSON.parse(JSON.stringify(branches))} />
      </div>
    </div>
  );
}
