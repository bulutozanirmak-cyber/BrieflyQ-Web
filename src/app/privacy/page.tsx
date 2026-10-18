import Link from "next/link";
import Container from "@/app/_components/container";

export const metadata = {
  title: "Privacy & Executive Confidentiality Policy | BrieflyQ",
  description:
    "BrieflyQ executive data protection standards, strict zero-third-party tracker policy, and confidentiality protections for institutional subscribers.",
};

export default function PrivacyPage() {
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
              Confidentiality Protocol
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
              Executive Privacy & Data Protection Standard
            </h1>
            <p className="text-sm text-[#8E95A5]">
              Last revised: October 18, 2026 • Compliance: US & EU Institutional Standards
            </p>
          </div>

          <div className="space-y-8 text-base text-[#BAC1D2] leading-relaxed">
            <div className="bg-[#0F1218] border border-[#1E2536] rounded-lg p-7 space-y-4">
              <h2 className="text-xl font-serif font-bold text-white text-[#EAD7BA]">
                1. Zero Commercial Ad-Tracking & Behavioral Profiling
              </h2>
              <p className="text-sm text-[#8E95A5]">
                BrieflyQ operates exclusively on an institutional subscription and syndicated intelligence model. We do not deploy third-party advertising tracking pixels, cross-site trackers, or commercial telemetry scripts. Reading habits of corporate counsel and investment committees remain confidential.
              </p>
            </div>

            <div className="bg-[#0F1218] border border-[#1E2536] rounded-lg p-7 space-y-4">
              <h2 className="text-xl font-serif font-bold text-white text-[#EAD7BA]">
                2. Subscription Email Protection
              </h2>
              <p className="text-sm text-[#8E95A5]">
                Email addresses submitted to the 6:30 AM Chancery Memorandum syndicate are encrypted in transit and stored exclusively for dispatch delivery. We never sell, lease, or syndicate subscriber credentials to data brokers or recruitment aggregators.
              </p>
            </div>

            <div className="bg-[#0F1218] border border-[#1E2536] rounded-lg p-7 space-y-4">
              <h2 className="text-xl font-serif font-bold text-white text-[#EAD7BA]">
                3. Primary Public Record Ingestion
              </h2>
              <p className="text-sm text-[#8E95A5]">
                All docket information, corporate names, and judicial transcripts analyzed on BrieflyQ are derived from unsealed public records (PACER, RECAP, SEC EDGAR, FTC dockets). We strictly respect protective orders, sealed exhibits, and confidential business information designations entered by presiding jurists.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

