import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import LegalBody from "@/components/LegalBody";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Éditeur, hébergeur, propriété intellectuelle.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHead
        chapter="Cahier — Discrétion"
        eyebrow="Mentions légales"
        title="Mentions"
        italic="légales."
      />
      <LegalBody>
        <h2 className="display" style={{ fontSize: 24, color: "var(--ink)" }}>
          Éditeur du site
        </h2>
        <p>
          L’Atelier d’Or, société par actions simplifiée à capital variable, dont le siège social
          est situé 14, rue de l’Éclipse, 75008 Paris — France. RCS Paris — Numéro de TVA
          intracommunautaire à préciser lors de l’immatriculation.
        </p>
        <p>Directeur de la publication : le président en exercice.</p>

        <h2 className="display" style={{ fontSize: 24, color: "var(--ink)" }}>
          Hébergement
        </h2>
        <p>
          Le présent site est hébergé par Vercel Inc., 340 S Lemon Ave #4133,
          Walnut CA 91789, États-Unis.
        </p>

        <h2 className="display" style={{ fontSize: 24, color: "var(--ink)" }}>
          Propriété intellectuelle
        </h2>
        <p>
          L’ensemble des contenus (textes, photographies, dessins, illustrations, marques et
          logos) reproduits sur ce site est protégé au titre de la propriété intellectuelle.
          Toute reproduction, représentation ou diffusion, en tout ou partie, est interdite
          sans autorisation écrite préalable de la maison.
        </p>

        <h2 className="display" style={{ fontSize: 24, color: "var(--ink)" }}>
          Contact
        </h2>
        <p>
          Pour toute question, écrivez à{" "}
          <a href="mailto:concierge@latelier-dor.com" className="link" data-underline>
            concierge@latelier-dor.com
          </a>
          .
        </p>
      </LegalBody>
    </>
  );
}
