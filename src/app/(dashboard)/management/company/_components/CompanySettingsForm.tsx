"use client";

import { useState } from "react";
import { updateCompanyDetails } from "../actions";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

interface CompanySettingsFormProps {
  company: any;
}

export default function CompanySettingsForm({ company }: CompanySettingsFormProps) {
  const [name, setName] = useState(company?.name || "");
  const [phone, setPhone] = useState(company?.phone || "");
  const [email, setEmail] = useState(company?.email || "");
  const [website, setWebsite] = useState(company?.website || "");
  const [gstNumber, setGstNumber] = useState(company?.VATNumber || "");
  const [logoUrl, setLogoUrl] = useState(company?.logoUrl || "");
  const [description, setDescription] = useState(company?.description || "");
  
  const [street, setStreet] = useState(company?.street || "");
  const [city, setCity] = useState(company?.city || "");
  const [state, setState] = useState(company?.state || "");
  const [country, setCountry] = useState(company?.country || "");
  const [zipCode, setZipCode] = useState(company?.zipCode || "");
  
  const [currencyName, setCurrencyName] = useState(company?.currencyName || "United States Dollar");
  const [currencyCode, setCurrencyCode] = useState(company?.currencyCode || "USD");
  const [currencySymbol, setCurrencySymbol] = useState(company?.currencySymbol || "$");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("website", website);
    formData.append("gstNumber", gstNumber);
    formData.append("logoUrl", logoUrl);
    formData.append("description", description);
    formData.append("street", street);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("country", country);
    formData.append("zipCode", zipCode);
    formData.append("currencyName", currencyName);
    formData.append("currencyCode", currencyCode);
    formData.append("currencySymbol", currencySymbol);

    const res = await updateCompanyDetails(formData);
    if (res.success) {
      setMessage({ type: "success", text: "Company details updated successfully!" });
    } else {
      setMessage({ type: "error", text: res.error || "Failed to update details." });
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {message && (
        <div className={`p-4 border rounded-xl text-sm flex items-start gap-2.5 ${
          message.type === "success" 
            ? "bg-emerald-950/40 border-emerald-500/30 text-emerald-300"
            : "bg-red-950/40 border-red-500/30 text-red-300"
        }`}>
          {message.type === "success" ? (
            <CheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
          ) : (
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" />
          )}
          <span>{message.text}</span>
        </div>
      )}

      {/* General Settings */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-amber-500 border-b border-zinc-800 pb-2">General Info</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-zinc-300 uppercase">Company Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4.5 py-2.5 bg-zinc-950/80 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500/50 transition-all"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-zinc-300 uppercase">Phone Number</label>
            <input
              type="text"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4.5 py-2.5 bg-zinc-950/80 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500/50 transition-all"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-zinc-300 uppercase">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4.5 py-2.5 bg-zinc-950/80 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500/50 transition-all"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-zinc-300 uppercase">Website URL</label>
            <input
              type="text"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="w-full px-4.5 py-2.5 bg-zinc-950/80 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500/50 transition-all"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-zinc-300 uppercase">Tax ID / GST Number</label>
            <input
              type="text"
              value={gstNumber}
              onChange={(e) => setGstNumber(e.target.value)}
              className="w-full px-4.5 py-2.5 bg-zinc-950/80 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500/50 transition-all"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-zinc-300 uppercase">Logo URL</label>
            <input
              type="text"
              value={logoUrl}
              onChange={(e) => setLogoUrl(e.target.value)}
              className="w-full px-4.5 py-2.5 bg-zinc-950/80 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500/50 transition-all"
            />
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-zinc-300 uppercase">Description / Tagline</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={2}
            className="w-full px-4.5 py-2.5 bg-zinc-950/80 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500/50 transition-all"
          />
        </div>
      </div>

      {/* Address */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-amber-500 border-b border-zinc-800 pb-2">Address details</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-3 space-y-1.5">
            <label className="text-xs font-semibold text-zinc-300 uppercase">Street Address</label>
            <input
              type="text"
              required
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className="w-full px-4.5 py-2.5 bg-zinc-950/80 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500/50 transition-all"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-zinc-300 uppercase">City</label>
            <input
              type="text"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full px-4.5 py-2.5 bg-zinc-950/80 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500/50 transition-all"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-zinc-300 uppercase">State / Province</label>
            <input
              type="text"
              required
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full px-4.5 py-2.5 bg-zinc-950/80 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500/50 transition-all"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-zinc-300 uppercase">ZIP / Postal Code</label>
            <input
              type="text"
              required
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="w-full px-4.5 py-2.5 bg-zinc-950/80 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500/50 transition-all"
            />
          </div>
          <div className="md:col-span-3 space-y-1.5">
            <label className="text-xs font-semibold text-zinc-300 uppercase">Country</label>
            <input
              type="text"
              required
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full px-4.5 py-2.5 bg-zinc-950/80 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500/50 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Currency */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-amber-500 border-b border-zinc-800 pb-2">Currency & Language</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-zinc-300 uppercase">Currency Name</label>
            <input
              type="text"
              required
              value={currencyName}
              onChange={(e) => setCurrencyName(e.target.value)}
              className="w-full px-4.5 py-2.5 bg-zinc-950/80 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500/50 transition-all"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-zinc-300 uppercase">Currency ISO Code</label>
            <input
              type="text"
              required
              placeholder="e.g. USD, INR"
              value={currencyCode}
              onChange={(e) => setCurrencyCode(e.target.value)}
              className="w-full px-4.5 py-2.5 bg-zinc-950/80 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500/50 transition-all"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-zinc-300 uppercase">Currency Symbol</label>
            <input
              type="text"
              required
              placeholder="e.g. $, ₹"
              value={currencySymbol}
              onChange={(e) => setCurrencySymbol(e.target.value)}
              className="w-full px-4.5 py-2.5 bg-zinc-950/80 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500/50 transition-all"
            />
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-zinc-800 flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Saving settings...</span>
            </>
          ) : (
            <span>Save Settings</span>
          )}
        </button>
      </div>
    </form>
  );
}
