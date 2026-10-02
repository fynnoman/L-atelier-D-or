import { clsx } from "clsx";
import type { CSSProperties, ElementType } from "react";

type Props = {
  lines: string[];
  as?: ElementType;
  className?: string;
  lineClassName?: string;
  delayStep?: number;
  baseDelay?: number;
  style?: CSSProperties;
};

export default function LineReveal({
  lines,
  as: As = "div",
  className,
  lineClassName,
  delayStep = 80,
  baseDelay = 0,
  style,
}: Props) {
  return (
    <As className={className} style={style}>
      {lines.map((line, i) => (
        <span
          key={i}
          className={clsx("n-line-mask", lineClassName)}
          style={{ ["--n-delay" as string]: `${baseDelay + i * delayStep}ms` }}
        >
          <span className="n-line">{line}</span>
        </span>
      ))}
    </As>
  );
}
