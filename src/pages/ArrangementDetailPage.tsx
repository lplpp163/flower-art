import { Link, useParams, Navigate } from 'react-router-dom';
import { getArrangementBySlug } from '@/lib/data';
import CalloutBox from '@/components/shared/CalloutBox';
import ImageWithFallback from '@/components/shared/ImageWithFallback';

export default function ArrangementDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const arr = slug ? getArrangementBySlug(slug) : undefined;

  if (!arr) return <Navigate to="/" replace />;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link to="/arrangements" className="text-text-light hover:text-rose-dark text-sm mb-6 inline-block transition-colors">
        ← 返回花型教學
      </Link>

      <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-8">
        <ImageWithFallback src={arr.imageUrl} alt={arr.name} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-6 left-6">
          <h1 className="font-serif text-3xl text-white font-bold mb-1">{arr.name}</h1>
          <p className="text-white/80 text-sm">{arr.subtitle}</p>
        </div>
      </div>

      <p className="text-text-secondary leading-relaxed mb-8">{arr.description}</p>

      <div className="bg-sage-light/20 rounded-xl p-6 mb-8">
        <h2 className="font-serif text-lg font-bold text-text-primary mb-3">特色</h2>
        <ul className="space-y-2">
          {arr.characteristics.map((c) => (
            <li key={c} className="flex items-start gap-2 text-text-secondary text-sm">
              <span className="text-sage mt-0.5">●</span>
              {c}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-rose-light/20 rounded-xl p-6 mb-8">
        <h2 className="font-serif text-lg font-bold text-text-primary mb-3">準備材料</h2>
        <div className="flex flex-wrap gap-2">
          {arr.materials.map((m) => (
            <span key={m} className="text-sm bg-warm-card text-text-secondary px-3 py-1.5 rounded-full border border-border">
              {m}
            </span>
          ))}
        </div>
      </div>

      <h2 className="font-serif text-xl font-bold text-text-primary mb-6">步驟教學</h2>
      <div className="space-y-6 mb-8">
        {arr.steps.map((step) => (
          <div key={step.stepNumber} className="bg-warm-card rounded-xl border border-border p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-full bg-rose text-white text-sm font-bold flex items-center justify-center">
                {step.stepNumber}
              </span>
              <h3 className="font-semibold text-text-primary">{step.title}</h3>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed ml-11">{step.description}</p>
            {step.tip && (
              <div className="ml-11 mt-3">
                <CalloutBox variant="tip">
                  <p>{step.tip}</p>
                </CalloutBox>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-warm-card rounded-xl border border-border p-6">
        <h2 className="font-serif text-lg font-bold text-text-primary mb-3">練習小提醒</h2>
        <ul className="space-y-2">
          {arr.tips.map((tip) => (
            <li key={tip} className="flex items-start gap-2 text-text-secondary text-sm">
              <span className="text-rose mt-0.5">💡</span>
              {tip}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
