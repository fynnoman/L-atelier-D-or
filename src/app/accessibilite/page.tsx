import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import LegalBody from "@/components/LegalBody";

export const metadata: Metadata = {
  title: "Accessibilité",
  description: "Notre engagement d’accessibilité.",
};

export default function AccessibilitePage() {
  return (
    <>
      <PageHead
        chapter="Cahier — Discrétion"
        eyebrow="Accessibilité"
        title="Accessibilité,"
        italic="notre engagement."
      />
      <LegalBody>
        <p>
          Nous concevons ce site pour qu’il soit lisible, navigable et utilisable
          par le plus grand nombre. Le contraste, la taille des textes, la
          navigation au clavier, l’ordre de lecture et l’étiquetage sémantique
          sont vérifiés à chaque évolution.
        </p>
        <h2 className="display" style={{ fontSize: 24, color: "var(--ink)" }}>
          Ce que nous respectons
        </h2>
        <p>
          Nous nous alignons sur les recommandations WCAG 2.2 niveau AA. Les
          animations décoratives respectent la préférence « réduction de
          mouvement » de votre appareil.
        </p>
        <h2 className="display" style={{ fontSize: 24, color: "var(--ink)" }}>
          Nous prévenir
        </h2>
        <p>
          Si un contenu du site vous est difficilement accessible, écrivez à{" "}
          <a href="mailto:concierge@latelier-dor.com" className="link" data-underline>
            concierge@latelier-dor.com
          </a>{" "}
          et nous vous répondrons rapidement.
        </p>
      </LegalBody>
    </>
  );
}
