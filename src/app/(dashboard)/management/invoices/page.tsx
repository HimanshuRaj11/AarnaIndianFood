import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import InvoiceList from "./_components/InvoiceList";

export default async function InvoicesPage() {
  const admin = await getCurrentUser();
  if (!admin || admin.role !== "ADMIN") {
    return (
      <div className="p-8 max-w-4xl mx-auto mt-12 bg-zinc-900 border border-zinc-800 rounded-2xl">
        <h2 className="text-2xl font-bold text-red-500 mb-2">Access Denied</h2>
        <p className="text-zinc-400">
          Only authenticated System Administrators can delete or re-sequence invoice details.
        </p>
      </div>
    );
  }

  // Fetch active branches for the filter selection
  const branches = await prisma.branch.findMany({
    where: { active: true },
    orderBy: { name: "asc" }
  });

  // Fetch invoices for the first branch initially (or all if needed)
  const initialBranchId = branches[0]?.id || "";
  
  let initialInvoices: any[] = [];
  if (initialBranchId) {
    initialInvoices = await prisma.invoice.findMany({
      where: { branchId: initialBranchId, delete: false },
      orderBy: { createdAt: "desc" },
      include: {
        items: true,
        billedBy: {
          select: { name: true }
        }
      }
    });
  }

  const formattedInvoices = initialInvoices.map((inv) => ({
    id: inv.id,
    invoiceId: inv.invoiceId,
    invoiceIdTrack: inv.invoiceIdTrack,
    clientName: inv.clientName || "Walk-in Customer",
    clientPhone: inv.clientPhone || "N/A",
    subtotal: inv.subtotal,
    discount: inv.discount,
    taxAmount: inv.taxAmount,
    total: inv.total,
    paymentMode: inv.paymentMode,
    cashier: inv.billedBy?.name || "Unknown",
    createdAt: inv.createdAt.toISOString(),
    itemsCount: inv.items.reduce((sum: number, item: any) => sum + item.quantity, 0)
  }));

  const branchList = branches.map((b) => ({ id: b.id, name: b.name }));

  const company = await prisma.company.findFirst();
  const currencySymbol = company?.currencySymbol || "$";

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-[1200px] mx-auto">
      <div className="border-b border-zinc-800/80 pb-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-white">Invoices & Billing Console</h1>
        <p className="text-zinc-400 text-sm mt-1">
          Perform administrative soft-deletions on invoices and re-sequence serial codes while keeping immutable audit logs.
        </p>
      </div>

      <InvoiceList 
        branches={branchList} 
        initialInvoices={formattedInvoices} 
        initialBranchId={initialBranchId} 
        currencySymbol={currencySymbol}
      />
    </div>
  );
}
