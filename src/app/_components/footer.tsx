import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#1A1F2C] bg-[#050608] py-14 text-xs text-[#7A8294]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* BQ Footer Brand */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center justify-center">
            <div className="bg-black border border-[#D4AF37] px-2 py-0.5 shadow-sm">
              <span className="gq-monogram text-xl text-white tracking-tighter uppercase inline-block">
                B<span className="text-[#D4AF37]">Q</span>
              </span>
            </div>
            <span className="text-[7px] font-sans font-bold uppercase tracking-[0.35em] text-[#8E95A5] mt-0.5 pl-[0.35em]">
              brieflyq
            </span>
          </div>
          <div className="border-l border-[#1F2533] pl-3">
            <div className="text-white font-bold">BrieflyQ Private Intelligence</div>
            <p className="text-[11px] text-[#606775]">
              Covering the Delaware Court of Chancery, Wall Street M&A, and Federal Regulatory Agencies.
            </p>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex flex-wrap items-center gap-6 text-xs text-[#8E95A5] font-medium">
          <Link href="#dockets" className="hover:text-white transition">
            Chancery Dockets
          </Link>
          <Link href="#geo" className="hover:text-white transition">
            GEO Protocol Standards
          </Link>
          <Link href="#ethics" className="hover:text-white transition">
            Editorial Ethics
          </Link>
          <Link href="#access" className="hover:text-white transition">
            Institutional Access
          </Link>
          <Link href="#privacy" className="hover:text-white transition">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
