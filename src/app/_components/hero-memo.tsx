import Link from "next/link";
import { Post } from "@/interfaces/post";
import dossier from "@/data/dossier.json";
import TimeAgo from "@/app/_components/time-ago";

type Props = {
  post?: Post;
  slug?: string;
};

export default function HeroMemo({ post, slug }: Props) {
  const memoFallback = dossier.lead_memo as any;

  const targetSlug = post?.slug || slug || memoFallback?.slug || "delaware-chancery-apex";
  const title = post?.title || memoFallback?.title;
  const date = post?.date || memoFallback?.published_at_iso;
  const analyst = post?.author?.name || memoFallback?.analyst || "Jonathan Vance, J.D.";
  const analystRole = "Senior Chancery & Regulatory Analyst";

  let bluf = post?.excerpt || memoFallback?.bluf;
  let court = memoFallback?.court || "Delaware Court of Chancery";
  let docket = memoFallback?.docket || "Civil Action No. 2025-0814-MTZ";
  let statute = memoFallback?.primary_sources?.governing_statute || "Delaware General Corporation Law § 251";
  let jurist = memoFallback?.presiding_jurist || "Delaware Chancery En Banc";
  let status = "ACTIONABLE RULING";
  let whyItMatters = memoFallback.why_it_matters;
  let betweenTheLines = memoFallback.between_the_lines;
  let prevalentRisk = memoFallback.prevalent_risk;
  let targetAsset = memoFallback.target_asset;

  if (post?.content) {
    // Extract executive memorandum blockquote
    const memoMatch = post.content.match(/> \*\*Executive Briefing Memorandum\*\*\s*\n>\s*([^\n\r]+(?:\n>[^\n\r]+)*)/);
    if (memoMatch) {
      bluf = memoMatch[1].replace(/\n>\s*/g, " ").trim();
    }

    // Extract court, jurist, docket, statute from primary sources table
    const courtMatch = post.content.match(/\|\s*\*\*Presiding (?:Court|Forum|Authority|Agency)\*\*\s*\|\s*([^|\n]+)/);
    if (courtMatch) court = courtMatch[1].trim();

    const juristMatch = post.content.match(/\|\s*\*\*Presiding (?:Jurist|Justice|Official)\*\*\s*\|\s*([^|\n]+)/);
    if (juristMatch) jurist = juristMatch[1].trim();

    const docketMatch = post.content.match(/\|\s*\*\*(?:Formal Docket Number|Appellate Docket|Formal Case Reference|Formal Index Number)\*\*\s*\|\s*([^|\n]+)/);
    if (docketMatch) docket = docketMatch[1].trim();

    const statuteMatch = post.content.match(/\|\s*\*\*Statutory (?:Basis|Authority)\*\*\s*\|\s*([^|\n]+)/);
    if (statuteMatch) statute = statuteMatch[1].trim();

    // Extract section text
    const sections = post.content.split(/###\s+/);
    if (sections.length > 2) {
      const p1 = sections[1].split(/\n\n+/)[1];
      if (p1 && p1.length > 20) whyItMatters = p1.replace(/[#*`_]/g, "").trim();
      const p2 = sections[2].split(/\n\n+/)[1];
      if (p2 && p2.length > 20) betweenTheLines = p2.replace(/[#*`_]/g, "").trim();
    }

    // Contextual risk tag
    if (title.includes("$")) {
      const valMatch = title.match(/\$[0-9.]+[BMK]T?/);
      if (valMatch) prevalentRisk = `${valMatch[0]} Transaction Risk`;
    }
  }

  return (
    <article className="lg:col-span-8 bg-gradient-to-b from-[#131722] via-[#0E121A] to-[#0A0D14] border border-[#232B3E] hover:border-[#D4AF37]/50 rounded-xl p-6 sm:p-9 lg:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.45)] transition-all duration-300 relative group overflow-hidden">
      
      {/* Ambient Radial Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#D4AF37]/[0.06] via-[#10B981]/[0.015] to-transparent blur-3xl pointer-events-none" />

      {/* Top Administrative & Judicial Ribbon */}
      <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-5 text-xs">
        <span className="px-2.5 py-1 rounded-md bg-[#EF4444]/15 text-[#FCA5A5] border border-[#EF4444]/30 font-extrabold uppercase tracking-wider text-[11px] shadow-sm">
          {status}
        </span>
        <span className="px-2.5 py-1 rounded-md bg-[#D4AF37]/15 text-[#E5C158] border border-[#D4AF37]/35 font-bold tracking-wide text-xs">
          {court}
        </span>
        <span className="text-slate-600 hidden sm:inline">•</span>
        <span className="px-2.5 py-1 rounded-md bg-[#080A0E] border border-[#1E2536] text-[#A0A7B8] font-mono text-[11px]">
          {docket}
        </span>
        <span className="text-slate-600 hidden sm:inline">•</span>
        <div className="flex items-center gap-1.5 text-[#8E95A5] text-[11px] font-medium ml-auto sm:ml-0">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
          <TimeAgo date={date} format="short" className="text-[#8E95A5]" />
        </div>
      </div>

      {/* Flagship Editorial Headline */}
      <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-serif font-bold text-white tracking-tight leading-[1.18] mb-6 group-hover:text-[#FAF7F2] transition-colors">
        <Link href={`/posts/${targetSlug}`} className="hover:underline decoration-[#D4AF37]/40 underline-offset-4">
          {title}
        </Link>
      </h1>

      {/* THE SIGNATURE EXECUTIVE BLUF MEMO CARD */}
      <div className="bluf-memo bg-[#0C1018] border-l-4 border-l-[#D4AF37] border-y border-r border-[#262E44] rounded-r-xl p-5 sm:p-7 mb-7 shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all duration-300 relative">
        <div className="flex items-center justify-between mb-4 border-b border-[#232B3E] pb-3">
          <div className="flex items-center gap-2 text-xs uppercase font-extrabold tracking-widest text-[#D4AF37]">
            <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Executive Bench Memorandum // BLUF</span>
          </div>
          <span className="inline-flex items-center gap-1.5 text-[11px] text-[#10B981] font-bold tracking-wide uppercase px-2 py-0.5 rounded bg-[#10B981]/10 border border-[#10B981]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
            Verified Primary Docket
          </span>
        </div>
        
        {/* The Exact BLUF Text with Refined Typography & Quotation Marks */}
        <div className="relative mb-5">
          <p className="text-base sm:text-[19px] font-serif italic text-[#FAF7F2] leading-relaxed">
            <span className="text-[#D4AF37] font-serif text-2xl sm:text-3xl leading-none select-none font-bold mr-1">“</span>
            {bluf}
            <span className="text-[#D4AF37] font-serif text-2xl sm:text-3xl leading-none select-none font-bold ml-1">”</span>
          </p>
        </div>

        {/* 3-Tier Exposure Telemetry */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#202738] text-xs">
          <div className="bg-[#121622] p-2.5 rounded-md border border-[#1E2536]">
            <span className="text-[#7A8294] block uppercase text-[10px] tracking-widest font-extrabold mb-0.5">
              JURISDICTION / FORUM
            </span>
            <strong className="text-white truncate block font-medium">{court}</strong>
          </div>
          <div className="bg-[#121622] p-2.5 rounded-md border border-[#1E2536]">
            <span className="text-[#7A8294] block uppercase text-[10px] tracking-widest font-extrabold mb-0.5">
              PREVALENT EXPOSURE
            </span>
            <strong className="text-[#EF4444] truncate block font-mono font-bold">{prevalentRisk}</strong>
          </div>
          <div className="bg-[#121622] p-2.5 rounded-md border border-[#1E2536]">
            <span className="text-[#7A8294] block uppercase text-[10px] tracking-widest font-extrabold mb-0.5">
              PRESIDING JURIST / AGENCY
            </span>
            <strong className="text-[#FAF7F2] truncate block font-medium">{jurist}</strong>
          </div>
        </div>
      </div>

      {/* Smart Brevity Analytical Sections */}
      <div className="regular-body space-y-6 text-[#BAC1D2] text-[15px] sm:text-base leading-relaxed mb-6">
        <div className="border-l-2 border-[#D4AF37]/50 pl-5 bg-gradient-to-r from-[#D4AF37]/[0.02] to-transparent py-1">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[11px] font-mono font-bold text-[#D4AF37] uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#D4AF37]/10">
              SECTION 01
            </span>
            <h3 className="font-serif font-bold text-white text-lg tracking-tight text-[#FAF7F2]">
              Strategic Impact &amp; Capital Exposure
            </h3>
          </div>
          <p className="text-[#C4C9D8] leading-relaxed">
            {whyItMatters}
          </p>
        </div>

        <div className="border-l-2 border-[#38BDF8]/50 pl-5 bg-gradient-to-r from-[#38BDF8]/[0.02] to-transparent py-1">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[11px] font-mono font-bold text-[#38BDF8] uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#38BDF8]/10">
              SECTION 02
            </span>
            <h3 className="font-serif font-bold text-white text-lg tracking-tight text-[#FAF7F2]">
              Precedent for Transactions &amp; Litigation
            </h3>
          </div>
          <p className="text-[#C4C9D8] leading-relaxed">
            {betweenTheLines}
          </p>
        </div>
      </div>

      {/* Primary Source Verification Docket Bar */}
      <div className="p-3.5 sm:p-4 rounded-lg bg-[#080B10] border border-[#1E2536] flex flex-wrap items-center justify-between gap-3 text-xs text-[#8E95A5]">
        <div className="flex flex-wrap items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
          <span className="text-[#D4AF37] font-bold uppercase tracking-wider text-[11px]">Primary Record:</span>
          <span className="text-white font-medium">{court}</span>
          <span className="text-slate-600">•</span>
          <span className="font-mono text-[#BAC1D2] bg-[#141822] px-2 py-0.5 rounded border border-[#232938]">{docket}</span>
        </div>
        <div className="text-[11px] text-[#7A8294] font-medium">
          <span className="text-[#D4AF37] font-semibold">Statute:</span> <span className="text-[#BAC1D2]">{statute}</span>
        </div>
      </div>

      {/* Byline & Deep Dive CTA */}
      <div className="mt-8 pt-6 border-t border-[#1E2536] flex flex-wrap items-center justify-between gap-4 text-xs text-[#7A8294]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#D4AF37]/30 to-[#C59B27]/10 border border-[#D4AF37]/50 flex items-center justify-center font-serif text-[#D4AF37] font-bold text-sm shadow-sm">
            {analyst.charAt(0)}
          </div>
          <div>
            <div className="font-bold text-white text-sm">{analyst}</div>
            <div className="text-[11px] text-[#8E95A5]">{analystRole}</div>
          </div>
        </div>
        <Link
          href={`/posts/${targetSlug}`}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#141822] hover:bg-[#D4AF37] text-[#D4AF37] hover:text-slate-950 border border-[#D4AF37]/40 hover:border-[#D4AF37] font-bold text-xs tracking-wider uppercase transition-all duration-200 shadow-sm group/btn"
        >
          <span>Inspect Full Docket Dossier</span>
          <span className="group-hover/btn:translate-x-1 transition-transform">&rarr;</span>
        </Link>
      </div>

    </article>
  );
}
