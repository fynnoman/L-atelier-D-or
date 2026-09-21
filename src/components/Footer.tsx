import Link from "next/link";
import Wordmark from "./Wordmark";

const COLUMNS: { title: string; items: { href: string; label: string }[] }[] = [
  {
    title: "Maison",
    items: [
      { href: "/atelier", label: "Atelier" },
      { href: "/journal", label: "Journal" },
    ],
  },
  {
    title: "Collection",
    items: [
      { href: "/collection", label: "Première Collection" },
      { href: "/collection/roi-rouge", label: "Roi Rouge" },
      { href: "/collection/roi-noir", label: "Roi Noir" },
      { href: "/collection/roi-cristal", label: "Roi Cristal" },
      { href: "/collection/roi-emeraude", label: "Roi Émeraude" },
    ],
  },
  {
    title: "Mentions",
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
      <div className="n-page pt-32 pb-14">
        <div
          className="pb-20 border-b"
          style={{ borderColor: "var(--n-line-soft)" }}
        >
          <span
            className="n-brand block leading-[0.92]"
            style={{ fontSize: "clamp(64px, 14vw, 220px)" }}
          >
            L&rsquo;Atelier d&rsquo;Or
          </span>
          <div className="mt-8 flex flex-wrap items-baseline gap-x-8 gap-y-2">
            <span className="n-eyebrow">Une petite maison française</span>
            <span className="n-meta opacity-55">Fait main à Paris</span>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-6 gap-y-16 mt-20">
          <div className="col-span-12 md:col-span-4 flex flex-col gap-8">
            <Wordmark size="lg" />
            <p
              className="n-body text-[16px] leading-[1.6] max-w-[36ch]"
              style={{ color: "var(--n-muted)" }}
            >
              14, rue de l&rsquo;Éclipse<br />
              75008 Paris, France
            </p>
            <a
              href="mailto:concierge@latelier-dor.com"
              className="n-link self-start"
            >
              concierge@latelier-dor.com
            </a>
          </div>

          {COLUMNS.map((col) => (
            <div
              key={col.title}
              className="col-span-6 md:col-span-2 flex flex-col gap-6"
            >
              <div className="n-eyebrow">{col.title}</div>
              <ul className="flex flex-col gap-4">
                {col.items.map((it) => (
                  <li key={it.href}>
                    <Link
                      href={it.href}
                      className="n-body text-[15px] leading-[1.4] hover:opacity-70 transition-opacity"
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

        <div className="n-hair-full mt-24 mb-8" />
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <p className="n-meta opacity-55">
            © L&rsquo;Atelier d&rsquo;Or · Fait main en France · Édition brève, numérotée à la main
          </p>
          <p className="n-meta opacity-55">SAS à capital variable · RCS Paris</p>
        </div>
      </div>
    </footer>
  );
}
