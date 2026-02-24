interface PrincipleIllustrationProps {
  readonly topicSlug: string;
  readonly sectionIndex: number;
}

function GravityVisual() {
  return (
    <svg viewBox="0 0 200 180" className="w-full h-full">
      <text x="100" y="16" textAnchor="middle" fill="#8b7355" fontSize="11" fontWeight="bold">重心位置對比</text>
      <g transform="translate(0, 10)">
        <text x="50" y="30" textAnchor="middle" fill="#6b8a6b" fontSize="9">✓ 穩定</text>
        <rect x="25" y="120" width="50" height="30" rx="3" fill="#c4a882" opacity="0.4" />
        <line x1="50" y1="40" x2="50" y2="120" stroke="#8faa8f" strokeWidth="2" strokeLinecap="round" />
        <circle cx="50" cy="50" r="6" fill="#a3bda3" opacity="0.5" />
        <circle cx="40" cy="60" r="5" fill="#a3bda3" opacity="0.5" />
        <circle cx="60" cy="55" r="5" fill="#a3bda3" opacity="0.5" />
        <circle cx="50" cy="90" r="12" fill="#e8b4b8" />
        <circle cx="35" cy="100" r="10" fill="#d4a0a5" />
        <circle cx="65" cy="100" r="10" fill="#d4a0a5" />
        <line x1="50" y1="95" x2="50" y2="95" stroke="none" />
        <circle cx="50" cy="98" r="2" fill="#c4878d" />
        <text x="50" y="113" textAnchor="middle" fill="#c4878d" fontSize="7">重心</text>
      </g>
      <g transform="translate(100, 10)">
        <text x="50" y="30" textAnchor="middle" fill="#c4878d" fontSize="9">✗ 頭重腳輕</text>
        <rect x="25" y="120" width="50" height="30" rx="3" fill="#c4a882" opacity="0.4" />
        <line x1="50" y1="40" x2="50" y2="120" stroke="#8faa8f" strokeWidth="2" strokeLinecap="round" />
        <circle cx="50" cy="50" r="14" fill="#e8b4b8" />
        <circle cx="35" cy="60" r="12" fill="#d4a0a5" />
        <circle cx="65" cy="55" r="12" fill="#d4a0a5" />
        <circle cx="45" cy="100" r="5" fill="#a3bda3" opacity="0.4" />
        <circle cx="55" cy="105" r="4" fill="#a3bda3" opacity="0.4" />
        <circle cx="50" cy="58" r="2" fill="#c4878d" />
        <text x="50" y="73" textAnchor="middle" fill="#c4878d" fontSize="7">重心偏高</text>
      </g>
    </svg>
  );
}

function GravityWeight() {
  return (
    <svg viewBox="0 0 200 140" className="w-full h-full">
      <text x="100" y="16" textAnchor="middle" fill="#8b7355" fontSize="11" fontWeight="bold">視覺重量比較</text>
      <circle cx="40" cy="55" r="18" fill="#e8b4b8" />
      <text x="40" y="59" textAnchor="middle" fill="#c4878d" fontSize="8">大</text>
      <text x="40" y="82" textAnchor="middle" fill="#8b7355" fontSize="8">重</text>
      <text x="80" y="55" textAnchor="middle" fill="#8b7355" fontSize="14">{'>'}</text>
      <circle cx="110" cy="50" r="6" fill="#f0d4d8" />
      <circle cx="125" cy="55" r="6" fill="#f0d4d8" />
      <circle cx="118" cy="65" r="6" fill="#f0d4d8" />
      <text x="118" y="82" textAnchor="middle" fill="#8b7355" fontSize="8">輕</text>
      <circle cx="40" cy="115" r="15" fill="#c4878d" />
      <text x="40" y="119" textAnchor="middle" fill="white" fontSize="8">深</text>
      <text x="80" y="115" textAnchor="middle" fill="#8b7355" fontSize="14">{'>'}</text>
      <circle cx="118" cy="115" r="15" fill="#f0d4d8" stroke="#e8b4b8" strokeWidth="1" />
      <text x="118" y="119" textAnchor="middle" fill="#d4a0a5" fontSize="8">淺</text>
    </svg>
  );
}

function GravityVase() {
  return (
    <svg viewBox="0 0 200 150" className="w-full h-full">
      <text x="100" y="16" textAnchor="middle" fill="#8b7355" fontSize="11" fontWeight="bold">花材與花器比例</text>
      <rect x="70" y="95" width="60" height="40" rx="4" fill="#c4a882" opacity="0.4" stroke="#c4a882" strokeWidth="1" />
      <line x1="100" y1="30" x2="100" y2="95" stroke="#8faa8f" strokeWidth="2" strokeLinecap="round" />
      <circle cx="100" cy="60" r="10" fill="#e8b4b8" opacity="0.6" />
      <line x1="30" y1="95" x2="30" y2="30" stroke="#d4a0a5" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="25" y1="95" x2="35" y2="95" stroke="#d4a0a5" strokeWidth="1" />
      <line x1="25" y1="30" x2="35" y2="30" stroke="#d4a0a5" strokeWidth="1" />
      <text x="30" y="65" textAnchor="middle" fill="#c4878d" fontSize="8">1.5~2x</text>
      <line x1="170" y1="95" x2="170" y2="135" stroke="#8b7355" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="165" y1="95" x2="175" y2="95" stroke="#8b7355" strokeWidth="1" />
      <line x1="165" y1="135" x2="175" y2="135" stroke="#8b7355" strokeWidth="1" />
      <text x="170" y="118" textAnchor="middle" fill="#8b7355" fontSize="8">1x</text>
    </svg>
  );
}

function GravityPractice() {
  return (
    <svg viewBox="0 0 200 150" className="w-full h-full">
      <text x="100" y="16" textAnchor="middle" fill="#8b7355" fontSize="11" fontWeight="bold">三步重心檢測</text>
      <g transform="translate(10, 25)">
        <rect x="0" y="0" width="50" height="55" rx="4" fill="#e8b4b8" opacity="0.1" stroke="#d4a0a5" strokeWidth="1" />
        <text x="25" y="15" textAnchor="middle" fill="#c4878d" fontSize="8" fontWeight="bold">正面</text>
        <line x1="25" y1="20" x2="25" y2="52" stroke="#c4878d" strokeWidth="0.8" strokeDasharray="2 2" />
        <circle cx="18" cy="35" r="6" fill="#e8b4b8" />
        <circle cx="32" cy="38" r="6" fill="#e8b4b8" />
        <text x="25" y="67" textAnchor="middle" fill="#6b8a6b" fontSize="7">左右均衡</text>
      </g>
      <g transform="translate(75, 25)">
        <rect x="0" y="0" width="50" height="55" rx="4" fill="#a3bda3" opacity="0.1" stroke="#a3bda3" strokeWidth="1" />
        <text x="25" y="15" textAnchor="middle" fill="#6b8a6b" fontSize="8" fontWeight="bold">側面</text>
        <circle cx="15" cy="30" r="5" fill="#a3bda3" opacity="0.6" />
        <circle cx="25" cy="38" r="7" fill="#e8b4b8" />
        <circle cx="35" cy="42" r="5" fill="#f0d4d8" />
        <text x="25" y="67" textAnchor="middle" fill="#6b8a6b" fontSize="7">前後層次</text>
      </g>
      <g transform="translate(140, 25)">
        <rect x="0" y="0" width="50" height="55" rx="4" fill="#f0d4d8" opacity="0.2" stroke="#d4a0a5" strokeWidth="1" />
        <text x="25" y="15" textAnchor="middle" fill="#c4878d" fontSize="8" fontWeight="bold">閉眼</text>
        <circle cx="25" cy="42" r="8" fill="#e8b4b8" stroke="#c4878d" strokeWidth="1.5" />
        <text x="25" y="45" textAnchor="middle" fill="#c4878d" fontSize="7">👁</text>
        <text x="25" y="67" textAnchor="middle" fill="#6b8a6b" fontSize="7">看中下方</text>
      </g>
    </svg>
  );
}

function ProportionVase() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <text x="100" y="16" textAnchor="middle" fill="#8b7355" fontSize="11" fontWeight="bold">花器比例尺</text>
      <rect x="70" y="100" width="60" height="45" rx="4" fill="#c4a882" opacity="0.4" stroke="#c4a882" strokeWidth="1" />
      <line x1="100" y1="100" x2="100" y2="30" stroke="#8faa8f" strokeWidth="2" strokeLinecap="round" />
      <circle cx="100" cy="55" r="12" fill="#e8b4b8" />
      <circle cx="85" cy="70" r="9" fill="#d4a0a5" />
      <circle cx="115" cy="70" r="9" fill="#d4a0a5" />
      <circle cx="100" cy="40" r="6" fill="#a3bda3" />
      <line x1="42" y1="100" x2="42" y2="30" stroke="#c4878d" strokeWidth="1" />
      <line x1="38" y1="100" x2="46" y2="100" stroke="#c4878d" strokeWidth="1" />
      <line x1="38" y1="30" x2="46" y2="30" stroke="#c4878d" strokeWidth="1" />
      <text x="42" y="68" textAnchor="middle" fill="#c4878d" fontSize="9" fontWeight="bold">1.5x</text>
      <line x1="155" y1="100" x2="155" y2="145" stroke="#8b7355" strokeWidth="1" />
      <line x1="151" y1="100" x2="159" y2="100" stroke="#8b7355" strokeWidth="1" />
      <line x1="151" y1="145" x2="159" y2="145" stroke="#8b7355" strokeWidth="1" />
      <text x="155" y="126" textAnchor="middle" fill="#8b7355" fontSize="9" fontWeight="bold">1x</text>
    </svg>
  );
}

function ProportionRatio() {
  return (
    <svg viewBox="0 0 200 130" className="w-full h-full">
      <text x="100" y="16" textAnchor="middle" fill="#8b7355" fontSize="11" fontWeight="bold">花材數量比例 3:5:3</text>
      <g transform="translate(15, 30)">
        <rect x="0" y="0" width="50" height="70" rx="6" fill="#e8b4b8" opacity="0.15" stroke="#d4a0a5" strokeWidth="1" />
        <circle cx="25" cy="22" r="9" fill="#e8b4b8" />
        <circle cx="15" cy="40" r="9" fill="#e8b4b8" />
        <circle cx="35" cy="40" r="9" fill="#e8b4b8" />
        <text x="25" y="63" textAnchor="middle" fill="#c4878d" fontSize="9" fontWeight="bold">主花 ×3</text>
      </g>
      <g transform="translate(75, 30)">
        <rect x="0" y="0" width="50" height="70" rx="6" fill="#f0d4d8" opacity="0.15" stroke="#e8b4b8" strokeWidth="1" />
        <circle cx="15" cy="15" r="6" fill="#f0d4d8" />
        <circle cx="35" cy="15" r="6" fill="#f0d4d8" />
        <circle cx="10" cy="32" r="6" fill="#f0d4d8" />
        <circle cx="25" cy="30" r="6" fill="#f0d4d8" />
        <circle cx="40" cy="32" r="6" fill="#f0d4d8" />
        <text x="25" y="63" textAnchor="middle" fill="#d4a0a5" fontSize="9" fontWeight="bold">配花 ×5</text>
      </g>
      <g transform="translate(135, 30)">
        <rect x="0" y="0" width="50" height="70" rx="6" fill="#a3bda3" opacity="0.15" stroke="#a3bda3" strokeWidth="1" />
        <ellipse cx="25" cy="18" rx="12" ry="5" fill="#a3bda3" />
        <ellipse cx="20" cy="33" rx="10" ry="4" fill="#a3bda3" transform="rotate(-15 20 33)" />
        <ellipse cx="30" cy="45" rx="10" ry="4" fill="#a3bda3" transform="rotate(10 30 45)" />
        <text x="25" y="63" textAnchor="middle" fill="#6b8a6b" fontSize="9" fontWeight="bold">葉材 ×3</text>
      </g>
    </svg>
  );
}

function ProportionColor() {
  return (
    <svg viewBox="0 0 200 130" className="w-full h-full">
      <text x="100" y="16" textAnchor="middle" fill="#8b7355" fontSize="11" fontWeight="bold">60-30-10 色彩法則</text>
      <rect x="20" y="35" width="96" height="55" rx="4" fill="#a3bda3" opacity="0.35" stroke="#a3bda3" strokeWidth="1" />
      <text x="68" y="58" textAnchor="middle" fill="#6b8a6b" fontSize="10" fontWeight="bold">60%</text>
      <text x="68" y="72" textAnchor="middle" fill="#6b8a6b" fontSize="8">主色（綠/淺色）</text>
      <rect x="120" y="35" width="48" height="55" rx="4" fill="#e8b4b8" opacity="0.4" stroke="#d4a0a5" strokeWidth="1" />
      <text x="144" y="58" textAnchor="middle" fill="#c4878d" fontSize="10" fontWeight="bold">30%</text>
      <text x="144" y="72" textAnchor="middle" fill="#c4878d" fontSize="8">輔助色</text>
      <rect x="172" y="35" width="16" height="55" rx="4" fill="#c4878d" />
      <text x="180" y="65" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">10%</text>
      <text x="100" y="115" textAnchor="middle" fill="#8b7355" fontSize="9">色彩比例讓作品統一又不單調</text>
    </svg>
  );
}

function ProportionOdd() {
  return (
    <svg viewBox="0 0 200 130" className="w-full h-full">
      <text x="100" y="16" textAnchor="middle" fill="#8b7355" fontSize="11" fontWeight="bold">奇數 vs 偶數</text>
      <g transform="translate(10, 25)">
        <text x="40" y="15" textAnchor="middle" fill="#6b8a6b" fontSize="9">✓ 3支（自然）</text>
        <circle cx="25" cy="40" r="10" fill="#e8b4b8" />
        <circle cx="50" cy="35" r="10" fill="#e8b4b8" />
        <circle cx="40" cy="55" r="10" fill="#e8b4b8" />
        <text x="40" y="85" textAnchor="middle" fill="#6b8a6b" fontSize="8">不對稱 → 自然</text>
      </g>
      <g transform="translate(110, 25)">
        <text x="40" y="15" textAnchor="middle" fill="#d4a0a5" fontSize="9">△ 4支（正式）</text>
        <circle cx="20" cy="38" r="10" fill="#f0d4d8" stroke="#e8b4b8" strokeWidth="1" />
        <circle cx="45" cy="38" r="10" fill="#f0d4d8" stroke="#e8b4b8" strokeWidth="1" />
        <circle cx="20" cy="60" r="10" fill="#f0d4d8" stroke="#e8b4b8" strokeWidth="1" />
        <circle cx="45" cy="60" r="10" fill="#f0d4d8" stroke="#e8b4b8" strokeWidth="1" />
        <text x="40" y="85" textAnchor="middle" fill="#d4a0a5" fontSize="8">對稱 → 正式</text>
      </g>
    </svg>
  );
}

function BalanceSymmetric() {
  return (
    <svg viewBox="0 0 200 140" className="w-full h-full">
      <text x="100" y="16" textAnchor="middle" fill="#8b7355" fontSize="11" fontWeight="bold">對稱平衡</text>
      <line x1="100" y1="30" x2="100" y2="120" stroke="#d4a0a5" strokeWidth="0.8" strokeDasharray="3 3" />
      <text x="100" y="28" textAnchor="middle" fill="#d4a0a5" fontSize="8">中線</text>
      <rect x="60" y="105" width="80" height="20" rx="3" fill="#c4a882" opacity="0.3" />
      <circle cx="70" cy="70" r="12" fill="#e8b4b8" />
      <circle cx="130" cy="70" r="12" fill="#e8b4b8" />
      <circle cx="60" cy="90" r="9" fill="#d4a0a5" />
      <circle cx="140" cy="90" r="9" fill="#d4a0a5" />
      <circle cx="80" cy="50" r="7" fill="#a3bda3" />
      <circle cx="120" cy="50" r="7" fill="#a3bda3" />
      <line x1="100" y1="40" x2="100" y2="105" stroke="#8faa8f" strokeWidth="2" strokeLinecap="round" />
      <text x="100" y="138" textAnchor="middle" fill="#6b8a6b" fontSize="9">左右鏡像 → 正式莊重</text>
    </svg>
  );
}

function BalanceAsymmetric() {
  return (
    <svg viewBox="0 0 200 140" className="w-full h-full">
      <text x="100" y="16" textAnchor="middle" fill="#8b7355" fontSize="11" fontWeight="bold">不對稱平衡</text>
      <line x1="100" y1="85" x2="40" y2="90" stroke="#c4a882" strokeWidth="3" strokeLinecap="round" />
      <line x1="100" y1="85" x2="170" y2="80" stroke="#c4a882" strokeWidth="3" strokeLinecap="round" />
      <line x1="100" y1="85" x2="100" y2="120" stroke="#c4a882" strokeWidth="3" />
      <polygon points="95,120 105,120 100,130" fill="#c4a882" />
      <circle cx="50" cy="55" r="18" fill="#e8b4b8" stroke="#d4a0a5" strokeWidth="1" />
      <text x="50" y="59" textAnchor="middle" fill="#c4878d" fontSize="8" fontWeight="bold">大</text>
      <circle cx="145" cy="50" r="8" fill="#f0d4d8" />
      <circle cx="162" cy="55" r="8" fill="#f0d4d8" />
      <circle cx="155" cy="68" r="8" fill="#f0d4d8" />
      <text x="155" y="42" textAnchor="middle" fill="#d4a0a5" fontSize="8">小×3</text>
      <text x="100" y="138" textAnchor="middle" fill="#6b8a6b" fontSize="9">視覺重量均衡 → 自然活潑</text>
    </svg>
  );
}

function BalanceDepth() {
  return (
    <svg viewBox="0 0 200 140" className="w-full h-full">
      <text x="100" y="16" textAnchor="middle" fill="#8b7355" fontSize="11" fontWeight="bold">前後平衡</text>
      <rect x="40" y="95" width="120" height="25" rx="3" fill="#c4a882" opacity="0.3" stroke="#c4a882" strokeWidth="1" />
      <text x="35" y="85" fill="#8b7355" fontSize="8">後方</text>
      <text x="165" y="85" fill="#8b7355" fontSize="8">前方</text>
      <line x1="40" y1="80" x2="160" y2="80" stroke="#d4a0a5" strokeWidth="0.5" strokeDasharray="2 2" />
      <circle cx="60" cy="45" r="10" fill="#a3bda3" opacity="0.6" />
      <circle cx="80" cy="55" r="12" fill="#e8b4b8" />
      <circle cx="105" cy="62" r="14" fill="#e8b4b8" />
      <circle cx="130" cy="68" r="10" fill="#d4a0a5" />
      <circle cx="150" cy="73" r="8" fill="#f0d4d8" />
      <path d="M 55 75 L 155 75" fill="none" stroke="#6b8a6b" strokeWidth="0.8" markerEnd="url(#arrowGreen)" />
      <defs>
        <marker id="arrowGreen" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6" fill="none" stroke="#6b8a6b" strokeWidth="1" />
        </marker>
      </defs>
      <text x="100" y="138" textAnchor="middle" fill="#6b8a6b" fontSize="9">後高前低，前方微傾向觀賞者</text>
    </svg>
  );
}

function BalanceColor() {
  return (
    <svg viewBox="0 0 200 140" className="w-full h-full">
      <text x="100" y="16" textAnchor="middle" fill="#8b7355" fontSize="11" fontWeight="bold">色彩三角形分佈</text>
      <circle cx="100" cy="80" r="50" fill="none" stroke="#d4a0a5" strokeWidth="0.8" strokeDasharray="3 3" />
      <circle cx="100" cy="42" r="10" fill="#c4878d" />
      <circle cx="65" cy="105" r="10" fill="#c4878d" />
      <circle cx="135" cy="105" r="10" fill="#c4878d" />
      <line x1="100" y1="52" x2="65" y2="95" stroke="#c4878d" strokeWidth="0.8" strokeDasharray="3 3" />
      <line x1="65" y1="105" x2="135" y2="105" stroke="#c4878d" strokeWidth="0.8" strokeDasharray="3 3" />
      <line x1="135" y1="95" x2="100" y2="52" stroke="#c4878d" strokeWidth="0.8" strokeDasharray="3 3" />
      <circle cx="80" cy="70" r="8" fill="#f0d4d8" opacity="0.6" />
      <circle cx="120" cy="70" r="8" fill="#f0d4d8" opacity="0.6" />
      <circle cx="100" cy="95" r="8" fill="#f0d4d8" opacity="0.6" />
      <text x="100" y="138" textAnchor="middle" fill="#c4878d" fontSize="9">同色至少分佈在 3 個位置</text>
    </svg>
  );
}

const illustrations: Record<string, ((() => React.ReactElement) | null)[]> = {
  gravity: [GravityVisual, GravityWeight, GravityVase, GravityPractice],
  proportion: [ProportionVase, ProportionRatio, ProportionColor, ProportionOdd],
  balance: [BalanceSymmetric, BalanceAsymmetric, BalanceDepth, BalanceColor],
};

export default function PrincipleIllustration({ topicSlug, sectionIndex }: PrincipleIllustrationProps) {
  const topicIllustrations = illustrations[topicSlug];
  if (!topicIllustrations) return null;

  const IllustrationComponent = topicIllustrations[sectionIndex];
  if (!IllustrationComponent) return null;

  return (
    <div className="bg-warm-bg/50 rounded-lg border border-border p-3 flex items-center justify-center">
      <IllustrationComponent />
    </div>
  );
}
