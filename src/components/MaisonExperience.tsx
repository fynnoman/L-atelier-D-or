"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { products } from "@/data/products";

function Reveal({children,className=""}:{children:ReactNode;className?:string}){
 const reduce=useReducedMotion();
 return <motion.div className={className} initial={false} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} style={{perspective:1200}}><motion.div initial={reduce?false:{y:45,opacity:.55}} whileInView={{y:0,opacity:1}} viewport={{once:true}} transition={{duration:.9}}>{children}</motion.div></motion.div>;
}
export default function MaisonExperience(){
 const ref=useRef<HTMLElement>(null);const reduce=useReducedMotion();
 const {scrollYProgress}=useScroll({target:ref,offset:["start end","end start"]});
 const rotate=useTransform(scrollYProgress,[0,1],reduce?[0,0]:[-9,9]);
 return <>
 <section className="maison-note"><span>LA MAISON</span><p>Für Menschen, die nicht mehr sehen wollen.<br/><em>Sondern anders.</em></p><span>PARIS · BERLIN · JURA</span></section>
 <section id="collection" className="new-collection">
 <Reveal><div className="section-top"><span>01 — LES OBJETS</span><span>QUATRE SIGNATURES</span></div><div className="collection-intro"><h2>Charakter.<br/><em>In jeder Linie.</em></h2><div><p>Vier Fassungen. Vier Perspektiven.<br/>Entdecken Sie die Kollektion der Maison.</p><Link href="/kollektion" className="atelier-link">Alle Fassungen <span>↗</span></Link></div></div></Reveal>
 <div className="gallery-grid">{products.map((p,i)=><Reveal key={p.slug} className={`gallery-item gallery-item-${i}`}><Link href={`/kollektion/${p.slug}`} className="gallery-product"><div className="gallery-image"><span className="gallery-number">0{i+1}</span><Image src={p.image} alt={p.imageAlt} fill sizes="(max-width:700px) 90vw, 45vw"/><span className="gallery-edition">{p.edition}</span><span className="gallery-open" aria-hidden>↗</span></div><div className="gallery-label"><div><h3>{p.name}</h3><p>{p.subtitle}</p></div><span>{p.price}</span></div></Link></Reveal>)}</div>
 <p className="asset-note">Produktdarstellungen: KI-Visualisierungen.</p>
 </section>
 <section className="material-story" ref={ref}>
 <div className="section-top"><span>02 — LA MATIÈRE</span><span>ORPHÉE 03</span></div>
 <div className="material-layout"><div className="material-copy"><span className="small-label">DIE KUNST DES WEGLASSENS</span><h2>Fast nichts.<br/><em>Und doch alles.</em></h2><p>Ein feiner Titan-Draht. Ein warmer Goldton. Ein Perlmutt-Punkt am Steg. Orphée reduziert die Fassung auf das, was zählt.</p><div className="material-specs"><div><strong>0,9<span>mm</span></strong><p>Titan-Draht</p></div><div><strong>18<span>K</span></strong><p>Vergoldung</p></div><div><strong>8,9<span>g</span></strong><p>Leichtigkeit</p></div></div><Link href="/kollektion/orphee-03" className="atelier-link">Orphée im Detail <span>↗</span></Link></div><motion.div className="material-image" style={{rotate}}><Image src="/models/orphee-03.png" alt="Detail der runden Orphée-Fassung" fill sizes="(max-width:700px) 90vw, 55vw"/></motion.div></div>
 </section>
 <AtelierFilm/>
 <section className="maison-invitation"><Reveal><span className="small-label">LE SALON PRIVÉ</span><h2>Manche Dinge muss<br/>man <em>erleben.</em></h2><div className="invitation-bottom"><p>Eine Fassung. Ihr Gesicht. Zeit für die Details.<br/>Entdecken Sie die Maison in einer persönlichen Anprobe.</p><Link className="invitation-link" href="/concierge">Ihre Anprobe vereinbaren <span>↗</span></Link></div></Reveal></section>
 </>;
}
function AtelierFilm(){const reduce=useReducedMotion();const ref=useRef<HTMLElement>(null);const {scrollYProgress}=useScroll({target:ref,offset:["start end","end start"]});const scale=useTransform(scrollYProgress,[0,1],reduce?[1,1]:[1.2,1]);return <section className="atelier-film" ref={ref}><motion.video style={{scale}} src="/video/intro.mp4" muted autoPlay={!reduce} loop playsInline preload="metadata" aria-hidden/><div className="film-shade"/><div className="film-copy"><span className="small-label">03 — L’ATELIER</span><h2>La main.<br/><em>La mémoire.</em></h2><div><p>Vom ersten Bogen bis zur letzten Politur.<br/>Die Menschen hinter jeder Fassung.</p><Link href="/atelier" className="atelier-link">Das Atelier betreten <span>↗</span></Link></div></div></section>}
