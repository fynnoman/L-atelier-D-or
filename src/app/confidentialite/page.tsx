import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import LegalBody from "@/components/LegalBody";

export const metadata: Metadata = {
  title: "Confidentialité",
  description: "Comment nous traitons vos données.",
};

export default function ConfidentialitePage() {
  return (
    <>
      <PageHead
        chapter="Cahier — Discrétion"
        eyebrow="Confidentialité"
        title="Vos données,"
        italic="notre retenue."
      />
      <LegalBody>
        <h2 className="display" style={{ fontSize: 24, color: "var(--ink)" }}>
          Ce que nous collectons
        </h2>
        <p>
          Nous collectons uniquement les informations que vous nous transmettez
          volontairement — nom, adresse courriel, message et ville souhaitée
          pour un rendez-vous. Aucun autre traceur, aucune revente à un tiers.
        </p>

        <h2 className="display" style={{ fontSize: 24, color: "var(--ink)" }}>
          Pourquoi nous les collectons
        </h2>
        <p>
          Vos coordonnées servent à répondre à votre demande de rendez-vous ou à
          votre message. Elles sont conservées le temps de notre correspondance
          et supprimées ensuite, sauf si vous nous demandez expressément d’être
          tenu au courant de nos futures collections.
        </p>

        <h2 className="display" style={{ fontSize: 24, color: "var(--ink)" }}>
          Vos droits
        </h2>
        <p>
          Conformément au Règlement général sur la protection des données (RGPD),
          vous disposez d’un droit d’accès, de rectification, d’effacement, de
          limitation et de portabilité de vos données. Il suffit de nous écrire.
        </p>

        <h2 className="display" style={{ fontSize: 24, color: "var(--ink)" }}>
          Cookies
        </h2>
        <p>
          Le site n’utilise pas de traceurs publicitaires. Les seuls cookies
          déposés sont ceux, strictement nécessaires, à l’affichage du site et
          à sa mise en cache.
        </p>
      </LegalBody>
    </>
  );
}
