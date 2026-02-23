import { Link } from 'react-router-dom';
import type { Flower } from '@/types';
import ImageWithFallback from '@/components/shared/ImageWithFallback';

interface FlowerCardProps {
  readonly flower: Flower;
}

const careLevelColors = {
  '簡單': 'bg-sage-light text-sage-dark',
  '中等': 'bg-rose-light text-rose-dark',
  '進階': 'bg-yellow-100 text-yellow-700',
} as const;

export default function FlowerCard({ flower }: FlowerCardProps) {
  return (
    <Link
      to={`/flowers/${flower.slug}`}
      className="group bg-warm-card rounded-xl border border-border overflow-hidden hover:shadow-md hover:border-rose-light transition-all"
    >
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={flower.imageUrl}
          alt={flower.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${careLevelColors[flower.careLevel]}`}>
            {flower.careLevel}
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-baseline gap-2 mb-1">
          <h3 className="font-serif text-lg font-bold text-text-primary group-hover:text-rose-dark transition-colors">
            {flower.name}
          </h3>
          <span className="text-text-light text-xs">{flower.englishName}</span>
        </div>
        <p className="text-rose text-sm mb-2">{flower.meaning}</p>
        <div className="flex gap-1.5 flex-wrap">
          {flower.colors.slice(0, 4).map((color) => (
            <span key={color} className="text-xs bg-warm-bg text-text-light px-2 py-0.5 rounded-full">
              {color}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
