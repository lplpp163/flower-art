import type { Feeling, FeelingOption } from '@/types';

interface FeelingSelectorProps {
  readonly feelings: readonly FeelingOption[];
  readonly selected: Feeling | null;
  readonly onSelect: (feeling: Feeling) => void;
  readonly onNext: () => void;
}

export default function FeelingSelector({ feelings, selected, onSelect, onNext }: FeelingSelectorProps) {
  return (
    <div>
      <p className="text-text-secondary text-sm mb-6 text-center">
        你想呈現什麼感覺？
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-2xl mx-auto">
        {feelings.map((f) => {
          const isSelected = selected === f.id;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => onSelect(f.id)}
              className={`p-5 rounded-xl border-2 text-left transition-all ${f.colorClass} ${
                isSelected
                  ? 'ring-2 ring-offset-2 ring-rose scale-[1.02]'
                  : 'hover:scale-[1.01]'
              }`}
            >
              <span className="text-3xl block mb-2">{f.emoji}</span>
              <p className="font-medium text-base mb-1">{f.label}</p>
              <p className="text-sm opacity-80">{f.description}</p>
            </button>
          );
        })}
      </div>

      <div className="text-center mt-8">
        <button
          type="button"
          onClick={onNext}
          disabled={!selected}
          className="px-8 py-3 bg-rose text-white rounded-full font-medium hover:bg-rose-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {selected ? '看看建議' : '請選擇一種感覺'}
        </button>
      </div>
    </div>
  );
}
