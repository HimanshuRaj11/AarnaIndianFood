import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import RegisterStaffModal from "./_components/RegisterStaffModal";
import StaffTable from "./_components/StaffTable";

export default async function StaffPage() {
  const admin = await getCurrentUser();

  if (!admin || admin.role !== "ADMIN") {
    return (
      <div className="p-8 max-w-4xl mx-auto mt-12 bg-zinc-900 border border-zinc-800 rounded-2xl">
        <h2 className="text-2xl font-bold text-red-500 mb-2">Access Denied</h2>
        <p className="text-zinc-400">
          Only authenticated System Administrators can provision, list, or delete staff members. 
          Please contact your primary administrator.
        </p>
      </div>
    );
  }

  // Fetch users and branches using Prisma
  const dbUsers = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
  });
  const dbBranches = await prisma.branch.findMany();

  const branchesMap = new Map(dbBranches.map((b) => [b.id, b.name]));

  const staffList = dbUsers.map((u) => ({
    id: u.id,
    name: u.name,
    email: u.email,
    role: u.role,
    branchName: branchesMap.get(u.branchId || "") || "Global/Unassigned",
  }));

  const branches = dbBranches.map((b) => ({
    id: b.id,
    name: b.name,
  }));

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800/80 pb-6">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white">Staff Management</h1>
          <p className="text-zinc-400 text-sm mt-1">
            Provision roles and assign access rules for managers and cashier staff across branches.
          </p>
        </div>
        <RegisterStaffModal branches={branches} />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold text-zinc-300">Active Directory</h3>
        <StaffTable staffList={staffList} currentUserId={admin.userId} />
      </div>
    </div>
  );
}
