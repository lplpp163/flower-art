import { Link } from 'react-router-dom';
import { getAllArrangements } from '@/lib/data';
import SectionTitle from '@/components/shared/SectionTitle';
import ImageWithFallback from '@/components/shared/ImageWithFallback';
import DifficultyMeter from '@/components/shared/DifficultyMeter';

const difficultyToLevel = {
  '初學': '簡單',
  '基礎': '中等',
  '進階': '進階',
} as const;

export default function ArrangementsPage() {
  const arrangements = getAllArrangements();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <SectionTitle
        title="花型教學"
        subtitle="從基礎花型開始，一步步學會插花"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {arrangements.map((arr) => (
          <Link
            key={arr.slug}
            to={`/arrangements/${arr.slug}`}
            className="group bg-warm-card rounded-xl border border-border overflow-hidden hover:shadow-md hover:border-rose-light transition-all"
          >
            <div className="relative h-52 overflow-hidden">
              <ImageWithFallback
                src={arr.imageUrl}
                alt={arr.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                fallbackType="arrangement"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-serif text-xl font-bold text-text-primary group-hover:text-rose-dark transition-colors">
                  {arr.name}
                </h3>
                <DifficultyMeter level={difficultyToLevel[arr.difficulty]} />
              </div>
              <p className="text-text-light text-sm mb-2">{arr.subtitle}</p>
              <p className="text-text-secondary text-sm leading-relaxed line-clamp-2 mb-3">
                {arr.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-text-light">{arr.steps.length} 個步驟</span>
                <span className="text-rose-dark text-sm font-medium">
                  查看教學 →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
