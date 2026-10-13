import Link from "next/link";
import { Post } from "@/interfaces/post";

type Props = {
  posts?: Post[];
};

export default function InstitutionalGrid({ posts = [] }: Props) {
  // If dynamic posts are present, we can map them or fallback to the curated institutional stories
  const defaultDispatches = [
    {
      category: "Private Credit Restructuring",
      categoryColor: "text-[#D4AF37]",
      time: "45m read",
      title: "Direct Lenders Force Super-Senior Recapitalization on $650M Enterprise SaaS Facilities",
      bluf: "Apollo and Ares completed a priority restructuring for CloudMetrics, subordinating mezzanine creditors following covenant breach. Coupon resets to SOFR + 750 bps with equity warrant dilution reaching 22% of total capitalization.",
      wordCount: 36,
      context: "The maneuver marks a sharp resurgence in aggressive liability management exercises (LMEs) across private debt portfolios facing multiple compression.",
      desk: "Credit Advisory Desk",
      slug: "private-credit-recapp",
    },
    {
      category: "Securities Class Action",
      categoryColor: "text-[#38BDF8]",
      time: "1h ago",
      title: "Second Circuit Reinstates Shareholder Action Over Premature AI GPU Revenue Bookings",
      bluf: "Overturning a lower dismissal, the 2nd U.S. Circuit Court ruled that premature recognition of cloud cluster pre-orders satisfies Section 10(b) scienter standards when top executives executed concurrent $45M in 10b5-1 executive stock dispositions.",
      wordCount: 41,
      context: "Circuit Judge Raymond Lohier ruled that customary forward-looking disclaimers fail to insulate corporate defendants when internal forecasts contradict GAAP.",
      desk: "Securities Litigation",
      slug: "second-circuit-gpu-ruling",
    },
    {
      category: "Antitrust Enforcement",
      categoryColor: "text-[#10B981]",
      time: "3h ago",
      title: "FTC Scrutinizes Frontier AI Hyperscaler Joint Ventures as De Facto Unreported Mergers",
      bluf: "The FTC issued formal 6(b) compulsory orders examining whether exclusive compute allocation agreements evade Hart-Scott-Rodino notification requirements. Regulators warned of daily civil penalties exceeding $50,120 per violation for structural circumvention.",
      wordCount: 44,
      context: "The inquiry scrutinizes multi-tier commercial observer rights that grant corporate giants operational oversight without official board votes.",
      desk: "Washington Bureau",
      slug: "ftc-ai-hyperscalers",
    },
  ];

  return (
    <div className="border-t border-[#1E2536] pt-10 mb-14">
      <div className="flex flex-wrap items-baseline justify-between mb-8 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block mb-1">
            The Capital & Court Ledger
          </span>
          <h2 className="text-3xl font-serif font-bold text-white tracking-tight">
            Institutional Analyses
          </h2>
        </div>
        <div className="text-xs text-[#8E95A5] font-medium">
          Curated by Wall Street and Chancery Court Legal Counsel
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {defaultDispatches.map((dispatch, idx) => (
          <article
            key={idx}
            className="bg-[#0F1218] border border-[#1E2536] rounded-lg p-6 hover:border-[#2E374D] transition duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-[#7A8294] mb-3">
                <span className={`font-bold uppercase tracking-wider ${dispatch.categoryColor}`}>
                  {dispatch.category}
                </span>
                <span>{dispatch.time}</span>
              </div>
              <h3 className="font-serif font-bold text-xl text-white group-hover:text-[#D4AF37] transition leading-snug mb-3.5">
                {dispatch.title}
              </h3>

              {/* BLUF MEMO BLOCK */}
              <div className="bluf-memo bg-[#141822] border-l-2 border-[#D4AF37] p-3.5 rounded-r text-xs text-[#BAC1D2] mb-4 transition-all">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF37] block mb-1">
                  ⚡ BLUF Memorandum ({dispatch.wordCount} Words):
                </span>
                {dispatch.bluf}
              </div>

              <p className="regular-body text-xs text-[#8E95A5] leading-relaxed">
                {dispatch.context}
              </p>
            </div>

            <div className="mt-5 pt-3.5 border-t border-[#1E2536] flex items-center justify-between text-xs text-[#7A8294]">
              <span className="font-medium">{dispatch.desk}</span>
              <Link
                href={`/posts/${dispatch.slug}`}
                className="text-[#D4AF37] font-bold group-hover:translate-x-0.5 transition"
              >
                Review Dossier &rarr;
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
