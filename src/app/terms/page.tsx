import Link from "next/link";
import Container from "@/app/_components/container";

export const metadata = {
  title: "Terms of Service & Institutional Agreement | BrieflyQ",
  description:
    "Terms of service, intellectual property guidelines, regulatory disclaimers, and institutional intelligence agreements governing the use of BrieflyQ.",
};

export default function TermsPage() {
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
              Legal Framework & Governance
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
              Terms of Service & Institutional Agreement
            </h1>
            <p className="text-sm text-[#8E95A5]">
              Last revised: November 18, 2026 • Governing Forum: State of Delaware, New York Commercial Division
            </p>
          </div>

          <div className="space-y-8 text-base text-[#BAC1D2] leading-relaxed">
            <div className="bg-[#0F1218] border border-[#1E2536] rounded-lg p-7 space-y-4">
              <h2 className="text-xl font-serif font-bold text-white text-[#EAD7BA]">
                1. Nature of Service & Professional Disclaimers
              </h2>
              <p className="text-sm text-[#8E95A5]">
                BrieflyQ provides institutional intelligence, regulatory filings synthesis, and judicial analysis concerning the Delaware Court of Chancery, Wall Street mergers and acquisitions, antitrust enforcement, and capital markets. The materials published on this website and in the 6:30 AM Chancery Memorandum are provided exclusively for informational, educational, and workflow reference.
              </p>
              <p className="text-sm text-[#8E95A5]">
                <strong className="text-white">Not Legal or Financial Advice:</strong> Content published across BrieflyQ does not constitute legal counsel, investment advice, formal valuation opinions, or solicitor solicitation under DGCL, NY UCC, or federal securities laws. Parties must consult qualified legal counsel and FINRA/SEC registered broker-dealers for transactional determinations.
              </p>
            </div>

            <div className="bg-[#0F1218] border border-[#1E2536] rounded-lg p-7 space-y-4">
              <h2 className="text-xl font-serif font-bold text-white text-[#EAD7BA]">
                2. Intellectual Property & Permitted Distribution
              </h2>
              <p className="text-sm text-[#8E95A5]">
                All proprietary syntheses, analytical memorandums, architectural diagrams, and editorial typography on BrieflyQ are protected by United States and international copyright laws. Subscribers and readers are granted a limited, revocable license to circulate brief excerpts for internal corporate committee, board briefing, and judicial argument preparation, provided appropriate attribution to <strong className="text-white">BrieflyQ (brieflyq.com)</strong> is maintained.
              </p>
            </div>

            <div className="bg-[#0F1218] border border-[#1E2536] rounded-lg p-7 space-y-4">
              <h2 className="text-xl font-serif font-bold text-white text-[#EAD7BA]">
                3. Primary Public Docket Accuracy & Corrections
              </h2>
              <p className="text-sm text-[#8E95A5]">
                BrieflyQ ingests public filings and dockets from CourtListener, PACER, SEC EDGAR, and administrative agency registers. While our editorial board verifies dockets against official repositories, court records and regulatory dockets may be subject to subsequent appeals, stays, vacaturs, or clerical modifications. We maintain a zero-tolerance factual verification standard and execute immediate corrections when judicial updates are entered.
              </p>
            </div>

            <div className="bg-[#0F1218] border border-[#1E2536] rounded-lg p-7 space-y-4">
              <h2 className="text-xl font-serif font-bold text-white text-[#EAD7BA]">
                4. Advertising, Commercial Sponsorship & Third-Party Cookies
              </h2>
              <p className="text-sm text-[#8E95A5]">
                In compliance with Google AdSense and third-party advertising partner requirements, BrieflyQ may display relevant commercial notices, institutional sponsor bulletins, and contextual market advertisements. Third-party vendors, including Google, may use cookies (such as the DoubleClick cookie) to serve advertisements based on a user’s prior visits to this website or other internet sites. Users may opt out of personalized advertising by visiting Google Ads Settings (<a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] underline">adssettings.google.com</a>).
              </p>
            </div>

            <div className="bg-[#0F1218] border border-[#1E2536] rounded-lg p-7 space-y-4">
              <h2 className="text-xl font-serif font-bold text-white text-[#EAD7BA]">
                5. Limitation of Liability & Dispute Jurisdiction
              </h2>
              <p className="text-sm text-[#8E95A5]">
                To the fullest extent permissible under applicable law, BrieflyQ, its editors, and contributing legal analysts disclaim liability for any indirect, incidental, or consequential damages resulting from reliance upon published dockets or market arbitrage summaries. Any disputes arising under these Terms shall be governed by the laws of the State of Delaware, with exclusive jurisdiction in the state or federal courts situated in Wilmington, Delaware.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
