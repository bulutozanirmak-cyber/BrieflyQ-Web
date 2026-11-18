import Link from "next/link";
import Image from "next/image";
import Container from "@/app/_components/container";

export const metadata = {
  title: "About BrieflyQ | Institutional Profile & Editorial Masthead",
  description:
    "BrieflyQ institutional profile, editorial masthead, primary source verification doctrine, and mission covering the Delaware Court of Chancery, Wall Street M&A, and Federal Agencies.",
};

export default function AboutPage() {
  const editorialBoard = [
    {
      name: "Jonathan Vance, J.D.",
      title: "Senior Editor, Delaware Chancery & Corporate Governance",
      bio: "Advising institutional allocators and transaction counsel on DGCL statutory amendments, MFW cleansing doctrines, and appraisal rights jurisprudence.",
      avatar: "/assets/blog/authors/jj.jpeg",
    },
    {
      name: "Elena Rostova, LL.M.",
      title: "Senior Regulatory Analyst, Antitrust & Cross-Border M&A",
      bio: "Specializing in FTC Section 6(b) inquiries, Hart-Scott-Rodino premerger notifications, DOJ antitrust civil investigative demands, and CFIUS reviews.",
      avatar: "/assets/blog/authors/joe.jpeg",
    },
    {
      name: "Marcus Sterling",
      title: "Principal Analyst, SEC Enforcement & Private Credit",
      bio: "Covering SEC Division of Corporation Finance administrative releases, Schedule 13D/G beneficial ownership modernizations, and syndicated debt liability management.",
      avatar: "/assets/blog/authors/tim.jpeg",
    },
  ];

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
              Institutional Profile & Masthead
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
              Intelligence Engineered for Legal & Capital Leaders
            </h1>
            <p className="text-sm text-[#8E95A5]">
              BrieflyQ Editorial Board • Wilmington • New York • London
            </p>
          </div>

          <div className="space-y-10 text-base text-[#BAC1D2] leading-relaxed">
            {/* Mission Section */}
            <section className="bg-[#0F1218] border border-[#1E2536] rounded-lg p-7 space-y-4">
              <h2 className="text-2xl font-serif font-bold text-[#EAD7BA]">
                The BrieflyQ Mandate
              </h2>
              <p className="text-sm text-[#8E95A5] leading-relaxed">
                BrieflyQ was founded on a singular premise: general counsel, corporate board directors, private equity sponsors, and arbitrage desks do not have time for secondhand wire reports, unverified speculation, or editorial filler.
              </p>
              <p className="text-sm text-[#8E95A5] leading-relaxed">
                We synthesize breaking judicial memorandum opinions from the <strong className="text-white">Delaware Court of Chancery</strong>, decisive orders from the <strong className="text-white">U.S. Federal Courts</strong>, and enforcement actions from the <strong className="text-white">SEC, FTC, and DOJ</strong> into concise, 30–60 word Bottom Line Up Front (BLUF) executive memorandums supported by direct statutory cross-references and verified docket records.
              </p>
            </section>

            {/* Editorial Masthead */}
            <section className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block mb-1">
                  Governance & Editorial Leadership
                </span>
                <h2 className="text-2xl font-serif font-bold text-white">
                  Editorial Masthead
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {editorialBoard.map((member) => (
                  <div
                    key={member.name}
                    className="bg-[#0F1218] border border-[#1E2536] rounded-lg p-5 flex flex-col justify-between hover:border-[#D4AF37]/50 transition"
                  >
                    <div>
                      <div className="w-16 h-16 rounded-full overflow-hidden border border-[#D4AF37] mb-4 relative">
                        <Image
                          src={member.avatar}
                          alt={member.name}
                          width={64}
                          height={64}
                          className="object-cover"
                        />
                      </div>
                      <h3 className="font-serif font-bold text-white text-base mb-1">
                        {member.name}
                      </h3>
                      <p className="text-[11px] text-[#D4AF37] font-semibold mb-3">
                        {member.title}
                      </p>
                      <p className="text-xs text-[#8E95A5] leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Verification & Conflict Policy */}
            <section className="bg-[#0F1218] border border-[#1E2536] rounded-lg p-7 space-y-4">
              <h2 className="text-xl font-serif font-bold text-[#EAD7BA]">
                Independence & Verification Principles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded bg-[#141822] border border-[#232A3D]">
                  <strong className="text-white block text-sm font-semibold mb-1">
                    Primary Sourced Only
                  </strong>
                  <p className="text-xs text-[#8E95A5]">
                    Zero reporting on rumors or unfiled complaints. Every intelligence dispatch directly anchors to a verified federal or Delaware court docket number.
                  </p>
                </div>
                <div className="p-4 rounded bg-[#141822] border border-[#232A3D]">
                  <strong className="text-white block text-sm font-semibold mb-1">
                    Strict Independence
                  </strong>
                  <p className="text-xs text-[#8E95A5]">
                    Contributing legal editors and analysts maintain zero proprietary trading exposure to securities covered in active litigation dossiers.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact & Submissions */}
            <section className="border-t border-[#1E2536] pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-serif font-bold text-white mb-1">
                  Institutional Inquiries & Docket Submissions
                </h3>
                <p className="text-xs text-[#8E95A5]">
                  To submit official unsealed court filings, contact the editorial desk directly:
                </p>
              </div>
              <a
                href="mailto:contact@brieflyq.com"
                className="px-5 py-2.5 rounded bg-[#141822] border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-bold text-xs uppercase tracking-wider transition whitespace-nowrap"
              >
                contact@brieflyq.com
              </a>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
}
