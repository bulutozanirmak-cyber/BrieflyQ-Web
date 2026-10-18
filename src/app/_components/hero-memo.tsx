import Link from "next/link";
import dossier from "@/data/dossier.json";
import TimeAgo from "@/app/_components/time-ago";

type Props = {
  slug?: string;
};

export default function HeroMemo({ slug }: Props) {
  const memo = dossier.lead_memo;
  const targetSlug = slug || memo.slug || "delaware-chancery-apex";

  return (
    <article className="lg:col-span-8 bg-[#0F1218] border border-[#1E2536] rounded-lg p-7 sm:p-9 hover:border-[#2E374D] transition duration-300 relative group">
      
      {/* Category, Docket, and Status */}
      <div className="flex flex-wrap items-center gap-3 mb-4 text-xs">
        <span className="px-2.5 py-1 rounded bg-[#EF4444]/10 text-[#F87171] border border-[#EF4444]/20 font-bold uppercase tracking-wider">
          {memo.status}
        </span>
        <span className="text-[#D4AF37] font-semibold tracking-wide">
          {memo.court}
        </span>
        <span className="text-slate-600">•</span>
        <span className="text-[#8E95A5]">{memo.docket}</span>
        <span className="text-slate-600">•</span>
        <TimeAgo date={memo.published_at_iso} format="short" className="text-[#8E95A5]" />
      </div>

      {/* Headline */}
      <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-white tracking-tight leading-[1.18] mb-6 group-hover:text-[#FAF7F2] transition">
        {memo.title}
      </h1>

      {/* GEO BLUF MEMO BLOCK (48-WORD MEMORANDUM) */}
      <div className="bluf-memo bg-[#141822] border-l-4 border-[#D4AF37] border-y border-r border-[#262E42] rounded-r-lg p-6 mb-7 shadow-lg transition-all duration-300">
        <div className="flex items-center justify-between mb-3 border-b border-[#262E42] pb-2.5">
          <div className="flex items-center gap-2 text-xs uppercase font-extrabold tracking-widest text-[#D4AF37]">
            <span>Executive Briefing Memorandum</span>
          </div>
          <span className="text-xs text-[#8E95A5] font-semibold tracking-wide">
            Verified Primary Docket
          </span>
        </div>
        
        {/* The Exact BLUF text */}
        <p className="text-base sm:text-lg font-serif italic text-[#FAF7F2] leading-relaxed mb-4">
          “{memo.bluf}”
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-[#262E42] text-xs text-[#8E95A5]">
          <div>
            <span className="text-[#7A8294] block uppercase text-[11px] tracking-wider font-bold">
              TARGET ASSET
            </span>{" "}
            <strong className="text-white">{memo.target_asset}</strong>
          </div>
          <div>
            <span className="text-[#7A8294] block uppercase text-[11px] tracking-wider font-bold">
              PREVALENT RISK
            </span>{" "}
            <strong className="text-[#EF4444]">{memo.prevalent_risk}</strong>
          </div>
          <div>
            <span className="text-[#7A8294] block uppercase text-[11px] tracking-wider font-bold">
              PRESIDING JURIST
            </span>{" "}
            <strong className="text-white">{memo.presiding_jurist}</strong>
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
            {memo.why_it_matters}
          </p>
        </div>

        <div className="border-l border-[#2B354D] pl-5">
          <h3 className="font-serif font-bold text-white text-lg tracking-tight mb-1.5 text-[#EAD7BA]">
            2. Precedent for Pending Technology Takeovers
          </h3>
          <p>
            {memo.between_the_lines}
          </p>
        </div>
      </div>

      {/* Primary Source Verification Badge */}
      <div className="mt-6 p-3.5 rounded bg-[#0B0E15] border border-[#1E2536] flex flex-wrap items-center justify-between gap-3 text-xs text-[#8E95A5]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
          <span className="text-[#D4AF37] font-bold uppercase tracking-wider text-[11px]">Primary Record:</span>
          <span className="text-white font-medium">{memo.primary_sources?.court}</span>
          <span className="text-slate-600">•</span>
          <span className="font-mono text-[#BAC1D2]">{memo.primary_sources?.docket_number}</span>
        </div>
        <div className="text-[11px] text-[#7A8294]">
          <span className="text-[#D4AF37] font-semibold">Statute:</span> {memo.primary_sources?.governing_statute}
        </div>
      </div>

      {/* Byline & Deep Dive CTA */}
      <div className="mt-8 pt-6 border-t border-[#1E2536] flex flex-wrap items-center justify-between gap-4 text-xs text-[#7A8294]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center font-serif text-[#D4AF37] font-bold text-sm">
            {memo.analyst.charAt(0)}
          </div>
          <div>
            <div className="font-bold text-white">{memo.analyst}</div>
            <div className="text-[12px] text-[#7A8294]">{memo.role}</div>
          </div>
        </div>
        <Link
          href={`/posts/${targetSlug}`}
          className="text-[#D4AF37] hover:text-[#EAD7BA] font-bold text-xs tracking-wider uppercase transition flex items-center gap-1.5"
        >
          Inspect Full Docket Dossier &rarr;
        </Link>
      </div>

    </article>
  );
}


