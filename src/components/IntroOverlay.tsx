"use client";
import { useEffect, useRef } from "react";
import styles from "./intro/intro.module.css";
const SESSION_KEY = "lad-cinematic-v2";
export default function IntroOverlay() {
  const root = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const skip = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const overlay = root.current!;
    const params = new URLSearchParams(location.search);
    let seen = false;
    try { seen = !!sessionStorage.getItem(SESSION_KEY); } catch { /* Optional persistence. */ }
    if (params.has("nointro") || matchMedia("(prefers-reduced-motion: reduce)").matches || (seen && !params.has("intro"))) return;
    let disposed = false;
    let finished = false;
    let destroy: (() => void) | undefined;
    let fadeTimer: ReturnType<typeof setTimeout>;
    const previousOverflow = document.documentElement.style.overflow;
    const previousFocus = document.activeElement as HTMLElement | null;
    const siblings = Array.from(document.body.children).filter((el): el is HTMLElement => el instanceof HTMLElement && el !== overlay && !el.contains(overlay));
    const inertStates = siblings.map(el => el.inert);
    siblings.forEach(el => { el.inert = true; });
    overlay.hidden = false;
    document.documentElement.style.overflow = "hidden";
    skip.current?.focus({ preventScroll: true });
    const restore = () => {
      document.documentElement.style.overflow = previousOverflow;
      siblings.forEach((el, i) => { el.inert = inertStates[i]; });
    };
    const finish = () => {
      if (disposed || finished) return;
      finished = true;
      overlay.dataset.exiting = "true";
      try { sessionStorage.setItem(SESSION_KEY, "1"); } catch { /* Optional persistence. */ }
      fadeTimer = setTimeout(() => {
        overlay.hidden = true;
        destroy?.();
        restore();
        previousFocus?.focus({ preventScroll: true });
      }, 850);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") finish();
      if (event.key === "Tab") { event.preventDefault(); skip.current?.focus(); }
    };
    const button = skip.current;
    button?.addEventListener("click", finish);
    document.addEventListener("keydown", onKey);
    const watchdog = setTimeout(finish, 30000);
    import("./intro/createBoutique").then(({ createBoutique }) => {
      if (disposed || finished) return;
      destroy = createBoutique(stage.current!, (phase, progress) => {
        overlay.dataset.phase = phase;
        overlay.style.setProperty("--intro-progress", String(progress));
      }, finish);
    }).catch(finish);
    return () => {
      disposed = true;
      clearTimeout(watchdog);
      clearTimeout(fadeTimer);
      destroy?.();
      restore();
      button?.removeEventListener("click", finish);
      document.removeEventListener("keydown", onKey);
      overlay.hidden = true;
      delete overlay.dataset.exiting;
    };
  }, []);
  return (
    <div ref={root} className={styles.intro} hidden role="dialog" aria-modal="true" aria-label="Willkommen bei L’Atelier d’Or">
      <div ref={stage} className={styles.stage} aria-hidden="true" />
      <div className={styles.vignette} />
      <div className={styles.topline}>LA MAISON <span>PARIS · DEPUIS 1972</span></div>
      <div className={styles.title}><p>BIENVENUE À</p><h1>L’atelier D’or</h1><span>MAISON D’OPTIQUE</span></div>
      <div className={styles.bottomline}><span>UNE PORTE S’OUVRE. UN UNIVERS SE RÉVÈLE.</span><button ref={skip} type="button">Intro überspringen <span aria-hidden="true">↗</span></button></div>
      <div className={styles.progress} />
    </div>
  );
}
