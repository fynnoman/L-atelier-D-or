"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, type ReactNode, type CSSProperties } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { products } from "@/data/products";

const EASE = [0.16, 1, 0.3, 1] as const;

const IVORY = "#f6f1e6";
const IVORY_2 = "#efe8d6";
const IVORY_3 = "#e6dcc3";
const INK = "#1a140c";
const INK_SOFT = "rgba(26,20,12,0.66)";
const INK_MUTED = "rgba(26,20,12,0.48)";
const OR = "#b49669";
const OR_DEEP = "#8b704b";
const OR_GLOW = "#e8d3a8";

const eyebrow: CSSProperties = {
  fontSize: 10.5,
  letterSpacing: "0.32em",
  textTransform: "uppercase",
  fontWeight: 500,
  color: OR_DEEP,
};

const eyebrowDark: CSSProperties = { ...eyebrow, color: INK_SOFT };

const body: CSSProperties = { color: INK_SOFT, lineHeight: 1.85 };

const glassPanel: CSSProperties = {
  background:
    "linear-gradient(135deg, rgba(255,253,247,0.7) 0%, rgba(255,253,247,0.45) 100%)",
  backdropFilter: "blur(28px) saturate(180%)",
  WebkitBackdropFilter: "blur(28px) saturate(180%)",
  border: "1px solid rgba(255,255,255,0.65)",
  boxShadow:
    "0 30px 80px -30px rgba(38,26,10,0.22), inset 0 1px 0 rgba(255,255,255,0.85)",
};

const glassPanelDark: CSSProperties = {
  background:
    "linear-gradient(135deg, rgba(26,20,12,0.36) 0%, rgba(26,20,12,0.18) 100%)",
  backdropFilter: "blur(22px) saturate(180%)",
  WebkitBackdropFilter: "blur(22px) saturate(180%)",
  border: "1px solid rgba(255,255,255,0.22)",
  boxShadow:
    "0 30px 80px -30px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.18)",
};

const hairlineGold =
  "linear-gradient(90deg, transparent, rgba(180,150,105,0.85) 50%, transparent)";

function Reveal({
  children,
  delay = 0,
  className = "",
  y = 22,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? { opacity: 1 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 1.05, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function MaisonExperience() {
  return (
    <div
      style={{
        background: `linear-gradient(180deg, ${IVORY} 0%, ${IVORY_2} 40%, ${IVORY} 100%)`,
        color: INK,
        position: "relative",
        isolation: "isolate",
      }}
    >
      <AmbientGrain />
      <Manifeste />
      <SignatureScale />
      <CollectionRail />
      <MaterialStudy />
      <MaisonChiffres />
      <AtelierFilm />
      <JournalTeasers />
      <SalonPrive />
      <Adresses />
    </div>
  );
}

// -----------------------------------------------------------------------------
// Very subtle warm paper grain across the whole light experience.
// -----------------------------------------------------------------------------
function AmbientGrain() {
  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 60,
        opacity: 0.22,
        mixBlendMode: "multiply",
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.72 0 0 0 0 0.58 0 0 0 0 0.32 0 0 0 0.4 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        backgroundSize: "180px 180px",
      }}
    />
  );
}

// -----------------------------------------------------------------------------
// 1 — Manifeste. Sticky pinned intro. Words drift, italics breathe in,
// gold hairline traces beneath as the section scrolls. Two viewport heights.
// -----------------------------------------------------------------------------
function Manifeste() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.6 });

  const y1 = useTransform(p, [0, 1], ["6vh", "-6vh"]);
  const y2 = useTransform(p, [0, 1], ["10vh", "-10vh"]);
  const scale = useTransform(p, [0, 0.5, 1], [1.02, 1, 0.985]);
  const ruleScale = useTransform(p, [0.15, 0.75], [0, 1]);
  const kickerOpacity = useTransform(p, [0, 0.25, 0.7, 1], [0, 1, 1, 0.5]);

  return (
    <section
      ref={ref}
      className="relative w-full"
      style={{ height: "220svh" }}
      aria-label="Manifeste"
    >
      <div className="sticky top-0 flex h-[100svh] w-full items-center justify-center overflow-hidden">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 42%, rgba(232,211,168,0.55) 0%, rgba(246,241,230,0) 60%)",
            opacity: useTransform(p, [0, 0.5, 1], [0.4, 0.9, 0.4]),
          }}
        />
        <div
          className="relative mx-auto flex max-w-[1280px] flex-col items-center px-6 text-center md:px-12"
          style={{ zIndex: 2 }}
        >
          <motion.p style={{ ...eyebrow, opacity: kickerOpacity }}>
            La Maison · Édition Continue
          </motion.p>

          <motion.h2
            className="display mt-10"
            style={{
              color: INK,
              fontSize: "clamp(2.8rem, 8.6vw, 8.6rem)",
              lineHeight: 0.98,
              letterSpacing: "-0.038em",
              y: y1,
              scale,
            }}
          >
            Nicht besser sehen.
          </motion.h2>

          <motion.h2
            className="display mt-4"
            style={{
              fontFamily: "var(--font-fraunces), serif",
              fontStyle: "italic",
              fontWeight: 300,
              color: OR_DEEP,
              fontSize: "clamp(2.8rem, 8.6vw, 8.6rem)",
              lineHeight: 0.98,
              letterSpacing: "-0.028em",
              y: y2,
              scale,
            }}
          >
            Anders.
          </motion.h2>

          <motion.span
            aria-hidden
            className="mt-14 block h-px w-40"
            style={{
              background: hairlineGold,
              scaleX: ruleScale,
              transformOrigin: "left center",
            }}
          />

          <Reveal delay={0.15} className="mt-10 max-w-[560px]">
            <p style={{ ...body, fontSize: 14.5 }}>
              Vier Fassungen im Jahr. Handnummeriert zwischen Paris, Berlin und
              dem Jura. Jede Édition auf sechzig bis einhundertzwanzig Stück
              limitiert. Titan, Acetat, 18 Karat. Nichts, was nicht bleiben soll.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="mt-14">
            <p
              style={{
                ...eyebrow,
                color: "rgba(139,112,75,0.7)",
                letterSpacing: "0.5em",
                fontSize: 10,
              }}
            >
              Paris · Berlin · Jura
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// 2 — SignatureScale. A single portrait image starts framed and small; as the
// section scrolls it scales up and its border-radius eases to zero, becoming
// the full-bleed background of a second act with overlaid text.
// This is the "image scales and becomes the next section's background" idea.
// -----------------------------------------------------------------------------
function SignatureScale() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.7 });

  const scale = useTransform(p, [0, 0.55], [0.68, 1]);
  const radius = useTransform(p, [0, 0.55], [28, 0]);
  const imgY = useTransform(p, [0.55, 1], ["0%", "-10%"]);
  const overlayOpacity = useTransform(p, [0.45, 0.62, 0.9, 1], [0, 1, 1, 0.6]);
  const overlayY = useTransform(p, [0.45, 0.7], [40, 0]);
  const captionOpacity = useTransform(p, [0, 0.3, 0.55], [1, 1, 0]);

  return (
    <section
      ref={ref}
      className="relative w-full"
      style={{
        height: "320svh",
        background: `linear-gradient(180deg, ${IVORY} 0%, ${IVORY_3} 100%)`,
      }}
      aria-label="Signature"
    >
      <div className="sticky top-0 flex h-[100svh] w-full items-center justify-center overflow-hidden">
        <motion.figure
          className="relative overflow-hidden"
          style={{
            width: "100%",
            height: "100%",
            scale,
            borderRadius: radius,
            boxShadow: useTransform(
              p,
              [0, 0.55],
              [
                "0 60px 120px -40px rgba(38,26,10,0.35)",
                "0 0 0 rgba(0,0,0,0)",
              ]
            ),
          }}
        >
          <motion.div
            style={{ position: "absolute", inset: 0, y: imgY }}
          >
            <Image
              src="/video/hero-poster.jpg"
              alt="L'Atelier d'Or"
              fill
              priority
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: "center 30%" }}
            />
          </motion.div>

          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(20,14,6,0.15) 0%, rgba(20,14,6,0) 30%, rgba(20,14,6,0.55) 100%)",
            }}
          />

          <motion.figcaption
            className="absolute left-6 top-6 md:left-10 md:top-10"
            style={{
              ...eyebrowDark,
              color: "rgba(246,241,230,0.85)",
              opacity: captionOpacity,
            }}
          >
            Portrait · N° 004
          </motion.figcaption>

          <motion.div
            className="absolute inset-x-0 bottom-0 flex flex-col items-center px-6 pb-16 text-center md:pb-24"
            style={{ opacity: overlayOpacity, y: overlayY, zIndex: 2 }}
          >
            <p
              style={{
                ...eyebrow,
                color: "rgba(246,241,230,0.72)",
                letterSpacing: "0.42em",
              }}
            >
              L'écriture de la Maison
            </p>
            <h3
              className="display mt-8 max-w-[1200px]"
              style={{
                color: "rgba(246,241,230,0.97)",
                fontSize: "clamp(2.2rem, 6vw, 6rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.028em",
              }}
            >
              Ein feiner Titan-Draht.{" "}
              <span
                style={{
                  fontFamily: "var(--font-fraunces), serif",
                  fontStyle: "italic",
                  color: OR_GLOW,
                }}
              >
                Ein warmer Goldton.
              </span>{" "}
              Ein Perlmutt-Punkt am Steg.
            </h3>
            <p
              className="mt-8 max-w-md"
              style={{
                color: "rgba(246,241,230,0.72)",
                lineHeight: 1.9,
                fontSize: 13.5,
              }}
            >
              Was aus dem Atelier kommt, trägt keine Signatur. Es trägt eine
              Nummer. Von Hand, in gebranntem Gold, unter dem rechten Bügel.
            </p>
          </motion.div>
        </motion.figure>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// 3 — CollectionRail. Horizontal pinned scroll of the four objects.
// Each card is a Liquid-Glass tile. Product images have a subtle counter-drift.
// -----------------------------------------------------------------------------
function CollectionRail() {
  const ref = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-72%"]);
  const smooth = useSpring(x, { stiffness: 80, damping: 22, mass: 0.6 });

  return (
    <section
      ref={ref}
      id="collection"
      className="relative w-full"
      style={{
        height: "360svh",
        background: `linear-gradient(180deg, ${IVORY_3} 0%, ${IVORY} 50%, ${IVORY_2} 100%)`,
      }}
      aria-label="La Collection"
    >
      <div className="sticky top-0 flex h-[100svh] w-full flex-col overflow-hidden">
        {/* Header */}
        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-end gap-6 px-6 pt-16 md:grid-cols-[auto_1fr_auto] md:gap-16 md:px-12 md:pt-24">
          <Reveal>
            <p style={eyebrow}>01 · Les Objets</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="display"
              style={{
                color: INK,
                fontSize: "clamp(2rem, 5vw, 4.6rem)",
                lineHeight: 0.98,
                letterSpacing: "-0.033em",
              }}
            >
              Vier Fassungen.{" "}
              <span
                style={{
                  fontFamily: "var(--font-fraunces), serif",
                  fontStyle: "italic",
                  color: OR_DEEP,
                }}
              >
                Ein Prinzip.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.22}>
            <span
              aria-hidden
              className="hidden md:block h-px w-40"
              style={{ background: hairlineGold }}
            />
          </Reveal>
        </div>

        {/* Rail */}
        <div className="relative flex flex-1 items-center overflow-hidden">
          <motion.div
            ref={trackRef}
            className="flex gap-8 pl-6 pr-24 md:gap-14 md:pl-12"
            style={{ x: smooth, willChange: "transform" }}
          >
            {products.map((product, i) => (
              <RailCard key={product.slug} product={product} index={i} progress={scrollYProgress} />
            ))}
            <RailClosing />
          </motion.div>
        </div>

        {/* Progress rail */}
        <div className="relative mx-auto w-full max-w-[1600px] px-6 pb-8 md:px-12 md:pb-10">
          <div className="flex items-center justify-between">
            <p style={{ ...eyebrowDark, letterSpacing: "0.28em" }}>
              Scrollen · Défiler
            </p>
            <p style={{ ...eyebrowDark, letterSpacing: "0.28em" }}>
              04 / 04
            </p>
          </div>
          <div
            className="mt-4 h-px w-full"
            style={{ background: "rgba(26,20,12,0.14)" }}
          >
            <motion.div
              className="h-px origin-left"
              style={{
                scaleX: scrollYProgress,
                background: `linear-gradient(90deg, ${OR}, ${OR_GLOW})`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function RailCard({
  product,
  index,
  progress,
}: {
  product: (typeof products)[number];
  index: number;
  progress: MotionValue<number>;
}) {
  const imgY = useTransform(progress, [0, 1], [24, -24]);
  const rotate = useTransform(progress, [0, 1], [0, index % 2 === 0 ? -1 : 1]);

  return (
    <Link
      href={`/kollektion/${product.slug}`}
      className="group block shrink-0"
      style={{ width: "min(78vw, 620px)" }}
    >
      <motion.article
        className="relative overflow-hidden rounded-[28px]"
        style={{
          ...glassPanel,
          aspectRatio: "5/6",
          rotate,
        }}
      >
        {/* Sheen */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-1/2 left-0 right-0 h-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.55), rgba(255,255,255,0))",
            opacity: 0.6,
          }}
        />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, rgba(232,211,168,0.4) 0%, rgba(255,253,247,0) 60%)",
          }}
        />

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ y: imgY }}
        >
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            sizes="(max-width: 768px) 78vw, 620px"
            className="object-contain p-12 transition-transform duration-[1200ms]"
            style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
          />
        </motion.div>

        <div className="absolute left-6 top-6 flex items-center gap-3">
          <span
            className="numeral"
            style={{
              color: OR_DEEP,
              fontSize: 12,
              letterSpacing: "0.3em",
            }}
          >
            N° 0{index + 1}
          </span>
          <span
            aria-hidden
            style={{
              width: 24,
              height: 1,
              background: "rgba(180,150,105,0.5)",
            }}
          />
          <span
            style={{
              ...eyebrow,
              fontSize: 9.5,
              letterSpacing: "0.28em",
            }}
          >
            {product.edition}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
          <div
            className="flex items-end justify-between gap-4 rounded-2xl px-5 py-4"
            style={glassPanel}
          >
            <div>
              <h3
                className="display"
                style={{
                  color: INK,
                  fontSize: "clamp(1.35rem, 1.9vw, 1.8rem)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.02em",
                }}
              >
                {product.name}
              </h3>
              <p
                className="mt-1.5"
                style={{
                  color: INK_SOFT,
                  fontSize: 12.5,
                  letterSpacing: "0.01em",
                }}
              >
                {product.subtitle}
              </p>
            </div>
            <p
              className="numeral shrink-0"
              style={{
                color: OR_DEEP,
                fontSize: 13,
                letterSpacing: "0.06em",
              }}
            >
              {product.price}
            </p>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}

function RailClosing() {
  return (
    <div
      className="flex shrink-0 items-center"
      style={{ width: "min(60vw, 480px)" }}
    >
      <div
        className="flex h-full w-full flex-col justify-between rounded-[28px] p-10"
        style={{ ...glassPanel, aspectRatio: "5/6" }}
      >
        <div>
          <p style={eyebrow}>Suite</p>
          <h3
            className="display mt-6"
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              color: INK,
            }}
          >
            Alle Fassungen{" "}
            <span
              style={{
                fontFamily: "var(--font-fraunces), serif",
                fontStyle: "italic",
                color: OR_DEEP,
              }}
            >
              der Maison.
            </span>
          </h3>
          <p className="mt-6" style={{ ...body, fontSize: 13.5 }}>
            Vier Silhouetten, drei Vergoldungen, zwei Aussichten. Ein einziges
            Prinzip: nichts, was nicht bleiben soll.
          </p>
        </div>
        <Link
          href="/kollektion"
          className="group mt-8 inline-flex items-center gap-4"
          style={{
            color: INK,
            letterSpacing: "0.32em",
            fontSize: 11,
            textTransform: "uppercase",
            borderBottom: `1px solid ${OR}`,
            paddingBottom: 12,
          }}
        >
          Boutique öffnen
          <span
            className="transition-transform duration-500 group-hover:translate-x-1"
            style={{
              color: OR_DEEP,
              transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
            }}
            aria-hidden
          >
            →
          </span>
        </Link>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// 4 — MaterialStudy. A sticky editorial column on the left; on the right, three
// large image panels drift through the viewport with parallax.
// -----------------------------------------------------------------------------
function MaterialStudy() {
  const items = [
    {
      image: "/models/orphee-03.png",
      name: "Titan Béta",
      value: "0,9 mm",
      caption:
        "Kalt gebogen, dreifach gehärtet. Die Fassung wiegt weniger als ein Blatt Papier je Zentimeter.",
    },
    {
      image: "/models/malbec-02.png",
      name: "Acetat Mazzucchelli",
      value: "6 Wochen",
      caption:
        "Ein einziger Block, sechs Wochen gereift, sieben Tage von Hand poliert. Die Maserung bleibt sichtbar.",
    },
    {
      image: "/models/valois-04.png",
      name: "Vergoldung",
      value: "18 K",
      caption:
        "Galvanisch in Pforzheim aufgebracht, mit einer Schicht warmen Rhodiums geschützt. Sie altert wie ein Ring.",
    },
  ];

  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rule = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  return (
    <section
      ref={ref}
      className="relative w-full"
      style={{
        background: `linear-gradient(180deg, ${IVORY_2} 0%, ${IVORY} 100%)`,
      }}
      aria-label="Matière & Savoir-Faire"
    >
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-16 px-6 py-32 md:grid-cols-[1fr_1.15fr] md:gap-24 md:px-12 md:py-48">
        {/* Sticky column */}
        <div className="md:sticky md:top-24 md:h-[calc(100svh-6rem)]">
          <div className="flex h-full flex-col justify-between">
            <div>
              <Reveal>
                <p style={eyebrow}>02 · La Matière</p>
              </Reveal>
              <Reveal delay={0.1} className="mt-8">
                <h2
                  className="display"
                  style={{
                    fontSize: "clamp(2.2rem, 4.6vw, 4.6rem)",
                    lineHeight: 1,
                    letterSpacing: "-0.033em",
                    color: INK,
                  }}
                >
                  Materialien, die{" "}
                  <span
                    style={{
                      fontFamily: "var(--font-fraunces), serif",
                      fontStyle: "italic",
                      color: OR_DEEP,
                    }}
                  >
                    warten können.
                  </span>
                </h2>
              </Reveal>
              <Reveal delay={0.2} className="mt-10 max-w-[440px]">
                <p style={{ ...body, fontSize: 14 }}>
                  Wir arbeiten mit drei Häusern: Nippon Titan, Mazzucchelli in
                  Castiglione, einer Vergolderei in Pforzheim. Alles andere
                  entsteht hier, unter der Lupe, mit Nadel und Faden aus feinstem
                  Stahl.
                </p>
              </Reveal>

              <motion.span
                aria-hidden
                className="mt-14 block h-px w-40"
                style={{
                  background: hairlineGold,
                  scaleX: rule,
                  transformOrigin: "left center",
                }}
              />

              <Reveal delay={0.35} className="mt-14">
                <dl className="grid grid-cols-3 gap-6">
                  {[
                    { k: "Fassungen / Jahr", v: "4" },
                    { k: "Handnummeriert", v: "Alle" },
                    { k: "Garantie", v: "à vie" },
                  ].map((d) => (
                    <div key={d.k}>
                      <dt
                        className="uppercase"
                        style={{
                          fontSize: 9.5,
                          letterSpacing: "0.28em",
                          color: INK_MUTED,
                        }}
                      >
                        {d.k}
                      </dt>
                      <dd
                        className="numeral mt-2"
                        style={{
                          fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)",
                          color: INK,
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {d.v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            <Reveal delay={0.45} className="mt-12">
              <Link
                href="/atelier"
                className="group inline-flex items-center gap-5 uppercase"
                style={{
                  color: INK,
                  letterSpacing: "0.32em",
                  fontSize: 11,
                }}
              >
                Ins Atelier
                <span
                  aria-hidden
                  className="block h-px w-16 transition-all duration-500 group-hover:w-24"
                  style={{
                    background: `linear-gradient(90deg, ${OR}, transparent)`,
                    transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
                  }}
                />
                <span
                  aria-hidden
                  className="transition-transform duration-500 group-hover:translate-x-2"
                  style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                >
                  →
                </span>
              </Link>
            </Reveal>
          </div>
        </div>

        {/* Scrolling panels */}
        <div className="flex flex-col gap-24 md:gap-40">
          {items.map((it, i) => (
            <MaterialPanel key={it.name} {...it} align={i % 2 === 0 ? "left" : "right"} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MaterialPanel({
  image,
  name,
  value,
  caption,
  align,
}: {
  image: string;
  name: string;
  value: string;
  caption: string;
  align: "left" | "right";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1.02, 1]);

  return (
    <motion.div
      ref={ref}
      className="relative overflow-hidden rounded-[28px]"
      style={{
        ...glassPanel,
        aspectRatio: "4/5",
        marginLeft: align === "right" ? "auto" : 0,
        marginRight: align === "left" ? "auto" : 0,
        maxWidth: 560,
        width: "100%",
        scale,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 55% 45%, rgba(232,211,168,0.55) 0%, rgba(255,253,247,0) 65%)",
        }}
      />
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ y }}
      >
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width:768px) 90vw, 560px"
          className="object-contain p-16"
        />
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 md:p-8">
        <div>
          <p style={{ ...eyebrow, fontSize: 10 }}>{name}</p>
          <p
            className="display mt-2"
            style={{
              fontSize: "clamp(1.6rem, 2.6vw, 2.4rem)",
              color: INK,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            {value}
          </p>
        </div>
        <p
          className="max-w-[260px] text-right"
          style={{ ...body, fontSize: 12.5 }}
        >
          {caption}
        </p>
      </div>
    </motion.div>
  );
}

// -----------------------------------------------------------------------------
// 5 — MaisonChiffres. Four liquid-glass panels with numbers. Very quiet.
// -----------------------------------------------------------------------------
function MaisonChiffres() {
  const chiffres = [
    { k: "Gegründet", v: "1972", s: "Rive Gauche · Paris" },
    { k: "Fassungen pro Jahr", v: "4", s: "Éditions Continues" },
    { k: "Ateliers", v: "3", s: "Paris · Berlin · Jura" },
    { k: "Reparatur", v: "à vie", s: "Für jede Nummer" },
  ];

  return (
    <section
      className="relative w-full"
      style={{
        background: `linear-gradient(180deg, ${IVORY} 0%, ${IVORY_2} 100%)`,
      }}
      aria-label="La Maison en chiffres"
    >
      <div className="mx-auto max-w-[1500px] px-6 py-32 md:px-12 md:py-40">
        <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-[auto_1fr] md:gap-16">
          <Reveal>
            <p style={eyebrow}>03 · La Maison</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="display"
              style={{
                fontSize: "clamp(1.9rem, 4vw, 3.8rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
                color: INK,
              }}
            >
              Ein halbes Jahrhundert,{" "}
              <span
                style={{
                  fontFamily: "var(--font-fraunces), serif",
                  fontStyle: "italic",
                  color: OR_DEEP,
                }}
              >
                langsam gemessen.
              </span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 md:mt-24 md:grid-cols-4 md:gap-6">
          {chiffres.map((c, i) => (
            <Reveal key={c.k} delay={i * 0.08}>
              <div
                className="rounded-[24px] p-8 md:p-10"
                style={{ ...glassPanel, minHeight: 220 }}
              >
                <p style={{ ...eyebrow, fontSize: 9.5 }}>{c.k}</p>
                <p
                  className="numeral mt-6"
                  style={{
                    fontSize: "clamp(2.4rem, 4.2vw, 4rem)",
                    color: INK,
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                  }}
                >
                  {c.v}
                </p>
                <p
                  className="mt-5"
                  style={{
                    ...body,
                    fontSize: 12.5,
                    color: INK_SOFT,
                  }}
                >
                  {c.s}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// 6 — AtelierFilm. Full-bleed dark plate with the hero poster scaling on scroll,
// text overlay in ivory. A cinematic bridge back to the golden warmth.
// -----------------------------------------------------------------------------
function AtelierFilm() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1.0]);
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const opacityIn = useTransform(scrollYProgress, [0.15, 0.4], [0, 1]);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ minHeight: "110svh", background: "#0f0c07" }}
      aria-label="Le Film"
    >
      <motion.div
        className="absolute inset-0"
        style={{ scale, y }}
      >
        <Image
          src="/video/hero-poster.jpg"
          alt="L'Atelier"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 40%" }}
        />
      </motion.div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,12,7,0.55) 0%, rgba(15,12,7,0.25) 40%, rgba(15,12,7,0.85) 100%)",
        }}
      />

      <motion.div
        className="relative z-10 mx-auto flex min-h-[110svh] max-w-[1500px] flex-col justify-between px-6 py-24 md:px-12 md:py-32"
        style={{ opacity: opacityIn }}
      >
        <div>
          <p
            style={{
              ...eyebrow,
              color: "rgba(246,241,230,0.6)",
              letterSpacing: "0.42em",
            }}
          >
            04 · Le Film
          </p>
          <h2
            className="display mt-10 max-w-[1200px]"
            style={{
              fontSize: "clamp(2.6rem, 7vw, 7.4rem)",
              lineHeight: 0.98,
              letterSpacing: "-0.033em",
              color: "rgba(246,241,230,0.98)",
            }}
          >
            Fünf Hände.{" "}
            <span
              style={{
                fontFamily: "var(--font-fraunces), serif",
                fontStyle: "italic",
                color: OR_GLOW,
              }}
            >
              Ein Werkstück.
            </span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 items-end gap-10 md:grid-cols-[1.2fr_auto] md:gap-16">
          <p
            className="max-w-[520px]"
            style={{
              color: "rgba(246,241,230,0.78)",
              lineHeight: 1.9,
              fontSize: 15,
            }}
          >
            Ein Atelier im Jura, ein Zwischenlager in Berlin, ein Salon in Paris.
            Zwischen den drei Häusern wandert jede Fassung vier Wochen lang.
            Wir zählen sie, nicht die Uhr.
          </p>
          <Link
            href="/atelier"
            className="group inline-flex items-center gap-6 uppercase"
            style={{
              color: "rgba(246,241,230,0.94)",
              letterSpacing: "0.34em",
              fontSize: 11,
              borderBottom: `1px solid ${OR}`,
              paddingBottom: 16,
            }}
          >
            Film ansehen
            <span
              className="transition-transform duration-500 group-hover:translate-x-2"
              style={{
                color: OR_GLOW,
                transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
              }}
              aria-hidden
            >
              →
            </span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// 7 — JournalTeasers. Three light editorial cards under glass.
// -----------------------------------------------------------------------------
function JournalTeasers() {
  const posts = [
    {
      k: "Materialkunde",
      t: "Warum wir Titan kalt biegen",
      s: "Ein Werkstattgespräch über den Widerstand des Materials und die Geduld einer Fassung.",
      href: "/journal/warum-titan-kalt",
    },
    {
      k: "Livre d'Or",
      t: "Ein Perlmutt-Punkt, ein Ritual",
      s: "Über die Herkunft einer Signatur, die niemand sieht, außer man weiß, wo man hinschauen muss.",
      href: "/journal/perlmutt-ritual",
    },
    {
      k: "Provenance",
      t: "Was ein Passeport erzählt",
      s: "Jede Fassung reist mit einem gebundenen Dokument. Hier sein Inhalt, Seite für Seite.",
      href: "/journal/passeport",
    },
  ];

  return (
    <section
      className="relative w-full"
      style={{
        background: `linear-gradient(180deg, ${IVORY} 0%, ${IVORY_2} 100%)`,
      }}
      aria-label="Livre d'Or"
    >
      <div className="mx-auto max-w-[1500px] px-6 py-32 md:px-12 md:py-40">
        <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-[auto_1fr_auto] md:gap-16">
          <Reveal>
            <p style={eyebrow}>05 · Livre d'Or</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="display"
              style={{
                fontSize: "clamp(1.9rem, 4vw, 3.8rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
                color: INK,
              }}
            >
              Notizen aus dem{" "}
              <span
                style={{
                  fontFamily: "var(--font-fraunces), serif",
                  fontStyle: "italic",
                  color: OR_DEEP,
                }}
              >
                Atelier.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.22}>
            <Link
              href="/journal"
              className="group inline-flex items-center gap-4 uppercase"
              style={{
                color: INK,
                letterSpacing: "0.32em",
                fontSize: 11,
              }}
            >
              Ganzes Journal
              <span
                className="transition-transform duration-500 group-hover:translate-x-2"
                style={{
                  color: OR_DEEP,
                  transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
                }}
                aria-hidden
              >
                →
              </span>
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:mt-24 md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.08}>
              <Link
                href={p.href}
                className="group block h-full rounded-[24px] p-8 md:p-10"
                style={{ ...glassPanel, minHeight: 340 }}
              >
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <p style={{ ...eyebrow, fontSize: 9.5 }}>{p.k}</p>
                    <h3
                      className="display mt-6"
                      style={{
                        fontSize: "clamp(1.4rem, 2vw, 1.9rem)",
                        lineHeight: 1.15,
                        letterSpacing: "-0.02em",
                        color: INK,
                      }}
                    >
                      {p.t}
                    </h3>
                    <p className="mt-5" style={{ ...body, fontSize: 13.5 }}>
                      {p.s}
                    </p>
                  </div>
                  <div className="mt-10 flex items-center gap-4">
                    <span
                      aria-hidden
                      className="block h-px w-10 transition-all duration-500 group-hover:w-16"
                      style={{
                        background: `linear-gradient(90deg, ${OR}, transparent)`,
                        transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
                      }}
                    />
                    <span
                      style={{
                        ...eyebrow,
                        color: OR_DEEP,
                        letterSpacing: "0.28em",
                      }}
                    >
                      Weiterlesen
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// 8 — SalonPrive. Closing invitation with a liquid glass card over a warm plate.
// -----------------------------------------------------------------------------
function SalonPrive() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const glow = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.7, 0.3]);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{
        background: `linear-gradient(180deg, ${IVORY_2} 0%, ${IVORY_3} 100%)`,
      }}
      aria-label="Le Salon Privé"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 35%, rgba(232,211,168,0.75), rgba(246,241,230,0) 65%)",
          opacity: glow,
        }}
      />

      <div className="relative mx-auto max-w-[1300px] px-6 py-40 md:px-12 md:py-56">
        <div
          className="mx-auto rounded-[36px] p-10 md:p-16"
          style={{ ...glassPanel }}
        >
          <Reveal>
            <p style={{ ...eyebrow, letterSpacing: "0.44em" }}>
              06 · Le Salon Privé
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-10 max-w-[1000px]">
            <h2
              className="display"
              style={{
                color: INK,
                fontSize: "clamp(2.4rem, 6.4vw, 6.4rem)",
                lineHeight: 0.98,
                letterSpacing: "-0.033em",
              }}
            >
              Manche Dinge muss man{" "}
              <span
                style={{
                  fontFamily: "var(--font-fraunces), serif",
                  fontStyle: "italic",
                  color: OR_DEEP,
                }}
              >
                tragen.
              </span>
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 items-end gap-12 md:mt-24 md:grid-cols-[1.1fr_auto] md:gap-16">
            <Reveal delay={0.3}>
              <p
                style={{
                  ...body,
                  fontSize: 15,
                  maxWidth: 520,
                }}
              >
                Eine Fassung. Ihr Gesicht. Zeit für die Details. Entdecken Sie
                die Maison in einer persönlichen Anprobe: in Paris, Berlin oder
                per Videokonferenz mit einem unserer Concierges.
              </p>
            </Reveal>

            <Reveal delay={0.42}>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/concierge"
                  className="group inline-flex items-center gap-4 rounded-full px-7 py-4 uppercase"
                  style={{
                    color: IVORY,
                    background: INK,
                    letterSpacing: "0.28em",
                    fontSize: 11,
                    fontWeight: 500,
                    transition: "transform 200ms cubic-bezier(0.16,1,0.3,1)",
                  }}
                >
                  Anprobe vereinbaren
                  <span
                    aria-hidden
                    className="transition-transform duration-500 group-hover:translate-x-1"
                    style={{
                      color: OR_GLOW,
                      transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
                    }}
                  >
                    →
                  </span>
                </Link>

                <Link
                  href="/passeport"
                  className="group inline-flex items-center gap-4 rounded-full px-7 py-4 uppercase"
                  style={{
                    color: INK,
                    letterSpacing: "0.28em",
                    fontSize: 11,
                    fontWeight: 500,
                    border: `1px solid ${OR}`,
                    background: "rgba(255,253,247,0.6)",
                    backdropFilter: "blur(18px)",
                    WebkitBackdropFilter: "blur(18px)",
                  }}
                >
                  Passeport ansehen
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// 9 — Adresses. Three quiet address cards under glass. Closing beat.
// -----------------------------------------------------------------------------
function Adresses() {
  const adresses = [
    {
      city: "Paris",
      label: "Salon Rive Gauche",
      lines: ["24, Rue de Verneuil", "75007 Paris", "Sur rendez-vous"],
    },
    {
      city: "Berlin",
      label: "Atelier Mitte",
      lines: ["Linienstraße 71", "10119 Berlin", "Sur rendez-vous"],
    },
    {
      city: "Jura",
      label: "Manufacture",
      lines: ["Route de l'Orbe 3", "1345 Le Lieu · Suisse", "Ouvert sur invitation"],
    },
  ];

  return (
    <section
      className="relative w-full"
      style={{
        background: `linear-gradient(180deg, ${IVORY_3} 0%, ${IVORY_2} 100%)`,
      }}
      aria-label="Adresses"
    >
      <div className="mx-auto max-w-[1500px] px-6 py-32 md:px-12 md:py-40">
        <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-[auto_1fr] md:gap-16">
          <Reveal>
            <p style={eyebrow}>07 · Adresses</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="display"
              style={{
                fontSize: "clamp(1.9rem, 4vw, 3.8rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
                color: INK,
              }}
            >
              Drei Häuser.{" "}
              <span
                style={{
                  fontFamily: "var(--font-fraunces), serif",
                  fontStyle: "italic",
                  color: OR_DEEP,
                }}
              >
                Eine Anschrift.
              </span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-3">
          {adresses.map((a, i) => (
            <Reveal key={a.city} delay={i * 0.08}>
              <div
                className="rounded-[24px] p-8 md:p-10"
                style={{ ...glassPanel, minHeight: 260 }}
              >
                <p style={{ ...eyebrow, fontSize: 10 }}>{a.label}</p>
                <p
                  className="display mt-6"
                  style={{
                    fontSize: "clamp(1.8rem, 2.6vw, 2.4rem)",
                    color: INK,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.05,
                  }}
                >
                  {a.city}
                </p>
                <div
                  className="mt-6 h-px w-14"
                  style={{ background: OR }}
                  aria-hidden
                />
                <div className="mt-6 space-y-1.5" style={{ ...body, fontSize: 13 }}>
                  {a.lines.map((l) => (
                    <p key={l}>{l}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-24">
          <div
            className="flex flex-col items-center gap-4 text-center"
            style={{ ...eyebrow, color: INK_MUTED, letterSpacing: "0.42em" }}
          >
            <span
              aria-hidden
              className="block h-px w-20"
              style={{ background: hairlineGold }}
            />
            <p>L'Atelier d'Or · Édition Continue · MMXXVI</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
