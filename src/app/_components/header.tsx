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
    <header className="border-b border-[#1A1F2C] bg-[#080A0E]/95 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          {/* THE GQ-STYLE BQ MONOGRAM LOGO */}
          <div className="flex items-center space-x-6">
            <Link href="/" className="group flex items-center gap-4">
              
              {/* BQ ICON (BOLD, UPRIGHT, GQ STYLE) */}
              <div className="flex flex-col items-center justify-center">
                <div className="bg-black border-2 border-white dark:border-[#D4AF37] px-3 py-1 shadow-2xl group-hover:border-white transition duration-200">
                  <span className="gq-monogram text-3xl sm:text-4xl text-white tracking-tighter uppercase inline-block">
                    B<span className="text-[#D4AF37] group-hover:text-white transition">Q</span>
                  </span>
                </div>
                {/* brieflyq placed directly underneath */}
                <span className="text-[9px] font-sans font-extrabold uppercase tracking-[0.42em] text-[#A0A7B5] group-hover:text-[#D4AF37] transition mt-1 pl-[0.42em]">
                  brieflyq
                </span>
              </div>

              {/* Tagline & Jurisdictions */}
              <div className="hidden sm:block border-l border-[#232938] pl-5 py-1">
                <div className="text-xs uppercase font-extrabold tracking-widest text-white leading-tight">
                  US Law & Capital Intelligence
                </div>
                <div className="text-[11px] text-[#7A8294] tracking-wider uppercase font-semibold mt-0.5">
                  For General Counsel, Boardrooms & Sovereign Funds
                </div>
              </div>

            </Link>
          </div>

          {/* Editorial Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs font-bold uppercase tracking-wider text-[#9FA6B6]">
            <Link href="/#dockets" className="text-white hover:text-[#D4AF37] transition">
              Chancery & Dockets
            </Link>
            <Link href="/#capital" className="hover:text-[#D4AF37] transition">
              Private Credit & M&A
            </Link>
            <Link href="/#regulatory" className="hover:text-[#D4AF37] transition">
              SEC & Antitrust
            </Link>
            <Link href="/#sovereign" className="hover:text-[#D4AF37] transition">
              Sovereign Wealth
            </Link>
            <Link href="/#dossiers" className="hover:text-[#D4AF37] transition flex items-center gap-1.5 text-[#D4AF37]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span> Executive Dossiers
            </Link>
          </nav>

          {/* Action Center */}
          <div className="flex items-center space-x-3">
            
            {/* GEO Mode Button */}
            <button
              onClick={toggleGeo}
              className={`flex items-center gap-2 px-3.5 py-2 rounded border text-xs font-bold tracking-wide transition cursor-pointer shadow-sm ${
                geoMode
                  ? "bg-[#D4AF37] text-slate-950 border-[#D4AF37]"
                  : "border-[#D4AF37]/50 bg-[#D4AF37]/10 text-[#F2F4F8] hover:bg-[#D4AF37]/20"
              }`}
            >
              <svg className="w-3.5 h-3.5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
              </svg>
              <span>{geoMode ? "GEO Briefing: Active" : "GEO Briefing: Off"}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded border border-[#1F2533] text-[#7A8294] hover:text-white hover:bg-[#161B24] transition"
              title="Toggle Theme"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </button>

            {/* Partner Brief CTA */}
            <Link
              href="/#newsletter"
              className="hidden sm:inline-flex px-4 py-2 rounded bg-[#D4AF37] hover:bg-[#E5C158] text-slate-950 font-extrabold text-xs tracking-wider uppercase transition shadow-sm"
            >
              Partner Brief
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}
