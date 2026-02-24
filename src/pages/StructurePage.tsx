import { Link } from 'react-router-dom';
import { getAllStructureTopics } from '@/lib/data';
import SectionTitle from '@/components/shared/SectionTitle';

export default function StructurePage() {
  const topics = getAllStructureTopics();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <SectionTitle
        title="插花結構解析"
        subtitle="理解原理，作品才能穩定又好看"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {topics.map((topic) => (
          <Link
            key={topic.slug}
            to={`/structure/${topic.slug}`}
            className="group bg-warm-card rounded-xl border border-border p-6 hover:shadow-md hover:border-rose-light transition-all"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-rose-light/30 to-sage-light/30 rounded-lg flex items-center justify-center mb-4">
              <svg viewBox="0 0 24 24" className="w-6 h-6">
                {topic.slug === 'gravity' && (
                  <g fill="none" stroke="#c4878d" strokeWidth="1.5" strokeLinecap="round">
                    <line x1="12" y1="4" x2="12" y2="20" />
                    <polygon points="12,20 8,14 16,14" fill="#e8b4b8" stroke="none" />
                    <circle cx="12" cy="8" r="3" fill="#e8b4b8" stroke="#c4878d" />
                  </g>
                )}
                {topic.slug === 'proportion' && (
                  <g fill="none" stroke="#c4878d" strokeWidth="1.5" strokeLinecap="round">
                    <rect x="3" y="14" width="18" height="7" rx="1" fill="#e8b4b8" stroke="#c4878d" />
                    <line x1="12" y1="4" x2="12" y2="14" stroke="#8faa8f" />
                    <circle cx="12" cy="8" r="3" fill="#a3bda3" stroke="#8faa8f" />
                  </g>
                )}
                {topic.slug === 'balance' && (
                  <g fill="none" stroke="#c4878d" strokeWidth="1.5" strokeLinecap="round">
                    <line x1="12" y1="4" x2="12" y2="12" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <circle cx="6" cy="16" r="3" fill="#e8b4b8" stroke="#c4878d" />
                    <circle cx="18" cy="16" r="3" fill="#e8b4b8" stroke="#c4878d" />
                  </g>
                )}
              </svg>
            </div>
            <h3 className="font-serif text-xl font-bold text-text-primary group-hover:text-rose-dark transition-colors mb-1">
              {topic.name}
            </h3>
            <p className="text-text-light text-sm mb-3">{topic.subtitle}</p>
            <p className="text-text-secondary text-sm leading-relaxed line-clamp-2 mb-4">
              {topic.description}
            </p>
            <ul className="space-y-1.5 mb-4">
              {topic.keyPoints.slice(0, 3).map((point) => (
                <li key={point} className="text-xs text-text-light flex items-start gap-1.5">
                  <span className="text-sage mt-0.5">●</span>
                  {point}
                </li>
              ))}
            </ul>
            <div className="text-rose-dark text-sm font-medium">
              深入了解 →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
