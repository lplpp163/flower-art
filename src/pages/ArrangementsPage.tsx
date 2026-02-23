import { Link } from 'react-router-dom';
import { getAllArrangements } from '@/lib/data';
import SectionTitle from '@/components/shared/SectionTitle';
import ImageWithFallback from '@/components/shared/ImageWithFallback';

const difficultyColors = {
  '初學': 'bg-sage-light text-sage-dark',
  '基礎': 'bg-rose-light text-rose-dark',
  '進階': 'bg-yellow-100 text-yellow-700',
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
              />
              <div className="absolute top-3 right-3">
                <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${difficultyColors[arr.difficulty]}`}>
                  {arr.difficulty}
                </span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-serif text-xl font-bold text-text-primary group-hover:text-rose-dark transition-colors mb-1">
                {arr.name}
              </h3>
              <p className="text-text-light text-sm mb-3">{arr.subtitle}</p>
              <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
                {arr.description}
              </p>
              <div className="mt-4 flex items-center gap-1 text-rose-dark text-sm font-medium">
                查看步驟教學 →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
