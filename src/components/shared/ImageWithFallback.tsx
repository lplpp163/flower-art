'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ImageWithFallbackProps {
  readonly src: string;
  readonly alt: string;
  readonly width?: number;
  readonly height?: number;
  readonly fill?: boolean;
  readonly className?: string;
  readonly priority?: boolean;
}

export default function ImageWithFallback({
  src,
  alt,
  width,
  height,
  fill,
  className = '',
  priority = false,
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`bg-rose-light/30 flex items-center justify-center ${className}`}
        style={fill ? { position: 'absolute', inset: 0 } : { width, height }}
      >
        <span className="text-4xl">🌸</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      className={className}
      priority={priority}
      onError={() => setHasError(true)}
      unoptimized
    />
  );
}
