"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [geoMode, setGeoMode] = useState(false);

  const toggleGeo = () => {
    const nextState = !geoMode;
    setGeoMode(nextState);
    const content = document.getElementById("contentArea");
    if (content) {
      if (nextState) {
        content.classList.add("geo-active");
      } else {
        content.classList.remove("geo-active");
      }
    }
  };

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      document.body.classList.remove("bg-[#080A0E]", "text-[#F2F4F8]");
      document.body.classList.add("bg-[#FAF7F2]", "text-slate-900");
    } else {
      html.classList.add("dark");
      document.body.classList.remove("bg-[#FAF7F2]", "text-slate-900");
      document.body.classList.add("bg-[#080A0E]", "text-[#F2F4F8]");
    }
  };

  return (
    <header className="border-b border-[#1A1F2C] bg-[#080A0E]/95 backdrop-blur-md sticky top-0 z-40 transition-colors duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          {/* THE GQ-STYLE BQ INSIGNIA & BRAND CREST */}
          <div className="flex items-center space-x-6">
            <Link href="/" className="group flex items-center gap-4.5">
              
              {/* BESPOKE BQ HERALDIC MONOGRAM EMBLEM */}
              <div className="flex flex-col items-center justify-center">
                <div className="relative bg-gradient-to-b from-[#141822] via-[#0F1218] to-[#0A0D13] border border-[#D4AF37]/60 ring-1 ring-[#D4AF37]/20 px-3.5 py-1.5 shadow-[0_0_18px_rgba(212,175,55,0.18)] group-hover:border-[#E5C158] group-hover:shadow-[0_0_26px_rgba(212,175,55,0.32)] transition-all duration-300 rounded-sm">
                  {/* Subtle inner corner marks */}
                  <span className="absolute top-0.5 left-0.5 w-1 h-1 border-t border-l border-[#D4AF37]/50" />
                  <span className="absolute bottom-0.5 right-0.5 w-1 h-1 border-b border-r border-[#D4AF37]/50" />
                  
                  <span className="gq-monogram text-3xl sm:text-[38px] text-white tracking-tighter uppercase inline-block leading-none select-none">
                    B<span className="text-[#D4AF37] group-hover:text-[#E5C158] transition-colors">Q</span>
                  </span>
                </div>
                {/* brieflyq tracked subtext */}
                <span className="text-[9.5px] font-sans font-black uppercase tracking-[0.42em] text-[#A0A7B5] group-hover:text-[#D4AF37] transition-colors mt-1.5 pl-[0.42em]">
                  brieflyq
                </span>
              </div>

              {/* Tagline & Jurisdictions */}
              <div className="hidden sm:block border-l border-[#232938] pl-5 py-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-white leading-tight">
                    US Law &amp; Capital Intelligence
                  </span>
                  <span className="hidden md:inline-flex items-center px-1.5 py-0.2 rounded text-[9px] font-bold uppercase tracking-wider bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30">
                    Chancery Apex
                  </span>
                </div>
                <div className="text-[11px] text-[#7A8294] tracking-wider uppercase font-medium mt-1 flex items-center gap-1.5">
                  <span>General Counsel</span>
                  <span className="text-slate-600">•</span>
                  <span>Boardrooms</span>
                  <span className="text-slate-600">•</span>
                  <span>Sovereign Funds</span>
                </div>
              </div>

            </Link>
          </div>

          {/* Editorial Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-xs font-bold uppercase tracking-wider text-[#9FA6B6]">
            <Link
              href="/#arbitrage-matrix"
              className="text-[#D4AF37] hover:text-white transition-colors flex items-center gap-1.5 font-extrabold relative group/item"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
              </span>
              <span>Arbitrage Matrix</span>
            </Link>
            
            <Link
              href="/#dockets"
              className="hover:text-[#D4AF37] transition-colors relative py-1 text-[#C4C9D4]"
            >
              Chancery &amp; Dockets
            </Link>
            
            <Link
              href="/#capital"
              className="hover:text-[#D4AF37] transition-colors relative py-1"
            >
              Private Credit &amp; M&amp;A
            </Link>
            
            <Link
              href="/#regulatory"
              className="hover:text-[#D4AF37] transition-colors relative py-1"
            >
              SEC &amp; Antitrust
            </Link>
            
            <Link
              href="/#sovereign"
              className="hover:text-[#D4AF37] transition-colors relative py-1"
            >
              Sovereign Wealth
            </Link>
            
            <Link
              href="/#dossiers"
              className="hover:text-[#D4AF37] transition-colors flex items-center gap-1 relative py-1"
            >
              Executive Dossiers
            </Link>
          </nav>

          {/* Action Center */}
          <div className="flex items-center space-x-3">
            
            {/* Executive Mode Toggle */}
            <button
              onClick={toggleGeo}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-md border text-xs font-bold tracking-wide transition-all duration-200 cursor-pointer shadow-sm ${
                geoMode
                  ? "bg-gradient-to-r from-[#D4AF37] to-[#E5C158] text-slate-950 border-[#D4AF37] shadow-[0_0_16px_rgba(212,175,55,0.4)]"
                  : "border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#F2F4F8] hover:bg-[#D4AF37]/20 hover:border-[#D4AF37]"
              }`}
              title="Toggle Executive View (High-priority BLUF focus)"
            >
              <svg className={`w-3.5 h-3.5 ${geoMode ? "text-slate-950" : "text-[#D4AF37]"}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
              </svg>
              <span>{geoMode ? "Executive View: Active" : "Executive View: Off"}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md border border-[#1F2533] bg-[#0E1219] text-[#7A8294] hover:text-white hover:border-[#2E374D] hover:bg-[#161B24] transition-all"
              title="Toggle Theme"
              aria-label="Toggle Theme"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </button>

            {/* Partner Brief CTA */}
            <Link
              href="/#newsletter"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-md bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#C59B27] hover:from-[#E5C158] hover:to-[#D4AF37] text-slate-950 font-extrabold text-xs tracking-wider uppercase transition-all duration-200 shadow-[0_2px_12px_rgba(212,175,55,0.25)] hover:shadow-[0_4px_20px_rgba(212,175,55,0.45)] hover:-translate-y-0.5"
            >
              Partner Brief
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}
