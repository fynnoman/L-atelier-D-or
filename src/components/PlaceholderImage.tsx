"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

type Props = Omit<ImageProps, "src" | "alt"> & {
  src: string;
  alt: string;
};

// Wrapper around next/image with a graceful cognac-gold gradient fallback
// when a src fails or is empty. Keeps the codebase free of boilerplate.
export default function PlaceholderImage({
  src,
  alt,
  className = "",
  sizes = "100vw",
  quality = 78,
  fill = true,
  ...rest
}: Props) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        aria-hidden
        className={`h-full w-full ${className}`}
        style={{
          background:
            "linear-gradient(140deg, #4a2f18 0%, #16121a 45%, #07060a 100%)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, rgba(224,190,134,0.28), transparent 55%)",
            mixBlendMode: "overlay",
          }}
        />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      sizes={sizes}
      quality={quality}
      className={className}
      onError={() => setFailed(true)}
      {...rest}
    />
  );
}
