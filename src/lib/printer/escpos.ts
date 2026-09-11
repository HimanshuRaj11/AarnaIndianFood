import qz from "qz-tray";
import { connectPrinter, disconnectPrinter, isPrinterConnected, getAvailablePrinters } from "./qz";
import { generateInvoice } from "./invoice";

export interface PrintResult {
  success: boolean;
  error?: string;
  printerUsed?: string;
}

/**
 * Resolves the appropriate thermal printer name for an invoice or KOT:
 * 1. Explicit printer specified on job (e.g. from user's current session or override)
 * 2. User-specific selected station printer (Receipt vs KOT)
 * 3. Branch designated default printer for the role (RECEIPT or KOT)
 * 4. Any printer matching the role in that branch
 * 5. Branch legacy printerName attribute
 * 6. System default printer in QZ Tray
 */
export function resolvePrinterName(invoice: any, Company: any): string | undefined {
  // 1. Direct explicit override
  if (invoice?.selectedPrinter && typeof invoice.selectedPrinter === "string" && invoice.selectedPrinter.trim() !== "") {
    return invoice.selectedPrinter.trim();
  }
  if (invoice?.printerName && typeof invoice.printerName === "string" && invoice.printerName.trim() !== "") {
    return invoice.printerName.trim();
  }

  const isKOT =
    invoice?.BillType === "KOT" ||
    invoice?.billType === "KOT" ||
    (!invoice?.invoiceId && !invoice?.invoiceNo && !!invoice?.kotNo);

  // 2. User-specific preference if provided in Company/context
  if (isKOT && Company?.userKotPrinter && typeof Company.userKotPrinter === "string" && Company.userKotPrinter.trim() !== "") {
    return Company.userKotPrinter.trim();
  }
  if (!isKOT && Company?.userReceiptPrinter && typeof Company.userReceiptPrinter === "string" && Company.userReceiptPrinter.trim() !== "") {
    return Company.userReceiptPrinter.trim();
  }

  // 3. Look up within matched branch
  const branches = Company?.branches || Company?.branch || [];
  const invoiceBranchId = (
    invoice?.branchId?.id ||
    invoice?.branchId?._id ||
    invoice?.branchId ||
    invoice?.branch
  )?.toString();

  if (Array.isArray(branches) && invoiceBranchId) {
    const matchedBranch = branches.find((b: any) => {
      const bId = (b?.id || b?._id)?.toString();
      return bId === invoiceBranchId;
    });

    if (matchedBranch) {
      const printers: Array<{ name: string; printerName: string; type: string; isDefault: boolean }> =
        matchedBranch.printers || [];

      if (printers.length > 0) {
        if (isKOT) {
          // Check for default KOT printer in branch
          const defaultKot = printers.find((p) => (p.type === "KOT" || p.type === "BOTH") && p.isDefault);
          if (defaultKot?.printerName) return defaultKot.printerName.trim();

          // Any KOT printer in branch
          const anyKot = printers.find((p) => p.type === "KOT" || p.type === "BOTH");
          if (anyKot?.printerName) return anyKot.printerName.trim();
        } else {
          // Check for default Receipt printer in branch
          const defaultReceipt = printers.find((p) => (p.type === "RECEIPT" || p.type === "BOTH") && p.isDefault);
          if (defaultReceipt?.printerName) return defaultReceipt.printerName.trim();

          // Any Receipt printer in branch
          const anyReceipt = printers.find((p) => p.type === "RECEIPT" || p.type === "BOTH");
          if (anyReceipt?.printerName) return anyReceipt.printerName.trim();
        }
      }

      // Legacy fallback
      if (matchedBranch.printerName && matchedBranch.printerName.trim() !== "") {
        return matchedBranch.printerName.trim();
      }
    }
  }

  return undefined; // Targets system default printer in QZ Tray
}

/**
 * Converts a Uint8Array or byte array into a hex string for QZ Tray raw printing.
 */
function toHexString(data: Uint8Array | string): string {
  if (typeof data === "string") return data;
  return Array.from(new Uint8Array(data))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/**
 * Dispatches an ESC/POS print job for a finalized tax invoice.
 */
export async function printInvoice(invoice: any, Company: any): Promise<PrintResult> {
  try {
    const isConnected = await connectPrinter();
    if (!isConnected) {
      return {
        success: false,
        error: "QZ Tray printer service is not connected or not running on this machine.",
      };
    }

    const printerName = resolvePrinterName(invoice, Company);
    const config = qz.configs.create(printerName || null);

    const rawData = generateInvoice(invoice, Company);
    const hexData = toHexString(rawData);

    await qz.print(config, [
      {
        type: "raw",
        format: "command",
        flavor: "hex",
        data: hexData,
      },
    ]);

    return {
      success: true,
      printerUsed: printerName || "Default Printer",
    };
  } catch (err: any) {
    console.error("Print Invoice Error:", err);
    return {
      success: false,
      error: err?.message || "Failed to execute ESC/POS print command.",
    };
  }
}

/**
 * Dispatches an ESC/POS print job for a Kitchen Order Ticket (KOT).
 */
export async function printKOT(kot: any, Company: any): Promise<PrintResult> {
  const kotTicket = {
    ...kot,
    BillType: "KOT",
  };
  return printInvoice(kotTicket, Company);
}

export { connectPrinter, disconnectPrinter, isPrinterConnected, getAvailablePrinters };