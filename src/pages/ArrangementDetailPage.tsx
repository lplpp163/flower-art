import { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { getArrangementBySlug } from '@/lib/data';
import CalloutBox from '@/components/shared/CalloutBox';
import ImageWithFallback from '@/components/shared/ImageWithFallback';
import ProgressBar from '@/components/shared/ProgressBar';
import StepDiagram from '@/components/arrangements/StepDiagram';

export default function ArrangementDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const arr = slug ? getArrangementBySlug(slug) : undefined;
  const [checkedMaterials, setCheckedMaterials] = useState<ReadonlySet<string>>(new Set());

  if (!arr) return <Navigate to="/" replace />;

  const toggleMaterial = (material: string) => {
    setCheckedMaterials((prev) => {
      const next = new Set(prev);
      if (next.has(material)) {
        next.delete(material);
      } else {
        next.add(material);
      }
      return next;
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link to="/arrangements" className="text-text-light hover:text-rose-dark text-sm mb-6 inline-block transition-colors">
        ← 返回花型教學
      </Link>

      <div className="relative h-56 md:h-72 rounded-xl overflow-hidden mb-8">
        <ImageWithFallback src={arr.imageUrl} alt={arr.name} fill className="object-cover" fallbackType="arrangement" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-5 left-5">
          <h1 className="font-serif text-3xl text-white font-bold mb-1">{arr.name}</h1>
          <p className="text-white/80 text-sm">{arr.subtitle}</p>
        </div>
      </div>

      <p className="text-text-secondary leading-relaxed mb-6">{arr.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-sage-light/20 rounded-xl p-5">
          <h2 className="font-serif text-base font-bold text-text-primary mb-2">特色</h2>
          <ul className="space-y-1.5">
            {arr.characteristics.map((c) => (
              <li key={c} className="flex items-start gap-2 text-text-secondary text-sm">
                <span className="text-sage mt-0.5 shrink-0">●</span>
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-rose-light/15 rounded-xl p-5">
          <h2 className="font-serif text-base font-bold text-text-primary mb-2">準備材料</h2>
          <div className="space-y-1.5">
            {arr.materials.map((m) => (
              <label key={m} className="flex items-center gap-2 text-sm text-text-secondary cursor-pointer group">
                <input
                  type="checkbox"
                  checked={checkedMaterials.has(m)}
                  onChange={() => toggleMaterial(m)}
                  className="w-4 h-4 rounded border-border text-rose accent-rose"
                />
                <span className={checkedMaterials.has(m) ? 'line-through text-text-light' : ''}>
                  {m}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <h2 className="font-serif text-xl font-bold text-text-primary mb-4">步驟教學</h2>
      <div className="mb-6">
        <ProgressBar totalSteps={arr.steps.length} />
      </div>

      <div className="space-y-6 mb-8">
        {arr.steps.map((step) => (
          <div key={step.stepNumber} className="bg-warm-card rounded-xl border border-border p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-full bg-rose text-white text-sm font-bold flex items-center justify-center shrink-0">
                {step.stepNumber}
              </span>
              <h3 className="font-semibold text-text-primary">{step.title}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-11">
              <div>
                {step.keyAction && (
                  <p className="text-rose-dark font-semibold text-sm mb-2">
                    {step.keyAction}
                  </p>
                )}
                <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
                {step.tip && (
                  <div className="mt-3">
                    <CalloutBox variant="tip">
                      <p>{step.tip}</p>
                    </CalloutBox>
                  </div>
                )}
              </div>
              <StepDiagram arrangementSlug={arr.slug} stepNumber={step.stepNumber} />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-warm-card rounded-xl border border-border p-5">
        <h2 className="font-serif text-base font-bold text-text-primary mb-3">練習小提醒</h2>
        <ul className="space-y-1.5">
          {arr.tips.map((tip) => (
            <li key={tip} className="flex items-start gap-2 text-text-secondary text-sm">
              <span className="text-rose mt-0.5 shrink-0">●</span>
              {tip}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
