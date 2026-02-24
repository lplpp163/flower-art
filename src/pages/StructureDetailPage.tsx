import { Link, useParams, Navigate } from 'react-router-dom';
import { getStructureTopicBySlug } from '@/lib/data';
import CalloutBox from '@/components/shared/CalloutBox';
import PrincipleIllustration from '@/components/structure/PrincipleIllustration';

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

      <div className="flex flex-wrap gap-3 mb-10">
        {topic.keyPoints.map((point) => (
          <div key={point} className="flex items-center gap-2 bg-rose-light/15 rounded-full px-4 py-2">
            <span className="text-rose text-xs">✦</span>
            <span className="text-text-secondary text-sm">{point}</span>
          </div>
        ))}
      </div>

      <div className="space-y-8">
        {topic.sections.map((section, index) => (
          <div key={section.title} className="bg-warm-card rounded-xl border border-border p-6">
            <h2 className="font-serif text-lg font-bold text-text-primary mb-2 flex items-center gap-2">
              <span className="text-rose-dark text-sm">{String(index + 1).padStart(2, '0')}</span>
              {section.title}
            </h2>

            {section.summary && (
              <p className="text-text-primary font-medium text-sm mb-3 bg-rose-light/10 rounded-lg px-3 py-2">
                {section.summary}
              </p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                {section.bulletPoints ? (
                  <ul className="space-y-2">
                    {section.bulletPoints.map((bp) => (
                      <li key={bp} className="flex items-start gap-2 text-text-secondary text-sm">
                        <span className="text-sage mt-0.5 shrink-0">●</span>
                        {bp}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-text-secondary text-sm leading-relaxed">{section.content}</p>
                )}
                {section.tip && (
                  <div className="mt-3">
                    <CalloutBox variant="tip">
                      <p>{section.tip}</p>
                    </CalloutBox>
                  </div>
                )}
              </div>
              <PrincipleIllustration topicSlug={topic.slug} sectionIndex={index} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
