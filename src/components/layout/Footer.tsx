import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-warm-card border-t border-border mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-lg text-rose-dark font-bold mb-3">花藝學習</h3>
            <p className="text-text-light text-sm leading-relaxed">
              一個為花藝初學者打造的學習平台，<br />
              讓每個人都能享受與花相處的美好時光。
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-text-primary mb-3 text-sm">快速導覽</h4>
            <div className="flex flex-col gap-2">
              <Link to="/flowers" className="text-text-light hover:text-rose-dark text-sm transition-colors">花語圖鑑</Link>
              <Link to="/arrangements" className="text-text-light hover:text-rose-dark text-sm transition-colors">花型教學</Link>
              <Link to="/structure" className="text-text-light hover:text-rose-dark text-sm transition-colors">結構解析</Link>
              <Link to="/journal" className="text-text-light hover:text-rose-dark text-sm transition-colors">學習日誌</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-text-primary mb-3 text-sm">學習資源</h4>
            <div className="flex flex-col gap-2">
              <Link to="/practice" className="text-text-light hover:text-rose-dark text-sm transition-colors">今天練什麼</Link>
              <Link to="/growth" className="text-text-light hover:text-rose-dark text-sm transition-colors">成長故事</Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-text-light text-xs">
            以花為師，以心為筆 — 花藝學習網站
          </p>
        </div>
      </div>
    </footer>
  );
}
