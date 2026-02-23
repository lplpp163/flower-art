import { Link } from 'react-router-dom';
import { getDailyEncouragement } from '@/lib/data';

const features = [
  {
    href: '/flowers',
    icon: '🌹',
    title: '花語圖鑑',
    description: '認識12種新手友善的花材，了解每朵花的故事與花語。',
  },
  {
    href: '/arrangements',
    icon: '💐',
    title: '花型教學',
    description: '圓形、三角形、線條感，三種基礎花型的步驟圖解。',
  },
  {
    href: '/structure',
    icon: '⚖️',
    title: '結構解析',
    description: '重心、比例、平衡——掌握花藝的核心原理。',
  },
  {
    href: '/journal',
    icon: '📔',
    title: '學習日誌',
    description: '花藝知識與心得分享，陪伴你的學習旅程。',
  },
  {
    href: '/practice',
    icon: '🎲',
    title: '今天練什麼',
    description: '隨機練習建議，讓每天都有新靈感。',
  },
  {
    href: '/growth',
    icon: '🌱',
    title: '成長故事',
    description: '記錄你的學習歷程，見證自己的成長。',
  },
] as const;

export default function HomePage() {
  const dailyTip = getDailyEncouragement();

  return (
    <div>
      <section className="relative bg-gradient-to-b from-rose-light/20 to-warm-bg py-20 md:py-28 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-3xl md:text-5xl text-text-primary font-bold leading-tight mb-6">
            用花朵，<br className="md:hidden" />為生活寫一首詩
          </h1>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            從認識第一朵花開始，踏上花藝學習之旅。<br />
            這裡有你需要的一切——花材知識、插花技巧、結構原理，<br className="hidden md:block" />
            還有陪伴你練習的溫暖空間。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/flowers"
              className="inline-flex items-center justify-center px-6 py-3 bg-rose text-white rounded-full font-medium hover:bg-rose-dark transition-colors"
            >
              開始認識花材
            </Link>
            <Link
              to="/practice"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-rose-dark border border-rose rounded-full font-medium hover:bg-rose-light/20 transition-colors"
            >
              今天來練習
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-4 -mt-6">
        <div className="bg-warm-card rounded-xl shadow-sm border border-border p-6 text-center">
          <p className="text-sm text-text-light mb-1">今日花語小語</p>
          <p className="font-serif text-lg text-text-primary italic">
            「{dailyTip.text}」
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="font-serif text-2xl md:text-3xl text-text-primary font-bold text-center mb-10">
          探索花藝世界
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Link
              key={feature.href}
              to={feature.href}
              className="group bg-warm-card rounded-xl border border-border p-6 hover:shadow-md hover:border-rose-light transition-all"
            >
              <span className="text-3xl block mb-3">{feature.icon}</span>
              <h3 className="font-serif text-lg text-text-primary font-bold mb-2 group-hover:text-rose-dark transition-colors">
                {feature.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {feature.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-sage-light/20 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-text-primary font-bold mb-6">
            新手從哪裡開始？
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-warm-card rounded-xl p-6 border border-border">
              <div className="text-rose-dark font-bold text-lg mb-2">Step 1</div>
              <h3 className="font-semibold mb-2">認識花材</h3>
              <p className="text-text-secondary text-sm">
                先到<Link to="/flowers" className="text-rose-dark underline">花語圖鑑</Link>認識常見花材，了解它們的特性和花語。
              </p>
            </div>
            <div className="bg-warm-card rounded-xl p-6 border border-border">
              <div className="text-rose-dark font-bold text-lg mb-2">Step 2</div>
              <h3 className="font-semibold mb-2">學習基礎</h3>
              <p className="text-text-secondary text-sm">
                到<Link to="/structure" className="text-rose-dark underline">結構解析</Link>理解重心和比例，再看<Link to="/arrangements" className="text-rose-dark underline">花型教學</Link>學習插花步驟。
              </p>
            </div>
            <div className="bg-warm-card rounded-xl p-6 border border-border">
              <div className="text-rose-dark font-bold text-lg mb-2">Step 3</div>
              <h3 className="font-semibold mb-2">動手練習</h3>
              <p className="text-text-secondary text-sm">
                前往<Link to="/practice" className="text-rose-dark underline">今天練什麼</Link>獲取練習建議，記錄你的每一次進步！
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
