import { jsPDF } from "jspdf";
import { CompanyInfo, PayslipData } from "../types";
import { numberToWords } from "../utils/numberToWords";
import { PDF_COLORS, drawPdfHeader, drawPdfFooter, drawPdfWatermark } from "./pdfStyles";

export function generatePayslipPDF(
  payslipData: PayslipData,
  company: CompanyInfo | null,
  logoBase64: string | null
) {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const currencySymbol = company?.currencySymbol || "$";
  const currencyCode = company?.currencyCode || "GYD";

  // Calculations
  const grossEarnings =
    Number(payslipData.basic) +
    Number(payslipData.hra) +
    Number(payslipData.conveyance) +
    Number(payslipData.special);

  const totalDeductions =
    Number(payslipData.providentFund) +
    Number(payslipData.incomeTax) +
    Number(payslipData.professionalTax) +
    Number(payslipData.otherDeductions);

  const netPay = Math.max(0, grossEarnings - totalDeductions);

  // 1. Draw Centered Watermark
  drawPdfWatermark(doc, logoBase64);

  // 2. Draw Orange Header
  let currentY = drawPdfHeader(
    doc,
    "PAYSLIP",
    `Pay Period: ${payslipData.payPeriod}`,
    company,
    logoBase64
  );

  // 3. Employee Summary Section
  currentY += 6;
  doc.setFillColor(...PDF_COLORS.lightOrangeBg);
  doc.rect(15, currentY, 180, 7, "F");
  doc.setDrawColor(...PDF_COLORS.accentAmber);
  doc.setLineWidth(0.3);
  doc.rect(15, currentY, 180, 7);

  doc.setTextColor(...PDF_COLORS.primaryOrange);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.text("EMPLOYEE SUMMARY", 18, currentY + 5);

  // Grid details
  currentY += 11;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(...PDF_COLORS.textDark);
  doc.text("Employee Name:", 18, currentY);
  doc.setFont("helvetica", "normal");
  doc.text(payslipData.employeeName, 55, currentY);

  doc.setFont("helvetica", "bold");
  doc.text("Employee ID:", 110, currentY);
  doc.setFont("helvetica", "normal");
  doc.text(payslipData.employeeId, 150, currentY);

  currentY += 5.5;
  doc.setFont("helvetica", "bold");
  doc.text("Designation:", 18, currentY);
  doc.setFont("helvetica", "normal");
  doc.text(payslipData.designation, 55, currentY);

  doc.setFont("helvetica", "bold");
  doc.text("Department:", 110, currentY);
  doc.setFont("helvetica", "normal");
  doc.text(payslipData.department, 150, currentY);

  currentY += 5.5;
  doc.setFont("helvetica", "bold");
  doc.text("Payment Mode:", 18, currentY);
  doc.setFont("helvetica", "normal");
  doc.text(payslipData.paymentMode, 55, currentY);

  if (payslipData.paymentMode === "Cash") {
    doc.setFont("helvetica", "bold");
    doc.text("Disbursement:", 110, currentY);
    doc.setFont("helvetica", "normal");
    doc.text("Paid in Cash (Counter)", 150, currentY);
  } else {
    doc.setFont("helvetica", "bold");
    doc.text("Bank Name:", 110, currentY);
    doc.setFont("helvetica", "normal");
    doc.text(payslipData.bankName, 150, currentY);

    currentY += 5.5;
    doc.setFont("helvetica", "bold");
    doc.text("Account Number:", 18, currentY);
    doc.setFont("helvetica", "normal");
    doc.text(payslipData.accountNumber, 55, currentY);

    doc.setFont("helvetica", "bold");
    doc.text("Payment Status:", 110, currentY);
    doc.setFont("helvetica", "normal");
    doc.text("Direct Bank Transfer", 150, currentY);
  }

  currentY += 5.5;
  doc.setFont("helvetica", "bold");
  doc.text("Worked Days:", 18, currentY);
  doc.setFont("helvetica", "normal");
  doc.text(payslipData.workedDays, 55, currentY);

  doc.setFont("helvetica", "bold");
  doc.text("Loss Of Pay (LOP):", 110, currentY);
  doc.setFont("helvetica", "normal");
  doc.text(payslipData.lopDays, 150, currentY);

  // 4. Earnings & Deductions Tables
  currentY += 10;

  // Table Headers
  doc.setFillColor(...PDF_COLORS.lightOrangeBg);
  doc.rect(15, currentY, 90, 7, "F");
  doc.rect(105, currentY, 90, 7, "F");
  doc.setDrawColor(...PDF_COLORS.accentAmber);
  doc.setLineWidth(0.3);
  doc.rect(15, currentY, 90, 7);
  doc.rect(105, currentY, 90, 7);

  doc.setTextColor(...PDF_COLORS.primaryOrange);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.text("EARNINGS", 18, currentY + 5);
  doc.text("AMOUNT", 80, currentY + 5);
  doc.text("DEDUCTIONS", 108, currentY + 5);
  doc.text("AMOUNT", 170, currentY + 5);

  const tableTopY = currentY + 7;
  const rowHeight = 6.5;

  const rows = [
    { earnLabel: "Basic Salary", earnVal: payslipData.basic, dedLabel: "Provident Fund", dedVal: payslipData.providentFund },
    { earnLabel: "House Rent Allowance (HRA)", earnVal: payslipData.hra, dedLabel: "Income Tax (TDS)", dedVal: payslipData.incomeTax },
    { earnLabel: "Conveyance Allowance", earnVal: payslipData.conveyance, dedLabel: "Professional Tax", dedVal: payslipData.professionalTax },
    { earnLabel: "Special Allowance", earnVal: payslipData.special, dedLabel: "Other Deductions", dedVal: payslipData.otherDeductions },
  ];

  doc.setTextColor(...PDF_COLORS.textDark);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);

  rows.forEach((row, i) => {
    const itemY = tableTopY + i * rowHeight;

    // Background striping
    if (i % 2 === 1) {
      doc.setFillColor(252, 252, 252);
      doc.rect(15, itemY, 90, rowHeight, "F");
      doc.rect(105, itemY, 90, rowHeight, "F");
    }

    // Border lines
    doc.setDrawColor(...PDF_COLORS.borderLight);
    doc.setLineWidth(0.2);
    doc.rect(15, itemY, 90, rowHeight);
    doc.rect(105, itemY, 90, rowHeight);

    // Earnings cell
    doc.text(row.earnLabel, 18, itemY + 4.5);
    doc.text(`${currencySymbol} ${Number(row.earnVal).toLocaleString()}`, 100, itemY + 4.5, { align: "right" });

    // Deductions cell
    doc.text(row.dedLabel, 108, itemY + 4.5);
    doc.text(`${currencySymbol} ${Number(row.dedVal).toLocaleString()}`, 190, itemY + 4.5, { align: "right" });
  });

  // Totals Row
  const totalsY = tableTopY + rows.length * rowHeight;
  doc.setFillColor(...PDF_COLORS.lightOrangeBg);
  doc.rect(15, totalsY, 90, rowHeight, "F");
  doc.rect(105, totalsY, 90, rowHeight, "F");
  doc.setDrawColor(...PDF_COLORS.accentAmber);
  doc.setLineWidth(0.3);
  doc.rect(15, totalsY, 90, rowHeight);
  doc.rect(105, totalsY, 90, rowHeight);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(...PDF_COLORS.primaryOrange);
  doc.text("Total Gross Earnings", 18, totalsY + 4.5);
  doc.text(`${currencySymbol} ${grossEarnings.toLocaleString()}`, 100, totalsY + 4.5, { align: "right" });

  doc.text("Total Deductions", 108, totalsY + 4.5);
  doc.text(`${currencySymbol} ${totalDeductions.toLocaleString()}`, 190, totalsY + 4.5, { align: "right" });

  // 5. Net Take-Home Pay Box
  currentY = totalsY + rowHeight + 9;
  doc.setFillColor(...PDF_COLORS.lightOrangeBg);
  doc.rect(15, currentY, 180, 14, "F");
  doc.setDrawColor(...PDF_COLORS.primaryOrange);
  doc.setLineWidth(0.6);
  doc.rect(15, currentY, 180, 14);

  doc.setTextColor(...PDF_COLORS.textDark);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("NET TAKE-HOME PAY:", 20, currentY + 9);

  doc.setFontSize(13);
  doc.setTextColor(...PDF_COLORS.primaryOrange);
  doc.text(`${currencySymbol} ${netPay.toLocaleString()} (${currencyCode})`, 78, currentY + 9);

  // Payment Mode Badge in Net Pay Box
  doc.setFontSize(8);
  doc.setFont("helvetica", "bold");
  if (payslipData.paymentMode === "Cash") {
    doc.setTextColor(5, 150, 105); // Emerald green for cash
    doc.text("[ MODE: CASH ]", 190, currentY + 9, { align: "right" });
  } else {
    doc.setTextColor(...PDF_COLORS.primaryOrange);
    doc.text("[ MODE: BANK TRANSFER ]", 190, currentY + 9, { align: "right" });
  }

  // Net Pay in words
  currentY += 19;
  doc.setFontSize(8.5);
  doc.setTextColor(...PDF_COLORS.textMuted);
  doc.setFont("helvetica", "normal");
  doc.text("Net Pay in Words:", 15, currentY);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...PDF_COLORS.textDark);
  doc.text(numberToWords(netPay), 48, currentY);

  // 6. Signatures
  currentY += 28;
  doc.setDrawColor(...PDF_COLORS.borderLight);
  doc.setLineWidth(0.4);
  doc.line(15, currentY, 70, currentY);
  doc.line(140, currentY, 195, currentY);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(...PDF_COLORS.textMuted);
  doc.text("Authorized Employer Signatory", 42.5, currentY + 4.5, { align: "center" });
  doc.text("Employee Signature", 167.5, currentY + 4.5, { align: "center" });

  // 7. Orange Branded Footer
  drawPdfFooter(doc, company);

  // Save PDF
  const filename = `Payslip_${payslipData.employeeName.replace(/\s+/g, "_")}_${payslipData.payPeriod.replace(/\s+/g, "_")}.pdf`;
  doc.save(filename);
}
