import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import POSWorkspace from "./_components/POSWorkspace";
import { redirect } from "next/navigation";

export default async function POSPage() {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/login");
  }

  // Fetch all active branches along with their configured printer stations
  let dbBranches: any[] = [];
  try {
    dbBranches = await prisma.branch.findMany({
      where: { active: true },
      include: {
        printers: {
          select: {
            id: true,
            name: true,
            printerName: true,
            type: true,
            isDefault: true,
            branchId: true,
          },
        },
      },
      orderBy: { name: "asc" },
    });
  } catch (err) {
    console.warn("Could not fetch branches with printers include, falling back:", err);
    dbBranches = await prisma.branch.findMany({
      where: { active: true },
      orderBy: { name: "asc" },
    });
  }

  const branches = dbBranches.map((b) => ({
    id: b.id,
    name: b.name,
    printerName: b.printerName || undefined,
    street: b.street,
    city: b.city,
    phone: b.phone,
    printers: b.printers || [],
  }));

  // Fetch cashier's preferred station printers
  let dbUser: any = null;
  try {
    dbUser = await prisma.user.findUnique({
      where: { id: user.userId },
      select: {
        receiptPrinter: { select: { id: true, name: true, printerName: true } },
        kotPrinter: { select: { id: true, name: true, printerName: true } },
      },
    });
  } catch (err) {
    console.warn("Could not fetch user printer preferences:", err);
  }

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

  // Fetch recent invoices (last 10) with full items and customer details
  const dbRecentInvoices = await prisma.invoice.findMany({
    where: user.role === "ADMIN" ? { delete: false, invoiceStatus: { not: "HELD" } } : {
      branchId: user.branchId || undefined,
      delete: false,
      invoiceStatus: { not: "HELD" }
    },
    include: {
      items: true
    },
    orderBy: { createdAt: "desc" },
    take: 10
  });
  
  const recentInvoices = dbRecentInvoices.map((inv) => {
    let tableNo = "";
    if (inv.notes && inv.notes.startsWith("Table: ")) {
      tableNo = inv.notes.replace("Table: ", "").trim();
    }
    return {
      id: inv.id,
      invoiceNo: inv.invoiceId,
      subtotal: inv.subtotal,
      discount: inv.discount,
      taxAmount: inv.taxAmount,
      total: inv.total,
      paymentMode: inv.paymentMode,
      clientName: inv.clientName || "",
      clientPhone: inv.clientPhone || "",
      tableNo,
      items: inv.items.map((it) => ({
        productId: it.productId || "",
        name: it.name,
        price: it.price,
        quantity: it.quantity,
        total: it.total,
      })),
      createdAt: inv.createdAt.toISOString()
    };
  });

  // Fetch active KOTs (pending/preparing) with their items
  const dbActiveKots = await prisma.kOT.findMany({
    where: user.role === "ADMIN" ? {
      status: { in: ["PENDING", "PREPARING"] }
    } : {
      branchId: user.branchId || undefined,
      status: { in: ["PENDING", "PREPARING"] }
    },
    include: {
      items: true
    },
    orderBy: { createdAt: "desc" },
    take: 15
  });

  const activeKots = dbActiveKots.map((kot) => ({
    id: kot.id,
    kotNo: kot.kotNo,
    tableNo: kot.tableNo,
    status: kot.status as "PENDING" | "PREPARING" | "SERVED" | "CANCELLED",
    items: kot.items.map((item) => ({
      id: item.id,
      productId: item.productId || "",
      name: item.name,
      quantity: item.quantity,
      notes: item.notes || "",
    })),
    createdAt: kot.createdAt.toISOString()
  }));

  // Fetch held invoices from DB
  const dbHeldInvoices = await prisma.invoice.findMany({
    where: user.role === "ADMIN" ? { invoiceStatus: "HELD", delete: false } : {
      branchId: user.branchId || undefined,
      invoiceStatus: "HELD",
      delete: false
    },
    include: {
      items: true
    },
    orderBy: { createdAt: "desc" },
    take: 20
  });

  const initialHeldInvoices = dbHeldInvoices.map((inv) => {
    let parsedNotes = { kotNotes: "", discountType: "NONE", discountValue: 0, tableNo: "" };
    if (inv.notes) {
      try {
        parsedNotes = JSON.parse(inv.notes);
      } catch (e) {
        if (inv.notes.startsWith("Table: ")) {
          parsedNotes.tableNo = inv.notes.replace("Table: ", "").trim();
        }
      }
    }

    return {
      id: inv.invoiceId,
      dbId: inv.id,
      cart: inv.items.map((it) => {
        const isComp = it.name.startsWith("*COMP* ");
        const cleanName = isComp ? it.name.replace("*COMP* ", "") : it.name;
        return {
          productId: it.productId || "",
          name: cleanName,
          price: it.price,
          quantity: it.quantity,
          isComplement: isComp,
          specification: ""
        };
      }),
      clientName: inv.clientName || "",
      clientPhone: inv.clientPhone || "",
      branchId: inv.branchId,
      tableNo: parsedNotes.tableNo || "",
      kotNotes: parsedNotes.kotNotes || "",
      discountType: (parsedNotes.discountType || (inv.discount > 0 ? "FLAT" : "NONE")) as "PERCENT" | "FLAT" | "NONE" | "EXEMPTED",
      discountValue: parsedNotes.discountValue || inv.discount || 0,
      paymentMode: (inv.paymentMode || "CASH") as "CASH" | "CARD" | "UPI" | "NET_BANKING" | "CHEQUE",
      createdAt: inv.createdAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
  });

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
    street: dbCompany.street,
    city: dbCompany.city,
    phone: dbCompany.phone,
    VATNumber: dbCompany.VATNumber || undefined,
    currencyCode: dbCompany.currencyCode,
    currencySymbol: dbCompany.currencySymbol,
    branches: dbBranches.map((b) => ({
      id: b.id,
      name: b.name,
      printerName: b.printerName || undefined,
      street: b.street,
      city: b.city,
      phone: b.phone,
      printers: b.printers,
    }))
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
      initialHeldInvoices={initialHeldInvoices}
      initialCompany={initialCompany}
      userReceiptPrinter={dbUser?.receiptPrinter?.printerName || ""}
      userKotPrinter={dbUser?.kotPrinter?.printerName || ""}
    />
  );
}
