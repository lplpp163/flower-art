import { Link, useParams, Navigate } from 'react-router-dom';
import { getFlowerBySlug } from '@/lib/data';
import ImageWithFallback from '@/components/shared/ImageWithFallback';
import CalloutBox from '@/components/shared/CalloutBox';
import DifficultyMeter from '@/components/shared/DifficultyMeter';

export default function FlowerDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const flower = slug ? getFlowerBySlug(slug) : undefined;

  if (!flower) return <Navigate to="/" replace />;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link to="/flowers" className="text-text-light hover:text-rose-dark text-sm mb-6 inline-block transition-colors">
        ← 返回花語圖鑑
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="relative h-80 md:h-[28rem] rounded-xl overflow-hidden">
          <ImageWithFallback src={flower.imageUrl} alt={flower.name} fill className="object-cover" fallbackType="flower" />
        </div>

        <div>
          <div className="flex items-baseline gap-3 mb-2">
            <h1 className="font-serif text-3xl font-bold text-text-primary">{flower.name}</h1>
            <span className="text-text-light text-sm">{flower.englishName}</span>
          </div>
          <p className="text-rose text-lg mb-4 font-medium">{flower.meaning}</p>

          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-text-light text-sm w-16">分類</span>
              <span className="text-sm bg-rose-light/30 text-rose-dark px-3 py-0.5 rounded-full">{flower.category}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-text-light text-sm w-16">難度</span>
              <DifficultyMeter level={flower.careLevel} />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-text-light text-sm w-16">花季</span>
              <div className="flex gap-1.5">
                {flower.season.map((s) => (
                  <span key={s} className="text-xs bg-sage-light/40 text-sage-dark px-2.5 py-0.5 rounded-full">{s}</span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-text-light text-sm w-16">花色</span>
              <div className="flex gap-1.5 flex-wrap">
                {flower.colors.map((c) => (
                  <span key={c} className="text-xs bg-warm-bg text-text-secondary px-2.5 py-0.5 rounded-full border border-border">{c}</span>
                ))}
              </div>
            </div>
          </div>

          <p className="text-text-secondary text-sm leading-relaxed mb-4">{flower.description}</p>

          {flower.quickFacts && (
            <div className="bg-sage-light/15 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-text-primary mb-2">快速重點</h3>
              <ul className="space-y-1.5">
                {flower.quickFacts.map((fact) => (
                  <li key={fact} className="flex items-start gap-2 text-text-secondary text-sm">
                    <span className="text-sage mt-0.5 shrink-0">●</span>
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <CalloutBox variant="tip" title="照顧小撇步">
        <p>{flower.careTips}</p>
      </CalloutBox>
    </div>
  );
}
