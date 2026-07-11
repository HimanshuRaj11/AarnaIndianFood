"use client";

import React, { useState } from "react";
import { Send, Phone, Mail, MapPin, CheckCircle } from "lucide-react";

export default function PublicContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-16 select-none">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="text-[10px] text-amber-500 font-extrabold uppercase tracking-widest block">Get In Touch</span>
        <h1 className="text-4xl font-black text-white">Contact Us</h1>
        <p className="text-zinc-400 text-sm max-w-md mx-auto">
          Have an inquiry, feedback or catering request? Send us a message and our team will respond shortly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Contact Info (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 space-y-6">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider">Corporate Office</h3>
            
            <div className="space-y-5 text-xs text-zinc-300">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white mb-0.5">Address</h4>
                  <p className="text-zinc-400">12 Radial Road, Connaught Place, New Delhi, India 110001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white mb-0.5">Phone Line</h4>
                  <p className="text-zinc-400">+91 11 2341 5678</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white mb-0.5">Email Support</h4>
                  <p className="text-zinc-400">info@aarnaindianfood.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Message Form (7 cols) */}
        <div className="lg:col-span-7 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8">
          {success ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-white">Message Received!</h3>
              <p className="text-xs text-zinc-400 max-w-sm">
                Thank you for contacting us. We have successfully registered your inquiry and our support team will reach out to you within 24 hours.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="py-2.5 px-6 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-bold rounded-xl text-xs transition-all cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-2">Write a Message</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1.5">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-850 rounded-xl text-white placeholder-zinc-700 text-xs focus:outline-none focus:border-amber-500/50"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1.5">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-850 rounded-xl text-white placeholder-zinc-700 text-xs focus:outline-none focus:border-amber-500/50"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1.5">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Catering Request"
                  className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-850 rounded-xl text-white placeholder-zinc-700 text-xs focus:outline-none focus:border-amber-500/50"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1.5">Message Body</label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we help you..."
                  className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-850 rounded-xl text-white placeholder-zinc-700 text-xs focus:outline-none focus:border-amber-500/50 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-extrabold rounded-xl text-xs transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{submitting ? "Sending..." : "Submit Message"}</span>
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
}
