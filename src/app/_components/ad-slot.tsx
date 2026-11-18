"use client";

import { useEffect } from "react";

type Props = {
  slotType?: "leaderboard" | "in-article";
  className?: string;
};

export default function AdSlot({ slotType = "leaderboard", className = "" }: Props) {
  const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  useEffect(() => {
    if (adsenseClientId && typeof window !== "undefined") {
      try {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        // Ignored in development
      }
    }
  }, [adsenseClientId]);

  return (
    <div className={`my-10 select-none ${className}`}>
      <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-[#7A8294] font-semibold mb-2">
        <span>Market Bulletin & Institutional Placement</span>
        <span>BrieflyQ Commercial Desk</span>
      </div>

      <div className="border border-[#1E2536] bg-gradient-to-r from-[#0C0F15] via-[#10141D] to-[#0A0D13] rounded-lg p-5 sm:p-6 text-center relative overflow-hidden">
        {adsenseClientId ? (
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client={adsenseClientId}
            data-ad-slot="1234567890"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        ) : (
          <div className="max-w-xl mx-auto py-2">
            <span className="inline-block px-2.5 py-0.5 rounded bg-[#D4AF37]/15 text-[#D4AF37] font-bold text-[11px] uppercase tracking-wider mb-2">
              Underwriting & Sponsorship Slot
            </span>
            <p className="text-sm font-serif font-semibold text-white tracking-tight mb-1">
              Institutional Placements for Corporate Practices & Investment Banks
            </p>
            <p className="text-xs text-[#8E95A5] leading-relaxed mb-3">
              Reach General Counsel, M&A directors, and private credit allocators across Wilmington, Wall Street, and the City of London.
            </p>
            <a
              href="mailto:contact@brieflyq.com?subject=BrieflyQ%20Institutional%20Sponsorship%20Inquiry"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#D4AF37] hover:text-white transition"
            >
              Inquire for Syndication Placements &rarr;
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
