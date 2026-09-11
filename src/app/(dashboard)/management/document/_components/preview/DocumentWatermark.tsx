"use client";

import React from "react";
import Image from "next/image";

interface DocumentWatermarkProps {
  companyName?: string;
  hasLogo?: boolean;
}

export default function DocumentWatermark({ companyName, hasLogo = true }: DocumentWatermarkProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
      {hasLogo ? (
        <div className="relative w-56 h-56 md:w-64 md:h-64 opacity-[0.2] transform -rotate-12 transition-transform">
          <Image
            src="/aarna.png"
            alt="Watermark Logo"
            fill
            sizes="256px"
            className="object-contain"
            priority={false}
          />
        </div>
      ) : (
        <div className="text-center transform -rotate-25 opacity-[0.05]">
          <h1 className="text-4xl font-black tracking-widest text-zinc-900 uppercase">
            {companyName || "AARNA INDIAN FOOD"}
          </h1>
          <p className="text-xs tracking-widest font-bold text-zinc-700 uppercase mt-1">
            Official Document
          </p>
        </div>
      )}
    </div>
  );
}
