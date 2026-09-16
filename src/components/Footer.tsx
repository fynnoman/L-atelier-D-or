import Link from "next/link";
import Wordmark from "./Wordmark";

const COLUMNS: { title: string; items: { href: string; label: string }[] }[] = [
  {
    title: "La Maison",
    items: [
      { href: "/atelier", label: "L’Atelier" },
      { href: "/journal", label: "Journal" },
      { href: "/concierge", label: "Concierge" },
    ],
  },
  {
    title: "Collection",
    items: [
      { href: "/collection", label: "La Première Collection" },
      { href: "/collection/roi-rouge", label: "Roi Rouge" },
      { href: "/collection/roi-noir", label: "Roi Noir" },
      { href: "/collection/roi-cristal", label: "Roi Cristal" },
      { href: "/collection/roi-emeraude", label: "Roi Émeraude" },
    ],
  },
  {
    title: "Discrétion",
    items: [
      { href: "/mentions-legales", label: "Mentions légales" },
      { href: "/confidentialite", label: "Confidentialité" },
      { href: "/accessibilite", label: "Accessibilité" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className="relative"
      style={{
        background: "var(--n-bg)",
        color: "var(--n-ink)",
        borderTop: "1px solid var(--n-line-soft)",
      }}
    >
      <div className="n-page pt-28 pb-14">
        {/* Grand wordmark */}
        <div className="pb-16 border-b" style={{ borderColor: "var(--n-line-soft)" }}>
          <span
            className="n-display block leading-[0.9]"
            style={{ fontSize: "clamp(56px, 12vw, 180px)" }}
          >
            L&rsquo;Atelier <span className="n-serif-italic opacity-75">d&rsquo;Or</span>
          </span>
          <div className="mt-6 flex flex-wrap items-baseline gap-x-6 gap-y-2">
            <span className="n-eyebrow">Une petite maison française</span>
            <span className="n-mono opacity-55">Paris · Berlin · Londres</span>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-6 gap-y-14 mt-16">
          <div className="col-span-12 md:col-span-4 flex flex-col gap-6">
            <Wordmark size="lg" />
            <p
              className="n-serif text-[19px] leading-[1.5] max-w-[36ch]"
              style={{ color: "var(--n-muted)" }}
            >
              14, rue de l&rsquo;Éclipse<br />
              75008 Paris — France
            </p>
            <a
              href="mailto:concierge@latelier-dor.com"
              className="n-link self-start"
            >
              concierge@latelier-dor.com
            </a>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className="col-span-6 md:col-span-2 flex flex-col gap-4">
              <div className="n-eyebrow">{col.title}</div>
              <ul className="flex flex-col gap-3">
                {col.items.map((it) => (
                  <li key={it.href}>
                    <Link
                      href={it.href}
                      className="n-serif text-[17px] leading-[1.4]"
                      style={{ color: "var(--n-ink)" }}
                    >
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="n-hair-full mt-20 mb-6" />
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <p className="n-mono opacity-55">
            © L&rsquo;Atelier d&rsquo;Or — Fait main en France · Première collection — Édition brève et numérotée
          </p>
          <p className="n-mono opacity-55">
            SAS à capital variable · RCS Paris
          </p>
        </div>
      </div>
    </footer>
  );
}
