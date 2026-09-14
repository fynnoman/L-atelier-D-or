import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  italic?: string;
  intro?: string;
  chapter?: string;
};

export default function PageHead({ eyebrow, title, italic, intro, chapter }: Props) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        paddingInline: "var(--page-x)",
        paddingTop: "clamp(140px, 20vh, 240px)",
        paddingBottom: "clamp(60px, 10vh, 120px)",
        background:
          "radial-gradient(1000px 600px at 20% 20%, rgba(215,170,90,0.20), transparent 60%), linear-gradient(180deg, var(--parchment) 0%, var(--parchment-2) 100%)",
      }}
    >
      <div aria-hidden className="absolute inset-0 grain pointer-events-none" />
      <div className="relative mx-auto max-w-[1200px]">
        {chapter && (
          <Reveal>
            <div
              style={{
                fontSize: 11,
                letterSpacing: "0.34em",
                textTransform: "uppercase",
                color: "var(--muted)",
                marginBottom: 24,
              }}
            >
              {chapter}
            </div>
          </Reveal>
        )}
        <Reveal>
          <div className="eyebrow-or">{eyebrow}</div>
        </Reveal>
        <Reveal delay={80}>
          <h1
            className="display mt-6"
            style={{
              fontSize: "clamp(52px, 8.5vw, 148px)",
              lineHeight: 0.94,
              color: "var(--ink)",
            }}
          >
            {title}
            {italic && (
              <>
                <br />
                <span style={{ fontStyle: "italic", color: "var(--or-2)" }}>{italic}</span>
              </>
            )}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={160}>
            <p
              className="serif mt-10"
              style={{ fontSize: "clamp(18px, 1.8vw, 22px)", lineHeight: 1.55, maxWidth: 720, color: "var(--ink-2)" }}
            >
              {intro}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
