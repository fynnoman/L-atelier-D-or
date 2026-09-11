"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
const AtelierScene = dynamic(() => import("./GoldScene"), { ssr: false });

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [angle, setAngle] = useState(0);
  const [paused, setPaused] = useState(false);
  const [finish, setFinish] = useState("#c6a16b");
  const { scrollYProgress: progress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const titleY = useTransform(progress, [0, .45], [0, reduced ? 0 : -150]);
  const titleOpacity = useTransform(progress, [0, .28, .45], [1, 1, 0]);
  const detailEvents = useTransform(progress, value => !reduced && value > .5 && value < .98 ? "auto" : "none");
  const detailOpacity = useTransform(progress, [.38, .55, .88, 1], [0, 1, 1, 0]);
  return <section ref={ref} className="atelier-hero" aria-label="L’Atelier d’Or — die Fassung entdecken">
    <div className="atelier-stage">
      <motion.div className="atelier-title" style={{ y: titleY, opacity: reduced ? 1 : titleOpacity }}>
        <p className="atelier-kicker">MAISON D’OPTIQUE — PARIS · BERLIN · JURA</p>
        <h1>L’art de <em>voir.</em></h1>
        <p className="atelier-title-note">Außergewöhnliche Perspektiven. In Gold gefasst.</p>
      </motion.div>
      <div className="atelier-scene"><AtelierScene progress={progress} tint={finish} reduced={!!reduced} angle={angle} paused={paused} /></div>
      <motion.div className="atelier-anatomy" style={{ opacity: reduced ? 0 : detailOpacity, pointerEvents: detailEvents }}>
        <span className="atelier-kicker">01 / ANATOMIE D’UNE ICÔNE</span>
        <h2>Weniger Material.<br /><em>Mehr Charakter.</em></h2>
        <p>0,9 mm Titan. Ein Hauch von Gold.<br />Und nichts, das dem Blick im Weg steht.</p>
        <Link href="/kollektion/orphee-03" className="atelier-link">Orphée entdecken <span>↗</span></Link>
      </motion.div>
      <div className="atelier-hero-bottom">
        <div><span className="atelier-kicker">ORPHÉE 03</span><p>Titan Béta · 18 Karat</p></div>
        <div className="atelier-finishes" aria-label="Farbe der 3D-Fassung">{[{c:"#c6a16b",n:"Or Miel"},{c:"#c9c5bd",n:"Argent Poli"}].map(({c,n})=><button key={c} aria-label={n} aria-pressed={finish===c} onClick={()=>setFinish(c)} style={{background:c}} />)}<span>{finish==="#c6a16b"?"Or Miel":"Argent Poli"}</span></div>
        <a href="#collection" className="atelier-link">Die Kollektion <span>↗</span></a>
      </div>
      <div className="scene-controls"><label htmlFor="view-angle">Perspektive</label><input id="view-angle" type="range" min="-180" max="180" value={angle} onChange={e=>setAngle(Number(e.target.value))} aria-label="3D-Fassung drehen"/><button type="button" onClick={()=>setPaused(!paused)} aria-pressed={paused}>{paused?"Bewegung fortsetzen":"Bewegung pausieren"}</button></div>
      <div className="atelier-scroll-hint"><span>WEITERSCROLLEN</span><span>↓</span></div>
      <motion.div className="atelier-progress" style={{scaleX:progress}} />
    </div>
  </section>;
}
