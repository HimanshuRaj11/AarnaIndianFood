"use client";

import { useState, useEffect } from "react";
import { 
  Receipt, 
  FileText, 
  Download, 
  Eye, 
  RefreshCw, 
  Building, 
  User, 
  Calendar, 
  DollarSign, 
  PlusCircle, 
  Trash2,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { jsPDF } from "jspdf";

interface CompanyData {
  name: string;
  street: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  email?: string | null;
  phone: string;
  website?: string | null;
  currencySymbol?: string;
  currencyCode?: string;
}

interface DocumentManagerProps {
  company: CompanyData | null;
}

// Convert numbers to text representation for payslip
function numberToWords(num: number): string {
  const a = ['', 'One ', 'Two ', 'Three ', 'Four ', 'Five ', 'Six ', 'Seven ', 'Eight ', 'Nine ', 'Ten ', 'Eleven ', 'Twelve ', 'Thirteen ', 'Fourteen ', 'Fifteen ', 'Sixteen ', 'Seventeen ', 'Eighteen ', 'Nineteen '];
  const b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

  if ((num = Math.floor(num)) === 0) return 'Zero';
  
  const n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
  if (!n) return '';
  
  let str = '';
  str += Number(n[1]) !== 0 ? (a[Number(n[1])] || b[Number(n[1][0])] + ' ' + a[Number(n[1][1])]) + 'Crore ' : '';
  str += Number(n[2]) !== 0 ? (a[Number(n[2])] || b[Number(n[2][0])] + ' ' + a[Number(n[2][1])]) + 'Lakh ' : '';
  str += Number(n[3]) !== 0 ? (a[Number(n[3])] || b[Number(n[3][0])] + ' ' + a[Number(n[3][1])]) + 'Thousand ' : '';
  str += Number(n[4]) !== 0 ? a[Number(n[4])] + 'Hundred ' : '';
  str += Number(n[5]) !== 0 ? ((str !== '') ? 'and ' : '') + (a[Number(n[5])] || b[Number(n[5][0])] + ' ' + a[Number(n[5][1])]) : '';
  
  return str.trim() + " Only";
}

export default function DocumentManager({ company }: DocumentManagerProps) {
  const [activeTab, setActiveTab] = useState<"payslip" | "offer">("payslip");
  const [isGenerating, setIsGenerating] = useState(false);
  const [logoBase64, setLogoBase64] = useState<string | null>(null);

  // Load logo on component mount and convert to base64
  useEffect(() => {
    const loadLogo = async () => {
      try {
        const response = await fetch("/aaran.png");
        const blob = await response.blob();
        const reader = new FileReader();
        reader.onloadend = () => {
          setLogoBase64(reader.result as string);
        };
        reader.readAsDataURL(blob);
      } catch (err) {
        console.error("Failed to load /aaran.png, using fallback text branding.", err);
      }
    };
    loadLogo();
  }, []);

  // --- PAYSLIP FORM STATE ---
  const [payslipData, setPayslipData] = useState({
    employeeName: "John Doe",
    employeeId: "EMP-2026-0045",
    designation: "Sous Chef",
    department: "Kitchen Operations",
    bankName: "National Bank of Guyana",
    accountNumber: "1009847253",
    payPeriod: "August 2026",
    workedDays: "30",
    lopDays: "0",
    
    // Earnings
    basic: 160000,
    hra: 35000,
    conveyance: 15000,
    special: 20000,
    
    // Deductions
    providentFund: 12000,
    incomeTax: 18000,
    professionalTax: 2000,
    otherDeductions: 0,
  });

  // --- OFFER LETTER FORM STATE ---
  const [offerData, setOfferData] = useState({
    candidateName: "Jane Smith",
    candidateAddress: "45 Main Street, Georgetown, Guyana",
    candidateEmail: "janesmith@example.com",
    candidatePhone: "+592-622-1234",
    designation: "Restaurant Operations Manager",
    department: "Management",
    monthlySalary: 250000,
    joiningDate: "2026-09-01",
    reportingManager: "General Manager",
    probationPeriod: "3 Months",
    deadlineDate: "2026-08-15",
  });

  const currencySymbol = company?.currencySymbol || "$";
  const currencyCode = company?.currencyCode || "GYD";

  // Calculations for Payslip
  const grossEarnings = Number(payslipData.basic) + Number(payslipData.hra) + Number(payslipData.conveyance) + Number(payslipData.special);
  const totalDeductions = Number(payslipData.providentFund) + Number(payslipData.incomeTax) + Number(payslipData.professionalTax) + Number(payslipData.otherDeductions);
  const netPay = Math.max(0, grossEarnings - totalDeductions);

  // Generate Payslip PDF using jsPDF
  const generatePayslipPDF = () => {
    setIsGenerating(true);
    try {
      const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      // Colors
      const primaryColor = [217, 119, 6]; // Amber-600
      const secondaryColor = [39, 39, 42]; // Zinc-800
      const textColor = [24, 24, 27]; // Zinc-900
      const lightBg = [250, 250, 250]; // Zinc-50

      // Letterhead Top Border
      doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
      doc.rect(0, 0, 210, 8, "F");

      // Brand Logo / Header
      let currentY = 18;
      if (logoBase64) {
        doc.addImage(logoBase64, "PNG", 15, currentY, 35, 12);
        currentY += 16;
      } else {
        doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.text(company?.name || "AARNA INDIAN FOOD", 15, currentY);
        currentY += 10;
      }

      // Company info
      doc.setTextColor(113, 113, 122); // Zinc-500
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      const companyAddress = `${company?.street || "123 Main Rd"}, ${company?.city || "Georgetown"}, ${company?.state || "Demerara"}, ${company?.country || "Guyana"}`;
      doc.text(companyAddress, 15, currentY);
      doc.text(`Phone: ${company?.phone || "+592-xxx-xxxx"} | Email: ${company?.email || "info@aarnaindia.com"}`, 15, currentY + 4);
      
      // Right side title
      doc.setTextColor(24, 24, 27);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(16);
      doc.text("PAYSLIP", 195, 23, { align: "right" });
      
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(113, 113, 122);
      doc.text(`Pay Period: ${payslipData.payPeriod}`, 195, 28, { align: "right" });

      // Dividers
      currentY = 40;
      doc.setDrawColor(228, 228, 231); // Zinc-200
      doc.setLineWidth(0.3);
      doc.line(15, currentY, 195, currentY);

      // Section: Employee Details Header
      currentY += 6;
      doc.setFillColor(244, 244, 245); // Zinc-100
      doc.rect(15, currentY, 180, 7, "F");
      doc.setTextColor(24, 24, 27);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9.5);
      doc.text("EMPLOYEE SUMMARY", 18, currentY + 5);

      // Employee Details Table Grid
      currentY += 11;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.text("Employee Name:", 18, currentY);
      doc.setFont("helvetica", "normal");
      doc.text(payslipData.employeeName, 55, currentY);

      doc.setFont("helvetica", "bold");
      doc.text("Employee ID:", 110, currentY);
      doc.setFont("helvetica", "normal");
      doc.text(payslipData.employeeId, 150, currentY);

      currentY += 6;
      doc.setFont("helvetica", "bold");
      doc.text("Designation:", 18, currentY);
      doc.setFont("helvetica", "normal");
      doc.text(payslipData.designation, 55, currentY);

      doc.setFont("helvetica", "bold");
      doc.text("Department:", 110, currentY);
      doc.setFont("helvetica", "normal");
      doc.text(payslipData.department, 150, currentY);

      currentY += 6;
      doc.setFont("helvetica", "bold");
      doc.text("Bank Name:", 18, currentY);
      doc.setFont("helvetica", "normal");
      doc.text(payslipData.bankName, 55, currentY);

      doc.setFont("helvetica", "bold");
      doc.text("Account Number:", 110, currentY);
      doc.setFont("helvetica", "normal");
      doc.text(payslipData.accountNumber, 150, currentY);

      currentY += 6;
      doc.setFont("helvetica", "bold");
      doc.text("Worked Days:", 18, currentY);
      doc.setFont("helvetica", "normal");
      doc.text(payslipData.workedDays, 55, currentY);

      doc.setFont("helvetica", "bold");
      doc.text("Loss Of Pay (LOP):", 110, currentY);
      doc.setFont("helvetica", "normal");
      doc.text(payslipData.lopDays, 150, currentY);

      // Section: Earnings & Deductions Tables
      currentY += 12;
      
      // Header bar for earnings and deductions
      doc.setFillColor(244, 244, 245);
      doc.rect(15, currentY, 90, 7, "F");
      doc.rect(105, currentY, 90, 7, "F");

      doc.setTextColor(24, 24, 27);
      doc.setFont("helvetica", "bold");
      doc.text("EARNINGS", 18, currentY + 5);
      doc.text("AMOUNT", 80, currentY + 5);
      doc.text("DEDUCTIONS", 108, currentY + 5);
      doc.text("AMOUNT", 170, currentY + 5);

      // Line boxes
      const tableTopY = currentY + 7;
      const rowHeight = 7;
      const rows = [
        { earnLabel: "Basic Salary", earnVal: payslipData.basic, dedLabel: "Provident Fund", dedVal: payslipData.providentFund },
        { earnLabel: "House Rent Allowance (HRA)", earnVal: payslipData.hra, dedLabel: "Income Tax (TDS)", dedVal: payslipData.incomeTax },
        { earnLabel: "Conveyance Allowance", earnVal: payslipData.conveyance, dedLabel: "Professional Tax", dedVal: payslipData.professionalTax },
        { earnLabel: "Special Allowance", earnVal: payslipData.special, dedLabel: "Other Deductions", dedVal: payslipData.otherDeductions },
      ];

      doc.setFont("helvetica", "normal");
      rows.forEach((row, i) => {
        const itemY = tableTopY + (i * rowHeight);
        
        // Background striping
        if (i % 2 === 1) {
          doc.setFillColor(250, 250, 250);
          doc.rect(15, itemY, 90, rowHeight, "F");
          doc.rect(105, itemY, 90, rowHeight, "F");
        }

        // Draw left side earnings
        doc.text(row.earnLabel, 18, itemY + 5);
        doc.text(`${currencySymbol} ${Number(row.earnVal).toLocaleString()}`, 80, itemY + 5);

        // Draw right side deductions
        doc.text(row.dedLabel, 108, itemY + 5);
        doc.text(`${currencySymbol} ${Number(row.dedVal).toLocaleString()}`, 170, itemY + 5);
      });

      // Total earnings & Total deductions rows
      const totalsY = tableTopY + (rows.length * rowHeight);
      doc.setFillColor(244, 244, 245);
      doc.rect(15, totalsY, 90, rowHeight, "F");
      doc.rect(105, totalsY, 90, rowHeight, "F");

      doc.setFont("helvetica", "bold");
      doc.text("Gross Earnings", 18, totalsY + 5);
      doc.text(`${currencySymbol} ${grossEarnings.toLocaleString()}`, 80, totalsY + 5);

      doc.text("Total Deductions", 108, totalsY + 5);
      doc.text(`${currencySymbol} ${totalDeductions.toLocaleString()}`, 170, totalsY + 5);

      // Outer Table Borders
      doc.setDrawColor(228, 228, 231);
      doc.rect(15, tableTopY, 90, (rows.length + 1) * rowHeight);
      doc.rect(105, tableTopY, 90, (rows.length + 1) * rowHeight);

      // Section: Net Pay Calculation
      currentY = totalsY + rowHeight + 10;
      doc.setFillColor(primaryColor[0] + 15, primaryColor[1] + 15, primaryColor[2] + 15); // Lighter amber bg
      doc.rect(15, currentY, 180, 14, "F");
      
      // Border around Net pay box
      doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
      doc.setLineWidth(0.5);
      doc.rect(15, currentY, 180, 14);

      doc.setTextColor(24, 24, 27);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.text("NET TAKE-HOME PAY:", 20, currentY + 9);
      doc.setFontSize(14);
      doc.setTextColor(primaryColor[0] - 30, primaryColor[1] - 30, primaryColor[2] - 30); // Deep amber text
      doc.text(`${currencySymbol} ${netPay.toLocaleString()} (${currencyCode})`, 82, currentY + 9);

      // Net Pay in words
      currentY += 20;
      doc.setFontSize(9);
      doc.setTextColor(113, 113, 122);
      doc.text("Net Pay in Words:", 15, currentY);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(24, 24, 27);
      doc.text(numberToWords(netPay), 48, currentY);

      // Signatures
      currentY += 35;
      doc.setDrawColor(228, 228, 231);
      doc.setLineWidth(0.3);
      doc.line(15, currentY, 70, currentY);
      doc.line(140, currentY, 195, currentY);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.5);
      doc.setTextColor(113, 113, 122);
      doc.text("Employer / Authorized Signatory", 15, currentY + 4.5);
      doc.text("Employee Signature", 140, currentY + 4.5);

      // Footer disclaimer
      doc.setFontSize(7.5);
      doc.text("This is a computer-generated payslip and does not require a physical signature.", 105, 275, { align: "center" });

      doc.save(`Payslip_${payslipData.employeeName.replace(/\s+/g, "_")}_${payslipData.payPeriod.replace(/\s+/g, "_")}.pdf`);
    } catch (err) {
      console.error(err);
      alert("Error generating payslip PDF.");
    } finally {
      setIsGenerating(false);
    }
  };

  // Generate Offer Letter PDF using jsPDF
  const generateOfferPDF = () => {
    setIsGenerating(true);
    try {
      const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      // Colors
      const primaryColor = [217, 119, 6]; // Amber-600
      const textColor = [39, 39, 42]; // Zinc-800
      const textDark = [24, 24, 27]; // Zinc-900

      // Letterhead Top Border
      doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
      doc.rect(0, 0, 210, 8, "F");

      // Brand Logo / Header
      let currentY = 18;
      if (logoBase64) {
        doc.addImage(logoBase64, "PNG", 15, currentY, 35, 12);
        currentY += 16;
      } else {
        doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.text(company?.name || "AARNA INDIAN FOOD", 15, currentY);
        currentY += 10;
      }

      // Company info
      doc.setTextColor(113, 113, 122); // Zinc-500
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      const companyAddress = `${company?.street || "123 Main Rd"}, ${company?.city || "Georgetown"}, ${company?.state || "Demerara"}, ${company?.country || "Guyana"}`;
      doc.text(companyAddress, 15, currentY);
      doc.text(`Phone: ${company?.phone || "+592-xxx-xxxx"} | Email: ${company?.email || "info@aarnaindia.com"}`, 15, currentY + 4);

      // Divider line
      currentY = 40;
      doc.setDrawColor(228, 228, 231);
      doc.setLineWidth(0.3);
      doc.line(15, currentY, 195, currentY);

      // Date of Offer
      currentY += 10;
      doc.setTextColor(textDark[0], textDark[1], textDark[2]);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      const todayStr = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
      doc.text(`Date: ${todayStr}`, 15, currentY);

      // Candidate Address Block
      currentY += 10;
      doc.setFont("helvetica", "bold");
      doc.text("To,", 15, currentY);
      currentY += 4.5;
      doc.text(offerData.candidateName, 15, currentY);
      doc.setFont("helvetica", "normal");
      currentY += 4.5;
      
      // Handle candidate address multi-line wrapping
      const addrLines = doc.splitTextToSize(offerData.candidateAddress, 70);
      doc.text(addrLines, 15, currentY);
      
      currentY += (addrLines.length * 4) + 4;
      doc.text(`Email: ${offerData.candidateEmail}`, 15, currentY);
      doc.text(`Phone: ${offerData.candidatePhone}`, 15, currentY + 4);

      // Subject
      currentY += 12;
      doc.setFont("helvetica", "bold");
      doc.text(`SUBJECT: OFFER OF EMPLOYMENT FOR THE POSITION OF ${offerData.designation.toUpperCase()}`, 15, currentY);
      
      // Salutation
      currentY += 10;
      doc.text(`Dear ${offerData.candidateName},`, 15, currentY);

      // Body text - Paragraph 1
      currentY += 7;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9.5);
      const p1Text = `We are delighted to offer you employment at ${company?.name || "Aarna Indian Food"}. We were highly impressed by your experience and credentials, and we believe your skills will be a valuable addition to our culinary and hospitality operations.`;
      const p1Lines = doc.splitTextToSize(p1Text, 180);
      doc.text(p1Lines, 15, currentY);

      // Body text - Paragraph 2
      currentY += (p1Lines.length * 5) + 3;
      const p2Text = `This offer is for the role of ${offerData.designation} in our ${offerData.department} department. You will report directly to the ${offerData.reportingManager}. Your proposed date of joining will be ${new Date(offerData.joiningDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}.`;
      const p2Lines = doc.splitTextToSize(p2Text, 180);
      doc.text(p2Lines, 15, currentY);

      // Compensation section
      currentY += (p2Lines.length * 5) + 6;
      doc.setFont("helvetica", "bold");
      doc.text("Compensation and Key Terms:", 15, currentY);

      currentY += 6;
      doc.setFillColor(250, 250, 250);
      doc.rect(15, currentY, 180, 28, "F");
      doc.setDrawColor(228, 228, 231);
      doc.rect(15, currentY, 180, 28);

      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.text("Base Remuneration:", 20, currentY + 7);
      doc.setFont("helvetica", "normal");
      doc.text(`${currencySymbol} ${Number(offerData.monthlySalary).toLocaleString()} per month (${currencyCode})`, 65, currentY + 7);

      doc.setFont("helvetica", "bold");
      doc.text("Probation Period:", 20, currentY + 14);
      doc.setFont("helvetica", "normal");
      doc.text(offerData.probationPeriod, 65, currentY + 14);

      doc.setFont("helvetica", "bold");
      doc.text("Reporting Manager:", 20, currentY + 21);
      doc.setFont("helvetica", "normal");
      doc.text(offerData.reportingManager, 65, currentY + 21);

      // Terms of acceptance
      currentY += 34;
      doc.setFontSize(9.5);
      const p3Text = `Please note that this offer is contingent upon successful reference checks and verification of your professional documents. If you accept this offer, please sign, date, and return a copy of this letter to us on or before ${new Date(offerData.deadlineDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}, failing which this offer shall stand withdrawn.`;
      const p3Lines = doc.splitTextToSize(p3Text, 180);
      doc.text(p3Lines, 15, currentY);

      // Signature section
      currentY += (p3Lines.length * 5) + 12;
      doc.setFont("helvetica", "bold");
      doc.text(`For ${company?.name || "Aarna Indian Food"},`, 15, currentY);

      currentY += 20;
      doc.setFont("helvetica", "normal");
      doc.text("Authorized Signatory", 15, currentY);

      // Candidate Acceptance block on same page
      currentY += 15;
      doc.setFillColor(244, 244, 245);
      doc.rect(15, currentY, 180, 25, "F");
      doc.rect(15, currentY, 180, 25);

      doc.setFont("helvetica", "bold");
      doc.text("Candidate Acceptance Statement:", 18, currentY + 6);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.5);
      doc.text("I accept the above offer of employment. I will join duty on the date mentioned above.", 18, currentY + 12);
      
      doc.text("Signature: _______________________", 18, currentY + 20);
      doc.text(`Date: _________________`, 120, currentY + 20);

      doc.save(`OfferLetter_${offerData.candidateName.replace(/\s+/g, "_")}.pdf`);
    } catch (err) {
      console.error(err);
      alert("Error generating offer letter PDF.");
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
                ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md shadow-orange-500/10"
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
                ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md shadow-orange-500/10"
                : "text-zinc-400 hover:text-white hover:bg-zinc-800/40"
            }`}
          >
            <FileText className="w-4 h-4 shrink-0" />
            <span>Offer Letter</span>
          </button>
        </div>

        {/* PAYSLIP FORM */}
        {activeTab === "payslip" && (
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <div>
                <h3 className="text-base font-bold text-white">Payslip Parameters</h3>
                <p className="text-zinc-500 text-[11px] mt-0.5">Enter monthly salary breakdown & details</p>
              </div>
              <button 
                onClick={() => setPayslipData({
                  employeeName: "John Doe",
                  employeeId: "EMP-2026-0045",
                  designation: "Sous Chef",
                  department: "Kitchen Operations",
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
                })}
                className="p-1.5 bg-zinc-950 border border-zinc-800 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-lg transition-all cursor-pointer"
                title="Reset Fields"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Fields layout */}
            <div className="space-y-5">
              <h4 className="text-[10px] font-extrabold uppercase tracking-wider text-amber-500">1. Employee Meta Summary</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Employee Name</label>
                  <input
                    type="text"
                    value={payslipData.employeeName}
                    onChange={(e) => setPayslipData({ ...payslipData, employeeName: e.target.value })}
                    className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-amber-500/50"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Employee ID / Code</label>
                  <input
                    type="text"
                    value={payslipData.employeeId}
                    onChange={(e) => setPayslipData({ ...payslipData, employeeId: e.target.value })}
                    className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-amber-500/50"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Designation / Title</label>
                  <input
                    type="text"
                    value={payslipData.designation}
                    onChange={(e) => setPayslipData({ ...payslipData, designation: e.target.value })}
                    className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-amber-500/50"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Department</label>
                  <input
                    type="text"
                    value={payslipData.department}
                    onChange={(e) => setPayslipData({ ...payslipData, department: e.target.value })}
                    className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-amber-500/50"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Bank Name</label>
                  <input
                    type="text"
                    value={payslipData.bankName}
                    onChange={(e) => setPayslipData({ ...payslipData, bankName: e.target.value })}
                    className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-amber-500/50"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Bank Account Number</label>
                  <input
                    type="text"
                    value={payslipData.accountNumber}
                    onChange={(e) => setPayslipData({ ...payslipData, accountNumber: e.target.value })}
                    className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-amber-500/50"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Pay Period (Month & Year)</label>
                  <input
                    type="text"
                    value={payslipData.payPeriod}
                    onChange={(e) => setPayslipData({ ...payslipData, payPeriod: e.target.value })}
                    placeholder="e.g. August 2026"
                    className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-amber-500/50"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Worked Days</label>
                    <input
                      type="number"
                      value={payslipData.workedDays}
                      onChange={(e) => setPayslipData({ ...payslipData, workedDays: e.target.value })}
                      className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-amber-500/50"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">LOP Days</label>
                    <input
                      type="number"
                      value={payslipData.lopDays}
                      onChange={(e) => setPayslipData({ ...payslipData, lopDays: e.target.value })}
                      className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-amber-500/50"
                    />
                  </div>
                </div>
              </div>

              <h4 className="text-[10px] font-extrabold uppercase tracking-wider text-amber-500 pt-2 border-t border-zinc-800">2. Salary Structure Details ({currencyCode})</h4>
              
              {/* Earnings column */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-zinc-950/40 p-4 border border-zinc-800 rounded-xl">
                <div className="space-y-4">
                  <h5 className="text-[11px] font-bold text-emerald-400 uppercase tracking-wide">Gross Earnings</h5>
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <label className="text-[10px] text-zinc-400">Basic Salary</label>
                      <input
                        type="number"
                        value={payslipData.basic}
                        onChange={(e) => setPayslipData({ ...payslipData, basic: Number(e.target.value) })}
                        className="w-full px-3.5 py-1.5 bg-zinc-950 border border-zinc-800 rounded-lg text-white text-xs focus:outline-none focus:border-amber-500/50"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] text-zinc-400">HRA (Housing)</label>
                      <input
                        type="number"
                        value={payslipData.hra}
                        onChange={(e) => setPayslipData({ ...payslipData, hra: Number(e.target.value) })}
                        className="w-full px-3.5 py-1.5 bg-zinc-950 border border-zinc-800 rounded-lg text-white text-xs focus:outline-none focus:border-amber-500/50"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] text-zinc-400">Conveyance Allowance</label>
                      <input
                        type="number"
                        value={payslipData.conveyance}
                        onChange={(e) => setPayslipData({ ...payslipData, conveyance: Number(e.target.value) })}
                        className="w-full px-3.5 py-1.5 bg-zinc-950 border border-zinc-800 rounded-lg text-white text-xs focus:outline-none focus:border-amber-500/50"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] text-zinc-400">Special Allowance</label>
                      <input
                        type="number"
                        value={payslipData.special}
                        onChange={(e) => setPayslipData({ ...payslipData, special: Number(e.target.value) })}
                        className="w-full px-3.5 py-1.5 bg-zinc-950 border border-zinc-800 rounded-lg text-white text-xs focus:outline-none focus:border-amber-500/50"
                      />
                    </div>
                  </div>
                </div>

                {/* Deductions column */}
                <div className="space-y-4">
                  <h5 className="text-[11px] font-bold text-red-400 uppercase tracking-wide">Deductions</h5>
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <label className="text-[10px] text-zinc-400">Provident Fund (EPF)</label>
                      <input
                        type="number"
                        value={payslipData.providentFund}
                        onChange={(e) => setPayslipData({ ...payslipData, providentFund: Number(e.target.value) })}
                        className="w-full px-3.5 py-1.5 bg-zinc-950 border border-zinc-800 rounded-lg text-white text-xs focus:outline-none focus:border-amber-500/50"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] text-zinc-400">Income Tax (TDS)</label>
                      <input
                        type="number"
                        value={payslipData.incomeTax}
                        onChange={(e) => setPayslipData({ ...payslipData, incomeTax: Number(e.target.value) })}
                        className="w-full px-3.5 py-1.5 bg-zinc-950 border border-zinc-800 rounded-lg text-white text-xs focus:outline-none focus:border-amber-500/50"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] text-zinc-400">Professional Tax</label>
                      <input
                        type="number"
                        value={payslipData.professionalTax}
                        onChange={(e) => setPayslipData({ ...payslipData, professionalTax: Number(e.target.value) })}
                        className="w-full px-3.5 py-1.5 bg-zinc-950 border border-zinc-800 rounded-lg text-white text-xs focus:outline-none focus:border-amber-500/50"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] text-zinc-400">Other Deductions</label>
                      <input
                        type="number"
                        value={payslipData.otherDeductions}
                        onChange={(e) => setPayslipData({ ...payslipData, otherDeductions: Number(e.target.value) })}
                        className="w-full px-3.5 py-1.5 bg-zinc-950 border border-zinc-800 rounded-lg text-white text-xs focus:outline-none focus:border-amber-500/50"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Generate Trigger */}
            <div className="pt-4 border-t border-zinc-800 flex justify-end">
              <button
                onClick={generatePayslipPDF}
                disabled={isGenerating}
                className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 disabled:opacity-50 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-orange-500/10"
              >
                <Download className="w-4 h-4 shrink-0" />
                <span>{isGenerating ? "Generating..." : "Generate & Download PDF"}</span>
              </button>
            </div>
          </div>
        )}

        {/* OFFER LETTER FORM */}
        {activeTab === "offer" && (
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <div>
                <h3 className="text-base font-bold text-white">Offer Letter Details</h3>
                <p className="text-zinc-500 text-[11px] mt-0.5">Enter key appointment metrics for candidate</p>
              </div>
              <button 
                onClick={() => setOfferData({
                  candidateName: "Jane Smith",
                  candidateAddress: "45 Main Street, Georgetown, Guyana",
                  candidateEmail: "janesmith@example.com",
                  candidatePhone: "+592-622-1234",
                  designation: "Restaurant Operations Manager",
                  department: "Management",
                  monthlySalary: 250000,
                  joiningDate: "2026-09-01",
                  reportingManager: "General Manager",
                  probationPeriod: "3 Months",
                  deadlineDate: "2026-08-15",
                })}
                className="p-1.5 bg-zinc-950 border border-zinc-800 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-lg transition-all cursor-pointer"
                title="Reset Fields"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Fields layout */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-extrabold uppercase tracking-wider text-amber-500">1. Candidate Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Candidate Full Name</label>
                  <input
                    type="text"
                    value={offerData.candidateName}
                    onChange={(e) => setOfferData({ ...offerData, candidateName: e.target.value })}
                    className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-amber-500/50"
                  />
                </div>
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Candidate Address</label>
                  <input
                    type="text"
                    value={offerData.candidateAddress}
                    onChange={(e) => setOfferData({ ...offerData, candidateAddress: e.target.value })}
                    className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-amber-500/50"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Candidate Email</label>
                  <input
                    type="email"
                    value={offerData.candidateEmail}
                    onChange={(e) => setOfferData({ ...offerData, candidateEmail: e.target.value })}
                    className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-amber-500/50"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Candidate Phone</label>
                  <input
                    type="text"
                    value={offerData.candidatePhone}
                    onChange={(e) => setOfferData({ ...offerData, candidatePhone: e.target.value })}
                    className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-amber-500/50"
                  />
                </div>
              </div>

              <h4 className="text-[10px] font-extrabold uppercase tracking-wider text-amber-500 pt-2 border-t border-zinc-800">2. Appointment & Offer Terms</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Job Designation</label>
                  <input
                    type="text"
                    value={offerData.designation}
                    onChange={(e) => setOfferData({ ...offerData, designation: e.target.value })}
                    className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-amber-500/50"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Department / Branch</label>
                  <input
                    type="text"
                    value={offerData.department}
                    onChange={(e) => setOfferData({ ...offerData, department: e.target.value })}
                    className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-amber-500/50"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Monthly Base Salary ({currencyCode})</label>
                  <input
                    type="number"
                    value={offerData.monthlySalary}
                    onChange={(e) => setOfferData({ ...offerData, monthlySalary: Number(e.target.value) })}
                    className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-amber-500/50"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Probation Duration</label>
                  <input
                    type="text"
                    value={offerData.probationPeriod}
                    onChange={(e) => setOfferData({ ...offerData, probationPeriod: e.target.value })}
                    placeholder="e.g. 3 Months"
                    className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-amber-500/50"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Date of Joining</label>
                  <input
                    type="date"
                    value={offerData.joiningDate}
                    onChange={(e) => setOfferData({ ...offerData, joiningDate: e.target.value })}
                    className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-amber-500/50"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Reporting Manager</label>
                  <input
                    type="text"
                    value={offerData.reportingManager}
                    onChange={(e) => setOfferData({ ...offerData, reportingManager: e.target.value })}
                    className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-amber-500/50"
                  />
                </div>
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Offer Acceptance Deadline</label>
                  <input
                    type="date"
                    value={offerData.deadlineDate}
                    onChange={(e) => setOfferData({ ...offerData, deadlineDate: e.target.value })}
                    className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-amber-500/50"
                  />
                </div>
              </div>
            </div>

            {/* Generate Trigger */}
            <div className="pt-4 border-t border-zinc-800 flex justify-end">
              <button
                onClick={generateOfferPDF}
                disabled={isGenerating}
                className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 disabled:opacity-50 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-orange-500/10"
              >
                <Download className="w-4 h-4 shrink-0" />
                <span>{isGenerating ? "Generating..." : "Generate & Download PDF"}</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* RIGHT COLUMN: Live Visual Preview */}
      <div className="lg:col-span-6 sticky top-8">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 md:p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Eye className="w-4 h-4 text-amber-500" />
                <span>Document Live Preview</span>
              </h3>
              <p className="text-zinc-500 text-[10px] mt-0.5">Real-time simulation of output file (A4 ratio)</p>
            </div>
            <span className="px-2 py-0.5 bg-zinc-850 border border-zinc-800 rounded-full text-[9px] font-semibold text-zinc-400 uppercase tracking-wider">
              {activeTab === "payslip" ? "Payslip" : "Letter Template"}
            </span>
          </div>

          {/* SIMULATED SHEET OF PAPER */}
          <div className="w-full aspect-[1/1.414] bg-white text-zinc-900 border border-zinc-300 rounded-lg p-5 sm:p-8 text-[9px] leading-relaxed shadow-xl overflow-y-auto select-none select-none scrollbar-thin">
            
            {/* Header / Brand Logo representation */}
            <div className="flex justify-between items-start border-b border-zinc-200 pb-4">
              <div>
                {/* Logo or Fallback */}
                {logoBase64 ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src="/aaran.png" alt="Aarna Logo" className="h-6 w-auto object-contain mb-1.5" />
                ) : (
                  <h4 className="text-xs font-black text-amber-600 tracking-wider mb-0.5">{company?.name || "AARNA INDIAN FOOD"}</h4>
                )}
                <p className="text-[7.5px] text-zinc-500 font-semibold">{company?.street || "123 Main Rd"}, {company?.city || "Georgetown"}</p>
                <p className="text-[7px] text-zinc-400">Phone: {company?.phone || "+592-xxx"} | Email: {company?.email || "info@aarnaindia.com"}</p>
              </div>
              <div className="text-right">
                <h3 className="text-[11px] font-black text-zinc-900 tracking-widest">
                  {activeTab === "payslip" ? "PAYSLIP" : "OFFER LETTER"}
                </h3>
                <p className="text-[7px] text-zinc-500 font-medium">
                  {activeTab === "payslip" ? `Pay Period: ${payslipData.payPeriod}` : `Date: ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}`}
                </p>
              </div>
            </div>

            {/* PREVIEW CONTENT - PAYSLIP */}
            {activeTab === "payslip" && (
              <div className="mt-5 space-y-4.5 animate-in fade-in duration-200">
                
                {/* Meta details */}
                <div className="bg-zinc-50 p-2.5 rounded border border-zinc-200/60 grid grid-cols-2 gap-y-1.5 text-[8px]">
                  <div><span className="font-bold text-zinc-500">Employee Name:</span> <span className="font-semibold text-zinc-800">{payslipData.employeeName}</span></div>
                  <div><span className="font-bold text-zinc-500">Employee ID:</span> <span className="font-semibold text-zinc-800">{payslipData.employeeId}</span></div>
                  <div><span className="font-bold text-zinc-500">Designation:</span> <span className="font-semibold text-zinc-800">{payslipData.designation}</span></div>
                  <div><span className="font-bold text-zinc-500">Department:</span> <span className="font-semibold text-zinc-800">{payslipData.department}</span></div>
                  <div><span className="font-bold text-zinc-500">Bank Name:</span> <span className="font-semibold text-zinc-800">{payslipData.bankName}</span></div>
                  <div><span className="font-bold text-zinc-500">Account No:</span> <span className="font-semibold text-zinc-800">{payslipData.accountNumber}</span></div>
                  <div><span className="font-bold text-zinc-500">Worked Days:</span> <span className="font-semibold text-zinc-800">{payslipData.workedDays}</span></div>
                  <div><span className="font-bold text-zinc-500">LOP Days:</span> <span className="font-semibold text-zinc-800">{payslipData.lopDays}</span></div>
                </div>

                {/* Earnings & Deductions Tables */}
                <div className="grid grid-cols-2 gap-4">
                  
                  {/* Earnings table */}
                  <div>
                    <div className="bg-zinc-100 p-1 font-bold text-center border border-zinc-300 border-b-0 text-[7.5px]">Earnings</div>
                    <table className="w-full border-collapse border border-zinc-300 text-[7px]">
                      <tbody>
                        <tr className="border-b border-zinc-200"><td className="p-1 text-zinc-600">Basic Salary</td><td className="p-1 text-right font-semibold">{currencySymbol} {Number(payslipData.basic).toLocaleString()}</td></tr>
                        <tr className="border-b border-zinc-200"><td className="p-1 text-zinc-600">HRA</td><td className="p-1 text-right font-semibold">{currencySymbol} {Number(payslipData.hra).toLocaleString()}</td></tr>
                        <tr className="border-b border-zinc-200"><td className="p-1 text-zinc-600">Conveyance</td><td className="p-1 text-right font-semibold">{currencySymbol} {Number(payslipData.conveyance).toLocaleString()}</td></tr>
                        <tr className="border-b border-zinc-200"><td className="p-1 text-zinc-600">Special Allow.</td><td className="p-1 text-right font-semibold">{currencySymbol} {Number(payslipData.special).toLocaleString()}</td></tr>
                        <tr className="bg-zinc-50 font-bold"><td className="p-1.5 text-zinc-800">Gross Earn.</td><td className="p-1.5 text-right text-zinc-800">{currencySymbol} {grossEarnings.toLocaleString()}</td></tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Deductions table */}
                  <div>
                    <div className="bg-zinc-100 p-1 font-bold text-center border border-zinc-300 border-b-0 text-[7.5px]">Deductions</div>
                    <table className="w-full border-collapse border border-zinc-300 text-[7px]">
                      <tbody>
                        <tr className="border-b border-zinc-200"><td className="p-1 text-zinc-600">Provident Fund</td><td className="p-1 text-right font-semibold">{currencySymbol} {Number(payslipData.providentFund).toLocaleString()}</td></tr>
                        <tr className="border-b border-zinc-200"><td className="p-1 text-zinc-600">Income Tax</td><td className="p-1 text-right font-semibold">{currencySymbol} {Number(payslipData.incomeTax).toLocaleString()}</td></tr>
                        <tr className="border-b border-zinc-200"><td className="p-1 text-zinc-600">Prof. Tax</td><td className="p-1 text-right font-semibold">{currencySymbol} {Number(payslipData.professionalTax).toLocaleString()}</td></tr>
                        <tr className="border-b border-zinc-200"><td className="p-1 text-zinc-600">Other Ded.</td><td className="p-1 text-right font-semibold">{currencySymbol} {Number(payslipData.otherDeductions).toLocaleString()}</td></tr>
                        <tr className="bg-zinc-50 font-bold"><td className="p-1.5 text-zinc-800">Total Ded.</td><td className="p-1.5 text-right text-zinc-800">{currencySymbol} {totalDeductions.toLocaleString()}</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Net take-home summary block */}
                <div className="bg-amber-50 border border-amber-300/80 p-2.5 rounded flex justify-between items-center text-[8.5px]">
                  <div>
                    <span className="font-extrabold text-zinc-700">NET TAKE-HOME PAY:</span>
                    <p className="text-[6.5px] text-zinc-400 font-semibold mt-0.5">Net Pay in Words: <span className="text-zinc-600 font-bold">{numberToWords(netPay)}</span></p>
                  </div>
                  <span className="text-xs font-black text-amber-700">{currencySymbol} {netPay.toLocaleString()}</span>
                </div>

                {/* Signatures simulation */}
                <div className="pt-8 flex justify-between items-end text-[7px] text-zinc-500">
                  <div className="text-center w-28">
                    <div className="border-t border-zinc-300 pt-1 font-semibold text-zinc-700">Employer Signatory</div>
                  </div>
                  <div className="text-center w-28">
                    <div className="border-t border-zinc-300 pt-1 font-semibold text-zinc-700">Employee Signature</div>
                  </div>
                </div>
              </div>
            )}

            {/* PREVIEW CONTENT - OFFER LETTER */}
            {activeTab === "offer" && (
              <div className="mt-5 space-y-4 text-[7.5px] text-zinc-800 animate-in fade-in duration-200">
                
                {/* To Block */}
                <div>
                  <p className="font-bold text-zinc-500">To,</p>
                  <p className="font-black text-zinc-900 text-[8px]">{offerData.candidateName}</p>
                  <p className="text-zinc-500">{offerData.candidateAddress}</p>
                  <p className="text-zinc-400 mt-0.5">Email: {offerData.candidateEmail} | Phone: {offerData.candidatePhone}</p>
                </div>

                {/* Subject */}
                <div className="font-black border-y border-zinc-150 py-1.5 text-[7.5px] text-zinc-900 uppercase">
                  Subject: Offer of Employment for the position of {offerData.designation}
                </div>

                {/* Salutation & Body */}
                <div className="space-y-2.5">
                  <p className="font-bold">Dear {offerData.candidateName},</p>
                  
                  <p>
                    We are delighted to offer you employment at <span className="font-bold text-zinc-900">{company?.name || "Aarna Indian Food"}</span>. 
                    We were highly impressed by your credentials, and we believe your skills will be a valuable addition to our operations.
                  </p>

                  <p>
                    This offer is for the role of <span className="font-bold text-zinc-900">{offerData.designation}</span> in the <span className="font-semibold">{offerData.department}</span> department reporting directly to the <span className="font-semibold">{offerData.reportingManager}</span>. Your proposed date of joining is <span className="font-semibold">{offerData.joiningDate}</span>.
                  </p>
                </div>

                {/* Key terms summary block */}
                <div className="bg-zinc-50 p-2.5 rounded border border-zinc-200 space-y-1 text-[7.5px]">
                  <div className="flex"><span className="w-28 font-bold text-zinc-500">Monthly Remuneration:</span><span className="font-bold text-zinc-800">{currencySymbol} {Number(offerData.monthlySalary).toLocaleString()} ({currencyCode})</span></div>
                  <div className="flex"><span className="w-28 font-bold text-zinc-500">Probation Period:</span><span className="font-semibold text-zinc-800">{offerData.probationPeriod}</span></div>
                  <div className="flex"><span className="w-28 font-bold text-zinc-500">Reporting Manager:</span><span className="font-semibold text-zinc-800">{offerData.reportingManager}</span></div>
                </div>

                {/* Deadline & Acceptance text */}
                <p className="text-[7px] text-zinc-500 leading-normal">
                  If you accept this offer, please sign, date, and return a copy of this letter on or before <span className="font-bold text-zinc-800">{offerData.deadlineDate}</span>.
                </p>

                {/* Closing and Acceptance Statement */}
                <div className="pt-4 flex justify-between items-start text-[7px] text-zinc-500">
                  <div>
                    <p className="font-bold text-zinc-700">For {company?.name || "Aarna Indian Food"},</p>
                    <p className="mt-10 font-semibold text-zinc-600">Authorized Signatory</p>
                  </div>
                  
                  <div className="bg-zinc-50 p-2 border border-zinc-200 rounded w-48 text-[6.5px]">
                    <p className="font-bold text-zinc-700">Candidate Acceptance:</p>
                    <p className="text-zinc-500 mt-1">I accept the offer and will join on the date mentioned.</p>
                    <p className="mt-5">Signature: __________________</p>
                  </div>
                </div>

              </div>
            )}

          </div>
        </div>
      </div>
      
    </div>
  );
}
