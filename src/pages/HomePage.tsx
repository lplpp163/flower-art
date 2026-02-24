import { Link } from 'react-router-dom';
import { getDailyEncouragement } from '@/lib/data';

const coreFeatures = [
  {
    href: '/flowers',
    title: '花語圖鑑',
    description: '認識12種新手友善花材',
    bgClass: 'from-rose-light/30 to-rose-light/10',
    iconBg: 'bg-rose-light',
  },
  {
    href: '/arrangements',
    title: '花型教學',
    description: '圓形、三角形、線條感步驟圖解',
    bgClass: 'from-sage-light/30 to-sage-light/10',
    iconBg: 'bg-sage-light',
  },
  {
    href: '/structure',
    title: '結構解析',
    description: '重心、比例、平衡核心原理',
    bgClass: 'from-yellow-100/50 to-yellow-50/30',
    iconBg: 'bg-yellow-100',
  },
] as const;

const subFeatures = [
  { href: '/journal', title: '學習日誌', description: '花藝知識與心得分享' },
  { href: '/practice', title: '今天練什麼', description: '隨機練習靈感' },
  { href: '/growth', title: '成長故事', description: '記錄你的學習歷程' },
] as const;

export default function HomePage() {
  const dailyTip = getDailyEncouragement();

  return (
    <div>
      <section className="relative bg-gradient-to-b from-rose-light/20 to-warm-bg py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-3xl md:text-5xl text-text-primary font-bold leading-tight mb-6">
            用花朵，<br className="md:hidden" />為生活寫一首詩
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/flowers"
              className="inline-flex items-center justify-center px-6 py-3 bg-rose text-white rounded-full font-medium hover:bg-rose-dark transition-colors"
            >
              開始認識花材
            </Link>
            <Link
              to="/arrangements"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-rose-dark border border-rose rounded-full font-medium hover:bg-rose-light/20 transition-colors"
            >
              學習插花
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-4 -mt-6">
        <div className="bg-warm-card rounded-xl shadow-sm border border-border p-5 text-center">
          <p className="text-sm text-text-light mb-1">今日花語小語</p>
          <p className="font-serif text-lg text-text-primary italic">
            「{dailyTip.text}」
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="font-serif text-2xl md:text-3xl text-text-primary font-bold text-center mb-8">
          探索花藝世界
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {coreFeatures.map((feature) => (
            <Link
              key={feature.href}
              to={feature.href}
              className={`group bg-gradient-to-br ${feature.bgClass} rounded-xl border border-border p-6 hover:shadow-md transition-all`}
            >
              <div className={`w-10 h-10 ${feature.iconBg} rounded-lg flex items-center justify-center mb-3`}>
                <div className="w-5 h-5 rounded-full bg-white/60" />
              </div>
              <h3 className="font-serif text-lg text-text-primary font-bold mb-1 group-hover:text-rose-dark transition-colors">
                {feature.title}
              </h3>
              <p className="text-text-secondary text-sm">{feature.description}</p>
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {subFeatures.map((feature) => (
            <Link
              key={feature.href}
              to={feature.href}
              className="group bg-warm-card rounded-lg border border-border p-4 hover:shadow-sm hover:border-rose-light transition-all"
            >
              <h3 className="font-semibold text-text-primary text-sm mb-0.5 group-hover:text-rose-dark transition-colors">
                {feature.title}
              </h3>
              <p className="text-text-light text-xs">{feature.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-sage-light/15 py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl text-text-primary font-bold text-center mb-10">
            新手從哪裡開始？
          </h2>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-0.5 bg-border -translate-x-1/2" />
            <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-8 relative">
              {[
                {
                  step: 1,
                  title: '認識花材',
                  desc: '先認識常見花材的特性和花語',
                  link: '/flowers',
                  linkText: '花語圖鑑',
                },
                {
                  step: 2,
                  title: '學習結構',
                  desc: '理解重心和比例的基本原理',
                  link: '/structure',
                  linkText: '結構解析',
                },
                {
                  step: 3,
                  title: '動手練習',
                  desc: '跟著步驟教學完成第一個作品',
                  link: '/arrangements',
                  linkText: '花型教學',
                },
              ].map((item) => (
                <div key={item.step} className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-rose text-white font-bold flex items-center justify-center text-sm mb-3 relative z-10">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-text-primary mb-1">{item.title}</h3>
                  <p className="text-text-secondary text-sm mb-2">{item.desc}</p>
                  <Link to={item.link} className="text-rose-dark text-sm font-medium hover:underline">
                    {item.linkText} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
