import { Link, useParams, Navigate } from 'react-router-dom';
import { getStructureTopicBySlug } from '@/lib/data';
import CalloutBox from '@/components/shared/CalloutBox';

export default function StructureDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const topic = slug ? getStructureTopicBySlug(slug) : undefined;

  if (!topic) return <Navigate to="/" replace />;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link to="/structure" className="text-text-light hover:text-rose-dark text-sm mb-6 inline-block transition-colors">
        ← 返回結構解析
      </Link>

      <h1 className="font-serif text-3xl font-bold text-text-primary mb-2">{topic.name}</h1>
      <p className="text-text-light mb-6">{topic.subtitle}</p>
      <p className="text-text-secondary leading-relaxed mb-8">{topic.description}</p>

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
