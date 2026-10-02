"use client";

import Link from "next/link";
import { useLocale } from "@/lib/i18n/LanguageContext";
import Panther from "./Panther";
import styles from "./Panther.module.css";

export default function PantherMoment() {
  const de = useLocale() === "de";
  return <section className={styles.moment} aria-labelledby="panther-title">
    <div className={styles.topline}><span>L’Atelier d’Or</span><span>{de ? "Eine Frage des Instinkts" : "Une question d’instinct"}</span></div>
    <div className={styles.editorial}>
      <div className={styles.copy}>
        <span className={styles.eyebrow}>{de ? "Die Signatur" : "La signature"} · 01</span>
        <h2 id="panther-title" className="n-display">{de ? <>Ein Blick.<br /><em>Ein Instinkt.</em></> : <>L’instinct<br /><em>du regard.</em></>}</h2>
        <p>{de ? "Eine stille Präsenz. Ein unverkennbarer Blick." : "Une présence silencieuse. Un regard qui ne ressemble à aucun autre."}</p>
        <Link href="/collection/roi-noir" className={styles.link}>{de ? "Roi Noir entdecken" : "Découvrir Roi Noir"}<span aria-hidden="true">↗</span></Link>
      </div>
      <Panther />
    </div>
    <div className={styles.footnote}><span>{de ? "Die Kunst der Zurückhaltung" : "L’art de la retenue"}</span><span aria-hidden="true">L’A · O</span></div>
  </section>;
}
