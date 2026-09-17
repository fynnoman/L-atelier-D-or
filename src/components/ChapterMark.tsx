type Props = {
  numeral: string;
  title: string;
  subtitle?: string;
  tone?: "light" | "dark";
};

export default function ChapterMark({
  numeral,
  title,
  subtitle,
  tone = "light",
}: Props) {
  const isDark = tone === "dark";
  return (
    <section
      className="relative"
      style={{
        background: isDark ? "var(--n-ink)" : "var(--n-bg-2)",
        color: isDark ? "var(--n-bg)" : "var(--n-ink)",
        paddingBlock: "clamp(56px, 8vh, 96px)",
      }}
    >
      <div className="n-page">
        <div
          className="pt-10 border-t flex items-baseline justify-between gap-8 flex-wrap"
          style={{
            borderColor: isDark
              ? "rgba(255,255,255,0.18)"
              : "var(--n-line)",
          }}
        >
          <div className="flex items-baseline gap-8">
            <span
              className="n-meta"
              style={{ opacity: isDark ? 0.7 : 0.6 }}
            >
              Kapitel {numeral}
            </span>
            <h2
              className="n-display leading-[0.95]"
              style={{
                fontSize: "clamp(28px, 3.4vw, 52px)",
                fontWeight: 200,
              }}
            >
              {title}
            </h2>
          </div>
          {subtitle && (
            <span
              className="n-meta"
              style={{ opacity: isDark ? 0.55 : 0.5 }}
            >
              {subtitle}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
