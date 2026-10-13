export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          BrieflyQ.
        </h1>
        <p className="text-slate-500 dark:text-slate-400 font-medium text-lg mt-1">
          Medya & Haber Merkezi
        </p>
      </div>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Hızlı, modern ve SEO uyumlu yeni nesil haber ve içerik platformu. Powered by{" "}
        <a
          href="https://nextjs.org/"
          className="underline hover:text-blue-600 duration-200 transition-colors font-semibold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js
        </a>
        .
      </h4>
    </section>
  );
}
