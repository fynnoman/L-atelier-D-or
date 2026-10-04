"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useReducedMotion } from "framer-motion";
import styles from "./ConseilEcrin.module.css";
import ConseilGlasses from "./ConseilGlasses";
import { useT } from "@/lib/i18n/LanguageContext";

type Phase = "closed" | "opening" | "drawing" | "writing" | "sending" | "thanks" | "email" | "stowing" | "closing";
const endpoint = process.env.NEXT_PUBLIC_CONSEIL_ENDPOINT;
const accessKey = process.env.NEXT_PUBLIC_CONSEIL_ACCESS_KEY;
const recipient = process.env.NEXT_PUBLIC_CONSEIL_EMAIL || "";

export default function ConseilEcrin() {
  const t = useT();
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
      setError(t.conseil.errorEmpty);
      return;
    }
    setError("");
    if (!endpoint) {
      if (recipient) {
        // A mail client cannot confirm delivery. Never show the sent state here.
        const body = `${message}\n\n${name}\n${email}`;
        window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(t.conseil.cardHeader + " — " + name)}&body=${encodeURIComponent(body)}`;
        setPhase("email");
      } else {
        setError(t.conseil.errorSetup);
      }
      return;
    }
    busyRef.current = true;
    setPhase("sending");
    const controller = new AbortController();
    requestRef.current = controller;
    const timeout = window.setTimeout(() => controller.abort(), 15000);
    const payload: Record<string, string> = { name, email, message };
    if (accessKey) payload.access_key = accessKey;
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      if (!response.ok) throw new Error("Delivery rejected");
      formRef.current?.reset();
      setPhase("thanks");
    } catch {
      setError(t.conseil.errorSend);
      setPhase("writing");
    } finally {
      window.clearTimeout(timeout);
      busyRef.current = false;
      requestRef.current = null;
    }
  }

  return (
    <div className={styles.experience} data-phase={phase} data-open={isOpen} data-card-out={cardOut}>
      <div className={styles.caption} aria-hidden="true"><span>{t.conseil.captionA}</span><span>{t.conseil.captionB}</span></div>
      <div className={styles.stage}>
        <div className={styles.case}>
          <div className={styles.base} aria-hidden="true">
            <div className={styles.velvet}>
              <ConseilGlasses className={styles.glasses} />
              <span className={styles.baseSignature}>{t.conseil.baseSignature}</span>
            </div>
          </div>
          <div className={styles.hinge} aria-hidden="true" />
          <div className={styles.lid}>
            <button type="button" className={styles.outer} disabled={phase !== "closed"} aria-label={t.conseil.openAria} onClick={() => { setError(""); setPhase("opening"); }}>
              <span className={styles.embossed}>{t.conseil.lidLine1}<small>{t.conseil.lidLine2}</small></span>
            </button>
            <div className={styles.inner}>
              <div className={styles.cardTrack}>
                <div className={styles.card} id="conseil-card" inert={!cardOut}>
                  <header className={styles.cardHeader}>
                    <span className={styles.cardBrand}>{t.conseil.cardBrand}</span>
                    <span className={styles.cardNumber}>{t.conseil.cardNumber}</span>
                    <h2>{t.conseil.cardHeader}</h2>
                  </header>
                  <form ref={formRef} onSubmit={submit} hidden={phase === "thanks" || phase === "email"} aria-label={t.conseil.cardHeader} aria-busy={phase === "sending"}>
                    <fieldset disabled={!editable} className={styles.fields}>
                      <div className={styles.identity}>
                        <label htmlFor="conseil-name">{t.conseil.nameLabel}<input ref={nameRef} id="conseil-name" name="name" autoComplete="name" required maxLength={100} /></label>
                        <label htmlFor="conseil-email">{t.conseil.emailLabel}<input id="conseil-email" name="email" type="email" autoComplete="email" required maxLength={254} /></label>
                      </div>
                      <label htmlFor="conseil-message">{t.conseil.messageLabel}<textarea id="conseil-message" name="message" required maxLength={3000} rows={3} /></label>
                      <div className={styles.cardFooter}>
                        <a href="/confidentialite/">{t.conseil.privacyLink}</a>
                        <button type="submit">{phase === "sending" ? t.conseil.submitting : t.conseil.submit}<span aria-hidden="true">↗</span></button>
                      </div>
                    </fieldset>
                    <p className={styles.error} role="alert">{error}</p>
                  </form>
                  <div className={styles.receipt} role="status" aria-live="polite">
                    {phase === "thanks" && <><span>{t.conseil.thanksTitle}</span><p>{t.conseil.thanksBody}</p></>}
                    {phase === "email" && recipient && <><span>{t.conseil.emailTitle}</span><p>{t.conseil.emailBody1} <a href={`mailto:${recipient}`}>{recipient}</a>{t.conseil.emailBody2}</p><div className={styles.receiptActions}><button onClick={() => setPhase("writing")}>{t.conseil.emailBackToCard}</button><button onClick={() => setPhase("stowing")}>{t.conseil.emailStowCard}</button></div></>}
                  </div>
                  <span className={styles.paperMark} aria-hidden="true">L’A — D’OR</span>
                </div>
              </div>
              <div className={styles.pocket} aria-hidden="true"><span>{t.conseil.pocket}</span></div>
            </div>
          </div>
        </div>
        <button ref={openerRef} className={styles.openButton} onClick={() => { setError(""); setPhase("opening"); }} disabled={phase !== "closed"} aria-expanded={isOpen} aria-controls="conseil-card"><span>{t.conseil.openLabel}</span><span aria-hidden="true">↗</span></button>
      </div>
      <div className={styles.footnote}><span>{t.conseil.footnoteA}</span><span>{t.conseil.footnoteB}</span></div>
      {recipient && (
        <noscript>
          <p>{t.conseil.noscriptWrite} <a href={`mailto:${recipient}`}>{recipient}</a>.</p>
        </noscript>
      )}
    </div>
  );
}
