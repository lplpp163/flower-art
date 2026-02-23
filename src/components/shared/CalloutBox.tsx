interface CalloutBoxProps {
  readonly children: React.ReactNode;
  readonly variant?: 'tip' | 'note' | 'warning';
  readonly title?: string;
}

const variantStyles = {
  tip: {
    bg: 'bg-sage-light/30',
    border: 'border-sage',
    icon: '💡',
    defaultTitle: '小提示',
  },
  note: {
    bg: 'bg-rose-light/30',
    border: 'border-rose',
    icon: '📝',
    defaultTitle: '筆記',
  },
  warning: {
    bg: 'bg-yellow-50',
    border: 'border-yellow-300',
    icon: '⚠️',
    defaultTitle: '注意',
  },
} as const;

export default function CalloutBox({ children, variant = 'tip', title }: CalloutBoxProps) {
  const style = variantStyles[variant];

  return (
    <div className={`${style.bg} border-l-4 ${style.border} rounded-r-lg p-4 my-4`}>
      <p className="font-semibold text-text-primary mb-1">
        {style.icon} {title ?? style.defaultTitle}
      </p>
      <div className="text-text-secondary text-sm leading-relaxed">{children}</div>
    </div>
  );
}
