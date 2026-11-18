import dossier from "@/data/dossier.json";

export default function SovereignWealth() {
  const briefs = dossier.sovereign_wealth_briefs || [];

  return (
    <section id="sovereign" className="border-t border-[#1E2536] pt-10 sm:pt-12 mb-16">
      
      {/* Editorial Header */}
      <div className="flex flex-wrap items-end justify-between mb-8 sm:mb-10 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
            <span className="text-[10.5px] font-mono font-bold uppercase tracking-widest text-[#D4AF37]">
              Global Capital &amp; National Security // FIRRMA Monitor
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-serif font-bold text-white tracking-tight">
            Sovereign Wealth &amp; Cross-Border Governance
          </h2>
        </div>
        <div className="text-xs text-[#8E95A5] font-medium">
          CFIUS Safe-Harbor, Statutory Audits &amp; Sovereign Co-Investments
        </div>
      </div>

      {/* 2-Column Sovereign Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {briefs.map((item, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-b from-[#131722] via-[#0E121A] to-[#0A0D14] border border-[#202738] hover:border-[#D4AF37]/50 rounded-xl p-6 sm:p-7 hover:shadow-[0_14px_40px_rgba(0,0,0,0.45)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Top ambient hover accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div>
              <div className="flex items-center justify-between text-xs mb-3.5">
                <span className="text-[#E5C158] font-mono font-bold uppercase tracking-wider text-xs">
                  {item.fund}
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-[#D4AF37]/15 text-[#E5C158] border border-[#D4AF37]/30 font-mono font-bold text-[11px]">
                  {item.scale}
                </span>
              </div>

              <h3 className="font-serif font-bold text-xl sm:text-[22px] text-white group-hover:text-[#D4AF37] transition-colors leading-snug mb-3.5">
                {item.headline}
              </h3>

              {/* Regulatory Posture BLUF Card */}
              <div className="bluf-memo bg-[#0C1018] border-l-2 border-l-[#D4AF37] border-y border-r border-[#1E2536] p-4 rounded-r-lg text-xs text-[#BAC1D2] mb-4.5 shadow-sm">
                <span className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#D4AF37] block mb-1">
                  ⚡ Regulatory Posture: {item.status}
                </span>
                <p className="text-[#C4C9D8] leading-relaxed">
                  {item.summary}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#1E2536] flex flex-wrap items-center justify-between gap-3 text-xs text-[#7A8294]">
              <span className="font-mono text-[11px] text-[#8E95A5] truncate max-w-sm">
                Statute: {item.statute}
              </span>
              <span className="text-[#10B981] font-semibold text-[11px] flex items-center gap-1.5 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                Verified Cross-Border
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
