"use client";

import React from "react";
import { RefreshCw, Download, Building, DollarSign } from "lucide-react";
import { OfferLetterData } from "../types";

interface OfferLetterFormProps {
  offerData: OfferLetterData;
  setOfferData: React.Dispatch<React.SetStateAction<OfferLetterData>>;
  currencyCode: string;
  isGenerating: boolean;
  onGenerate: () => void;
}

export default function OfferLetterForm({
  offerData,
  setOfferData,
  currencyCode,
  isGenerating,
  onGenerate,
}: OfferLetterFormProps) {
  const handleReset = () => {
    setOfferData({
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
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
        <div>
          <h3 className="text-base font-bold text-white">Offer Letter Details</h3>
          <p className="text-zinc-500 text-[11px] mt-0.5">Enter key appointment metrics for candidate</p>
        </div>
        <button
          onClick={handleReset}
          className="p-1.5 bg-zinc-950 border border-zinc-800 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-lg transition-all cursor-pointer"
          title="Reset to Sample Data"
        >
          <RefreshCw className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 1. Candidate Information */}
      <div className="space-y-4">
        <h4 className="text-[10px] font-extrabold uppercase tracking-wider text-orange-500">
          1. Candidate Information
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5 md:col-span-2">
            <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
              Candidate Full Name
            </label>
            <input
              type="text"
              value={offerData.candidateName}
              onChange={(e) => setOfferData({ ...offerData, candidateName: e.target.value })}
              className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-orange-500/50"
            />
          </div>

          <div className="space-y-1.5 md:col-span-2">
            <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
              Candidate Address
            </label>
            <input
              type="text"
              value={offerData.candidateAddress}
              onChange={(e) => setOfferData({ ...offerData, candidateAddress: e.target.value })}
              className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-orange-500/50"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
              Candidate Email
            </label>
            <input
              type="email"
              value={offerData.candidateEmail}
              onChange={(e) => setOfferData({ ...offerData, candidateEmail: e.target.value })}
              className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-orange-500/50"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
              Candidate Phone
            </label>
            <input
              type="text"
              value={offerData.candidatePhone}
              onChange={(e) => setOfferData({ ...offerData, candidatePhone: e.target.value })}
              className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-orange-500/50"
            />
          </div>
        </div>

        {/* 2. Appointment & Offer Terms */}
        <h4 className="text-[10px] font-extrabold uppercase tracking-wider text-orange-500 pt-2 border-t border-zinc-800">
          2. Appointment & Offer Terms
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
              Job Designation
            </label>
            <input
              type="text"
              value={offerData.designation}
              onChange={(e) => setOfferData({ ...offerData, designation: e.target.value })}
              className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-orange-500/50"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
              Department / Branch
            </label>
            <input
              type="text"
              value={offerData.department}
              onChange={(e) => setOfferData({ ...offerData, department: e.target.value })}
              className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-orange-500/50"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
              Monthly Base Salary ({currencyCode})
            </label>
            <input
              type="number"
              value={offerData.monthlySalary}
              onChange={(e) => setOfferData({ ...offerData, monthlySalary: Number(e.target.value) })}
              className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-orange-500/50"
            />
          </div>

          {/* Payment Mode Selector */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
              Salary Payment Mode
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setOfferData({ ...offerData, paymentMode: "Bank Transfer" })}
                className={`py-2 px-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  offerData.paymentMode === "Bank Transfer"
                    ? "bg-orange-500/15 border-orange-500 text-orange-400 shadow-sm shadow-orange-500/10"
                    : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                }`}
              >
                <Building className="w-3.5 h-3.5" />
                <span>Bank</span>
              </button>
              <button
                type="button"
                onClick={() => setOfferData({ ...offerData, paymentMode: "Cash" })}
                className={`py-2 px-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  offerData.paymentMode === "Cash"
                    ? "bg-emerald-500/15 border-emerald-500 text-emerald-400 shadow-sm shadow-emerald-500/10"
                    : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                }`}
              >
                <DollarSign className="w-3.5 h-3.5" />
                <span>Cash</span>
              </button>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
              Probation Duration
            </label>
            <input
              type="text"
              value={offerData.probationPeriod}
              onChange={(e) => setOfferData({ ...offerData, probationPeriod: e.target.value })}
              placeholder="e.g. 3 Months"
              className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-orange-500/50"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
              Date of Joining
            </label>
            <input
              type="date"
              value={offerData.joiningDate}
              onChange={(e) => setOfferData({ ...offerData, joiningDate: e.target.value })}
              className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-orange-500/50"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
              Reporting Manager
            </label>
            <input
              type="text"
              value={offerData.reportingManager}
              onChange={(e) => setOfferData({ ...offerData, reportingManager: e.target.value })}
              className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-orange-500/50"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
              Acceptance Deadline
            </label>
            <input
              type="date"
              value={offerData.deadlineDate}
              onChange={(e) => setOfferData({ ...offerData, deadlineDate: e.target.value })}
              className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-orange-500/50"
            />
          </div>
        </div>
      </div>

      {/* Generate Action */}
      <div className="pt-4 border-t border-zinc-800 flex justify-end">
        <button
          onClick={onGenerate}
          disabled={isGenerating}
          className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 disabled:opacity-50 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-orange-600/20"
        >
          <Download className="w-4 h-4 shrink-0" />
          <span>{isGenerating ? "Generating..." : "Generate & Download PDF"}</span>
        </button>
      </div>
    </div>
  );
}
