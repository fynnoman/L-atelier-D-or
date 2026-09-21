"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useReducedMotion } from "framer-motion";
import styles from "./ConseilEcrin.module.css";

type Phase = "closed" | "opening" | "drawing" | "writing" | "sending" | "thanks" | "email" | "stowing" | "closing";
const endpoint = process.env.NEXT_PUBLIC_CONSEIL_ENDPOINT;
const recipient = process.env.NEXT_PUBLIC_CONSEIL_EMAIL || "";

export default function ConseilEcrin() {
  const [phase, setPhase] = useState<Phase>("closed");
  const [error, setError] = useState("");
  const reducedMotion = useReducedMotion();
  const nameRef = useRef<HTMLInputElement>(null);
  const openerRef = useRef<HTMLButtonElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const requestRef = useRef<AbortController | null>(null);
  const busyRef = useRef(false);
  const isOpen = phase !== "closed" && phase !== "closing";
  const cardOut = ["drawing", "writing", "sending", "thanks", "email"].includes(phase);
  const editable = phase === "writing";

  useEffect(() => {
    const next: Partial<Record<Phase, [Phase, number]>> = {
      opening: ["drawing", 1800],
      drawing: ["writing", 1400],
      thanks: ["stowing", 2800],
      stowing: ["closing", 1500],
      closing: ["closed", 1700],
    };
    const step = next[phase];
    if (!step) return;
    const timer = window.setTimeout(() => {
      setPhase(step[0]);
      if (step[0] === "writing") nameRef.current?.focus({ preventScroll: true });
      if (step[0] === "closed") openerRef.current?.focus({ preventScroll: true });
    }, reducedMotion && phase !== "thanks" ? 80 : step[1]);
    return () => window.clearTimeout(timer);
  }, [phase, reducedMotion]);

  useEffect(() => () => requestRef.current?.abort(), []);

  useEffect(() => {
    if (phase !== "writing") return;
    const frame = requestAnimationFrame(() => nameRef.current?.focus({ preventScroll: true }));
    return () => cancelAnimationFrame(frame);
  }, [phase]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busyRef.current || phase !== "writing") return;
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !message) {
      setError("Quelques mots et votre nom, pour que nous puissions vous répondre.");
      return;
    }
    setError("");
    if (!endpoint) {
      // A mail client cannot confirm delivery. Never show the sent state here.
      const body = `${message}\n\n${name}\n${email}`;
      window.location.href = `mailto:${recipient}?subject=${encodeURIComponent("Votre conseil personnel — " + name)}&body=${encodeURIComponent(body)}`;
      setPhase("email");
      return;
    }
    busyRef.current = true;
    setPhase("sending");
    const controller = new AbortController();
    requestRef.current = controller;
    const timeout = window.setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, message }),
        signal: controller.signal,
      });
      if (!response.ok) throw new Error("Delivery rejected");
      formRef.current?.reset();
      setPhase("thanks");
    } catch {
      setError("Votre message n’a pas été envoyé. Vos mots sont conservés ; veuillez réessayer.");
      setPhase("writing");
    } finally {
      window.clearTimeout(timeout);
      busyRef.current = false;
      requestRef.current = null;
    }
  }

  return (
    <div className={styles.experience} data-phase={phase} data-open={isOpen} data-card-out={cardOut}>
      <div className={styles.caption} aria-hidden="true"><span>LA CORRESPONDANCE</span><span>01 — UN MOT À LA MAISON</span></div>
      <div className={styles.stage}>
        <div className={styles.case}>
          <div className={styles.base} aria-hidden="true">
            <div className={styles.velvet}>
              <svg className={styles.glasses} viewBox="0 0 600 210" fill="none">
                <defs>
                  <linearGradient id="conseil-frame" x1="60" y1="30" x2="490" y2="180" gradientUnits="userSpaceOnUse"><stop stopColor="#463f31"/><stop offset=".3" stopColor="#090908"/><stop offset=".7" stopColor="#29271e"/><stop offset="1" stopColor="#080808"/></linearGradient>
                  <linearGradient id="conseil-lens" x1="100" y1="40" x2="200" y2="190" gradientUnits="userSpaceOnUse"><stop stopColor="#555b49"/><stop offset=".45" stopColor="#1a211b"/><stop offset="1" stopColor="#080e0b"/></linearGradient>
                </defs>
                <path d="M88 67L195 19Q207 15 218 23L349 95M512 67L404 19Q393 15 382 23L251 95" stroke="#1a1711" strokeWidth="13" strokeLinecap="round"/>
                <path d="M64 64Q141 38 253 59L266 91Q300 75 334 91L347 59Q459 38 536 64L524 89Q516 178 452 179L384 172Q345 166 333 106Q300 91 267 106Q255 166 216 172L148 179Q84 178 76 89Z" fill="url(#conseil-frame)" stroke="#5b5038" strokeWidth="2"/>
                <path d="M100 78Q160 62 241 76L246 99Q237 147 210 154L151 161Q107 158 100 78ZM359 76Q440 62 500 78Q493 158 449 161L390 154Q363 147 354 99Z" fill="url(#conseil-lens)" stroke="#797158" strokeWidth="1.5"/>
                <path d="M111 82Q158 72 226 82M373 82Q432 71 480 82" stroke="#eee4c6" strokeOpacity=".17" strokeWidth="3"/>
                <path d="M80 76H95M505 76H520" stroke="#c6ab71" strokeWidth="5"/>
                <text x="390" y="98" fill="#bdac7c" fontSize="8" fontFamily="Georgia" fontStyle="italic">L’Atelier d’Or</text>
              </svg>
              <span className={styles.baseSignature}>FAIT POUR VOTRE REGARD</span>
            </div>
          </div>
          <div className={styles.hinge} aria-hidden="true" />
          <div className={styles.lid}>
            <button type="button" className={styles.outer} disabled={phase !== "closed"} aria-label="Ouvrir l’écrin de conseil" onClick={() => { setError(""); setPhase("opening"); }}>
              <span className={styles.embossed}>L’Atelier d’Or<small>PARIS</small></span>
            </button>
            <div className={styles.inner}>
              <div className={styles.cardTrack}>
                <div className={styles.card} id="conseil-card" inert={!cardOut}>
                  <header className={styles.cardHeader}>
                    <span className={styles.cardBrand}>L’Atelier d’Or</span>
                    <span className={styles.cardNumber}>CORRESPONDANCE PRIVÉE</span>
                    <h2>Votre conseil personnel</h2>
                  </header>
                  <form ref={formRef} onSubmit={submit} hidden={phase === "thanks" || phase === "email"} aria-label="Votre conseil personnel" aria-busy={phase === "sending"}>
                    <fieldset disabled={!editable} className={styles.fields}>
                      <div className={styles.identity}>
                        <label htmlFor="conseil-name">Votre nom<input ref={nameRef} id="conseil-name" name="name" autoComplete="name" required maxLength={100} /></label>
                        <label htmlFor="conseil-email">Votre e-mail<input id="conseil-email" name="email" type="email" autoComplete="email" required maxLength={254} /></label>
                      </div>
                      <label htmlFor="conseil-message">Comment pouvons-nous vous conseiller ?<textarea id="conseil-message" name="message" required maxLength={3000} rows={3} /></label>
                      <div className={styles.cardFooter}>
                        <a href="/confidentialite/">Vos mots restent entre nous.</a>
                        <button type="submit">{phase === "sending" ? "Envoi en cours…" : "Envoyer ma demande"}<span aria-hidden="true">↗</span></button>
                      </div>
                    </fieldset>
                    <p className={styles.error} role="alert">{error}</p>
                  </form>
                  <div className={styles.receipt} role="status" aria-live="polite">
                    {phase === "thanks" && <><span>Merci.</span><p>Nous vous répondrons personnellement.</p></>}
                    {phase === "email" && <><span>À vous de signer.</span><p>Envoyez votre message depuis votre messagerie. Si elle ne s’est pas ouverte, écrivez à <a href={`mailto:${recipient}`}>{recipient}</a>.</p><div className={styles.receiptActions}><button onClick={() => setPhase("writing")}>Revenir à ma carte</button><button onClick={() => setPhase("stowing")}>Ranger ma carte ↘</button></div></>}
                  </div>
                  <span className={styles.paperMark} aria-hidden="true">L’A — D’OR</span>
                </div>
              </div>
              <div className={styles.pocket} aria-hidden="true"><span>À VOTRE ATTENTION</span></div>
            </div>
          </div>
        </div>
        <button ref={openerRef} className={styles.openButton} onClick={() => { setError(""); setPhase("opening"); }} disabled={phase !== "closed"} aria-expanded={isOpen} aria-controls="conseil-card"><span>Ouvrir l’écrin</span><span aria-hidden="true">↗</span></button>
      </div>
      <div className={styles.footnote}><span>UN ÉCRIN. QUELQUES MOTS. VOTRE REGARD.</span><span>L’Atelier d’Or — Paris</span></div>
      <noscript><p>Pour un conseil personnel, écrivez à <a href={`mailto:${recipient}`}>{recipient}</a>.</p></noscript>
    </div>
  );
}
