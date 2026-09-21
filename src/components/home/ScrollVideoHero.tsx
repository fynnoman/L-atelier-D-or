import Link from "next/link";

export default function ScrollVideoHero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100vh", background: "#0A0A0A" }}
      aria-label="Intro"
    >
      {/* Hintergrund-Video, stumm, endlos, kein Scroll-Bind */}
      <video
        src="/video/hero.mp4"
        poster="/video/hero-poster.jpg"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden
      />

      {/* Verlauf fuer Lesbarkeit */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.05) 22%, rgba(10,10,10,0.05) 55%, rgba(10,10,10,0.78) 100%)",
        }}
      />

      {/* Ecken-Marker oben links */}
      <div
        aria-hidden
        className="absolute top-6 left-6 md:top-8 md:left-8 flex items-center gap-3 z-10"
      >
        <span
          className="block h-px w-8"
          style={{ background: "rgba(255,255,255,0.5)" }}
        />
        <span
          style={{
            color: "rgba(255,255,255,0.72)",
            fontSize: "11px",
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          L&rsquo;Atelier d&rsquo;Or
        </span>
      </div>

      {/* Ecken-Marker oben rechts */}
      <div
        aria-hidden
        className="hidden md:flex absolute top-8 right-8 items-center gap-3 z-10"
      >
        <span
          style={{
            color: "rgba(255,255,255,0.72)",
            fontSize: "11px",
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          Fait main à Paris
        </span>
        <span
          className="block h-px w-8"
          style={{ background: "rgba(255,255,255,0.5)" }}
        />
      </div>

      {/* Content unten links */}
      <div className="absolute inset-0 flex items-end z-10 pointer-events-none">
        <div className="n-page w-full pb-16 md:pb-20 pointer-events-auto">
          <div className="grid grid-cols-12 gap-x-6 items-end">
            <div className="col-span-12 md:col-span-9 lg:col-span-8">
              <span
                className="block mb-10"
                style={{
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "11px",
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                Roi · Première Édition
              </span>
              <h1
                className="n-quote max-w-[18ch]"
                style={{
                  fontSize: "clamp(48px, 8.2vw, 152px)",
                  lineHeight: 1.02,
                  color: "#FFFFFF",
                  paddingBottom: "0.08em",
                }}
              >
                Voyez le monde <br />
                à votre dimension.
              </h1>
              <p
                className="n-body mt-8 max-w-[46ch]"
                style={{
                  fontSize: "clamp(15px, 1.15vw, 18px)",
                  color: "rgba(255,255,255,0.78)",
                  lineHeight: 1.55,
                }}
              >
                Quatre pièces par an. Faites main à Paris,
                numérotées à la main.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Link
                  href="/collection"
                  className="n-cta n-cta-ghost"
                  style={{ color: "#FFFFFF", borderColor: "#FFFFFF" }}
                >
                  Voir la collection
                </Link>
                <Link
                  href="/atelier"
                  className="n-link"
                  style={{ color: "#FFFFFF" }}
                >
                  L&rsquo;Atelier
                </Link>
              </div>
            </div>

            {/* Scroll-Hinweis rechts */}
            <div className="hidden md:flex col-span-12 md:col-span-3 lg:col-span-4 items-center justify-end gap-3">
              <span
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "11px",
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                Défiler
              </span>
              <span
                className="block h-14 w-px"
                style={{ background: "rgba(255,255,255,0.4)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
