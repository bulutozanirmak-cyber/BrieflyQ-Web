import Link from "next/link";
import Container from "@/app/_components/container";

export const metadata = {
  title: "Institutional Access & Syndicate | BrieflyQ",
  description:
    "Institutional access tiers, API feeds, and bespoke terminal integration for General Counsel, Wall Street hedge funds, and sovereign investment authorities.",
};

export default function AccessPage() {
  return (
    <main className="py-12">
      <Container>
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="text-[#D4AF37] hover:text-[#FAF7F2] text-xs uppercase tracking-wider font-bold inline-flex items-center gap-1.5 transition mb-8"
          >
            &larr; Return to Intelligence Dashboard
          </Link>

          <div className="border-b border-[#1E2536] pb-6 mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block mb-2">
              Institutional Distribution
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
              Private Syndicate & Terminal Feeds
            </h1>
            <p className="text-sm text-[#8E95A5]">
              Tailored for General Counsel, Arbitrage Desks, and Sovereign Wealth Directors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            
            <div className="bg-[#0F1218] border border-[#1E2536] rounded-lg p-7 flex flex-col justify-between">
              <div>
                <span className="px-2.5 py-1 rounded bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 font-bold uppercase tracking-wider text-[11px] inline-block mb-3">
                  Syndicate Member
                </span>
                <h3 className="font-serif font-bold text-2xl text-white mb-2">
                  Daily 6:30 AM Chancery Memorandum
                </h3>
                <p className="text-xs text-[#8E95A5] leading-relaxed mb-4">
                  Delivered directly to corporate inboxes prior to Wall Street opening bell. Includes complete BLUF extracts, statutory risks, and overnight docket updates.
                </p>
                <ul className="text-xs space-y-2 text-[#BAC1D2] mb-6">
                  <li className="flex items-center gap-2">✓ Delaware Court of Chancery injunction alerts</li>
                  <li className="flex items-center gap-2">✓ SEC Division of Corporation Finance Staff Bulletins</li>
                  <li className="flex items-center gap-2">✓ Private credit liability management tracking</li>
                </ul>
              </div>
              <Link
                href="/#newsletter"
                className="w-full text-center py-2.5 rounded bg-[#D4AF37] hover:bg-[#E5C158] text-slate-950 font-bold text-xs uppercase tracking-wider transition"
              >
                Register Corporate Email
              </Link>
            </div>

            <div className="bg-[#0F1218] border border-[#2E374D] rounded-lg p-7 flex flex-col justify-between">
              <div>
                <span className="px-2.5 py-1 rounded bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20 font-bold uppercase tracking-wider text-[11px] inline-block mb-3">
                  Enterprise API & Webhooks
                </span>
                <h3 className="font-serif font-bold text-2xl text-white mb-2">
                  Institutional Machine Ingestion
                </h3>
                <p className="text-xs text-[#8E95A5] leading-relaxed mb-4">
                  Structured JSON payloads and RSS/Atom feeds configured for programmatic ingestion into internal firm risk models and Bloomberg terminals.
                </p>
                <ul className="text-xs space-y-2 text-[#BAC1D2] mb-6">
                  <li className="flex items-center gap-2">✓ Structured schema.org JSON-LD NewsArticle feeds</li>
                  <li className="flex items-center gap-2">✓ Sub-second webhook triggers upon docket filing unsealing</li>
                  <li className="flex items-center gap-2">✓ Full statutory cross-reference metadata</li>
                </ul>
              </div>
              <Link
                href="/#newsletter"
                className="w-full text-center py-2.5 rounded border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-slate-950 font-bold text-xs uppercase tracking-wider transition"
              >
                Request API Integration
              </Link>
            </div>

          </div>
        </div>
      </Container>
    </main>
  );
}
