"use client";

import { useState } from "react";
import Image from "next/image";

interface FadeImageProps {
  src: string;
  alt: string;
  priority?: boolean;
}

export function FadeImage({ src, alt, priority = false }: FadeImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full bg-neutral-100">
      <Image
        src={src}
        alt={alt}
        width={896}
        height={1120}
        className="h-auto w-full transition-opacity duration-700 ease-in-out"
        style={{ opacity: loaded ? 1 : 0 }}
        sizes="(max-width: 896px) 100vw, 896px"
        quality={78}
        priority={priority}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
