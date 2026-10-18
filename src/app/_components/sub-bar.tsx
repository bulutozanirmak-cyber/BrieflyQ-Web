export default function SubBar() {
  return (
    <div className="border-b border-[#1A1F2C] bg-[#0B0E14] py-2.5 px-4 text-xs">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-[#8E95A5] gap-2">
        <div className="flex items-center gap-2">
          <span className="text-[#D4AF37] font-bold uppercase tracking-wider">
            BrieflyQ Dispatch:
          </span>
          <span>
            Delaware Court of Chancery, M&A Antitrust, and Sovereign Capital Intelligence.
          </span>
        </div>
        <div className="flex items-center gap-4 font-medium">
          <span className="text-[#D4AF37]">Arbitrage Monitor: Active</span>
          <span className="text-slate-600">|</span>
          <span className="text-[#7A8294]">Primary Judicial Dockets</span>
        </div>
      </div>
    </div>
  );
}

