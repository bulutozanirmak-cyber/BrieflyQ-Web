import Link from "next/link";

type Props = {
  slug?: string;
};

export default function HeroMemo({ slug = "delaware-chancery-apex" }: Props) {
  return (
    <article className="lg:col-span-8 bg-[#0F1218] border border-[#1E2536] rounded-lg p-7 sm:p-9 hover:border-[#2E374D] transition duration-300 relative group">
      
      {/* Category, Docket, and Status */}
      <div className="flex flex-wrap items-center gap-3 mb-4 text-xs">
        <span className="px-2.5 py-1 rounded bg-[#EF4444]/10 text-[#F87171] border border-[#EF4444]/20 font-bold uppercase tracking-wider">
          Injunction Granted
        </span>
        <span className="text-[#D4AF37] font-semibold tracking-wide">
          Delaware Court of Chancery
        </span>
        <span className="text-slate-600">•</span>
        <span className="text-[#8E95A5]">Civil Action No. 2024-0982-KSJM</span>
        <span className="text-slate-600">•</span>
        <span className="text-[#8E95A5]">18 mins ago</span>
      </div>

      {/* Headline */}
      <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-white tracking-tight leading-[1.18] mb-6 group-hover:text-[#FAF7F2] transition">
        Chancellor McCormick Freezes $8.4B Apex Acquisition of CyberLogic, Establishing Novel Antitrust Monopsony Doctrine
      </h1>

      {/* GEO BLUF MEMO BLOCK (48-WORD MEMORANDUM) */}
      <div className="bluf-memo bg-[#141822] border-l-4 border-[#D4AF37] border-y border-r border-[#262E42] rounded-r-lg p-6 mb-7 shadow-lg transition-all duration-300">
        <div className="flex items-center justify-between mb-3 border-b border-[#262E42] pb-2.5">
          <div className="flex items-center gap-2 text-xs uppercase font-extrabold tracking-widest text-[#D4AF37]">
            <span>Executive Briefing Memorandum (BLUF)</span>
          </div>
          <span className="text-xs text-[#8E95A5] font-semibold tracking-wide">
            Machine-Scraped Citation Tier 1
          </span>
        </div>
        
        {/* The Exact 48-word BLUF text */}
        <p className="text-base sm:text-lg font-serif italic text-[#FAF7F2] leading-relaxed mb-4">
          “The Delaware Chancery Court granted an emergency preliminary injunction blocking Apex Capital’s acquisition of CyberLogic. Ruling that consolidated compute contracts constitute an anti-competitive restraint under Clayton Act Section 7, the court froze closing procedures, instantly collapsing merger arbitrage spreads by 1,420 basis points across institutional arbitrage desks.”
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-[#262E42] text-xs text-[#8E95A5]">
          <div>
            <span className="text-[#7A8294] block uppercase text-[11px] tracking-wider font-bold">
              TARGET ASSET
            </span>{" "}
            <strong className="text-white">CyberLogic (NASDAQ: CYBL)</strong>
          </div>
          <div>
            <span className="text-[#7A8294] block uppercase text-[11px] tracking-wider font-bold">
              PREVALENT RISK
            </span>{" "}
            <strong className="text-[#EF4444]">$1.9B Deal Spread Risk</strong>
          </div>
          <div>
            <span className="text-[#7A8294] block uppercase text-[11px] tracking-wider font-bold">
              PRESIDING JURIST
            </span>{" "}
            <strong className="text-white">McCormick, Chancellor</strong>
          </div>
        </div>
      </div>

      {/* Smart Brevity Sections */}
      <div className="regular-body space-y-6 text-[#BAC1D2] text-base leading-relaxed">
        <div className="border-l border-[#2B354D] pl-5">
          <h3 className="font-serif font-bold text-white text-lg tracking-tight mb-1.5 text-[#EAD7BA]">
            1. The Strategic Liability for Arbitrage Capital
          </h3>
          <p>
            Institutional desks holding multi-million spread exposures are recalibrating downside scenarios. The memorandum indicates that pre-scheduled break fees of $420M may become non-enforceable should the Clayton Act Section 7 claim prevail at the scheduled December 4 evidentiary hearing.
          </p>
        </div>

        <div className="border-l border-[#2B354D] pl-5">
          <h3 className="font-serif font-bold text-white text-lg tracking-tight mb-1.5 text-[#EAD7BA]">
            2. Precedent for Six Pending Technology Takeovers
          </h3>
          <p>
            Corporate legal officers at major Silicon Valley entities confirmed to BrieflyQ that four private equity syndicates have placed immediate holds on contract execution. The ruling directly impacts transactions involving exclusive sovereign cloud allocations.
          </p>
        </div>
      </div>

      {/* Byline & Deep Dive CTA */}
      <div className="mt-8 pt-6 border-t border-[#1E2536] flex flex-wrap items-center justify-between gap-4 text-xs text-[#7A8294]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center font-serif text-[#D4AF37] font-bold text-sm">
            V
          </div>
          <div>
            <div className="font-bold text-white">Jonathan Vance, J.D.</div>
            <div className="text-[12px] text-[#7A8294]">Chief Regulatory & Chancery Analyst</div>
          </div>
        </div>
        <Link
          href={`/posts/${slug}`}
          className="text-[#D4AF37] hover:text-[#EAD7BA] font-bold text-xs tracking-wider uppercase transition flex items-center gap-1.5"
        >
          Inspect Full Docket Dossier &rarr;
        </Link>
      </div>

    </article>
  );
}
