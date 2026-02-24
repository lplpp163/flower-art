import type { Flower } from '@/types';

interface FlowerSelectorProps {
  readonly flowers: readonly Flower[];
  readonly selectedSlugs: readonly string[];
  readonly onToggle: (slug: string) => void;
  readonly onNext: () => void;
}

const CATEGORY_ORDER = ['主花', '配花', '葉材'] as const;

const CATEGORY_LABELS: Record<string, string> = {
  '主花': '主花（焦點花）',
  '配花': '配花（填充花）',
  '葉材': '葉材（綠葉）',
};

export default function FlowerSelector({ flowers, selectedSlugs, onToggle, onNext }: FlowerSelectorProps) {
  const grouped = CATEGORY_ORDER.reduce<Record<string, readonly Flower[]>>((acc, cat) => {
    const items = flowers.filter((f) => f.category === cat);
    return items.length > 0 ? { ...acc, [cat]: items } : acc;
  }, {});

  const count = selectedSlugs.length;

  return (
    <div>
      <p className="text-text-secondary text-sm mb-6 text-center">
        選擇你手邊有的花材（可多選）
      </p>

      {CATEGORY_ORDER.map((cat) => {
        const items = grouped[cat];
        if (!items) return null;
        return (
          <div key={cat} className="mb-6">
            <h3 className="text-sm font-medium text-text-light mb-3">
              {CATEGORY_LABELS[cat] ?? cat}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {items.map((flower) => {
                const selected = selectedSlugs.includes(flower.slug);
                return (
                  <button
                    key={flower.slug}
                    type="button"
                    onClick={() => onToggle(flower.slug)}
                    className={`relative flex items-center gap-3 p-3 rounded-xl border-2 transition-all text-left ${
                      selected
                        ? 'border-rose bg-rose-light/20 shadow-sm'
                        : 'border-border bg-warm-card hover:border-rose-light'
                    }`}
                  >
                    <img
                      src={flower.imageUrl}
                      alt={flower.name}
                      className="w-12 h-12 rounded-lg object-cover shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-text-primary truncate">
                        {flower.name}
                      </p>
                      <p className="text-xs text-text-light truncate">
                        {flower.englishName}
                      </p>
                    </div>
                    {selected && (
                      <span className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-rose text-white flex items-center justify-center text-xs">
                        ✓
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}

      <div className="text-center mt-8">
        <button
          type="button"
          onClick={onNext}
          disabled={count === 0}
          className="px-8 py-3 bg-rose text-white rounded-full font-medium hover:bg-rose-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {count > 0 ? `已選 ${count} 種花材，下一步` : '請至少選一種花材'}
        </button>
      </div>
    </div>
  );
}
