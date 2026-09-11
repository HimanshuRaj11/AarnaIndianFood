import EscPosEncoder from "esc-pos-encoder";
import moment from "moment";

export function generateInvoice(invoice: any, companyFromRedux?: any): Uint8Array {
  const encoder = new EscPosEncoder();
  encoder.initialize().codepage("cp437"); // Standard thermal codepage

  // Standard 3-inch (80mm) impact/thermal printers perfectly accommodate 40 characters per line.
  const LINE_WIDTH = 40;

  // Helper function to manually center text for a 40-character width
  const centerText = (text: string) => {
    const cleanText = (text || "").trim().toUpperCase();
    if (cleanText.length >= LINE_WIDTH) return cleanText.substring(0, LINE_WIDTH);
    const spaces = Math.floor((LINE_WIDTH - cleanText.length) / 2);
    return " ".repeat(spaces) + cleanText;
  };

  // Helper to safely format left-aligned text with a 1-space margin to prevent physical margin clipping
  const leftText = (text: string) => {
    return " " + (text || "").toUpperCase();
  };

  // Helper to build a perfect two-column row (Left text, Right text) fitting exactly 40 chars
  const formatRow = (left: string, right: string) => {
    const leftStr = " " + (left || "").toUpperCase(); // 1 space left margin
    const rightStr = (right || "").toUpperCase() + " "; // 1 space right margin
    const spaceLeft = LINE_WIDTH - leftStr.length - rightStr.length;

    if (spaceLeft > 0) {
      return leftStr + " ".repeat(spaceLeft) + rightStr;
    }
    return leftStr + "\n" + " ".repeat(Math.max(0, LINE_WIDTH - rightStr.length)) + rightStr;
  };

  const isKOT =
    invoice?.BillType === "KOT" ||
    invoice?.billType === "KOT" ||
    (!invoice?.invoiceId && !invoice?.invoiceNo && !!invoice?.kotNo);

  const rawDate = invoice?.createdAt || invoice?.issueDate || new Date();
  const formattedDate = moment(rawDate).format("DD/MM/YYYY hh:mm A");
  const currency = invoice?.currency || companyFromRedux?.currencySymbol || "$";

  // Normalize products / items collection
  const items = invoice?.items || invoice?.products || [];

  // =========================================================================
  // 1. KITCHEN ORDER TICKET (KOT) FORMAT
  // =========================================================================
  if (isKOT) {
    encoder.align("left");

    // Header Title
    const kotTitle = invoice?.isUpdate
      ? "*** UPDATED KITCHEN TICKET ***"
      : "KITCHEN ORDER TICKET (KOT)";
    encoder.bold(true).line(centerText(kotTitle)).bold(false);

    // Branch Name
    const branchName =
      invoice?.branchName ||
      invoice?.branch?.name ||
      companyFromRedux?.name ||
      "AARNA INDIAN FOODS";
    encoder.bold(true).line(centerText(branchName)).bold(false);
    encoder.line("-".repeat(LINE_WIDTH));

    // KOT Meta Details
    const kotNumber = invoice?.kotNo || invoice?.invoiceId || invoice?.id || "N/A";
    const tableNumber = invoice?.tableNo || "DIRECT CHECKOUT";
    encoder.bold(true).line(formatRow(`KOT: #${kotNumber}`, `TABLE: ${tableNumber}`));

    const serverName = invoice?.cashier || invoice?.billedBy?.name || "STAFF";
    encoder.bold(false).line(formatRow(`SERVER: ${serverName}`, `TIME: ${moment(rawDate).format("hh:mm A")}`));
    encoder.line(formatRow(`DATE: ${moment(rawDate).format("DD/MM/YYYY")}`, ""));
    encoder.line("-".repeat(LINE_WIDTH));

    // Items List
    items.forEach((item: any) => {
      // Skip completed items if marked
      if (item.kot_completed) {
        return;
      }

      let nameLine = item.name || "";
      const spec = item.specification || item.Specification || item.notes;
      if (spec && !nameLine.toLowerCase().includes(spec.toLowerCase())) {
        nameLine += ` (${spec})`;
      }

      encoder.bold(true).line(leftText(nameLine)).bold(false);
      encoder.line(formatRow("", `QTY: ${item.quantity}`));

      // If additional notes exist
      if (item.notes && item.notes !== spec) {
        encoder.line(leftText(`  ↳ ${item.notes}`));
      }
    });

    encoder.line("-".repeat(LINE_WIDTH));

    // Special Kitchen Instructions / Notes
    const specialNotes = invoice?.notes || invoice?.kotNotes;
    if (specialNotes && typeof specialNotes === "string" && !specialNotes.startsWith("Table:")) {
      encoder.bold(true).line(leftText("SPECIAL INSTRUCTIONS:"));
      encoder.bold(false).line(leftText(specialNotes));
      encoder.line("-".repeat(LINE_WIDTH));
    }

    // End of KOT footer
    encoder.bold(true).line(centerText(`*** END OF KOT #${kotNumber} ***`)).bold(false);

    // Feed and cut execution
    encoder.newline().newline().newline().newline();
    encoder.cut();

    return encoder.encode();
  }

  // =========================================================================
  // 2. TAX INVOICE FORMAT
  // =========================================================================
  encoder.align("left");

  // Company / Restaurant Header
  const companyTitle =
    invoice?.companyName ||
    companyFromRedux?.name ||
    "AARNA INDIAN FOODS";
  encoder.bold(true).line(centerText(companyTitle));

  // VAT Registration Number
  const vatNumber =
    companyFromRedux?.VATNumber ||
    companyFromRedux?.vatId ||
    invoice?.VATNumber ||
    invoice?.vatId;
  if (vatNumber) {
    encoder.line(centerText(`VAT REG NO: ${vatNumber}`));
  }

  // Branch Address
  const branchAddress =
    invoice?.branchAddress ||
    (invoice?.branch ? `${invoice.branch.street}, ${invoice.branch.city}` : "") ||
    (companyFromRedux?.street ? `${companyFromRedux.street}, ${companyFromRedux.city}` : "") ||
    invoice?.companyAddress;
  if (branchAddress) {
    encoder.bold(false).line(centerText(branchAddress));
  }

  // Guyana Restaurant Telephone lines
  encoder.line(centerText("TEL: GEORGETOWN:- +592 6750093"));
  encoder.line(centerText("TEL: BERBICE:- +592 7593957"));
  encoder.line("");

  // Tax Invoice Metadata
  const invoiceNumber = invoice?.invoiceId || invoice?.invoiceNo || invoice?.id || "INV";
  encoder.bold(true).line(centerText(`TAX INVOICE: ${invoiceNumber}`));
  encoder.bold(false).line(centerText(`DATE: ${formattedDate}`));
  
  if (invoice?.cashier) {
    encoder.line(centerText(`CASHIER: ${invoice.cashier}`));
  }
  if (invoice?.tableNo) {
    encoder.line(centerText(`TABLE NO: ${invoice.tableNo}`));
  }
  encoder.line("");

  // Customer Profile
  encoder.line("-".repeat(LINE_WIDTH));
  encoder.bold(true).line(leftText(`CUSTOMER: ${invoice?.clientName || "WALK-IN CUSTOMER"}`));
  encoder.bold(false).line(leftText(`PHONE: ${invoice?.clientPhone || "N/A"}`));
  encoder.line("-".repeat(LINE_WIDTH));

  // Items Table
  items.forEach((item: any) => {
    let nameLine = item.name || "";
    const spec = item.Specification || item.specification || item.notes;
    if (spec && !nameLine.toLowerCase().includes(spec.toLowerCase())) {
      nameLine += ` (${spec})`;
    }

    // Print item name
    encoder.bold(true).line(leftText(nameLine)).bold(false);

    // Compute prices
    const rate = Number(item.rate ?? item.price ?? 0);
    const qty = Number(item.quantity || 1);
    const amount = Number(item.amount ?? item.total ?? rate * qty);

    const qtyXRate = `${qty} x ${currency}${rate.toFixed(2)}`;
    const totalAmount = `${currency}${amount.toFixed(2)}`;

    encoder.line(formatRow(qtyXRate, totalAmount));
  });

  encoder.line("-".repeat(LINE_WIDTH));

  // Financial Calculations & Totals
  const subtotal = Number(
    invoice?.subtotal ??
    invoice?.subTotal ??
    items.reduce((sum: number, it: any) => sum + Number(it.price ?? it.rate ?? 0) * Number(it.quantity || 1), 0)
  );

  encoder.line(formatRow("SUBTOTAL:", `${currency}${subtotal.toFixed(2)}`));

  // Applied Taxes or 14% VAT
  if (Array.isArray(invoice?.appliedTaxes) && invoice.appliedTaxes.length > 0) {
    invoice.appliedTaxes.forEach((tax: any) => {
      encoder.line(
        formatRow(
          `${tax.taxName || "TAX"} (${tax.percentage || 14}%):`,
          `${currency}${Number(tax.amount || 0).toFixed(2)}`
        )
      );
    });
  } else if (invoice?.taxAmount !== undefined && Number(invoice.taxAmount) > 0) {
    encoder.line(formatRow("VAT (14%):", `${currency}${Number(invoice.taxAmount).toFixed(2)}`));
  }

  // Exempted VAT
  if (invoice?.isExempted || invoice?.discountType === "EXEMPTED") {
    encoder.line(formatRow("VAT (0%):", "EXEMPTED"));
  }

  // Discounts
  const discountVal = Number(invoice?.discount ?? invoice?.discountValue ?? 0);
  if (discountVal > 0) {
    if (invoice?.discountType === "percentage" || invoice?.discountType === "PERCENT") {
      encoder.line(formatRow("DISCOUNT:", `-${currency}${discountVal.toFixed(2)}`));
    } else {
      encoder.line(formatRow("DISCOUNT:", `-${currency}${discountVal.toFixed(2)}`));
    }
  }

  if (Number(invoice?.ProductDiscountValue) > 0) {
    encoder.line(formatRow("DISCOUNT (FREE):", `${currency}${Number(invoice.ProductDiscountValue).toFixed(2)}`));
  }

  // Grand Total
  const grandTotal = Number(
    invoice?.total ??
    invoice?.grandTotal ??
    subtotal - discountVal + Number(invoice?.taxAmount || 0)
  );
  encoder.bold(true).line(formatRow("TOTAL:", `${currency}${grandTotal.toFixed(2)}`)).bold(false);
  encoder.line("-".repeat(LINE_WIDTH));

  // Payment Mode
  encoder.bold(true).line(leftText(`PAYMENT: ${invoice?.paymentMode || "CASH"}`)).bold(false);
  encoder.line("");

  // Receipt Footer
  encoder.line(centerText("SAVE OUR NUMBER FOR OFFERS & MENU UPDATES"));
  encoder.bold(true).line(centerText("THANK YOU, FOR YOUR BUSINESS!"));

  // Feed and cut execution
  encoder.newline().newline().newline().newline();
  encoder.cut();

  return encoder.encode();
}