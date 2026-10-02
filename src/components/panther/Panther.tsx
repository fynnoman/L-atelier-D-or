"use client";

import dynamic from "next/dynamic";
import { Component, useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { useLocale } from "@/lib/i18n/LanguageContext";
import styles from "./Panther.module.css";

const Scene = dynamic(() => import("./PantherScene"), { ssr: false });

class SceneBoundary extends Component<{ children: ReactNode; onError: () => void }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch() { this.props.onError(); }
  render() { return this.state.failed ? null : this.props.children; }
}

export default function Panther({ variant = "feature" }: { variant?: "feature" | "signature" | "collection" }) {
  const de = useLocale() === "de";
  const host = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [reduced, setReduced] = useState(true);
  const [paused, setPaused] = useState(false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const onReady = useCallback(() => setReady(true), []);
  const onLost = useCallback(() => { setFailed(true); setReady(false); }, []);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReduced(motion.matches);
    const updateVisibility = () => setHidden(document.hidden);
    updateMotion();
    updateVisibility();
    motion.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updateVisibility);
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
      if (!entry.isIntersecting) setReady(false);
    }, { threshold: 0.05 });
    if (host.current) observer.observe(host.current);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  return <div ref={host} className={`${styles.panther} ${styles[variant]}`} data-panther={variant}>
    <div className={styles.shadow} aria-hidden="true" />
    {/* Same sculpture as a static image if WebGL fails, JS is disabled, or it is off-screen. */}
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src="/panther/panther-poster.webp" alt="" aria-hidden="true" width={1000} height={650}
      className={`${styles.poster} ${ready && !failed ? styles.concealed : ""}`} />
    <div className={styles.canvas} aria-hidden="true">
      {visible && !failed && <SceneBoundary onError={onLost}>
        <Scene still={reduced || paused || hidden} onReady={onReady} onLost={onLost} />
      </SceneBoundary>}
    </div>
    {ready && !reduced && !failed && <button
      type="button" className={styles.pause}
      aria-label={paused ? (de ? "Animation abspielen" : "Lancer l’animation") : (de ? "Animation pausieren" : "Mettre l’animation en pause")}
      aria-pressed={paused} onClick={() => setPaused(!paused)}
    >{paused ? "▷" : "Ⅱ"}</button>}
  </div>;
}
