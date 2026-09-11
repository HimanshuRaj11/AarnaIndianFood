"use client";

import React, { useState, useEffect } from "react";
import { Receipt, FileText, Eye } from "lucide-react";
import { CompanyInfo, PayslipData, OfferLetterData } from "./types";
import { generatePayslipPDF } from "./pdf/generatePayslipPdf";
import { generateOfferPDF } from "./pdf/generateOfferPdf";
import PayslipForm from "./forms/PayslipForm";
import OfferLetterForm from "./forms/OfferLetterForm";
import PayslipPreview from "./preview/PayslipPreview";
import OfferLetterPreview from "./preview/OfferLetterPreview";

interface DocumentManagerProps {
  company: CompanyInfo | null;
}

export default function DocumentManager({ company }: DocumentManagerProps) {
  const [activeTab, setActiveTab] = useState<"payslip" | "offer">("payslip");
  const [logoBase64, setLogoBase64] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // Load logo as base64 for jsPDF export
  useEffect(() => {
    const loadLogo = async () => {
      try {
        const response = await fetch("/aarna.png");
        const blob = await response.blob();
        const reader = new FileReader();
        reader.onloadend = () => {
          setLogoBase64(reader.result as string);
        };
        reader.readAsDataURL(blob);
      } catch (err) {
        console.error("Failed to load /aarna.png for PDF generation.", err);
      }
    };
    loadLogo();
  }, []);

  // --- PAYSLIP FORM STATE ---
  const [payslipData, setPayslipData] = useState<PayslipData>({
    employeeName: "John Doe",
    employeeId: "EMP-2026-0045",
    designation: "Sous Chef",
    department: "Kitchen Operations",
    paymentMode: "Bank Transfer",
    bankName: "National Bank of Guyana",
    accountNumber: "1009847253",
    payPeriod: "August 2026",
    workedDays: "30",
    lopDays: "0",
    basic: 160000,
    hra: 35000,
    conveyance: 15000,
    special: 20000,
    providentFund: 12000,
    incomeTax: 18000,
    professionalTax: 2000,
    otherDeductions: 0,
  });

  // --- OFFER LETTER FORM STATE ---
  const [offerData, setOfferData] = useState<OfferLetterData>({
    candidateName: "Jane Smith",
    candidateAddress: "45 Main Street, Georgetown, Guyana",
    candidateEmail: "janesmith@example.com",
    candidatePhone: "+592-622-1234",
    designation: "Restaurant Operations Manager",
    department: "Management",
    paymentMode: "Bank Transfer",
    monthlySalary: 250000,
    joiningDate: "2026-09-01",
    reportingManager: "General Manager",
    probationPeriod: "3 Months",
    deadlineDate: "2026-08-15",
  });

  const currencySymbol = company?.currencySymbol || "$";
  const currencyCode = company?.currencyCode || "GYD";

  // Calculations for Payslip
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

  const handleGeneratePayslip = () => {
    setIsGenerating(true);
    try {
      generatePayslipPDF(payslipData, company, logoBase64);
    } catch (err) {
      console.error("Failed to generate payslip PDF:", err);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleGenerateOffer = () => {
    setIsGenerating(true);
    try {
      generateOfferPDF(offerData, company, logoBase64);
    } catch (err) {
      console.error("Failed to generate offer letter PDF:", err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* LEFT COLUMN: Forms Workspace */}
      <div className="lg:col-span-6 space-y-6">
        {/* Navigation Tabs */}
        <div className="flex bg-zinc-900 border border-zinc-800 p-1.5 rounded-xl gap-1">
          <button
            onClick={() => setActiveTab("payslip")}
            className={`flex-1 py-3.5 px-4 rounded-lg flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "payslip"
                ? "bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md shadow-orange-500/20"
                : "text-zinc-400 hover:text-white hover:bg-zinc-800/40"
            }`}
          >
            <Receipt className="w-4 h-4 shrink-0" />
            <span>Pay Slip</span>
          </button>

          <button
            onClick={() => setActiveTab("offer")}
            className={`flex-1 py-3.5 px-4 rounded-lg flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "offer"
                ? "bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md shadow-orange-500/20"
                : "text-zinc-400 hover:text-white hover:bg-zinc-800/40"
            }`}
          >
            <FileText className="w-4 h-4 shrink-0" />
            <span>Offer Letter</span>
          </button>
        </div>

        {/* Active Tab Form */}
        {activeTab === "payslip" ? (
          <PayslipForm
            payslipData={payslipData}
            setPayslipData={setPayslipData}
            currencyCode={currencyCode}
            isGenerating={isGenerating}
            onGenerate={handleGeneratePayslip}
          />
        ) : (
          <OfferLetterForm
            offerData={offerData}
            setOfferData={setOfferData}
            currencyCode={currencyCode}
            isGenerating={isGenerating}
            onGenerate={handleGenerateOffer}
          />
        )}
      </div>

      {/* RIGHT COLUMN: Live Document Preview */}
      <div className="lg:col-span-6 sticky top-8">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 md:p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Eye className="w-4 h-4 text-orange-500" />
                <span>Document Live Preview</span>
              </h3>
              <p className="text-zinc-500 text-[10px] mt-0.5">
                Authentic simulation of official document (A4 scale with central watermark)
              </p>
            </div>
            <span className="px-2 py-0.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-[9px] font-bold text-orange-400 uppercase tracking-wider">
              {activeTab === "payslip" ? "Official Payslip" : "Letter Template"}
            </span>
          </div>

          {/* Simulated A4 Paper */}
          {activeTab === "payslip" ? (
            <PayslipPreview
              payslipData={payslipData}
              company={company}
              grossEarnings={grossEarnings}
              totalDeductions={totalDeductions}
              netPay={netPay}
              currencySymbol={currencySymbol}
              currencyCode={currencyCode}
            />
          ) : (
            <OfferLetterPreview
              offerData={offerData}
              company={company}
              currencySymbol={currencySymbol}
              currencyCode={currencyCode}
            />
          )}
        </div>
      </div>
    </div>
  );
}
