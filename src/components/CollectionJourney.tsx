"use client";
import {useEffect,useRef,useState} from "react";
import Link from "next/link";
import {motion,useScroll,useTransform,useReducedMotion} from "framer-motion";
import {products} from "@/data/products";
import ProductCard from "./ProductCard";
export default function CollectionJourney(){
 const ref=useRef<HTMLElement>(null),track=useRef<HTMLDivElement>(null);
 const [distance,setDistance]=useState(0);
 const reduced=useReducedMotion();
 const {scrollYProgress}=useScroll({target:ref,offset:["start start","end end"]});
 const x=useTransform(scrollYProgress,[.08,.92],[0,-distance]);
 useEffect(()=>{const measure=()=>{if(track.current)setDistance(Math.max(0,track.current.scrollWidth-window.innerWidth+window.innerWidth*.1))};measure();const observer=new ResizeObserver(measure);if(track.current)observer.observe(track.current);window.addEventListener("resize",measure);return()=>{observer.disconnect();window.removeEventListener("resize",measure)}},[]);
 return <section ref={ref} id="collection" className="collection-journey"><div className="collection-sticky"><div className="collection-heading"><div><span className="atelier-kicker">LES QUATRE — LA COLLECTION</span><h2>Vier Charaktere.<br/><em>Eine Handschrift.</em></h2></div><div><p>Kleine Serien. Von Hand nummeriert.<br/>Für Menschen mit einem eigenen Blick.</p><Link href="/kollektion" className="atelier-link">Alle Fassungen <span>↗</span></Link></div></div><div className="collection-viewport"><motion.div ref={track} className="collection-track" style={{x:reduced?0:x}}>{products.map((product,i)=><div key={product.slug} className="collection-card" onFocus={()=>{if(ref.current && !reduced && window.innerWidth>700)window.scrollTo({top:ref.current.offsetTop+(ref.current.offsetHeight-window.innerHeight)*(.08+i/3*.84),behavior:"instant"})}}><ProductCard product={product} index={i} aspect="aspect-[5/4]"/></div>)}</motion.div></div><div className="collection-caption"><span>01 — 04</span><span>PRODUKTVISUALISIERUNGEN</span><span>FAÇONNÉ À LA MAIN</span></div></div></section>
}
