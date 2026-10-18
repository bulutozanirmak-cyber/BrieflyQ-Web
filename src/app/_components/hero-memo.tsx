import Link from "next/link";
import { Post } from "@/interfaces/post";
import dossier from "@/data/dossier.json";
import TimeAgo from "@/app/_components/time-ago";

type Props = {
  post?: Post;
  slug?: string;
};

export default function HeroMemo({ post, slug }: Props) {
  const memoFallback = dossier.lead_memo;

  const targetSlug = post?.slug || slug || memoFallback.slug || "delaware-chancery-apex";
  const title = post?.title || memoFallback.title;
  const date = post?.date || memoFallback.published_at_iso;
  const analyst = post?.author?.name || memoFallback.analyst;
  const analystRole = "Senior Chancery & Regulatory Analyst";

  let bluf = post?.excerpt || memoFallback.bluf;
  let court = memoFallback.court;
  let docket = memoFallback.docket;
  let statute = memoFallback.primary_sources?.governing_statute || "Delaware General Corporation Law § 251";
  let jurist = memoFallback.presiding_jurist;
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
    <article className="lg:col-span-8 bg-[#0F1218] border border-[#1E2536] rounded-lg p-7 sm:p-9 hover:border-[#2E374D] transition duration-300 relative group">
      
      {/* Category, Docket, and Status */}
      <div className="flex flex-wrap items-center gap-3 mb-4 text-xs">
        <span className="px-2.5 py-1 rounded bg-[#EF4444]/10 text-[#F87171] border border-[#EF4444]/20 font-bold uppercase tracking-wider">
          {status}
        </span>
        <span className="text-[#D4AF37] font-semibold tracking-wide">
          {court}
        </span>
        <span className="text-slate-600">•</span>
        <span className="text-[#8E95A5]">{docket}</span>
        <span className="text-slate-600">•</span>
        <TimeAgo date={date} format="short" className="text-[#8E95A5]" />
      </div>

      {/* Headline */}
      <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-white tracking-tight leading-[1.18] mb-6 group-hover:text-[#FAF7F2] transition">
        <Link href={`/posts/${targetSlug}`}>{title}</Link>
      </h1>

      {/* EXECUTIVE MEMO BLOCK */}
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
          “{bluf}”
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-[#262E42] text-xs text-[#8E95A5]">
          <div>
            <span className="text-[#7A8294] block uppercase text-[11px] tracking-wider font-bold">
              JURISDICTION / FORUM
            </span>{" "}
            <strong className="text-white truncate block">{court}</strong>
          </div>
          <div>
            <span className="text-[#7A8294] block uppercase text-[11px] tracking-wider font-bold">
              PREVALENT EXPOSURE
            </span>{" "}
            <strong className="text-[#EF4444] truncate block">{prevalentRisk}</strong>
          </div>
          <div>
            <span className="text-[#7A8294] block uppercase text-[11px] tracking-wider font-bold">
              PRESIDING JURIST / AGENCY
            </span>{" "}
            <strong className="text-white truncate block">{jurist}</strong>
          </div>
        </div>
      </div>

      {/* Smart Brevity Sections */}
      <div className="regular-body space-y-6 text-[#BAC1D2] text-base leading-relaxed">
        <div className="border-l border-[#2B354D] pl-5">
          <h3 className="font-serif font-bold text-white text-lg tracking-tight mb-1.5 text-[#EAD7BA]">
            1. Strategic Impact & Capital Exposure
          </h3>
          <p>
            {whyItMatters}
          </p>
        </div>

        <div className="border-l border-[#2B354D] pl-5">
          <h3 className="font-serif font-bold text-white text-lg tracking-tight mb-1.5 text-[#EAD7BA]">
            2. Precedent for Transactions & Litigation
          </h3>
          <p>
            {betweenTheLines}
          </p>
        </div>
      </div>

      {/* Primary Source Verification Badge */}
      <div className="mt-6 p-3.5 rounded bg-[#0B0E15] border border-[#1E2536] flex flex-wrap items-center justify-between gap-3 text-xs text-[#8E95A5]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
          <span className="text-[#D4AF37] font-bold uppercase tracking-wider text-[11px]">Primary Record:</span>
          <span className="text-white font-medium">{court}</span>
          <span className="text-slate-600">•</span>
          <span className="font-mono text-[#BAC1D2]">{docket}</span>
        </div>
        <div className="text-[11px] text-[#7A8294]">
          <span className="text-[#D4AF37] font-semibold">Statute:</span> {statute}
        </div>
      </div>

      {/* Byline & Deep Dive CTA */}
      <div className="mt-8 pt-6 border-t border-[#1E2536] flex flex-wrap items-center justify-between gap-4 text-xs text-[#7A8294]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center font-serif text-[#D4AF37] font-bold text-sm">
            {analyst.charAt(0)}
          </div>
          <div>
            <div className="font-bold text-white">{analyst}</div>
            <div className="text-[12px] text-[#7A8294]">{analystRole}</div>
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
