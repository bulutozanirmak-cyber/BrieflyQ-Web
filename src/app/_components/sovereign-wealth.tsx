import dossier from "@/data/dossier.json";

export default function SovereignWealth() {
  const briefs = dossier.sovereign_wealth_briefs || [];

  return (
    <section id="sovereign" className="border-t border-[#1E2536] pt-10 mb-14">
      <div className="flex flex-wrap items-baseline justify-between mb-8 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block mb-1">
            Global Capital & National Security
          </span>
          <h2 className="text-3xl font-serif font-bold text-white tracking-tight">
            Sovereign Wealth & Cross-Border Governance
          </h2>
        </div>
        <div className="text-xs text-[#8E95A5] font-medium">
          CFIUS Safe-Harbor, FIRRMA Statutory Audits & State-Funded Allocations
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {briefs.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#0F1218] border border-[#1E2536] rounded-lg p-6 hover:border-[#2E374D] transition duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-[#7A8294] mb-3">
                <span className="text-[#D4AF37] font-bold uppercase tracking-wider">
                  {item.fund}
                </span>
                <span className="px-2 py-0.5 rounded bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 font-semibold text-[11px]">
                  {item.scale}
                </span>
              </div>

              <h3 className="font-serif font-bold text-xl text-white group-hover:text-[#D4AF37] transition leading-snug mb-3">
                {item.headline}
              </h3>

              <div className="bluf-memo bg-[#141822] border-l-2 border-[#D4AF37] p-3.5 rounded-r text-xs text-[#BAC1D2] mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF37] block mb-1">
                  ⚡ Regulatory Posture: {item.status}
                </span>
                {item.summary}
              </div>
            </div>

            <div className="pt-3.5 border-t border-[#1E2536] flex flex-wrap items-center justify-between gap-2 text-xs text-[#7A8294]">
              <span className="font-mono text-[11px] text-[#8E95A5]">
                Statute: {item.statute}
              </span>
              <span className="text-[#10B981] font-semibold text-[11px] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span> Verified Cross-Border
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
