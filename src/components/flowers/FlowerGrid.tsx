import { useState, useMemo } from 'react';
import type { Flower } from '@/types';
import FlowerCard from './FlowerCard';

interface FlowerGridProps {
  readonly flowers: readonly Flower[];
}

const categories = ['全部', '主花', '配花', '葉材'] as const;

export default function FlowerGrid({ flowers }: FlowerGridProps) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('全部');

  const filtered = useMemo(() => {
    return flowers.filter((f) => {
      const matchesSearch =
        search === '' ||
        f.name.includes(search) ||
        f.englishName.toLowerCase().includes(search.toLowerCase()) ||
        f.meaning.includes(search);
      const matchesCategory = selectedCategory === '全部' || f.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [flowers, search, selectedCategory]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="搜尋花名、英文名或花語..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-2.5 rounded-lg border border-border bg-warm-card text-text-primary placeholder:text-text-light focus:outline-none focus:border-rose transition-colors"
        />
        <div className="flex gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === cat
                  ? 'bg-rose text-white'
                  : 'bg-warm-card border border-border text-text-secondary hover:border-rose-light'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-text-light py-12">找不到符合的花材，試試其他關鍵字？</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((flower) => (
            <FlowerCard key={flower.slug} flower={flower} />
          ))}
        </div>
      )}
    </div>
  );
}
