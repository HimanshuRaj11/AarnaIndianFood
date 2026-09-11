import { jsPDF } from "jspdf";
import { CompanyInfo, OfferLetterData } from "../types";
import { PDF_COLORS, drawPdfHeader, drawPdfFooter, drawPdfWatermark } from "./pdfStyles";

export function generateOfferPDF(
  offerData: OfferLetterData,
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

  const todayStr = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // 1. Draw Centered Watermark
  drawPdfWatermark(doc, logoBase64);

  // 2. Draw Orange Header
  let currentY = drawPdfHeader(doc, "OFFER LETTER", `Date: ${todayStr}`, company, logoBase64);

  // 3. Date & Candidate Address
  currentY += 8;
  doc.setTextColor(...PDF_COLORS.textDark);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.text(`Ref: AIF/HR/OFFER/${new Date().getFullYear()}/${Math.floor(1000 + Math.random() * 9000)}`, 15, currentY);

  currentY += 7;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("To,", 15, currentY);
  currentY += 4.5;
  doc.setFontSize(9.5);
  doc.text(offerData.candidateName, 15, currentY);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  currentY += 4.5;

  const addrLines = doc.splitTextToSize(offerData.candidateAddress, 75);
  doc.text(addrLines, 15, currentY);

  currentY += addrLines.length * 4 + 2;
  doc.text(`Email: ${offerData.candidateEmail}`, 15, currentY);
  doc.text(`Phone: ${offerData.candidatePhone}`, 15, currentY + 4);

  // 4. Subject Line
  currentY += 10;
  doc.setFillColor(...PDF_COLORS.lightOrangeBg);
  doc.rect(15, currentY - 1, 180, 7, "F");
  doc.setDrawColor(...PDF_COLORS.accentAmber);
  doc.setLineWidth(0.3);
  doc.rect(15, currentY - 1, 180, 7);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(...PDF_COLORS.primaryOrange);
  doc.text(`SUBJECT: OFFER OF EMPLOYMENT - ${offerData.designation.toUpperCase()}`, 18, currentY + 4);

  // 5. Salutation & Body
  currentY += 11;
  doc.setTextColor(...PDF_COLORS.textDark);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text(`Dear ${offerData.candidateName},`, 15, currentY);

  currentY += 6;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  const p1Text = `We are delighted to offer you employment at ${company?.name || "Aarna Indian Food"}. We were highly impressed by your credentials, culinary background, and professionalism. We are confident your skills will enrich our hospitality and guest dining experience.`;
  const p1Lines = doc.splitTextToSize(p1Text, 180);
  doc.text(p1Lines, 15, currentY);

  currentY += p1Lines.length * 4.5 + 2.5;
  const p2Text = `This offer is for the position of ${offerData.designation} in our ${offerData.department} division, reporting to the ${offerData.reportingManager}. Your scheduled joining date is ${new Date(offerData.joiningDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}.`;
  const p2Lines = doc.splitTextToSize(p2Text, 180);
  doc.text(p2Lines, 15, currentY);

  // 6. Compensation & Terms Box
  currentY += p2Lines.length * 4.5 + 5;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(...PDF_COLORS.primaryOrange);
  doc.text("Compensation & Key Appointment Terms:", 15, currentY);

  currentY += 4.5;
  doc.setFillColor(...PDF_COLORS.lightOrangeBg);
  doc.rect(15, currentY, 180, 32, "F");
  doc.setDrawColor(...PDF_COLORS.accentAmber);
  doc.setLineWidth(0.4);
  doc.rect(15, currentY, 180, 32);

  doc.setTextColor(...PDF_COLORS.textDark);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);

  doc.text("Base Remuneration:", 20, currentY + 7);
  doc.setFont("helvetica", "normal");
  doc.text(`${currencySymbol} ${Number(offerData.monthlySalary).toLocaleString()} per month (${currencyCode})`, 70, currentY + 7);

  doc.setFont("helvetica", "bold");
  doc.text("Payment Mode:", 20, currentY + 13.5);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(offerData.paymentMode === "Cash" ? 5 : 24, offerData.paymentMode === "Cash" ? 150 : 24, offerData.paymentMode === "Cash" ? 105 : 27);
  doc.text(`${offerData.paymentMode} ${offerData.paymentMode === "Cash" ? "(Disbursed in Cash)" : "(Direct Account Transfer)"}`, 70, currentY + 13.5);

  doc.setTextColor(...PDF_COLORS.textDark);
  doc.setFont("helvetica", "bold");
  doc.text("Probation Period:", 20, currentY + 20);
  doc.setFont("helvetica", "normal");
  doc.text(offerData.probationPeriod, 70, currentY + 20);

  doc.setFont("helvetica", "bold");
  doc.text("Reporting Manager:", 20, currentY + 26.5);
  doc.setFont("helvetica", "normal");
  doc.text(offerData.reportingManager, 70, currentY + 26.5);

  // 7. Contingency & Acceptance Terms
  currentY += 37;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(...PDF_COLORS.textDark);
  const p3Text = `This offer is contingent upon satisfactory reference checks and verification of professional credentials. To confirm your acceptance, please sign and return this document on or before ${new Date(offerData.deadlineDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}, after which this offer may lapse.`;
  const p3Lines = doc.splitTextToSize(p3Text, 180);
  doc.text(p3Lines, 15, currentY);

  // 8. Signatures & Acceptance Block
  currentY += p3Lines.length * 4.5 + 7;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.text(`For ${company?.name || "Aarna Indian Food"},`, 15, currentY);

  currentY += 15;
  doc.setFont("helvetica", "normal");
  doc.text("Authorized Signatory / HR Director", 15, currentY);

  // Candidate Acceptance box
  currentY += 8;
  doc.setFillColor(252, 252, 252);
  doc.rect(15, currentY, 180, 21, "F");
  doc.setDrawColor(...PDF_COLORS.borderLight);
  doc.setLineWidth(0.3);
  doc.rect(15, currentY, 180, 21);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.setTextColor(...PDF_COLORS.textDark);
  doc.text("Candidate Acceptance Declaration:", 18, currentY + 5);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.setTextColor(...PDF_COLORS.textMuted);
  doc.text("I confirm that I accept the offer of employment and agree to the terms stated herein. I will commence work on the specified joining date.", 18, currentY + 9.5);

  doc.setTextColor(...PDF_COLORS.textDark);
  doc.text("Candidate Signature: _______________________", 18, currentY + 16.5);
  doc.text("Date: _________________", 140, currentY + 16.5);

  // 9. Orange Branded Footer
  drawPdfFooter(doc, company);

  // Save PDF
  const filename = `Offer_Letter_${offerData.candidateName.replace(/\s+/g, "_")}.pdf`;
  doc.save(filename);
}
