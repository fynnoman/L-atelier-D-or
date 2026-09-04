import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80dvh] items-center bg-bg pt-32 md:pt-40 pb-24">
      <div className="mx-auto max-w-[900px] px-6 md:px-12">
        <p className="eyebrow">404 · Seite nicht gefunden</p>
        <h1 className="mt-6 font-light text-ink text-[clamp(2rem,5vw,4.4rem)] leading-[1.02] tracking-[-0.02em]">
          Hier war einmal etwas anderes.
        </h1>
        <p className="mt-8 max-w-lg text-[15px] leading-[1.75] text-muted">
          Die Seite existiert nicht mehr oder ist umgezogen. Zurück zur
          Startseite oder direkt in die Kollektion.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="lv-btn lv-btn-solid">
            Startseite
          </Link>
          <Link href="/kollektion" className="lv-btn">
            Kollektion
          </Link>
        </div>
      </div>
    </section>
  );
}
