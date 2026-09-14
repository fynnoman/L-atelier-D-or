import Link from "next/link";
import Wordmark from "./Wordmark";

const columns: { title: string; items: { href: string; label: string }[] }[] = [
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
        background: "var(--noir)",
        color: "var(--parchment)",
        paddingInline: "var(--page-x)",
        paddingBlock: "88px",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 500px at 20% 0%, rgba(215,170,90,0.10), transparent 60%), radial-gradient(900px 400px at 90% 100%, rgba(215,170,90,0.06), transparent 60%)",
        }}
      />
      <div className="relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <Wordmark muted className="[&_span:first-child]:text-parchment" />
            <p
              className="serif mt-6"
              style={{ fontSize: "clamp(20px, 2vw, 26px)", maxWidth: 460, lineHeight: 1.25 }}
            >
              Entrez dans une vision d’exception.
              <br />
              Voyez le monde à votre dimension.
            </p>
          </div>
          <div
            className="flex items-center gap-3"
            style={{ fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", opacity: 0.75 }}
          >
            <span>Paris</span>
            <span className="hair" aria-hidden style={{ background: "var(--or-soft)", width: 28 }} />
            <span>Berlin</span>
            <span className="hair" aria-hidden style={{ background: "var(--or-soft)", width: 28 }} />
            <span>Londres</span>
          </div>
        </div>

        <div
          className="grid gap-10 md:grid-cols-4 mt-14 pt-10"
          style={{ borderTop: "1px solid rgba(215,170,90,0.18)" }}
        >
          {columns.map((c) => (
            <div key={c.title}>
              <div
                style={{
                  fontSize: 11,
                  letterSpacing: "0.26em",
                  textTransform: "uppercase",
                  color: "var(--or-soft)",
                  marginBottom: 16,
                }}
              >
                {c.title}
              </div>
              <ul className="flex flex-col gap-3">
                {c.items.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="link"
                      data-underline
                      style={{ fontSize: 14, color: "var(--parchment)" }}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <div
              style={{
                fontSize: 11,
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "var(--or-soft)",
                marginBottom: 16,
              }}
            >
              Correspondance
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, opacity: 0.85 }}>
              L’Atelier d’Or
              <br />
              14, rue de l’Éclipse
              <br />
              75008 Paris — France
            </p>
            <p style={{ fontSize: 14, marginTop: 12, opacity: 0.85 }}>
              <a
                className="link"
                data-underline
                href="mailto:concierge@latelier-dor.com"
                style={{ color: "var(--or-glow)" }}
              >
                concierge@latelier-dor.com
              </a>
            </p>
          </div>
        </div>

        <div
          className="mt-14 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          style={{
            borderTop: "1px solid rgba(215,170,90,0.18)",
            paddingTop: 22,
            fontSize: 11,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            opacity: 0.7,
          }}
        >
          <span>© {new Date().getFullYear()} L’Atelier d’Or — Fait main en France</span>
          <span>Première collection — Édition brève et numérotée</span>
        </div>
      </div>
    </footer>
  );
}
