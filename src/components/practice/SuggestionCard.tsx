import { Link } from 'react-router-dom';
import type { GeneratedSuggestion } from '@/types';
import { getRandomEncouragement } from '@/lib/data';

const difficultyColors: Record<string, string> = {
  '初學': 'bg-sage-light text-sage-dark',
  '基礎': 'bg-rose-light text-rose-dark',
  '進階': 'bg-yellow-100 text-yellow-700',
};

interface SuggestionCardProps {
  readonly suggestion: GeneratedSuggestion;
  readonly onStartPractice: () => void;
}

export default function SuggestionCard({ suggestion, onStartPractice }: SuggestionCardProps) {
  const encouragement = getRandomEncouragement();

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-warm-card rounded-xl border border-rose-light p-6">
        <p className="text-rose text-sm italic mb-4">{encouragement.text}</p>

        <div className="flex items-start justify-between mb-3">
          <h3 className="font-serif text-xl font-bold text-text-primary">
            {suggestion.title}
          </h3>
          <span className={`text-xs px-2.5 py-1 rounded-full font-medium shrink-0 ml-3 ${difficultyColors[suggestion.difficulty] ?? ''}`}>
            {suggestion.difficulty}
          </span>
        </div>

        <p className="text-text-secondary text-sm leading-relaxed mb-5">
          {suggestion.description}
        </p>

        <div className="mb-5">
          <p className="text-sm font-medium text-text-primary mb-2">你的花材：</p>
          <div className="flex flex-wrap gap-2">
            {suggestion.selectedFlowers.map((f) => {
              const catColor =
                f.category === '主花'
                  ? 'bg-rose-light/40 text-rose-dark'
                  : f.category === '配花'
                    ? 'bg-sage-light/40 text-sage-dark'
                    : 'bg-warm-bg text-text-secondary';
              return (
                <span
                  key={f.slug}
                  className={`text-xs px-3 py-1.5 rounded-full border border-border ${catColor}`}
                >
                  {f.name}
                </span>
              );
            })}
          </div>
        </div>

        <div className="mb-5">
          <p className="text-sm font-medium text-text-primary mb-2">練習重點：</p>
          <ul className="space-y-2">
            {suggestion.tips.map((tip, i) => (
              <li key={i} className="text-sm text-text-secondary flex gap-2">
                <span className="text-rose shrink-0">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
          <Link
            to={`/arrangements/${suggestion.arrangementSlug}`}
            className="px-5 py-2.5 border border-rose text-rose rounded-full text-sm font-medium hover:bg-rose-light/20 transition-colors text-center"
          >
            查看「{suggestion.title.replace(`${suggestion.feeling}的`, '')}」完整教學
          </Link>
          <button
            type="button"
            onClick={onStartPractice}
            className="px-5 py-2.5 bg-rose text-white rounded-full text-sm font-medium hover:bg-rose-dark transition-colors"
          >
            開始練習，記錄心得
          </button>
        </div>
      </div>
    </div>
  );
}
