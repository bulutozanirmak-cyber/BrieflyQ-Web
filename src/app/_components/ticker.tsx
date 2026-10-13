export default function Ticker() {
  return (
    <div className="border-b border-[#1A1F2C] bg-[#050608] py-2 px-4 text-xs select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D4AF37] tracking-wider uppercase shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span> Live Ledger
          </span>
          <div className="overflow-hidden whitespace-nowrap max-w-xl sm:max-w-3xl">
            <div className="ticker-track space-x-7 text-xs text-[#8E95A5]">
              <span>
                <strong className="text-[#F2F4F8] font-bold">S&P 500</strong> 5,864.67{" "}
                <span className="text-[#10B981] font-semibold">+0.77%</span>
              </span>
              <span className="text-slate-700">/</span>
              <span>
                <strong className="text-[#F2F4F8] font-bold">NASDAQ 100</strong> 18,502.61{" "}
                <span className="text-[#10B981] font-semibold">+1.12%</span>
              </span>
              <span className="text-slate-700">/</span>
              <span>
                <strong className="text-[#F2F4F8] font-bold">US 10Y YIELD</strong> 4.04%{" "}
                <span className="text-[#EF4444] font-semibold">-3 bps</span>
              </span>
              <span className="text-slate-700">/</span>
              <span>
                <strong className="text-[#D4AF37] font-bold">DELAWARE CHANCERY</strong> Apex Injunction Granted{" "}
                <span className="text-[#EF4444] font-semibold">DEAL FROZEN</span>
              </span>
              <span className="text-slate-700">/</span>
              <span>
                <strong className="text-[#F2F4F8] font-bold">SEC CORP FIN</strong> Digital Assets Rule 14a-8{" "}
                <span className="text-[#D4AF37] font-semibold">ACTIONABLE</span>
              </span>
              <span className="text-slate-700">/</span>
              <span>
                <strong className="text-[#F2F4F8] font-bold">SOFR 30D</strong> 4.88%{" "}
                <span className="text-slate-400 font-semibold">UNQ</span>
              </span>
              <span className="text-slate-700">/</span>
              <span>
                <strong className="text-[#F2F4F8] font-bold">S&P 500</strong> 5,864.67{" "}
                <span className="text-[#10B981] font-semibold">+0.77%</span>
              </span>
              <span className="text-slate-700">/</span>
              <span>
                <strong className="text-[#F2F4F8] font-bold">NASDAQ 100</strong> 18,502.61{" "}
                <span className="text-[#10B981] font-semibold">+1.12%</span>
              </span>
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-4 text-xs text-[#7A8294] font-medium">
          <span>New York • London Edition</span>
          <span>October 2026</span>
        </div>
      </div>
    </div>
  );
}
