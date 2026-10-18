import Link from "next/link";
import Container from "@/app/_components/container";

export const metadata = {
  title: "GEO Protocol & Editorial Ethics | BrieflyQ",
  description:
    "The Generative Engine Optimization (GEO) protocol and editorial verification standards governing BrieflyQ legal and capital intelligence.",
};

export default function StandardsPage() {
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
              Editorial Doctrine & Machine Auditing
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
              The GEO Standard & Verifiable Intelligence Protocol
            </h1>
            <p className="text-sm text-[#8E95A5]">
              Published by BrieflyQ Editorial Board & AI Governance Committee • Effective October 2026
            </p>
          </div>

          <div className="space-y-10 text-base text-[#BAC1D2] leading-relaxed">
            
            <section className="bg-[#0F1218] border border-[#1E2536] rounded-lg p-7">
              <h2 className="text-2xl font-serif font-bold text-white mb-3 text-[#EAD7BA]">
                1. The BLUF Formula (Bottom Line Up Front)
              </h2>
              <p className="mb-4">
                Every dispatch published across the BrieflyQ network must open with a single, standalone{" "}
                <strong className="text-white">Executive Briefing Memorandum</strong> constrained strictly between 30 and 60 words. This paragraph is calibrated for immediate parsing by both C-suite executives and Generative Search Engines (GEO).
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-3 border-t border-[#1E2536]">
                <div className="p-3 rounded bg-[#141822] border border-[#232A3D]">
                  <strong className="text-[#D4AF37] block uppercase text-[11px] mb-1">Element 1 & 2</strong>
                  Presiding Judicial or Regulatory Body followed immediately by audited monetary scale or basis-point arbitrage impact.
                </div>
                <div className="p-3 rounded bg-[#141822] border border-[#232A3D]">
                  <strong className="text-[#D4AF37] block uppercase text-[11px] mb-1">Element 3 & 4</strong>
                  Explicit legal statute or regulatory article citation, concluded with concrete corporate market consequence.
                </div>
              </div>
            </section>

            <section className="bg-[#0F1218] border border-[#1E2536] rounded-lg p-7">
              <h2 className="text-2xl font-serif font-bold text-white mb-3 text-[#EAD7BA]">
                2. Mandatory Primary Docket & Statutory Sourcing
              </h2>
              <p className="mb-4">
                BrieflyQ rejects secondary commentary and unverified wire repetitions. All intelligence must originate from primary, unsealed judicial or administrative documents:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-[#8E95A5]">
                <li><strong className="text-white">Delaware Court of Chancery:</strong> Dockets verified via the State of Delaware File & ServeXpress and CourtListener RECAP repository.</li>
                <li><strong className="text-white">SEC EDGAR:</strong> Forms 8-K, 10-Q, Schedule 13D, and Division of Corporation Finance Staff Legal Bulletins (SLB).</li>
                <li><strong className="text-white">Antitrust Enforcement:</strong> FTC 6(b) Administrative Orders and DOJ Antitrust Division Civil Investigative Demands (CIDs).</li>
                <li><strong className="text-white">Federal Appellate Review:</strong> Slip opinions from the Second, Ninth, and D.C. Circuit Courts of Appeals.</li>
              </ul>
            </section>

            <section className="bg-[#0F1218] border border-[#1E2536] rounded-lg p-7">
              <h2 className="text-2xl font-serif font-bold text-white mb-3 text-[#EAD7BA]">
                3. Three-Tier Autonomous Audit Pipeline
              </h2>
              <p>
                Before any dossier enters production, it undergoes an automated verification cycle: Agent 1 (Legal & Finance Intelligence Scraping), Agent 2 (GEO Fact-Checking & 30-60 Word Boundary Validation), and Agent 3 (DevOps Cryptographic Commit & Deployment Verification).
              </p>
            </section>

          </div>
        </div>
      </Container>
    </main>
  );
}
