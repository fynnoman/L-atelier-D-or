import { workshopMarks } from "@/data/maison";

type Props = {
  tone?: "gold" | "noir" | "parchment";
};

// Endless hallmark ticker. Uses maison.workshopMarks. Runs at a slow,
// dignified pace, gold-tinted on obsidian ground.
export default function GoldMarquee({ tone = "gold" }: Props) {
  const bg =
    tone === "noir"
      ? "bg-noir"
      : tone === "parchment"
        ? "bg-parchment"
        : "bg-noir";
  const border =
    tone === "parchment" ? "border-line" : "border-line-noir";

  return (
    <section
      className={`relative w-full overflow-hidden py-6 md:py-7 ${bg} ${
        tone === "noir" || tone === "gold" ? "grain grain-dark" : "grain"
      } border-y ${border}`}
      style={{
        backgroundColor:
          tone === "parchment" ? "var(--parchment-2)" : "var(--noir)",
      }}
      aria-hidden
    >
      <div className="relative z-10 flex whitespace-nowrap marquee-track">
        {[0, 1].map((k) => (
          <ul key={k} className="flex shrink-0 items-center gap-16 pr-16">
            {workshopMarks.map((m, i) => (
              <li
                key={`${k}-${i}`}
                className="inline-flex items-center gap-5 text-[11px] uppercase"
                style={{
                  letterSpacing: "0.32em",
                  color:
                    tone === "parchment"
                      ? "var(--ink)"
                      : "var(--or-soft)",
                  fontStyle: m.italic ? "italic" : "normal",
                  fontFamily: m.italic
                    ? "var(--font-fraunces), serif"
                    : "var(--font-inter), sans-serif",
                }}
              >
                <span
                  className="inline-block h-[5px] w-[5px] rotate-45"
                  style={{
                    background:
                      tone === "parchment" ? "var(--or-2)" : "var(--or)",
                    opacity: 0.85,
                  }}
                  aria-hidden
                />
                {m.label}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
