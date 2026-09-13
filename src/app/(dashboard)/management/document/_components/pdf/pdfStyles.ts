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
  // 1. Top vibrant orange header bar (increased height: 10mm primary + 2mm accent stripe)
  doc.setFillColor(...PDF_COLORS.primaryOrange);
  doc.rect(0, 0, 210, 10, "F");

  // Secondary amber accent stripe
  doc.setFillColor(...PDF_COLORS.accentAmber);
  doc.rect(0, 10, 210, 2, "F");

  // 2. Brand Logo on the RIGHT SIDE (scaled 50% larger: 24x24mm vs original 16x16mm)
  if (logoBase64) {
    // Printable width right edge is 195mm (15mm right margin). 195 - 24 = 171mm
    doc.addImage(logoBase64, "PNG", 171, 14, 24, 24);
  }

  // 3. Company Brand & Branch Addresses on LEFT SIDE (x = 15mm)
  let currentY = 19;
  doc.setTextColor(...PDF_COLORS.primaryOrange);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(15);
  doc.text(company?.name || "AARNA INDIAN FOOD", 15, currentY);

  // Address 1: Georgetown
  currentY += 5;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7.5);
  doc.setTextColor(...PDF_COLORS.textDark);
  doc.text("Georgetown:", 15, currentY);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...PDF_COLORS.textMuted);
  doc.text("Lot 51 Seaforth St, Campbellville, Georgetown, Guyana", 33, currentY);

  // Address 2: Berbice
  currentY += 4.2;
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...PDF_COLORS.textDark);
  doc.text("Berbice:", 15, currentY);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...PDF_COLORS.textMuted);
  doc.text("Lot 121, Public Road, No.2 Village, East Canje Berbice, Guyana", 27.5, currentY);

  // Contact line with website
  currentY += 4.5;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7);
  doc.setTextColor(...PDF_COLORS.textMuted);
  const phoneStr = company?.phone || "+592 675-0093 / +592 759-3957";
  const emailStr = company?.email || "info@aarnaindianfood.com";
  const websiteStr = "aarnaindianfood.com";
  doc.text(`Tel: ${phoneStr}   |   Email: ${emailStr}   |   Web: ${websiteStr}`, 15, currentY);

  // 4. Document Title Bar below brand details
  const badgeY = 37.5;
  doc.setFillColor(...PDF_COLORS.lightOrangeBg);
  doc.rect(15, badgeY, 180, 7.5, "F");
  doc.setDrawColor(...PDF_COLORS.accentAmber);
  doc.setLineWidth(0.4);
  doc.rect(15, badgeY, 180, 7.5);

  doc.setTextColor(...PDF_COLORS.primaryOrange);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text(title, 19, badgeY + 5.2);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(...PDF_COLORS.textDark);
  doc.text(subtitle, 191, badgeY + 5.2, { align: "right" });

  // 5. Divider line under header
  const dividerY = badgeY + 9.5;
  doc.setDrawColor(...PDF_COLORS.primaryOrange);
  doc.setLineWidth(0.6);
  doc.line(15, dividerY, 195, dividerY);

  return dividerY + 2.5;
}

/**
 * Draws the orange-themed footer on the bottom of the A4 page.
 */
export function drawPdfFooter(doc: jsPDF, company: CompanyInfo | null) {
  // Disclaimer text above footer bar
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7);
  doc.setTextColor(...PDF_COLORS.textMuted);
  doc.text(
    `This is an authentic computer-generated document issued by ${company?.name || "Aarna Indian Food"}. Website: aarnaindianfood.com`,
    105,
    280,
    { align: "center" }
  );

  // Amber accent line
  doc.setFillColor(...PDF_COLORS.accentAmber);
  doc.rect(0, 283.5, 210, 1.5, "F");

  // Solid rich orange footer bar (increased height: 12mm)
  doc.setFillColor(...PDF_COLORS.primaryOrange);
  doc.rect(0, 285, 210, 12, "F");

  // Footer text in white
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7.5);
  doc.setTextColor(255, 255, 255);
  doc.text("CONFIDENTIAL  •  OFFICIAL RECORD", 15, 292);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7);
  doc.text(`aarnaindianfood.com  •  ${company?.name || "Aarna Indian Food"} Management System`, 195, 292, { align: "right" });
}
