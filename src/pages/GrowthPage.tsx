import { usePracticeLog } from '@/hooks/usePracticeLog';
import SectionTitle from '@/components/shared/SectionTitle';

const milestones = [
  { count: 1, title: '踏出第一步', description: '完成了第一次花藝練習！' },
  { count: 3, title: '初見成效', description: '已經完成3次練習，開始有手感了。' },
  { count: 5, title: '漸入佳境', description: '5次練習！你已經是個認真的學習者了。' },
  { count: 10, title: '小有所成', description: '10次練習，堅持的力量很美！' },
  { count: 20, title: '花藝新秀', description: '20次練習，你的花藝之旅越來越精彩。' },
  { count: 50, title: '花藝達人', description: '50次練習！你已經成為花藝高手了！' },
] as const;

export default function GrowthPage() {
  const { logs } = usePracticeLog();

  const groupedByDate = logs.reduce<Record<string, typeof logs>>((acc, log) => {
    const month = log.date.substring(0, 7);
    return { ...acc, [month]: [...(acc[month] ?? []), log] };
  }, {});

  const monthKeys = Object.keys(groupedByDate).sort().reverse();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <SectionTitle
        title="成長故事"
        subtitle="回顧你的花藝學習歷程"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="bg-warm-card rounded-xl border border-border p-4 text-center">
          <span className="text-2xl font-bold text-rose-dark">{logs.length}</span>
          <p className="text-text-light text-xs mt-1">總練習次數</p>
        </div>
        <div className="bg-warm-card rounded-xl border border-border p-4 text-center">
          <span className="text-2xl font-bold text-sage-dark">{monthKeys.length}</span>
          <p className="text-text-light text-xs mt-1">活躍月份</p>
        </div>
        <div className="bg-warm-card rounded-xl border border-border p-4 text-center">
          <span className="text-2xl font-bold text-rose-dark">
            {logs.length > 0 ? logs[logs.length - 1].date : '—'}
          </span>
          <p className="text-text-light text-xs mt-1">起始日期</p>
        </div>
        <div className="bg-warm-card rounded-xl border border-border p-4 text-center">
          <span className="text-2xl font-bold text-sage-dark">
            {logs.length > 0 ? logs[0].date : '—'}
          </span>
          <p className="text-text-light text-xs mt-1">最近練習</p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="font-serif text-xl font-bold text-text-primary mb-4">成就里程碑</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {milestones.map((m) => {
            const achieved = logs.length >= m.count;
            return (
              <div
                key={m.count}
                className={`rounded-xl border p-4 text-center transition-all ${
                  achieved
                    ? 'bg-rose-light/30 border-rose-light'
                    : 'bg-warm-card border-border opacity-50'
                }`}
              >
                <span className="text-2xl block mb-1">{achieved ? '🏆' : '🔒'}</span>
                <h3 className="font-semibold text-text-primary text-sm">{m.title}</h3>
                <p className="text-text-light text-xs mt-1">{m.description}</p>
                <p className="text-text-light text-xs mt-1">{m.count} 次練習</p>
              </div>
            );
          })}
        </div>
      </div>

      {logs.length === 0 ? (
        <div className="text-center py-12">
          <span className="text-5xl block mb-4">🌱</span>
          <p className="text-text-secondary">
            還沒有練習紀錄，去「今天練什麼」開始你的第一次練習吧！
          </p>
        </div>
      ) : (
        <div>
          <h2 className="font-serif text-xl font-bold text-text-primary mb-6">學習時間軸</h2>
          {monthKeys.map((month) => (
            <div key={month} className="mb-8">
              <h3 className="text-sm font-medium text-rose-dark mb-3 border-b border-border pb-2">
                {month}
              </h3>
              <div className="space-y-3 pl-4 border-l-2 border-rose-light/50">
                {groupedByDate[month].map((log) => (
                  <div key={log.id} className="relative pl-4">
                    <span className="absolute -left-[9px] top-1.5 w-3 h-3 rounded-full bg-rose border-2 border-warm-bg" />
                    <div className="bg-warm-card rounded-lg border border-border p-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-text-primary">{log.mood} {log.title}</span>
                        <span className="text-xs text-text-light">{log.date}</span>
                      </div>
                      {log.notes && (
                        <p className="text-xs text-text-secondary">{log.notes}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
