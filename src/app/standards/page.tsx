import Link from "next/link";
import Container from "@/app/_components/container";

export const metadata = {
  title: "Editorial Standards & Verification Policy | BrieflyQ",
  description:
    "The editorial verification standards, docket sourcing principles, and conflict of interest policies governing BrieflyQ legal and capital intelligence.",
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
              Editorial Policy & Governance
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
              Editorial Integrity & Verification Standards
            </h1>
            <p className="text-sm text-[#8E95A5]">
              BrieflyQ Editorial Board & Judicial Intelligence Practice • Effective 2026
            </p>
          </div>

          <div className="space-y-10 text-base text-[#BAC1D2] leading-relaxed">
            
            <section className="bg-[#0F1218] border border-[#1E2536] rounded-lg p-7">
              <h2 className="text-2xl font-serif font-bold text-white mb-3 text-[#EAD7BA]">
                1. Executive Brevity Principle
              </h2>
              <p className="mb-4">
                Every dispatch published across BrieflyQ is engineered specifically for General Counsel, corporate directors, and institutional investment committees. We eliminate editorial filler, speculative reporting, and secondhand wire summaries.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-3 border-t border-[#1E2536]">
                <div className="p-3.5 rounded bg-[#141822] border border-[#232A3D]">
                  <strong className="text-[#D4AF37] block uppercase text-[11px] mb-1">Direct Jurisprudential Impact</strong>
                  Clear articulation of presiding jurists, regulatory bodies, and concrete commercial consequences for covered transactions.
                </div>
                <div className="p-3.5 rounded bg-[#141822] border border-[#232A3D]">
                  <strong className="text-[#D4AF37] block uppercase text-[11px] mb-1">Statutory Precision</strong>
                  Direct statutory citations and legal standard cross-references governing every judicial ruling and administrative decree.
                </div>
              </div>
            </section>

            <section className="bg-[#0F1218] border border-[#1E2536] rounded-lg p-7">
              <h2 className="text-2xl font-serif font-bold text-white mb-3 text-[#EAD7BA]">
                2. Mandatory Primary Docket Sourcing
              </h2>
              <p className="mb-4">
                All reporting originates exclusively from primary, verified legal filings, official government disclosures, and unsealed court documents:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-[#8E95A5]">
                <li><strong className="text-white">Delaware Court of Chancery:</strong> Formal docket records, memorandum opinions, bench rulings, and post-trial orders.</li>
                <li><strong className="text-white">SEC EDGAR:</strong> Forms 8-K, 10-Q, Schedule 13D, and Staff Legal Bulletins from the Division of Corporation Finance.</li>
                <li><strong className="text-white">Federal Antitrust Enforcement:</strong> FTC compulsory study orders, DOJ Civil Investigative Demands (CIDs), and merger challenge complaints.</li>
                <li><strong className="text-white">Appellate & Special Tribunals:</strong> Slip opinions from the U.S. Courts of Appeals and regulatory determinations under FIRRMA/CFIUS.</li>
              </ul>
            </section>

            <section className="bg-[#0F1218] border border-[#1E2536] rounded-lg p-7">
              <h2 className="text-2xl font-serif font-bold text-white mb-3 text-[#EAD7BA]">
                3. Editorial Independence & Conflict Policies
              </h2>
              <p>
                BrieflyQ analysts, legal correspondents, and contributing editors are strictly prohibited from maintaining direct equity, debt, or derivative positions in any commercial entity actively covered in our M&A arbitrage and litigation dockets. All intelligence is produced with complete editorial independence.
              </p>
            </section>

          </div>
        </div>
      </Container>
    </main>
  );
}
