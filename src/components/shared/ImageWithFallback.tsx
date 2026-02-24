import { useState } from 'react';

type FallbackType = 'flower' | 'arrangement' | 'structure' | 'default';

interface ImageWithFallbackProps {
  readonly src: string;
  readonly alt: string;
  readonly fill?: boolean;
  readonly className?: string;
  readonly fallbackType?: FallbackType;
}

function FlowerFallbackSvg() {
  return (
    <svg viewBox="0 0 120 120" className="w-16 h-16 opacity-40">
      <circle cx="60" cy="40" r="12" fill="#e8b4b8" />
      <circle cx="48" cy="50" r="12" fill="#d4a0a5" />
      <circle cx="72" cy="50" r="12" fill="#d4a0a5" />
      <circle cx="52" cy="62" r="12" fill="#e8b4b8" />
      <circle cx="68" cy="62" r="12" fill="#e8b4b8" />
      <circle cx="60" cy="52" r="8" fill="#c4878d" />
      <line x1="60" y1="68" x2="60" y2="110" stroke="#8faa8f" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="50" cy="90" rx="8" ry="4" fill="#a3bd a3" transform="rotate(-30 50 90)" />
      <ellipse cx="70" cy="82" rx="8" ry="4" fill="#a3bda3" transform="rotate(30 70 82)" />
    </svg>
  );
}

function ArrangementFallbackSvg() {
  return (
    <svg viewBox="0 0 120 120" className="w-16 h-16 opacity-40">
      <rect x="40" y="80" width="40" height="30" rx="4" fill="#c4a882" />
      <rect x="42" y="78" width="36" height="6" rx="2" fill="#b39872" />
      <circle cx="50" cy="55" r="10" fill="#e8b4b8" />
      <circle cx="70" cy="50" r="10" fill="#d4a0a5" />
      <circle cx="60" cy="40" r="10" fill="#e8b4b8" />
      <line x1="50" y1="65" x2="55" y2="78" stroke="#8faa8f" strokeWidth="2" />
      <line x1="70" y1="60" x2="65" y2="78" stroke="#8faa8f" strokeWidth="2" />
      <line x1="60" y1="50" x2="60" y2="78" stroke="#8faa8f" strokeWidth="2" />
      <ellipse cx="45" cy="65" rx="6" ry="3" fill="#a3bda3" transform="rotate(-20 45 65)" />
      <ellipse cx="75" cy="60" rx="6" ry="3" fill="#a3bda3" transform="rotate(20 75 60)" />
    </svg>
  );
}

function StructureFallbackSvg() {
  return (
    <svg viewBox="0 0 120 120" className="w-16 h-16 opacity-40">
      <line x1="20" y1="90" x2="100" y2="90" stroke="#c4a882" strokeWidth="2" />
      <line x1="60" y1="20" x2="60" y2="90" stroke="#8faa8f" strokeWidth="2" strokeDasharray="4 3" />
      <line x1="20" y1="90" x2="60" y2="20" stroke="#d4a0a5" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="100" y1="90" x2="60" y2="20" stroke="#d4a0a5" strokeWidth="1.5" strokeDasharray="4 3" />
      <circle cx="60" cy="20" r="4" fill="#e8b4b8" />
      <circle cx="20" cy="90" r="4" fill="#e8b4b8" />
      <circle cx="100" cy="90" r="4" fill="#e8b4b8" />
      <circle cx="60" cy="60" r="6" fill="#c4878d" opacity="0.6" />
    </svg>
  );
}

function DefaultFallbackSvg() {
  return (
    <svg viewBox="0 0 120 120" className="w-16 h-16 opacity-40">
      <circle cx="60" cy="45" r="15" fill="#e8b4b8" />
      <circle cx="60" cy="45" r="8" fill="#c4878d" />
      <line x1="60" y1="60" x2="60" y2="100" stroke="#8faa8f" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="50" cy="80" rx="8" ry="4" fill="#a3bda3" transform="rotate(-30 50 80)" />
    </svg>
  );
}

const fallbackComponents: Record<FallbackType, () => React.ReactElement> = {
  flower: FlowerFallbackSvg,
  arrangement: ArrangementFallbackSvg,
  structure: StructureFallbackSvg,
  default: DefaultFallbackSvg,
};

export default function ImageWithFallback({
  src,
  alt,
  fill,
  className = '',
  fallbackType = 'default',
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    const FallbackIcon = fallbackComponents[fallbackType];
    return (
      <div
        className={`bg-gradient-to-br from-rose-light/20 to-sage-light/20 flex flex-col items-center justify-center gap-2 ${className}`}
        style={fill ? { position: 'absolute', inset: 0 } : undefined}
      >
        <FallbackIcon />
        <span className="text-xs text-text-light">{alt}</span>
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
