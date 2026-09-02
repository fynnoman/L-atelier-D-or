import Atelier from "@/components/Atelier";

export const metadata = {
  title: "Atelier · L'Atelier D'Or",
  description: "Werkstattnotizen aus dem Jura und aus Berlin.",
};

export default function AtelierPage() {
  return (
    <div className="pt-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="eyebrow">Atelier</div>
        <h1 className="mt-6 font-display text-6xl md:text-8xl leading-[0.95] max-w-4xl">
          Zwischen{" "}
          <span className="serif-italic gold-text">Jura</span> und Berlin.
        </h1>
        <p className="mt-8 max-w-2xl text-ink-2 text-lg leading-relaxed">
          Unsere Werkstatt liegt am Waldrand. Hier reifen Acetat-Blöcke,
          werden Titan-Drähte gebogen, gefeilt und dreifach gehärtet. Jede
          Fassung durchläuft 42 Schritte, bevor sie das Haus verlässt.
        </p>
      </div>
      <Atelier />
    </div>
  );
}
