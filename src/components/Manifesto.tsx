"use client";
import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
const words="Es gibt Dinge, die man trägt. Und Dinge, die ein Teil von einem werden.".split(" ");
function Word({word,index,progress,reduced}:{word:string;index:number;progress:MotionValue<number>;reduced:boolean}){const opacity=useTransform(progress,[index/words.length*.7,(index+1)/words.length*.7],[.16,1]);return <motion.span style={{opacity:reduced?1:opacity}}>{word} </motion.span>}
export default function Manifesto(){const ref=useRef<HTMLElement>(null);const reduced=useReducedMotion();const {scrollYProgress}=useScroll({target:ref,offset:["start start","end end"]});return <section ref={ref} className="atelier-manifesto"><div className="atelier-manifesto-sticky"><div className="atelier-section-meta"><span>02 / LA PHILOSOPHIE</span><span>L’ESSENTIEL, RIEN DE PLUS.</span></div><h2>{words.map((word,index)=><Word key={index} word={word} index={index} progress={scrollYProgress} reduced={!!reduced}/>)}</h2><div className="atelier-manifesto-foot"><p>Vier Fassungen. Kleine Serien.<br/>Geschaffen, um lange zu bleiben.</p><Link href="/atelier" className="atelier-link">Die Philosophie <span>↗</span></Link></div></div></section>}
