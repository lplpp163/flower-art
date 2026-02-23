import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllStructureTopics } from '@/lib/data';
import SectionTitle from '@/components/shared/SectionTitle';

export const metadata: Metadata = {
  title: '結構解析',
  description: '重心、比例、平衡——掌握花藝的核心結構原理。',
};

const topicIcons: Record<string, string> = {
  gravity: '⚖️',
  proportion: '📐',
  balance: '🎯',
};

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
            href={`/structure/${topic.slug}`}
            className="group bg-warm-card rounded-xl border border-border p-6 hover:shadow-md hover:border-rose-light transition-all"
          >
            <span className="text-4xl block mb-4">{topicIcons[topic.slug] ?? '📖'}</span>
            <h3 className="font-serif text-xl font-bold text-text-primary group-hover:text-rose-dark transition-colors mb-1">
              {topic.name}
            </h3>
            <p className="text-text-light text-sm mb-3">{topic.subtitle}</p>
            <p className="text-text-secondary text-sm leading-relaxed line-clamp-3 mb-4">
              {topic.description}
            </p>
            <ul className="space-y-1.5">
              {topic.keyPoints.slice(0, 3).map((point) => (
                <li key={point} className="text-xs text-text-light flex items-start gap-1.5">
                  <span className="text-sage mt-0.5">●</span>
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-4 text-rose-dark text-sm font-medium">
              深入了解 →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
