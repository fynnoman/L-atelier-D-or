import Link from "next/link";

export default function AvisTeaser() {
  return (
    <section
      className="relative"
      style={{
        paddingBlock: "clamp(72px, 12vh, 128px)",
        background: "var(--n-bg-2)",
      }}
    >
      <div className="n-page">
        <div className="grid grid-cols-12 gap-x-6 items-end">
          <div className="col-span-12 md:col-span-8">
            <span className="n-eyebrow block mb-8">Avis</span>
            <h2
              className="n-display leading-[0.98]"
              style={{
                fontSize: "clamp(40px, 6vw, 88px)",
                fontWeight: 300,
              }}
            >
              Vous portez Roi ? <br />
              <span className="opacity-80">Dites-nous quelques mots.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 mt-10 md:mt-0">
            <p
              className="n-body leading-[1.55] max-w-[38ch] mb-8"
              style={{
                fontSize: "clamp(15px, 1.1vw, 17px)",
                color: "var(--n-muted)",
              }}
            >
              Nous ne fabriquons pas les avis. Nous publions
              ceux qui viennent, honnêtement, sans retouche.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Link href="/conseil" className="n-cta">
                Partager un mot
              </Link>
              <Link href="/avis" className="n-link">
                Voir les avis
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
