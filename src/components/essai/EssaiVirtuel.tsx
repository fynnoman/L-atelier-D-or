"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import { products } from "@/data/products";
import PlaceholderImage from "../PlaceholderImage";
import { useBoutique } from "@/lib/boutique/BoutiqueProvider";

type CameraState = "idle" | "requesting" | "granted" | "denied" | "unsupported";

type OverlayTransform = {
  x: number;
  y: number;
  scale: number;
  rotate: number;
};

const DEFAULT_TRANSFORM: OverlayTransform = {
  x: 0,
  y: 0,
  scale: 1,
  rotate: 0,
};

export default function EssaiVirtuel() {
  const initialCameraState: CameraState =
    typeof navigator !== "undefined" && !!navigator.mediaDevices
      ? "idle"
      : "unsupported";
  const [cameraState, setCameraState] = useState<CameraState>(initialCameraState);
  const [productIx, setProductIx] = useState(0);
  const [colorIx, setColorIx] = useState(0);
  const [transform, setTransform] = useState<OverlayTransform>(DEFAULT_TRANSFORM);
  const [dragging, setDragging] = useState(false);
  const [snapshot, setSnapshot] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);

  const { toggleCabinet, isInCabinet, openDrawer } = useBoutique();

  const active = products[productIx];
  const activeColor = active.colors[colorIx] ?? active.colors[0];

  const stopStream = useCallback(() => {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
    if (videoRef.current) videoRef.current.srcObject = null;
  }, []);

  useEffect(() => stopStream, [stopStream]);

  const requestCamera = useCallback(async () => {
    if (typeof navigator === "undefined" || !navigator.mediaDevices?.getUserMedia)
      return;
    setCameraState("requesting");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user",
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
        audio: false,
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play().catch(() => undefined);
      }
      setCameraState("granted");
    } catch {
      setCameraState("denied");
    }
  }, []);

  // pointer-driven drag / scale
  const dragState = useRef<{
    active: boolean;
    startX: number;
    startY: number;
    startTx: number;
    startTy: number;
  } | null>(null);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    (e.target as Element).setPointerCapture?.(e.pointerId);
    dragState.current = {
      active: true,
      startX: e.clientX,
      startY: e.clientY,
      startTx: transform.x,
      startTy: transform.y,
    };
    setDragging(true);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragState.current?.active) return;
    const dx = e.clientX - dragState.current.startX;
    const dy = e.clientY - dragState.current.startY;
    setTransform((t) => ({
      ...t,
      x: dragState.current!.startTx + dx,
      y: dragState.current!.startTy + dy,
    }));
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    (e.target as Element).releasePointerCapture?.(e.pointerId);
    if (dragState.current) dragState.current.active = false;
    setDragging(false);
  };

  const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    setTransform((t) => ({
      ...t,
      scale: Math.min(2.4, Math.max(0.35, t.scale + (e.deltaY < 0 ? 0.06 : -0.06))),
    }));
  };

  const takeSnapshot = useCallback(() => {
    if (!videoRef.current || !stageRef.current) return;
    const stage = stageRef.current.getBoundingClientRect();
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(stage.width);
    canvas.height = Math.round(stage.height);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Draw mirrored video, cover-fit
    const video = videoRef.current;
    const vw = video.videoWidth;
    const vh = video.videoHeight;
    if (vw && vh) {
      const scale = Math.max(canvas.width / vw, canvas.height / vh);
      const dw = vw * scale;
      const dh = vh * scale;
      const dx = (canvas.width - dw) / 2;
      const dy = (canvas.height - dh) / 2;
      ctx.save();
      ctx.translate(canvas.width, 0);
      ctx.scale(-1, 1);
      ctx.drawImage(video, canvas.width - dw - dx, dy, dw, dh);
      ctx.restore();
    } else {
      ctx.fillStyle = "#0a0806";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // Draw frame silhouette
    const cx = canvas.width / 2 + transform.x;
    const cy = canvas.height / 2 + transform.y - canvas.height * 0.05;
    const baseWidth = Math.min(canvas.width, canvas.height * 1.6) * 0.55;
    const width = baseWidth * transform.scale;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate((transform.rotate * Math.PI) / 180);
    drawFrameSilhouette(ctx, width, activeColor.hex, active.slug);
    ctx.restore();

    // Add hallmark
    ctx.save();
    ctx.fillStyle = "rgba(230,201,138,0.9)";
    ctx.font = "10px 'Inter', sans-serif";
    ctx.textAlign = "left";
    ctx.fillText("L'ATELIER D'OR · ESSAI VIRTUEL", 18, canvas.height - 18);
    ctx.restore();

    setSnapshot(canvas.toDataURL("image/png"));
  }, [transform, activeColor.hex, active.slug]);

  const frameShape = useMemo(() => shapeFor(active.slug), [active.slug]);

  return (
    <div className="absolute inset-0 flex flex-col lg:grid lg:grid-cols-[1fr_360px] bg-noir">
      <div
        ref={stageRef}
        className="relative flex-1 overflow-hidden touch-none select-none"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onWheel={onWheel}
        style={{ cursor: cameraState === "granted" ? "grab" : "default" }}
      >
        {cameraState === "granted" ? (
          <video
            ref={videoRef}
            playsInline
            muted
            autoPlay
            className="absolute inset-0 h-full w-full object-cover"
            style={{ transform: "scaleX(-1)" }}
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 45% at 50% 45%, rgba(198,154,90,0.18), transparent 60%), linear-gradient(180deg, #0a0806, #16110c)",
            }}
          />
        )}

        {/* Vignette */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 70% at 50% 50%, transparent 55%, rgba(10,8,6,0.55))",
          }}
        />

        {/* Frame overlay */}
        {cameraState === "granted" && (
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              transform: `translate(calc(-50% + ${transform.x}px), calc(-50% + ${transform.y - 40}px)) scale(${transform.scale}) rotate(${transform.rotate}deg)`,
              transition: dragging
                ? "none"
                : "transform 260ms var(--ease-editorial)",
            }}
          >
            <svg
              width="420"
              height="180"
              viewBox="0 0 420 180"
              aria-hidden
              style={{ filter: "drop-shadow(0 6px 24px rgba(10,8,6,0.55))" }}
            >
              {frameShape(activeColor.hex)}
            </svg>
          </div>
        )}

        {/* Instructions overlay when not started */}
        {cameraState !== "granted" && (
          <div className="absolute inset-0 grid place-items-center px-8 text-center text-parchment">
            <div className="max-w-md">
              <p className="eyebrow-light">Miroir Signature</p>
              <h3
                className="mt-6 display"
                style={{ fontSize: "clamp(1.9rem,3vw,2.6rem)" }}
              >
                Anprobieren <span style={{ fontStyle: "italic", color: "var(--or-glow)" }}>direkt im Browser.</span>
              </h3>
              <p className="mt-6 text-[13px] text-parchment/70 leading-[1.9]">
                Nichts verlässt Ihren Rechner. Die Kamera bleibt lokal, kein
                Upload, kein Server. Aktivieren Sie den Zugang und positionieren
                Sie die Fassung mit dem Zeigefinger.
              </p>
              {cameraState === "unsupported" && (
                <p className="mt-6 text-[11.5px] uppercase tracking-[0.24em] text-parchment/50">
                  Ihr Browser unterstützt die Kamera nicht. Bitte Safari oder Chrome verwenden.
                </p>
              )}
              {cameraState === "denied" && (
                <p className="mt-6 text-[11.5px] uppercase tracking-[0.24em] text-parchment/50">
                  Zugriff verweigert. Bitte in den Browser-Einstellungen freigeben.
                </p>
              )}
              {cameraState !== "unsupported" && (
                <button
                  onClick={requestCamera}
                  className="btn-gold mt-9"
                  disabled={cameraState === "requesting"}
                >
                  {cameraState === "requesting"
                    ? "Miroir wird aktiviert…"
                    : "Miroir aktivieren"}
                </button>
              )}
            </div>
          </div>
        )}

        {/* Snapshot overlay */}
        {snapshot && (
          <div
            className="absolute inset-0 z-20 bg-noir/90 grid place-items-center px-6"
            onClick={() => setSnapshot(null)}
          >
            <div
              className="max-w-[720px] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={snapshot}
                alt="Essai · Snapshot"
                className="w-full h-auto border border-line-noir"
              />
              <div className="mt-4 flex flex-wrap items-center gap-3 justify-between">
                <a
                  href={snapshot}
                  download={`latelier-dor-essai-${active.slug}.png`}
                  className="btn-gold"
                >
                  Speichern
                </a>
                <button
                  onClick={() => setSnapshot(null)}
                  className="lv-btn lv-btn-light"
                >
                  Weiter probieren
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Sidebar controls */}
      <aside className="w-full lg:w-[360px] flex flex-col bg-noir-2/70 border-t lg:border-t-0 lg:border-l border-line-noir text-parchment">
        <div className="p-6 border-b border-line-noir">
          <p className="eyebrow-light">Fassung wählen</p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {products.map((p, i) => (
              <button
                key={p.slug}
                onClick={() => {
                  setProductIx(i);
                  setColorIx(0);
                  setTransform(DEFAULT_TRANSFORM);
                }}
                aria-pressed={i === productIx}
                className="text-left px-3 py-3 border"
                style={{
                  borderColor:
                    i === productIx
                      ? "var(--or)"
                      : "rgba(230, 201, 138, 0.18)",
                  background:
                    i === productIx
                      ? "rgba(198,154,63,0.12)"
                      : "transparent",
                  transition:
                    "background 220ms var(--ease-out), border-color 220ms var(--ease-out)",
                }}
              >
                <p
                  className="text-[12px]"
                  style={{
                    color:
                      i === productIx
                        ? "var(--or-glow)"
                        : "var(--parchment)",
                  }}
                >
                  {p.name}
                </p>
                <p className="text-[10px] uppercase tracking-[0.24em] text-parchment/50 mt-0.5">
                  {p.subtitle.split(",")[0]}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className="p-6 border-b border-line-noir">
          <p className="eyebrow-light">Coloris</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {active.colors.map((c, i) => (
              <button
                key={c.label}
                onClick={() => setColorIx(i)}
                aria-label={c.label}
                aria-pressed={i === colorIx}
                className="group"
              >
                <span
                  className="block h-8 w-8 rounded-full"
                  style={{
                    background: c.hex,
                    boxShadow:
                      i === colorIx
                        ? "0 0 0 2px var(--noir), 0 0 0 3px var(--or)"
                        : "inset 0 0 0 1px rgba(230,201,138,0.25)",
                    transition: "box-shadow 220ms var(--ease-out)",
                  }}
                />
              </button>
            ))}
          </div>
          <p
            className="mt-3 text-[11px] uppercase tracking-[0.24em]"
            style={{ color: "var(--or-soft)" }}
          >
            {activeColor.label}
          </p>
        </div>

        <div className="p-6 border-b border-line-noir">
          <p className="eyebrow-light">Positionner</p>
          <SliderRow
            label="Grösse"
            value={transform.scale}
            min={0.35}
            max={2.4}
            step={0.02}
            onChange={(v) => setTransform((t) => ({ ...t, scale: v }))}
            format={(v) => `${Math.round(v * 100)} %`}
          />
          <SliderRow
            label="Neigung"
            value={transform.rotate}
            min={-25}
            max={25}
            step={0.5}
            onChange={(v) => setTransform((t) => ({ ...t, rotate: v }))}
            format={(v) => `${v.toFixed(1)}°`}
          />
          <button
            onClick={() => setTransform(DEFAULT_TRANSFORM)}
            className="mt-3 text-[10.5px] uppercase tracking-[0.22em] text-parchment/60 hover:text-or"
            style={{ transition: "color 220ms var(--ease-out)" }}
          >
            Position zurücksetzen
          </button>
        </div>

        <div className="p-6 mt-auto space-y-3">
          <button
            disabled={cameraState !== "granted"}
            onClick={takeSnapshot}
            className="btn-gold w-full justify-center disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Snapshot festhalten
          </button>
          <button
            onClick={() =>
              toggleCabinet({
                slug: active.slug,
                name: active.name,
                subtitle: active.subtitle,
                edition: active.edition,
                price: active.price,
                image: active.image,
              })
            }
            className="lv-btn lv-btn-light w-full justify-center"
          >
            {isInCabinet(active.slug) ? "Im Cabinet" : "Ins Cabinet"}
          </button>
          <Link
            href={`/kollektion/${active.slug}`}
            onClick={() => openDrawer(null)}
            className="lv-btn lv-btn-light w-full justify-center"
          >
            Zur Fassung
          </Link>

          <div className="pt-4 mt-2 border-t border-line-noir flex items-center gap-3">
            <div className="relative h-[52px] w-[42px] overflow-hidden bg-noir-3">
              <PlaceholderImage
                src={active.image}
                alt={active.name}
                sizes="42px"
                quality={70}
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-[12px] text-parchment">{active.name}</p>
              <p className="text-[10px] uppercase tracking-[0.24em] text-parchment/60">
                {active.edition} · {active.price}
              </p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

function SliderRow({
  label,
  value,
  min,
  max,
  step,
  onChange,
  format,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  format: (v: number) => string;
}) {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.24em] text-parchment/70">
        <span>{label}</span>
        <span className="numeral" style={{ color: "var(--or-soft)" }}>
          {format(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full mt-2 accent-[color:var(--or)]"
      />
    </div>
  );
}

// Frame silhouette generators
function shapeFor(slug: string) {
  if (slug.startsWith("solene"))
    return (hex: string) => aviatorShape(hex);
  if (slug.startsWith("malbec"))
    return (hex: string) => pantoShape(hex);
  if (slug.startsWith("orphee"))
    return (hex: string) => roundShape(hex);
  if (slug.startsWith("valois"))
    return (hex: string) => catEyeShape(hex);
  return (hex: string) => aviatorShape(hex);
}

function aviatorShape(hex: string) {
  return (
    <g fill="none" stroke={hex} strokeWidth="4" strokeLinejoin="round">
      <path d="M40 60 L180 55 Q200 100 130 130 Q60 140 40 60z" />
      <path d="M240 60 L380 55 Q400 100 330 130 Q260 140 240 60z" />
      <path d="M180 65 Q210 55 240 65" />
      <path d="M40 60 L10 45" />
      <path d="M380 60 L410 45" />
    </g>
  );
}

function pantoShape(hex: string) {
  return (
    <g fill="none" stroke={hex} strokeWidth="5" strokeLinejoin="round">
      <path d="M50 55 Q40 130 130 130 Q210 125 195 55 Q125 40 50 55z" />
      <path d="M225 55 Q210 130 305 130 Q385 125 365 55 Q295 40 225 55z" />
      <path d="M195 70 Q210 60 225 70" />
      <path d="M50 55 L15 42" />
      <path d="M365 55 L400 42" />
    </g>
  );
}

function roundShape(hex: string) {
  return (
    <g fill="none" stroke={hex} strokeWidth="3.5">
      <circle cx="120" cy="90" r="60" />
      <circle cx="300" cy="90" r="60" />
      <path d="M180 90 Q210 78 240 90" />
      <path d="M60 90 L20 78" />
      <path d="M360 90 L400 78" />
      <circle cx="210" cy="85" r="2.5" fill={hex} />
    </g>
  );
}

function catEyeShape(hex: string) {
  return (
    <g fill="none" stroke={hex} strokeWidth="5" strokeLinejoin="round">
      <path d="M30 90 Q35 45 130 45 Q210 45 200 90 Q195 130 115 130 Q35 130 30 90z" />
      <path d="M220 90 Q225 45 320 45 Q400 45 390 90 Q385 130 305 130 Q225 130 220 90z" />
      <path d="M200 78 Q210 68 220 78" />
      <path d="M30 90 L10 74" />
      <path d="M390 90 L410 74" />
    </g>
  );
}

// Canvas draw for snapshot
function drawFrameSilhouette(
  ctx: CanvasRenderingContext2D,
  width: number,
  hex: string,
  slug: string,
) {
  const scaleFactor = width / 420;
  ctx.save();
  ctx.scale(scaleFactor, scaleFactor);
  ctx.translate(-210, -90);
  ctx.strokeStyle = hex;
  ctx.lineJoin = "round";
  ctx.lineWidth = 4;

  if (slug.startsWith("orphee")) {
    ctx.beginPath();
    ctx.arc(120, 90, 60, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(300, 90, 60, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(180, 90);
    ctx.quadraticCurveTo(210, 78, 240, 90);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(60, 90);
    ctx.lineTo(20, 78);
    ctx.moveTo(360, 90);
    ctx.lineTo(400, 78);
    ctx.stroke();
    ctx.fillStyle = hex;
    ctx.beginPath();
    ctx.arc(210, 85, 2.5, 0, Math.PI * 2);
    ctx.fill();
  } else if (slug.startsWith("valois")) {
    ctx.beginPath();
    ctx.moveTo(30, 90);
    ctx.quadraticCurveTo(35, 45, 130, 45);
    ctx.quadraticCurveTo(210, 45, 200, 90);
    ctx.quadraticCurveTo(195, 130, 115, 130);
    ctx.quadraticCurveTo(35, 130, 30, 90);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(220, 90);
    ctx.quadraticCurveTo(225, 45, 320, 45);
    ctx.quadraticCurveTo(400, 45, 390, 90);
    ctx.quadraticCurveTo(385, 130, 305, 130);
    ctx.quadraticCurveTo(225, 130, 220, 90);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(200, 78);
    ctx.quadraticCurveTo(210, 68, 220, 78);
    ctx.stroke();
  } else if (slug.startsWith("malbec")) {
    ctx.beginPath();
    ctx.moveTo(50, 55);
    ctx.quadraticCurveTo(40, 130, 130, 130);
    ctx.quadraticCurveTo(210, 125, 195, 55);
    ctx.quadraticCurveTo(125, 40, 50, 55);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(225, 55);
    ctx.quadraticCurveTo(210, 130, 305, 130);
    ctx.quadraticCurveTo(385, 125, 365, 55);
    ctx.quadraticCurveTo(295, 40, 225, 55);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(195, 70);
    ctx.quadraticCurveTo(210, 60, 225, 70);
    ctx.stroke();
  } else {
    // aviator
    ctx.beginPath();
    ctx.moveTo(40, 60);
    ctx.lineTo(180, 55);
    ctx.quadraticCurveTo(200, 100, 130, 130);
    ctx.quadraticCurveTo(60, 140, 40, 60);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(240, 60);
    ctx.lineTo(380, 55);
    ctx.quadraticCurveTo(400, 100, 330, 130);
    ctx.quadraticCurveTo(260, 140, 240, 60);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(180, 65);
    ctx.quadraticCurveTo(210, 55, 240, 65);
    ctx.stroke();
  }
  ctx.restore();
}
