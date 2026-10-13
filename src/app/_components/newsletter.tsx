"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <div className="border border-[#262E42] bg-gradient-to-r from-[#141824] via-[#10131C] to-[#080A0E] rounded-xl p-8 sm:p-12 relative overflow-hidden shadow-2xl mb-14">
      <div className="max-w-2xl">
        <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold block mb-2">
          Private Executive Syndicate
        </span>
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight mb-3">
          The 6:30 AM Chancery & Wall Street Memorandum.
        </h3>
        <p className="text-sm text-[#9FA6B6] leading-relaxed mb-6 font-normal">
          Designed specifically for corporate counsel, hedge fund general partners, and private equity decision-makers. No editorial filler — purely actionable BLUF digests, docket filings, and statutory cross-references.
        </p>

        {subscribed ? (
          <div className="p-4 rounded bg-[#10B981]/15 border border-[#10B981]/30 text-[#10B981] font-semibold text-xs tracking-wide">
            ✓ Partner request received. You will receive the 6:30 AM Chancery Intelligence Briefing.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="counsel@partnerfirm.com"
              required
              className="px-4 py-3 rounded bg-[#080A0E] border border-[#2B354D] text-white text-xs placeholder-[#6B7280] focus:outline-none focus:border-[#D4AF37] w-full sm:w-80 transition"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded bg-[#D4AF37] hover:bg-[#E5C158] text-slate-950 font-bold text-xs tracking-wider uppercase transition shadow-sm whitespace-nowrap"
            >
              Join 42,000+ Institutional Subscribers
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
