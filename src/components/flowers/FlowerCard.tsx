import { Link } from 'react-router-dom';
import type { Flower } from '@/types';
import ImageWithFallback from '@/components/shared/ImageWithFallback';
import DifficultyMeter from '@/components/shared/DifficultyMeter';

interface FlowerCardProps {
  readonly flower: Flower;
}

export default function FlowerCard({ flower }: FlowerCardProps) {
  return (
    <Link
      to={`/flowers/${flower.slug}`}
      className="group bg-warm-card rounded-xl border border-border overflow-hidden hover:shadow-md hover:border-rose-light transition-all"
    >
      <div className="relative h-52 overflow-hidden">
        <ImageWithFallback
          src={flower.imageUrl}
          alt={flower.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          fallbackType="flower"
        />
        <div className="absolute top-3 right-3">
          <span className="text-xs bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full font-medium text-text-secondary">
            {flower.category}
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
        <div className="flex items-center justify-between">
          <div className="flex gap-1.5 flex-wrap">
            {flower.colors.slice(0, 4).map((color) => (
              <span key={color} className="text-xs bg-warm-bg text-text-light px-2 py-0.5 rounded-full">
                {color}
              </span>
            ))}
          </div>
          <DifficultyMeter level={flower.careLevel} />
        </div>
      </div>
    </Link>
  );
}
