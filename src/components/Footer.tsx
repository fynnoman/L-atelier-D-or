import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-line">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="font-display text-3xl leading-none">
            L&apos;Atelier <span className="serif-italic gold-text">d&apos;Or</span>
          </div>
          <p className="mt-5 max-w-sm text-sm text-ink-2 leading-relaxed">
            Maison d&apos;Optique. Handgefertigte Brillen in limitierter Auflage,
            geformt aus Titan, Acetat und 18 Karat.
          </p>
        </div>

        <div>
          <div className="eyebrow mb-4">Haus</div>
          <ul className="space-y-3 text-sm text-ink-2">
            <li><Link href="/atelier" className="hover:text-ink transition">Atelier</Link></li>
            <li><Link href="/kollektion" className="hover:text-ink transition">Kollektion</Link></li>
            <li><Link href="/#manifest" className="hover:text-ink transition">Manifest</Link></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow mb-4">Service</div>
          <ul className="space-y-3 text-sm text-ink-2">
            <li><Link href="/#anfrage" className="hover:text-ink transition">Reservierung</Link></li>
            <li><Link href="/#kontakt" className="hover:text-ink transition">Kontakt</Link></li>
            <li><Link href="/#pflege" className="hover:text-ink transition">Pflege</Link></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow mb-4">Journal</div>
          <p className="text-sm text-ink-2 mb-4">
            Neue Editionen. Werkstattnotizen. Zwei Ausgaben pro Jahr.
          </p>
          <form className="glass rounded-full flex items-center overflow-hidden pl-5 pr-1 py-1">
            <input
              type="email"
              placeholder="Ihre E-Mail"
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted"
            />
            <button className="btn btn-primary text-[0.7rem] py-2 px-4" type="button">
              Abonnieren
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
          <div>© {new Date().getFullYear()} L&apos;Atelier d&apos;Or. Alle Rechte vorbehalten.</div>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-ink transition">Impressum</Link>
            <Link href="#" className="hover:text-ink transition">Datenschutz</Link>
            <Link href="#" className="hover:text-ink transition">AGB</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
