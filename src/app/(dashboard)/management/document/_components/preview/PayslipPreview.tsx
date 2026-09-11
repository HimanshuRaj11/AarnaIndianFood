"use client";

import React from "react";
import Image from "next/image";
import { CompanyInfo, PayslipData } from "../types";
import { numberToWords } from "../utils/numberToWords";
import DocumentWatermark from "./DocumentWatermark";

interface PayslipPreviewProps {
  payslipData: PayslipData;
  company: CompanyInfo | null;
  grossEarnings: number;
  totalDeductions: number;
  netPay: number;
  currencySymbol: string;
  currencyCode: string;
}

export default function PayslipPreview({
  payslipData,
  company,
  grossEarnings,
  totalDeductions,
  netPay,
  currencySymbol,
  currencyCode,
}: PayslipPreviewProps) {
  return (
    <div className="relative w-full aspect-[1/1.414] bg-white text-zinc-900 border border-zinc-300 rounded-lg shadow-2xl overflow-hidden flex flex-col justify-between select-none">
      {/* 1. TOP ORANGE ACCENT HEADER BAR */}
      <div className="w-full">
        <div className="h-2 w-full bg-gradient-to-r from-orange-600 to-amber-500" />
        <div className="h-0.5 w-full bg-amber-400" />
      </div>

      {/* 2. CENTRAL WATERMARK */}
      <DocumentWatermark companyName={company?.name} hasLogo={true} />

      {/* 3. MAIN DOCUMENT BODY */}
      <div className="relative z-10 px-6 py-5 space-y-4 text-[8.5px] leading-relaxed flex-1 overflow-y-auto scrollbar-thin">
        {/* Brand Header */}
        <div className="flex justify-between items-start border-b border-amber-500/30 pb-3">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 shrink-0">
              <Image
                src="/aarna.png"
                alt="Aarna Logo"
                fill
                sizes="40px"
                className="object-contain"
              />
            </div>
            <div>
              <h4 className="text-xs font-black text-orange-600 tracking-wider">
                {company?.name || "AARNA INDIAN FOOD"}
              </h4>
              <p className="text-[7.5px] text-zinc-500 font-semibold">
                {company?.street || "123 Main Rd"}, {company?.city || "Georgetown"}, {company?.country || "Guyana"}
              </p>
              <p className="text-[7px] text-zinc-400">
                Phone: {company?.phone || "+592-xxx-xxxx"} | Email: {company?.email || "info@aarnaindia.com"}
              </p>
            </div>
          </div>

          <div className="text-right bg-orange-50/80 border border-amber-300/80 px-3 py-1.5 rounded">
            <h3 className="text-[10.5px] font-black text-orange-600 tracking-widest leading-tight">
              PAYSLIP
            </h3>
            <p className="text-[7px] text-zinc-600 font-medium mt-0.5">
              Pay Period: <span className="font-bold text-zinc-900">{payslipData.payPeriod}</span>
            </p>
          </div>
        </div>

        {/* Employee Summary Section */}
        <div className="space-y-1.5">
          <div className="bg-orange-50/70 border border-amber-200/80 px-2.5 py-1 rounded text-[7.5px] font-extrabold text-orange-700 uppercase tracking-wider">
            Employee Summary
          </div>
          <div className="bg-zinc-50/90 p-2.5 rounded border border-zinc-200 grid grid-cols-2 gap-y-1.5 text-[8px]">
            <div>
              <span className="font-bold text-zinc-500">Employee Name:</span>{" "}
              <span className="font-semibold text-zinc-800">{payslipData.employeeName}</span>
            </div>
            <div>
              <span className="font-bold text-zinc-500">Employee ID:</span>{" "}
              <span className="font-semibold text-zinc-800">{payslipData.employeeId}</span>
            </div>
            <div>
              <span className="font-bold text-zinc-500">Designation:</span>{" "}
              <span className="font-semibold text-zinc-800">{payslipData.designation}</span>
            </div>
            <div>
              <span className="font-bold text-zinc-500">Department:</span>{" "}
              <span className="font-semibold text-zinc-800">{payslipData.department}</span>
            </div>
            <div>
              <span className="font-bold text-zinc-500">Payment Mode:</span>{" "}
              <span
                className={`font-bold px-1 py-0.2 rounded text-[7px] ${
                  payslipData.paymentMode === "Cash"
                    ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                    : "bg-amber-100 text-amber-800 border border-amber-300"
                }`}
              >
                {payslipData.paymentMode}
              </span>
            </div>
            {payslipData.paymentMode === "Cash" ? (
              <div>
                <span className="font-bold text-zinc-500">Disbursement:</span>{" "}
                <span className="font-semibold text-emerald-700">Paid in Cash (Counter)</span>
              </div>
            ) : (
              <div>
                <span className="font-bold text-zinc-500">Bank:</span>{" "}
                <span className="font-semibold text-zinc-800">
                  {payslipData.bankName} (A/C: {payslipData.accountNumber})
                </span>
              </div>
            )}
            <div>
              <span className="font-bold text-zinc-500">Worked Days:</span>{" "}
              <span className="font-semibold text-zinc-800">{payslipData.workedDays} Days</span>
            </div>
            <div>
              <span className="font-bold text-zinc-500">LOP Days:</span>{" "}
              <span className="font-semibold text-zinc-800">{payslipData.lopDays} Days</span>
            </div>
          </div>
        </div>

        {/* Earnings & Deductions Tables */}
        <div className="grid grid-cols-2 gap-3">
          {/* Earnings */}
          <div>
            <div className="bg-orange-50 border border-amber-200/80 p-1 font-bold text-center text-[7.5px] text-orange-700">
              Earnings
            </div>
            <table className="w-full border-collapse border border-zinc-300 text-[7px]">
              <tbody>
                <tr className="border-b border-zinc-200">
                  <td className="p-1 text-zinc-600">Basic Salary</td>
                  <td className="p-1 text-right font-semibold">
                    {currencySymbol} {Number(payslipData.basic).toLocaleString()}
                  </td>
                </tr>
                <tr className="border-b border-zinc-200">
                  <td className="p-1 text-zinc-600">HRA</td>
                  <td className="p-1 text-right font-semibold">
                    {currencySymbol} {Number(payslipData.hra).toLocaleString()}
                  </td>
                </tr>
                <tr className="border-b border-zinc-200">
                  <td className="p-1 text-zinc-600">Conveyance</td>
                  <td className="p-1 text-right font-semibold">
                    {currencySymbol} {Number(payslipData.conveyance).toLocaleString()}
                  </td>
                </tr>
                <tr className="border-b border-zinc-200">
                  <td className="p-1 text-zinc-600">Special Allow.</td>
                  <td className="p-1 text-right font-semibold">
                    {currencySymbol} {Number(payslipData.special).toLocaleString()}
                  </td>
                </tr>
                <tr className="bg-orange-50/60 font-bold border-t border-amber-300">
                  <td className="p-1 text-orange-950">Gross Total</td>
                  <td className="p-1 text-right text-orange-950">
                    {currencySymbol} {grossEarnings.toLocaleString()}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Deductions */}
          <div>
            <div className="bg-orange-50 border border-amber-200/80 p-1 font-bold text-center text-[7.5px] text-orange-700">
              Deductions
            </div>
            <table className="w-full border-collapse border border-zinc-300 text-[7px]">
              <tbody>
                <tr className="border-b border-zinc-200">
                  <td className="p-1 text-zinc-600">Provident Fund</td>
                  <td className="p-1 text-right font-semibold">
                    {currencySymbol} {Number(payslipData.providentFund).toLocaleString()}
                  </td>
                </tr>
                <tr className="border-b border-zinc-200">
                  <td className="p-1 text-zinc-600">Income Tax</td>
                  <td className="p-1 text-right font-semibold">
                    {currencySymbol} {Number(payslipData.incomeTax).toLocaleString()}
                  </td>
                </tr>
                <tr className="border-b border-zinc-200">
                  <td className="p-1 text-zinc-600">Prof. Tax</td>
                  <td className="p-1 text-right font-semibold">
                    {currencySymbol} {Number(payslipData.professionalTax).toLocaleString()}
                  </td>
                </tr>
                <tr className="border-b border-zinc-200">
                  <td className="p-1 text-zinc-600">Other Ded.</td>
                  <td className="p-1 text-right font-semibold">
                    {currencySymbol} {Number(payslipData.otherDeductions).toLocaleString()}
                  </td>
                </tr>
                <tr className="bg-orange-50/60 font-bold border-t border-amber-300">
                  <td className="p-1 text-orange-950">Total Ded.</td>
                  <td className="p-1 text-right text-orange-950">
                    {currencySymbol} {totalDeductions.toLocaleString()}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Net Take-Home Summary Block */}
        <div className="bg-orange-50/90 border-2 border-orange-500/60 p-2.5 rounded flex justify-between items-center text-[8.5px] shadow-sm">
          <div>
            <span className="font-extrabold text-zinc-900 tracking-wide">NET TAKE-HOME PAY:</span>
            <p className="text-[6.5px] text-zinc-500 font-semibold mt-0.5">
              In Words: <span className="text-zinc-800 font-bold">{numberToWords(netPay)}</span>
            </p>
          </div>
          <div className="text-right flex flex-col items-end">
            <span
              className={`px-1.5 py-0.2 rounded text-[6.5px] font-extrabold uppercase tracking-wider mb-0.5 ${
                payslipData.paymentMode === "Cash"
                  ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                  : "bg-orange-100 text-orange-800 border border-orange-300"
              }`}
            >
              Mode: {payslipData.paymentMode}
            </span>
            <span className="text-sm font-black text-orange-600">
              {currencySymbol} {netPay.toLocaleString()} <span className="text-[7.5px] font-bold text-zinc-500">{currencyCode}</span>
            </span>
          </div>
        </div>

        {/* Signatures */}
        <div className="pt-6 flex justify-between items-end text-[7px] text-zinc-500">
          <div className="text-center w-28">
            <div className="border-t border-zinc-300 pt-1 font-semibold text-zinc-700">
              Employer Signatory
            </div>
          </div>
          <div className="text-center w-28">
            <div className="border-t border-zinc-300 pt-1 font-semibold text-zinc-700">
              Employee Signature
            </div>
          </div>
        </div>
      </div>

      {/* 4. ORANGE ACCENT FOOTER BAR */}
      <div className="w-full relative z-10">
        <div className="h-0.5 w-full bg-amber-400" />
        <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-6 py-1.5 flex justify-between items-center text-[7px]">
          <span className="font-bold tracking-wider uppercase">Official Record  •  Confidential</span>
          <span className="opacity-90">{company?.name || "Aarna Indian Food"} System Generated</span>
        </div>
      </div>
    </div>
  );
}
