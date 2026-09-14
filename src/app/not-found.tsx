import Link from "next/link";

export default function NotFound() {
  return (
    <section
      className="relative"
      style={{
        minHeight: "80svh",
        paddingInline: "var(--page-x)",
        paddingTop: "clamp(160px, 22vh, 260px)",
        paddingBottom: "clamp(80px, 12vh, 140px)",
        background:
          "radial-gradient(1000px 600px at 22% 20%, rgba(215,170,90,0.20), transparent 60%), linear-gradient(180deg, var(--parchment) 0%, var(--parchment-2) 100%)",
      }}
    >
      <div className="mx-auto max-w-[900px] text-center">
        <div className="eyebrow-or">Cahier introuvable</div>
        <h1
          className="display mt-6"
          style={{
            fontSize: "clamp(56px, 10vw, 148px)",
            lineHeight: 0.94,
            color: "var(--ink)",
          }}
        >
          404
        </h1>
        <p
          className="serif mt-8 mx-auto"
          style={{ fontSize: "clamp(17px, 1.5vw, 20px)", lineHeight: 1.55, maxWidth: 520, color: "var(--ink-2)" }}
        >
          La page que vous cherchez n’est pas ici. Elle a peut-être été retirée
          — ou bien elle n’a pas encore été écrite.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Link href="/" className="btn-or">Retour à la maison</Link>
          <Link href="/collection" className="btn-ghost" style={{ color: "var(--ink)", borderColor: "var(--line)" }}>
            Voir la collection
          </Link>
        </div>
      </div>
    </section>
  );
}
