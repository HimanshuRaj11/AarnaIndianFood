"use client";

import React from "react";
import Image from "next/image";
import { CompanyInfo, OfferLetterData } from "../types";
import DocumentWatermark from "./DocumentWatermark";

interface OfferLetterPreviewProps {
  offerData: OfferLetterData;
  company: CompanyInfo | null;
  currencySymbol: string;
  currencyCode: string;
}

export default function OfferLetterPreview({
  offerData,
  company,
  currencySymbol,
  currencyCode,
}: OfferLetterPreviewProps) {
  const todayStr = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="relative w-full aspect-[1/1.414] bg-white text-zinc-900 border border-zinc-300 rounded-lg shadow-2xl overflow-hidden flex flex-col justify-between select-none">
      {/* 1. TOP ORANGE ACCENT HEADER BAR */}
      <div className="w-full">
        <div className="h-4 w-full bg-gradient-to-r from-orange-600 to-amber-500" />
        <div className="h-1 w-full bg-amber-400" />
      </div>

      {/* 2. CENTRAL WATERMARK */}
      <DocumentWatermark companyName={company?.name} hasLogo={true} />

      {/* 3. MAIN DOCUMENT BODY */}
      <div className="relative z-10 px-6 py-4 space-y-3 text-[8px] leading-relaxed flex-1 overflow-y-auto scrollbar-thin">
        {/* Brand Header */}
        <div className="flex justify-between items-center border-b border-amber-500/30 pb-2.5">
          {/* Left: Company Details & Both Branch Addresses */}
          <div className="space-y-0.5 max-w-[72%]">
            <h4 className="text-[11px] font-black text-orange-600 tracking-wider">
              {company?.name || "AARNA INDIAN FOOD"}
            </h4>
            <div className="text-[6.8px] text-zinc-600 leading-tight space-y-0.5">
              <p>
                <span className="font-bold text-zinc-800">Georgetown:</span> Lot 51 Seaforth St, Campbellville, Georgetown, Guyana
              </p>
              <p>
                <span className="font-bold text-zinc-800">Berbice:</span> Lot 121, Public Road, No.2 Village, East Canje Berbice, Guyana
              </p>
            </div>
            <p className="text-[6.5px] text-zinc-500 pt-0.5">
              <span>Tel: {company?.phone || "+592 675-0093 / +592 759-3957"}</span>
              <span className="mx-1 text-zinc-300">|</span>
              <span>Email: {company?.email || "info@aarnaindianfood.com"}</span>
              <span className="mx-1 text-zinc-300">|</span>
              <span className="text-orange-600 font-bold">Web: aarnaindianfood.com</span>
            </p>
          </div>

          {/* Right: 50% Bigger Logo (60px vs 40px) */}
          <div className="relative w-[60px] h-[60px] shrink-0">
            <Image
              src="/aarna.png"
              alt="Aarna Logo"
              fill
              sizes="60px"
              className="object-contain"
            />
          </div>
        </div>

        {/* Document Title Bar */}
        <div className="flex justify-between items-center bg-orange-50/90 border border-amber-300/80 px-3 py-1 rounded shadow-xs">
          <h3 className="text-[9.5px] font-black text-orange-600 tracking-widest leading-tight">
            OFFER LETTER
          </h3>
          <p className="text-[7px] text-zinc-600 font-medium">
            Date: <span className="font-bold text-zinc-900">{todayStr}</span>
          </p>
        </div>

        {/* Candidate Address Block */}
        <div className="space-y-0.5 text-[7.5px]">
          <p className="font-bold text-zinc-500">To,</p>
          <p className="font-black text-zinc-900 text-[8.5px]">{offerData.candidateName}</p>
          <p className="text-zinc-600">{offerData.candidateAddress}</p>
          <p className="text-zinc-400">
            Email: {offerData.candidateEmail} | Phone: {offerData.candidatePhone}
          </p>
        </div>

        {/* Subject Header with Orange Styling */}
        <div className="bg-orange-50/80 border-l-2 border-orange-600 px-2.5 py-1 text-[7.5px] font-black text-orange-800 uppercase tracking-wide">
          Subject: Offer of Employment for the position of {offerData.designation}
        </div>

        {/* Letter Body */}
        <div className="space-y-2 text-[7.5px] text-zinc-700">
          <p className="font-bold text-zinc-900">Dear {offerData.candidateName},</p>
          <p>
            We are delighted to offer you employment at{" "}
            <span className="font-bold text-orange-700">{company?.name || "Aarna Indian Food"}</span>. We were
            highly impressed by your credentials and culinary experience, and believe your skills will be a great
            addition to our hospitality operations.
          </p>
          <p>
            This offer is for the role of{" "}
            <span className="font-bold text-zinc-900">{offerData.designation}</span> in the{" "}
            <span className="font-semibold">{offerData.department}</span> department, reporting directly to the{" "}
            <span className="font-semibold">{offerData.reportingManager}</span>. Proposed joining date is{" "}
            <span className="font-semibold text-zinc-900">{offerData.joiningDate}</span>.
          </p>
        </div>

        {/* Key Appointment Terms Box */}
        <div className="bg-orange-50/70 border border-amber-300/80 p-2.5 rounded space-y-1 text-[7.5px] shadow-sm">
          <div className="text-[7.5px] font-black text-orange-700 uppercase tracking-wider mb-1">
            Compensation & Key Terms
          </div>
          <div className="flex justify-between border-b border-amber-200/60 pb-0.5">
            <span className="font-bold text-zinc-600">Monthly Remuneration:</span>
            <span className="font-black text-orange-700">
              {currencySymbol} {Number(offerData.monthlySalary).toLocaleString()} ({currencyCode})
            </span>
          </div>
          <div className="flex justify-between border-b border-amber-200/60 pb-0.5">
            <span className="font-bold text-zinc-600">Salary Payment Mode:</span>
            <span
              className={`font-bold px-1 rounded text-[6.5px] ${
                offerData.paymentMode === "Cash"
                  ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                  : "bg-amber-100 text-amber-800 border border-amber-300"
              }`}
            >
              {offerData.paymentMode} {offerData.paymentMode === "Cash" ? "(Cash in Hand)" : "(Bank Direct)"}
            </span>
          </div>
          <div className="flex justify-between border-b border-amber-200/60 pb-0.5">
            <span className="font-bold text-zinc-600">Probation Period:</span>
            <span className="font-semibold text-zinc-800">{offerData.probationPeriod}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold text-zinc-600">Reporting Manager:</span>
            <span className="font-semibold text-zinc-800">{offerData.reportingManager}</span>
          </div>
        </div>

        {/* Deadline Notice */}
        <p className="text-[6.5px] text-zinc-500 leading-normal">
          Please confirm acceptance by signing and returning a copy on or before{" "}
          <span className="font-bold text-zinc-800">{offerData.deadlineDate}</span>.
        </p>

        {/* Signatures & Acceptance Declaration */}
        <div className="pt-2 flex justify-between items-start text-[7px] text-zinc-500">
          <div>
            <p className="font-bold text-zinc-700">For {company?.name || "Aarna Indian Food"},</p>
            <p className="mt-8 font-semibold text-zinc-600">Authorized Signatory</p>
          </div>

          <div className="bg-zinc-50 p-2 border border-zinc-200 rounded w-44 text-[6.5px]">
            <p className="font-bold text-zinc-700">Candidate Acceptance:</p>
            <p className="text-zinc-500 mt-0.5">I accept the offer and will join on the date mentioned.</p>
            <div className="mt-4 pt-1 border-t border-zinc-300 flex justify-between">
              <span>Sign: _________</span>
              <span>Date: _______</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. ORANGE ACCENT FOOTER BAR */}
      <div className="w-full relative z-10">
        <div className="h-1 w-full bg-amber-400" />
        <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-6 py-2 flex justify-between items-center text-[7px]">
          <span className="font-bold tracking-wider uppercase">Official Offer Document  •  Confidential</span>
          <span className="opacity-95 font-medium">aarnaindianfood.com  •  {company?.name || "Aarna Indian Food"}</span>
        </div>
      </div>
    </div>
  );
}
