"use client";

import { useEffect, useRef, useState } from "react";

// Gold cursor dot that follows the pointer with a subtle spring lag.
// Grows on hoverable elements. Hidden on touch devices.
export default function SignatureCursor() {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    setEnabled(
      window.matchMedia("(hover: hover) and (pointer: fine)").matches,
    );
  }, []);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const posRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive =
          !!target.closest(
            "a, button, [role='button'], input, textarea, select, label, .hoverable",
          );
        setHovering(isInteractive);
      }
    };

    const onLeave = () => setVisible(false);

    const tick = () => {
      const pos = posRef.current;
      const target = targetRef.current;
      pos.x += (target.x - pos.x) * 0.22;
      pos.y += (target.y - pos.y) * 0.22;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [enabled, visible]);

  if (!enabled) return null;

  const scale = hovering ? 1.85 : 1;
  const opacity = visible ? (hovering ? 0.9 : 0.65) : 0;

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        style={{
          position: "fixed",
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          borderRadius: 999,
          border: `1px solid rgba(198,154,63,${hovering ? 0.9 : 0.35})`,
          pointerEvents: "none",
          zIndex: 9999,
          opacity,
          transform: "translate3d(0,0,0)",
          transition:
            "border-color 300ms var(--ease-out), opacity 240ms var(--ease-out), width 320ms var(--ease-editorial), height 320ms var(--ease-editorial)",
          mixBlendMode: "difference",
        }}
      />
      <div
        ref={dotRef}
        aria-hidden
        style={{
          position: "fixed",
          left: -3,
          top: -3,
          width: 6,
          height: 6,
          borderRadius: 999,
          background: "var(--or)",
          pointerEvents: "none",
          zIndex: 9999,
          opacity,
          transform: "translate3d(0,0,0) scale(1)",
          boxShadow: hovering
            ? "0 0 12px rgba(230,201,138,0.55)"
            : "0 0 0 rgba(0,0,0,0)",
          transition:
            "box-shadow 260ms var(--ease-out), opacity 200ms var(--ease-out)",
        }}
      >
        <span
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            borderRadius: 999,
            background: "var(--or)",
            transform: `scale(${scale})`,
            transformOrigin: "center",
            transition: "transform 320ms var(--ease-editorial)",
          }}
        />
      </div>
    </>
  );
}
