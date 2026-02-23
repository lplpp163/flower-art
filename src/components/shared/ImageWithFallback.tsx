import { useState } from 'react';

interface ImageWithFallbackProps {
  readonly src: string;
  readonly alt: string;
  readonly fill?: boolean;
  readonly className?: string;
}

export default function ImageWithFallback({
  src,
  alt,
  fill,
  className = '',
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`bg-rose-light/30 flex items-center justify-center ${className}`}
        style={fill ? { position: 'absolute', inset: 0 } : undefined}
      >
        <span className="text-4xl">🌸</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={fill ? { position: 'absolute', inset: 0, width: '100%', height: '100%' } : undefined}
      onError={() => setHasError(true)}
      loading="lazy"
    />
  );
}
