import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import DocumentManager from "./_components/DocumentManager";

export default async function DocumentPage() {
  const user = await getCurrentUser();

  if (!user || (user.role !== "ADMIN" && user.role !== "MANAGER" && user.role !== "OWNER")) {
    return (
      <div className="p-8 max-w-4xl mx-auto mt-12 bg-zinc-900 border border-zinc-800 rounded-2xl animate-in fade-in duration-200">
        <h2 className="text-2xl font-bold text-red-500 mb-2">Access Denied</h2>
        <p className="text-zinc-400">
          Only authenticated Administrators, Owners, or Managers can access document templates and generate employee letters or payslips.
        </p>
      </div>
    );
  }

  // Fetch company details to pre-populate document metadata
  const company = await prisma.company.findFirst();

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto">
      <div className="border-b border-zinc-800/80 pb-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-white bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
          Document Workspace
        </h1>
        <p className="text-zinc-400 text-sm mt-1">
          Draft and generate professional PDF payslips or offer letters for team members.
        </p>
      </div>

      <DocumentManager company={company ? JSON.parse(JSON.stringify(company)) : null} />
    </div>
  );
}
