"use client";
import {useEffect} from "react";
import {usePathname} from "next/navigation";
import {motion,useReducedMotion,useScroll,useSpring} from "framer-motion";
export default function ScrollExperience(){const path=usePathname();const reduce=useReducedMotion();const {scrollYProgress}=useScroll();const scaleX=useSpring(scrollYProgress,{stiffness:100,damping:30});useEffect(()=>{if(reduce)return;const elements=document.querySelectorAll("main section:not(.atelier-hero):not(.atelier-manifesto)");const observer=new IntersectionObserver(entries=>{for(const e of entries)e.target.classList.toggle("section-arrived",e.isIntersecting)},{threshold:.06});elements.forEach(el=>{el.classList.add("scroll-section");observer.observe(el)});return()=>{observer.disconnect();elements.forEach(el=>el.classList.remove("scroll-section","section-arrived"))}},[path,reduce]);return <motion.div className="page-scroll-progress" style={{scaleX:reduce?scrollYProgress:scaleX}} aria-hidden/>}
