"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { products } from "@/data/products";

// -----------------------------------------------------------------------------
// Reveal — a single, restrained editorial entrance: fade in with a 24px lift.
// Duration deliberately long; ease "editorial" (custom cubic bezier) so the
// motion never draws attention to itself, only to the composition.
// -----------------------------------------------------------------------------
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? { opacity: 1 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

const eyebrow: React.CSSProperties = {
  color: "rgba(230,201,138,0.7)",
  letterSpacing: "0.42em",
  fontSize: 10,
  textTransform: "uppercase",
};

const bodyDim: React.CSSProperties = {
  color: "rgba(245,239,225,0.68)",
  lineHeight: 1.9,
};

const hairlineGold =
  "linear-gradient(90deg, transparent, var(--or-glow) 50%, transparent)";

export default function MaisonExperience() {
  return (
    <div style={{ backgroundColor: "var(--noir)" }}>
      <Whisper />
      <TheFour />
      <FocusOrphee />
      <SalonPrive />
    </div>
  );
}

// -----------------------------------------------------------------------------
// 1 — Whisper: silence intro. One massive Fraunces italic breath.
// -----------------------------------------------------------------------------
function Whisper() {
  return (
    <section
      className="relative w-full grain grain-dark"
      style={{ minHeight: "88svh", backgroundColor: "var(--noir)" }}
    >
      {/* Very soft radial breath — decorative only. */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse at 50% 55%, rgba(198,154,63,0.10), transparent 60%)",
        }}
      />
      <div className="relative mx-auto flex max-w-[1200px] flex-col items-center justify-center px-6 py-40 text-center md:px-12 md:py-48">
        <Reveal>
          <p style={eyebrow}>La Maison</p>
        </Reveal>

        <Reveal delay={0.12} className="mt-10">
          <span
            className="mx-auto block h-px w-20"
            style={{ background: hairlineGold }}
            aria-hidden
          />
        </Reveal>

        <Reveal delay={0.24} className="mt-14 max-w-[900px]">
          <h2
            className="display"
            style={{
              color: "var(--parchment)",
              fontSize: "clamp(2.6rem, 6.8vw, 7rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.032em",
            }}
          >
            Nicht besser sehen.
            <br />
            <span
              style={{
                fontFamily: "var(--font-fraunces), serif",
                fontStyle: "italic",
                color: "var(--or-glow)",
              }}
            >
              Anders.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.42} className="mt-14 max-w-md">
          <p style={{ ...bodyDim, fontSize: 13 }}>
            Vier Fassungen im Jahr. Handnummeriert zwischen Paris, Berlin und dem
            Jura. Jede Édition auf sechzig bis einhundertzwanzig Stück limitiert.
          </p>
        </Reveal>

        <Reveal delay={0.6} className="mt-16">
          <p
            style={{
              ...eyebrow,
              color: "rgba(230,201,138,0.45)",
              letterSpacing: "0.5em",
              fontSize: 9.5,
            }}
          >
            Paris · Berlin · Jura
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// 2 — TheFour: the collection as an asymmetric 12-column editorial spread.
// Not a grid of 4 identical tiles — an intentional visual rhythm.
// -----------------------------------------------------------------------------
function TheFour() {
  const layouts = [
    { col: "md:col-span-7", mt: "md:mt-0" },
    { col: "md:col-span-5 md:col-start-8", mt: "md:mt-40" },
    { col: "md:col-span-6", mt: "md:mt-16" },
    { col: "md:col-span-5 md:col-start-8", mt: "md:mt-52" },
  ];

  return (
    <section
      id="collection"
      className="relative w-full grain grain-dark"
      style={{ backgroundColor: "var(--noir)" }}
    >
      <div className="mx-auto max-w-[1500px] px-6 py-40 md:px-12 md:py-56">
        {/* Header — three-part editorial split: eyebrow · display · hairline */}
        <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-[auto_1fr_auto] md:gap-16">
          <Reveal>
            <p style={eyebrow}>01 — Les Objets</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="display"
              style={{
                color: "var(--parchment)",
                fontSize: "clamp(2.2rem, 5.6vw, 5.4rem)",
                lineHeight: 0.98,
                letterSpacing: "-0.033em",
              }}
            >
              Vier Fassungen.
              <br />
              <span
                style={{
                  fontFamily: "var(--font-fraunces), serif",
                  fontStyle: "italic",
                  color: "var(--or-glow)",
                }}
              >
                Ein Prinzip.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.24}>
            <span
              className="hidden md:block h-px w-32"
              style={{
                background: "linear-gradient(90deg, var(--or), transparent)",
              }}
              aria-hidden
            />
          </Reveal>
        </div>

        {/* Products — asymmetric offsets on md+ */}
        <div className="mt-32 grid grid-cols-1 gap-x-16 gap-y-32 md:mt-40 md:grid-cols-12 md:gap-y-40">
          {products.map((p, i) => (
            <Reveal
              key={p.slug}
              className={`${layouts[i].col} ${layouts[i].mt}`}
            >
              <ProductTile product={p} index={i} />
            </Reveal>
          ))}
        </div>

        {/* Footer link */}
        <Reveal className="mt-32 flex justify-end md:mt-40">
          <Link
            href="/kollektion"
            className="group inline-flex items-center gap-5 text-[11px] uppercase"
            style={{ color: "var(--or-glow)", letterSpacing: "0.32em" }}
          >
            <span
              className="block h-px w-16 transition-all duration-500 group-hover:w-24"
              style={{
                background: "linear-gradient(90deg, transparent, var(--or))",
                transitionTimingFunction: "var(--ease-editorial)",
              }}
              aria-hidden
            />
            Alle Fassungen
            <span
              className="translate-x-0 transition-transform duration-500 group-hover:translate-x-2"
              style={{ transitionTimingFunction: "var(--ease-editorial)" }}
              aria-hidden
            >
              →
            </span>
          </Link>
        </Reveal>

        <Reveal className="mt-16">
          <p
            className="text-center"
            style={{
              ...eyebrow,
              color: "rgba(230,201,138,0.35)",
              letterSpacing: "0.34em",
            }}
          >
            Produktdarstellungen · KI-Visualisierungen
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function ProductTile({
  product,
  index,
}: {
  product: (typeof products)[number];
  index: number;
}) {
  return (
    <Link href={`/kollektion/${product.slug}`} className="group block">
      {/* Product plaque */}
      <div
        className="relative aspect-[5/4] w-full overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 50% 45%, rgba(198,154,63,0.10) 0%, rgba(10,8,6,0) 55%), var(--noir-2)",
        }}
      >
        <span
          className="numeral absolute left-6 top-6"
          style={{
            color: "rgba(230,201,138,0.55)",
            letterSpacing: "0.3em",
            fontSize: 11,
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          className="absolute right-6 top-6 uppercase"
          style={{
            color: "rgba(230,201,138,0.55)",
            letterSpacing: "0.32em",
            fontSize: 10,
          }}
        >
          {product.edition}
        </span>

        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width:768px) 90vw, 45vw"
          className="object-contain object-center p-12 will-change-transform"
          style={{
            transition: "transform 1200ms var(--ease-editorial)",
          }}
        />

        {/* Hover: subtle scale */}
        <style>{`
          .group:hover img { transform: scale(1.035); }
        `}</style>

        {/* Bottom gradient plate for depth */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
          style={{
            background:
              "linear-gradient(180deg, transparent, rgba(10,8,6,0.55))",
          }}
          aria-hidden
        />
      </div>

      {/* Caption row */}
      <div className="mt-6 flex items-start justify-between gap-6">
        <div>
          <h3
            className="display"
            style={{
              color: "var(--parchment)",
              fontSize: "clamp(1.35rem, 1.9vw, 1.8rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.015em",
            }}
          >
            {product.name}
          </h3>
          <p
            className="mt-2"
            style={{
              color: "rgba(245,239,225,0.6)",
              letterSpacing: "0.02em",
              fontSize: 12.5,
            }}
          >
            {product.subtitle}
          </p>
        </div>
        <p
          className="numeral shrink-0"
          style={{
            color: "var(--or-glow)",
            letterSpacing: "0.06em",
            fontSize: 13,
          }}
        >
          {product.price}
        </p>
      </div>
    </Link>
  );
}

// -----------------------------------------------------------------------------
// 3 — FocusOrphee: a single hero product, treated as material study.
// Editorial split: display + numeric specs left, product portrait right with
// a very subtle scroll parallax.
// -----------------------------------------------------------------------------
function FocusOrphee() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [60, -60]);

  const specs = [
    { v: "0,9", u: "mm", l: "Titan-Draht" },
    { v: "18", u: "K", l: "Vergoldung" },
    { v: "8,9", u: "g", l: "Leichtigkeit" },
  ];

  return (
    <section
      ref={ref}
      className="relative w-full grain grain-dark"
      style={{ backgroundColor: "var(--noir)" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse at 78% 45%, rgba(198,154,63,0.16), transparent 55%)",
        }}
      />
      <div className="relative mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-20 px-6 py-40 md:grid-cols-2 md:gap-24 md:px-12 md:py-56">
        <div>
          <Reveal>
            <p style={eyebrow}>02 — La Matière</p>
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <h2
              className="display"
              style={{
                color: "var(--parchment)",
                fontSize: "clamp(2.4rem, 6.2vw, 6.2rem)",
                lineHeight: 0.98,
                letterSpacing: "-0.033em",
              }}
            >
              Fast nichts.
              <br />
              <span
                style={{
                  fontFamily: "var(--font-fraunces), serif",
                  fontStyle: "italic",
                  color: "var(--or-glow)",
                }}
              >
                Und doch alles.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.24} className="mt-10 max-w-md">
            <p style={{ ...bodyDim, fontSize: 14 }}>
              Ein feiner Titan-Draht. Ein warmer Goldton. Ein Perlmutt-Punkt am
              Steg. Orphée reduziert die Fassung auf das, was zählt.
            </p>
          </Reveal>

          <Reveal delay={0.4} className="mt-14">
            <div
              className="grid grid-cols-3 gap-4 pt-8"
              style={{
                borderTop: "1px solid rgba(198,154,63,0.24)",
              }}
            >
              {specs.map((s) => (
                <div key={s.l}>
                  <p
                    className="numeral"
                    style={{
                      color: "var(--parchment)",
                      fontSize: "clamp(1.7rem, 3vw, 2.6rem)",
                      lineHeight: 1,
                    }}
                  >
                    {s.v}
                    <span
                      style={{
                        color: "rgba(230,201,138,0.7)",
                        fontSize: "0.5em",
                        marginLeft: "0.18em",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {s.u}
                    </span>
                  </p>
                  <p
                    className="mt-2 uppercase"
                    style={{
                      color: "rgba(245,239,225,0.5)",
                      letterSpacing: "0.28em",
                      fontSize: 10.5,
                    }}
                  >
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.55} className="mt-14">
            <Link
              href="/kollektion/orphee-03"
              className="group inline-flex items-center gap-5 uppercase"
              style={{
                color: "var(--or-glow)",
                letterSpacing: "0.32em",
                fontSize: 11,
              }}
            >
              Orphée im Detail
              <span
                className="block h-px w-16 transition-all duration-500 group-hover:w-24"
                style={{
                  background: "linear-gradient(90deg, var(--or), transparent)",
                  transitionTimingFunction: "var(--ease-editorial)",
                }}
                aria-hidden
              />
              <span
                className="transition-transform duration-500 group-hover:translate-x-2"
                style={{ transitionTimingFunction: "var(--ease-editorial)" }}
                aria-hidden
              >
                →
              </span>
            </Link>
          </Reveal>
        </div>

        <motion.div
          style={{ y }}
          className="relative aspect-[4/5] w-full will-change-transform"
        >
          <Image
            src="/models/orphee-03.png"
            alt="Detail der runden Orphée-Fassung"
            fill
            sizes="(max-width:768px) 90vw, 45vw"
            className="object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// 4 — SalonPrive: the closing invitation. One phrase, one CTA, silence.
// -----------------------------------------------------------------------------
function SalonPrive() {
  return (
    <section
      className="relative w-full grain grain-dark"
      style={{ backgroundColor: "var(--noir)" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse at 30% 60%, rgba(198,154,63,0.10), transparent 55%)",
        }}
      />
      <div className="relative mx-auto max-w-[1300px] px-6 py-48 md:px-12 md:py-56">
        <Reveal>
          <p style={{ ...eyebrow, letterSpacing: "0.44em" }}>Le Salon Privé</p>
        </Reveal>

        <Reveal delay={0.15} className="mt-14 max-w-[1100px]">
          <h2
            className="display"
            style={{
              color: "var(--parchment)",
              fontSize: "clamp(2.6rem, 7vw, 7.4rem)",
              lineHeight: 0.96,
              letterSpacing: "-0.033em",
            }}
          >
            Manche Dinge
            <br />
            muss man{" "}
            <span
              style={{
                fontFamily: "var(--font-fraunces), serif",
                fontStyle: "italic",
                color: "var(--or-glow)",
              }}
            >
              tragen.
            </span>
          </h2>
        </Reveal>

        <div className="mt-24 grid grid-cols-1 items-end gap-14 md:mt-32 md:grid-cols-[1fr_auto]">
          <Reveal delay={0.3}>
            <p style={{ ...bodyDim, fontSize: 14, maxWidth: 460 }}>
              Eine Fassung. Ihr Gesicht. Zeit für die Details.
              <br />
              Entdecken Sie die Maison in einer persönlichen Anprobe — in Paris,
              Berlin oder auf Video.
            </p>
          </Reveal>

          <Reveal delay={0.45}>
            <Link
              href="/concierge"
              className="group inline-flex items-center gap-6 uppercase"
              style={{
                color: "var(--parchment)",
                letterSpacing: "0.34em",
                fontSize: 11,
                borderBottom: "1px solid var(--or)",
                paddingBottom: 18,
              }}
            >
              Anprobe vereinbaren
              <span
                className="transition-transform duration-500 group-hover:translate-x-2"
                style={{
                  color: "var(--or-glow)",
                  transitionTimingFunction: "var(--ease-editorial)",
                }}
                aria-hidden
              >
                →
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
