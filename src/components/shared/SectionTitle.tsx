interface SectionTitleProps {
  readonly title: string;
  readonly subtitle?: string;
  readonly centered?: boolean;
}

export default function SectionTitle({ title, subtitle, centered = true }: SectionTitleProps) {
  return (
    <div className={`mb-8 ${centered ? 'text-center' : ''}`}>
      <h2 className="font-serif text-2xl md:text-3xl text-text-primary font-bold mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-base md:text-lg">{subtitle}</p>
      )}
      <div className={`mt-4 h-0.5 w-16 bg-rose ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
}
