"use client";

import React from "react";
import { RefreshCw, Download, Building, DollarSign, CheckCircle } from "lucide-react";
import { PayslipData } from "../types";

interface PayslipFormProps {
  payslipData: PayslipData;
  setPayslipData: React.Dispatch<React.SetStateAction<PayslipData>>;
  currencyCode: string;
  isGenerating: boolean;
  onGenerate: () => void;
}

export default function PayslipForm({
  payslipData,
  setPayslipData,
  currencyCode,
  isGenerating,
  onGenerate,
}: PayslipFormProps) {
  const handleReset = () => {
    setPayslipData({
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
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
        <div>
          <h3 className="text-base font-bold text-white">Payslip Parameters</h3>
          <p className="text-zinc-500 text-[11px] mt-0.5">Enter monthly salary breakdown & details</p>
        </div>
        <button
          onClick={handleReset}
          className="p-1.5 bg-zinc-950 border border-zinc-800 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-lg transition-all cursor-pointer"
          title="Reset to Sample Data"
        >
          <RefreshCw className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 1. Employee Meta Summary */}
      <div className="space-y-4">
        <h4 className="text-[10px] font-extrabold uppercase tracking-wider text-orange-500">
          1. Employee Meta Summary
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
              Employee Name
            </label>
            <input
              type="text"
              value={payslipData.employeeName}
              onChange={(e) => setPayslipData({ ...payslipData, employeeName: e.target.value })}
              className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-orange-500/50"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
              Employee ID / Code
            </label>
            <input
              type="text"
              value={payslipData.employeeId}
              onChange={(e) => setPayslipData({ ...payslipData, employeeId: e.target.value })}
              className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-orange-500/50"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
              Designation / Title
            </label>
            <input
              type="text"
              value={payslipData.designation}
              onChange={(e) => setPayslipData({ ...payslipData, designation: e.target.value })}
              className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-orange-500/50"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
              Department
            </label>
            <input
              type="text"
              value={payslipData.department}
              onChange={(e) => setPayslipData({ ...payslipData, department: e.target.value })}
              className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-orange-500/50"
            />
          </div>

          {/* Payment Mode Selector */}
          <div className="space-y-1.5 md:col-span-2">
            <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
              Payment Mode
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setPayslipData({ ...payslipData, paymentMode: "Bank Transfer" })}
                className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center justify-center gap-2 ${
                  payslipData.paymentMode === "Bank Transfer"
                    ? "bg-orange-500/15 border-orange-500 text-orange-400 shadow-sm shadow-orange-500/10"
                    : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                }`}
              >
                <Building className="w-3.5 h-3.5" />
                <span>Bank Transfer</span>
              </button>
              <button
                type="button"
                onClick={() => setPayslipData({ ...payslipData, paymentMode: "Cash" })}
                className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center justify-center gap-2 ${
                  payslipData.paymentMode === "Cash"
                    ? "bg-emerald-500/15 border-emerald-500 text-emerald-400 shadow-sm shadow-emerald-500/10"
                    : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                }`}
              >
                <DollarSign className="w-3.5 h-3.5" />
                <span>Cash Payment</span>
              </button>
            </div>
          </div>

          {payslipData.paymentMode === "Bank Transfer" ? (
            <>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                  Bank Name
                </label>
                <input
                  type="text"
                  value={payslipData.bankName}
                  onChange={(e) => setPayslipData({ ...payslipData, bankName: e.target.value })}
                  className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-orange-500/50"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                  Bank Account Number
                </label>
                <input
                  type="text"
                  value={payslipData.accountNumber}
                  onChange={(e) => setPayslipData({ ...payslipData, accountNumber: e.target.value })}
                  className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-orange-500/50"
                />
              </div>
            </>
          ) : (
            <div className="md:col-span-2 p-3 bg-emerald-500/10 border border-emerald-500/25 rounded-xl flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400 shrink-0">
                <CheckCircle className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-emerald-400">Cash Payment Selected</p>
                <p className="text-[11px] text-zinc-400">
                  Salary is recorded as Cash in Hand disbursement. Bank account fields are omitted from the voucher.
                </p>
              </div>
            </div>
          )}

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
              Pay Period (Month & Year)
            </label>
            <input
              type="text"
              value={payslipData.payPeriod}
              onChange={(e) => setPayslipData({ ...payslipData, payPeriod: e.target.value })}
              placeholder="e.g. August 2026"
              className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-orange-500/50"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                Worked Days
              </label>
              <input
                type="number"
                value={payslipData.workedDays}
                onChange={(e) => setPayslipData({ ...payslipData, workedDays: e.target.value })}
                className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-orange-500/50"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                LOP Days
              </label>
              <input
                type="number"
                value={payslipData.lopDays}
                onChange={(e) => setPayslipData({ ...payslipData, lopDays: e.target.value })}
                className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-xs focus:outline-none focus:border-orange-500/50"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2. Salary Structure Details */}
      <div className="space-y-4">
        <h4 className="text-[10px] font-extrabold uppercase tracking-wider text-orange-500 pt-2 border-t border-zinc-800">
          2. Salary Structure Details ({currencyCode})
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-zinc-950/40 p-4 border border-zinc-800 rounded-xl">
          {/* Earnings */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-white block border-b border-zinc-800/80 pb-1.5">
              Monthly Earnings
            </span>
            <div className="space-y-1">
              <label className="text-[10px] text-zinc-400">Basic Salary</label>
              <input
                type="number"
                value={payslipData.basic}
                onChange={(e) => setPayslipData({ ...payslipData, basic: Number(e.target.value) })}
                className="w-full px-3.5 py-1.5 bg-zinc-950 border border-zinc-800 rounded-lg text-white text-xs focus:outline-none focus:border-orange-500/50"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] text-zinc-400">House Rent Allowance (HRA)</label>
              <input
                type="number"
                value={payslipData.hra}
                onChange={(e) => setPayslipData({ ...payslipData, hra: Number(e.target.value) })}
                className="w-full px-3.5 py-1.5 bg-zinc-950 border border-zinc-800 rounded-lg text-white text-xs focus:outline-none focus:border-orange-500/50"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] text-zinc-400">Conveyance Allowance</label>
              <input
                type="number"
                value={payslipData.conveyance}
                onChange={(e) => setPayslipData({ ...payslipData, conveyance: Number(e.target.value) })}
                className="w-full px-3.5 py-1.5 bg-zinc-950 border border-zinc-800 rounded-lg text-white text-xs focus:outline-none focus:border-orange-500/50"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] text-zinc-400">Special Allowance</label>
              <input
                type="number"
                value={payslipData.special}
                onChange={(e) => setPayslipData({ ...payslipData, special: Number(e.target.value) })}
                className="w-full px-3.5 py-1.5 bg-zinc-950 border border-zinc-800 rounded-lg text-white text-xs focus:outline-none focus:border-orange-500/50"
              />
            </div>
          </div>

          {/* Deductions */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-white block border-b border-zinc-800/80 pb-1.5">
              Monthly Deductions
            </span>
            <div className="space-y-1">
              <label className="text-[10px] text-zinc-400">Provident Fund (PF)</label>
              <input
                type="number"
                value={payslipData.providentFund}
                onChange={(e) => setPayslipData({ ...payslipData, providentFund: Number(e.target.value) })}
                className="w-full px-3.5 py-1.5 bg-zinc-950 border border-zinc-800 rounded-lg text-white text-xs focus:outline-none focus:border-orange-500/50"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] text-zinc-400">Income Tax (TDS)</label>
              <input
                type="number"
                value={payslipData.incomeTax}
                onChange={(e) => setPayslipData({ ...payslipData, incomeTax: Number(e.target.value) })}
                className="w-full px-3.5 py-1.5 bg-zinc-950 border border-zinc-800 rounded-lg text-white text-xs focus:outline-none focus:border-orange-500/50"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] text-zinc-400">Professional Tax</label>
              <input
                type="number"
                value={payslipData.professionalTax}
                onChange={(e) => setPayslipData({ ...payslipData, professionalTax: Number(e.target.value) })}
                className="w-full px-3.5 py-1.5 bg-zinc-950 border border-zinc-800 rounded-lg text-white text-xs focus:outline-none focus:border-orange-500/50"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] text-zinc-400">Other Deductions</label>
              <input
                type="number"
                value={payslipData.otherDeductions}
                onChange={(e) => setPayslipData({ ...payslipData, otherDeductions: Number(e.target.value) })}
                className="w-full px-3.5 py-1.5 bg-zinc-950 border border-zinc-800 rounded-lg text-white text-xs focus:outline-none focus:border-orange-500/50"
              />
            </div>
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
