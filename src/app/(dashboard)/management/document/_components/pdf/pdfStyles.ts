import { jsPDF } from "jspdf";
import { CompanyInfo } from "../types";

export const PDF_COLORS = {
  primaryOrange: [234, 88, 12] as [number, number, number], // #ea580c Warm deep orange
  accentAmber: [245, 158, 11] as [number, number, number],  // #f59e0b Bright amber gold
  lightOrangeBg: [255, 247, 237] as [number, number, number], // #fff7ed Warm cream
  textDark: [24, 24, 27] as [number, number, number],      // #18181b Dark charcoal
  textMuted: [113, 113, 122] as [number, number, number],  // #71717a Slate gray
  borderLight: [228, 228, 231] as [number, number, number], // #e4e4e7 Light border
  tableHeaderBg: [254, 243, 199] as [number, number, number], // Warm gold tint
};

/**
 * Draws a watermark logo in the center of the A4 page.
 * Uses jsPDF graphics state for low opacity.
 */
export function drawPdfWatermark(doc: jsPDF, logoBase64: string | null) {
  if (!logoBase64) return;
  try {
    doc.saveGraphicsState();
    // Set faint opacity (6.5%)
    // @ts-expect-error jsPDF GState typing
    doc.setGState(new doc.GState({ opacity: 0.065 }));

    // A4 dimensions: 210 x 297 mm
    // Watermark dimensions: 110 x 110 mm
    const wmWidth = 110;
    const wmHeight = 110;
    const wmX = (210 - wmWidth) / 2;
    const wmY = (297 - wmHeight) / 2;

    doc.addImage(logoBase64, "PNG", wmX, wmY, wmWidth, wmHeight);
    doc.restoreGraphicsState();
  } catch (err) {
    console.error("Failed to render PDF watermark:", err);
  }
}

/**
 * Draws the orange-themed header on the A4 page.
 */
export function drawPdfHeader(
  doc: jsPDF,
  title: string,
  subtitle: string,
  company: CompanyInfo | null,
  logoBase64: string | null
): number {
  // Top solid vibrant orange banner
  doc.setFillColor(...PDF_COLORS.primaryOrange);
  doc.rect(0, 0, 210, 6, "F");

  // Secondary amber accent stripe
  doc.setFillColor(...PDF_COLORS.accentAmber);
  doc.rect(0, 6, 210, 1.5, "F");

  // Brand Logo or Fallback Title
  let currentY = 16;
  if (logoBase64) {
    // 500x500 logo scaled to 16x16mm
    doc.addImage(logoBase64, "PNG", 15, currentY, 16, 16);
    doc.setTextColor(...PDF_COLORS.primaryOrange);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text(company?.name || "AARNA INDIAN FOOD", 35, currentY + 7);

    // Company address
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(...PDF_COLORS.textMuted);
    const companyAddress = `${company?.street || "123 Main Rd"}, ${company?.city || "Georgetown"}, ${company?.state || "Demerara"}, ${company?.country || "Guyana"}`;
    doc.text(companyAddress, 35, currentY + 11.5);
    doc.text(`Phone: ${company?.phone || "+592-xxx-xxxx"} | Email: ${company?.email || "info@aarnaindia.com"}`, 35, currentY + 15.5);
    currentY += 20;
  } else {
    doc.setTextColor(...PDF_COLORS.primaryOrange);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text(company?.name || "AARNA INDIAN FOOD", 15, currentY + 6);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(...PDF_COLORS.textMuted);
    const companyAddress = `${company?.street || "123 Main Rd"}, ${company?.city || "Georgetown"}, ${company?.state || "Demerara"}, ${company?.country || "Guyana"}`;
    doc.text(companyAddress, 15, currentY + 11);
    doc.text(`Phone: ${company?.phone || "+592-xxx-xxxx"} | Email: ${company?.email || "info@aarnaindia.com"}`, 15, currentY + 15);
    currentY += 19;
  }

  // Right-aligned Document Title Badge
  doc.setFillColor(...PDF_COLORS.lightOrangeBg);
  doc.rect(130, 15, 65, 16, "F");
  doc.setDrawColor(...PDF_COLORS.accentAmber);
  doc.setLineWidth(0.4);
  doc.rect(130, 15, 65, 16);

  doc.setTextColor(...PDF_COLORS.primaryOrange);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.text(title, 191, 22, { align: "right" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(...PDF_COLORS.textMuted);
  doc.text(subtitle, 191, 27, { align: "right" });

  // Divider line under header
  currentY = Math.max(currentY, 36);
  doc.setDrawColor(...PDF_COLORS.accentAmber);
  doc.setLineWidth(0.5);
  doc.line(15, currentY, 195, currentY);

  return currentY;
}

/**
 * Draws the orange-themed footer on the bottom of the A4 page.
 */
export function drawPdfFooter(doc: jsPDF, company: CompanyInfo | null) {
  // Disclaimer text above footer bar
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.setTextColor(...PDF_COLORS.textMuted);
  doc.text(
    `This is an authentic computer-generated document issued by ${company?.name || "Aarna Indian Food"}. Valid without physical seal unless requested.`,
    105,
    280,
    { align: "center" }
  );

  // Amber accent line
  doc.setFillColor(...PDF_COLORS.accentAmber);
  doc.rect(0, 284, 210, 1.2, "F");

  // Solid rich orange footer bar
  doc.setFillColor(...PDF_COLORS.primaryOrange);
  doc.rect(0, 285.2, 210, 11.8, "F");

  // Footer text in white
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7.5);
  doc.setTextColor(255, 255, 255);
  doc.text("CONFIDENTIAL  •  OFFICIAL RECORD", 15, 292);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7);
  doc.text(`${company?.name || "Aarna Indian Food"} Management System`, 195, 292, { align: "right" });
}
