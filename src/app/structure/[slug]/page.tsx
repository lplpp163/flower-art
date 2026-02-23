import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllStructureTopics, getStructureTopicBySlug } from '@/lib/data';
import CalloutBox from '@/components/shared/CalloutBox';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllStructureTopics().map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const topic = getStructureTopicBySlug(slug);
  if (!topic) return { title: '找不到主題' };
  return { title: topic.name, description: topic.description };
}

export default async function StructureDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const topic = getStructureTopicBySlug(slug);
  if (!topic) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/structure" className="text-text-light hover:text-rose-dark text-sm mb-6 inline-block transition-colors">
        ← 返回結構解析
      </Link>

      <h1 className="font-serif text-3xl font-bold text-text-primary mb-2">{topic.name}</h1>
      <p className="text-text-light mb-6">{topic.subtitle}</p>
      <p className="text-text-secondary leading-relaxed mb-8">{topic.description}</p>

      {/* Key Points */}
      <div className="bg-rose-light/20 rounded-xl p-6 mb-10">
        <h2 className="font-serif text-lg font-bold text-text-primary mb-3">重點摘要</h2>
        <ul className="space-y-2">
          {topic.keyPoints.map((point) => (
            <li key={point} className="flex items-start gap-2 text-text-secondary text-sm">
              <span className="text-rose mt-0.5">✦</span>
              {point}
            </li>
          ))}
        </ul>
      </div>

      {/* Sections */}
      <div className="space-y-8">
        {topic.sections.map((section, index) => (
          <div key={section.title}>
            <h2 className="font-serif text-xl font-bold text-text-primary mb-3 flex items-center gap-2">
              <span className="text-rose-dark text-sm">{String(index + 1).padStart(2, '0')}</span>
              {section.title}
            </h2>
            <p className="text-text-secondary leading-relaxed">{section.content}</p>
            {section.tip && (
              <CalloutBox variant="tip">
                <p>{section.tip}</p>
              </CalloutBox>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
