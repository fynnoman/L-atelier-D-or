import { useId } from "react";

// Roi Rouge, folded: the two temples sit behind the optical front at different
// depths. Lens openings remain transparent so the overlap is visible through them.
const leftLens = "M89 82 C111 70 191 68 227 80 C244 86 250 97 247 118 L237 157 C231 179 216 190 188 192 L143 192 C116 191 103 180 97 158 L85 108 C82 96 82 87 89 82Z";
const rightLens = "M373 80 C409 68 489 70 511 82 C518 87 518 96 515 108 L503 158 C497 180 484 191 457 192 L412 192 C384 190 369 179 363 157 L353 118 C350 97 356 86 373 80Z";
const front = `M52 76 L65 74 C76 72 77 59 90 57 C130 49 200 50 235 58 C251 62 258 78 270 81 C288 76 312 76 330 81 C342 78 349 62 365 58 C400 50 470 49 510 57 C523 59 524 72 535 74 L548 76 L548 100 L535 104 C530 109 529 123 526 136 L516 169 C507 199 488 209 456 210 L409 209 C375 206 359 194 350 167 L333 117 C328 102 314 98 300 98 C286 98 272 102 267 117 L250 167 C241 194 225 206 191 209 L144 210 C112 209 93 199 84 169 L74 136 C71 123 70 109 65 104 L52 100Z ${leftLens} ${rightLens}`;

export default function ConseilGlasses({ className }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  const ref = (name: string) => `url(#${id}-${name})`;
  return (
    <svg className={className} viewBox="0 0 600 250" fill="none" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`${id}-acetate`} x1="280" y1="48" x2="310" y2="213" gradientUnits="userSpaceOnUse">
          <stop stopColor="#583438" /><stop offset=".08" stopColor="#251518" />
          <stop offset=".32" stopColor="#100b0e" /><stop offset=".65" stopColor="#211013" />
          <stop offset=".88" stopColor="#38181e" /><stop offset="1" stopColor="#140b0e" />
        </linearGradient>
        <linearGradient id={`${id}-edge`} x1="150" y1="65" x2="190" y2="220" gradientUnits="userSpaceOnUse">
          <stop stopColor="#271316" /><stop offset=".46" stopColor="#0a080a" />
          <stop offset=".86" stopColor="#51262b" /><stop offset="1" stopColor="#1e1015" />
        </linearGradient>
        <linearGradient id={`${id}-polish`} x1="160" y1="50" x2="220" y2="203" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f2dfd8" stopOpacity=".8" /><stop offset=".16" stopColor="#ac807b" stopOpacity=".3" />
          <stop offset=".48" stopColor="#281317" stopOpacity="0" /><stop offset=".85" stopColor="#b77c76" stopOpacity=".5" />
          <stop offset="1" stopColor="#e7cbc0" stopOpacity=".3" />
        </linearGradient>
        <linearGradient id={`${id}-glass`} x1="280" y1="71" x2="307" y2="197" gradientUnits="userSpaceOnUse">
          <stop stopColor="#718390" stopOpacity=".49" /><stop offset=".4" stopColor="#263440" stopOpacity=".56" />
          <stop offset="1" stopColor="#829096" stopOpacity=".14" />
        </linearGradient>
        <linearGradient id={`${id}-reflection`} x1="180" y1="60" x2="215" y2="145" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e7eef3" stopOpacity=".19" /><stop offset="1" stopColor="#d9e8f2" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`${id}-silver`} x1="0" y1="0" x2="0.4" y2="1">
          <stop stopColor="#696266" /><stop offset=".3" stopColor="#fff8e9" />
          <stop offset=".53" stopColor="#c1bcb5" /><stop offset="1" stopColor="#655c58" />
        </linearGradient>
        <linearGradient id={`${id}-temple`} x1="280" y1="104" x2="278" y2="156" gradientUnits="userSpaceOnUse">
          <stop stopColor="#674047" /><stop offset=".2" stopColor="#29171c" />
          <stop offset=".65" stopColor="#130c10" /><stop offset="1" stopColor="#3f2028" />
        </linearGradient>
        <clipPath id={`${id}-lenses`}><path d={leftLens} /><path d={rightLens} /></clipPath>
        <filter id={`${id}-contact`} x="-20%" y="-60%" width="140%" height="220%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
        <filter id={`${id}-engraving`} x="0" y="0" width="1" height="1">
          <feColorMatrix type="matrix" values="0 0 0 0 0.847 0 0 0 0 0.796 0 0 0 0 0.702 0 0 0 1 0" />
        </filter>
      </defs>

      <ellipse cx="300" cy="211" rx="230" ry="12" fill="#080408" opacity=".55" filter={ref("contact")} />
      <g transform="rotate(-3 300 130)">
        {/* Far temple folds from the right hinge towards the left ear tip. */}
        <path d="M532 94 C513 96 503 101 480 107 L189 153 C169 157 154 151 144 143 L125 129 C119 125 115 128 118 136 C123 156 141 170 163 170 C174 170 184 167 194 165 L486 124 C508 121 524 112 536 107Z" fill={ref("edge")} stroke="#7a4e50" strokeWidth=".8" />
        <path d="M521 101 L186 159 C159 165 142 153 132 143" stroke="#be9690" strokeOpacity=".38" strokeWidth="1.5" />
        {/* Near temple crosses above it, with a separate shadow and curved tip. */}
        <path d="M78 111 L412 157" stroke="#070507" strokeOpacity=".7" strokeWidth="20" strokeLinecap="round" />
        <path d="M65 95 C90 96 105 104 124 108 L410 140 C432 143 447 135 462 122 C468 117 474 120 470 129 C460 153 442 162 418 158 L118 127 C98 124 79 112 65 109Z" fill={ref("temple")} stroke="#6a3e44" strokeWidth=".8" />
        <path d="M78 100 C95 102 109 108 126 111 L412 144 C433 147 450 138 461 128" stroke="#ddbbb0" strokeOpacity=".48" strokeWidth="1.3" />
        <image
          href="/logo.png"
          x="150"
          y="109"
          width="105"
          height="34"
          transform="rotate(6 159 123)"
          preserveAspectRatio="xMidYMid meet"
          opacity="0.92"
          filter={ref("engraving")}
          aria-hidden="true"
        />

        {/* Barrel hinges, visible just inside the frame ends. */}
        {[69, 519].map((x) => (
          <g key={x}>
            <rect x={x} y="87" width="12" height="25" rx="3" fill={ref("silver")} />
            <path d={`M${x} 94h12 M${x} 103h12`} stroke="#3a3031" strokeWidth="1.5" />
            <circle cx={x + 6} cy="90" r="2" fill="#6f6866" />
            <path d={`M${x + 4.5} 90h3`} stroke="#eee2cd" strokeWidth=".7" />
          </g>
        ))}
        {/* Back bevel and inset lenses give the acetate a tangible thickness. */}
        <path d={front} transform="translate(0 7)" fill={ref("edge")} fillRule="evenodd" stroke="#170b10" strokeWidth="2" />
        <g clipPath={ref("lenses")}>
          <path d={leftLens} fill={ref("glass")} /><path d={rightLens} fill={ref("glass")} />
          <path d="M75 72 L231 66 L160 198 L85 186Z M345 72 L487 64 L418 198 L349 177Z" fill={ref("reflection")} />
          <path d="M85 91 Q167 69 248 90 M352 90 Q433 69 515 91" stroke="#e0e7e9" strokeOpacity=".18" strokeWidth="2" />
        </g>
        <path d={front} fill={ref("acetate")} fillRule="evenodd" stroke={ref("polish")} strokeWidth="1.6" />
        <path d={leftLens} stroke="#09090c" strokeWidth="3.5" />
        <path d={rightLens} stroke="#09090c" strokeWidth="3.5" />
        <path d={leftLens} stroke={ref("polish")} strokeWidth="1.1" />
        <path d={rightLens} stroke={ref("polish")} strokeWidth="1.1" />
        {/* Long, restrained specular highlights follow the polished brow. */}
        <path d="M79 71 Q84 61 98 60 C139 54 197 55 230 62 C247 65 253 80 267 85 M333 85 C347 80 353 65 370 62 C403 55 461 54 502 60 Q516 61 521 71" stroke="#f4e7df" strokeOpacity=".65" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M276 84 Q300 79 324 84" stroke="#e9d9d4" strokeOpacity=".5" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M87 160 C96 193 112 204 145 205 L188 204 M412 204 L455 205 C488 204 504 193 513 160" stroke="#90595a" strokeOpacity=".7" strokeWidth="1.4" />
        {/* Small horizontal silver rivets match the supplied product photos. */}
        {[58, 526].map((x) => (
          <g key={x}>
            <rect x={x - 1} y="85" width="18" height="8" rx="2" fill="#100b0d" />
            <rect x={x} y="86" width="16" height="5" rx="1.4" fill={ref("silver")} />
            <path d={`M${x + 2} 87h12`} stroke="#fff9ee" strokeOpacity=".8" strokeWidth=".8" />
          </g>
        ))}
      </g>
    </svg>
  );
}
