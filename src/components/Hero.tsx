"use client";

import Link from "next/link";
import PlaceholderImage from "./PlaceholderImage";

// LV-style hero: 100vh full-bleed campaign image, minimal centered copy
// bottom, thin outline CTAs, nav sitting transparent above.
export default function Hero() {
  return (
    <section className="relative h-[100dvh] min-h-[640px] w-full overflow-hidden bg-ink">
      <PlaceholderImage
        src="https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=2600&q=85"
        alt="L'Atelier d'Or · Automne / Hiver 2025"
        sizes="100vw"
        quality={82}
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-ink/40" />

      <div className="absolute inset-x-0 bottom-14 md:bottom-20 flex flex-col items-center gap-6 px-6 text-center text-white">
        <p className="eyebrow-light">Automne / Hiver 2025</p>
        <h1
          className="wordmark text-white text-[clamp(1.4rem,3.2vw,2.4rem)] font-light"
          style={{ letterSpacing: "0.28em" }}
        >
          L&apos;Atelier d&apos;Or
        </h1>
        <p className="max-w-xl text-[13.5px] leading-[1.7] text-white/85">
          Neue Kollektion. Vier Fassungen aus Titan, Acetat und 18 Karat,
          zwischen Paris, Berlin und dem Sentier von Hand gefertigt.
        </p>
        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <Link href="/kollektion" className="lv-btn lv-btn-light">
            Kollektion entdecken
          </Link>
          <Link href="/atelier" className="lv-btn lv-btn-light">
            Die Maison
          </Link>
        </div>
      </div>
    </section>
  );
}
