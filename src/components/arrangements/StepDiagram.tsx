interface StepDiagramProps {
  readonly arrangementSlug: string;
  readonly stepNumber: number;
}

function RoundStep1() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <text x="100" y="18" textAnchor="middle" className="fill-text-light" fontSize="11">俯視圖</text>
      <rect x="60" y="60" width="80" height="80" rx="40" fill="#c4a882" opacity="0.3" stroke="#c4a882" strokeWidth="1.5" />
      <rect x="70" y="70" width="60" height="60" rx="6" fill="#8faa8f" opacity="0.25" />
      <text x="100" y="105" textAnchor="middle" fill="#6b8a6b" fontSize="12" fontWeight="bold">花泥</text>
      <text x="100" y="170" textAnchor="middle" fill="#8b7355" fontSize="10">⬆ 高出花器 2-3cm</text>
      <circle cx="100" cy="30" r="0" fill="none" />
    </svg>
  );
}

function RoundStep2() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <text x="100" y="18" textAnchor="middle" className="fill-text-light" fontSize="11">俯視圖</text>
      <circle cx="100" cy="110" r="60" fill="none" stroke="#a3bda3" strokeWidth="1" strokeDasharray="4 3" />
      <rect x="75" y="85" width="50" height="50" rx="6" fill="#8faa8f" opacity="0.2" />
      <line x1="100" y1="85" x2="100" y2="50" stroke="#8faa8f" strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx="98" cy="48" rx="6" ry="3.5" fill="#a3bda3" />
      <line x1="125" y1="100" x2="155" y2="80" stroke="#8faa8f" strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx="157" cy="78" rx="6" ry="3.5" fill="#a3bda3" transform="rotate(40 157 78)" />
      <line x1="75" y1="100" x2="45" y2="80" stroke="#8faa8f" strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx="43" cy="78" rx="6" ry="3.5" fill="#a3bda3" transform="rotate(-40 43 78)" />
      <line x1="100" y1="135" x2="100" y2="165" stroke="#8faa8f" strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx="100" cy="167" rx="6" ry="3.5" fill="#a3bda3" />
      <text x="100" y="190" textAnchor="middle" fill="#6b8a6b" fontSize="10">葉材建立圓弧骨架</text>
    </svg>
  );
}

function RoundStep3() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <text x="100" y="18" textAnchor="middle" className="fill-text-light" fontSize="11">俯視圖</text>
      <circle cx="100" cy="110" r="60" fill="none" stroke="#a3bda3" strokeWidth="1" strokeDasharray="4 3" />
      <rect x="80" y="90" width="40" height="40" rx="4" fill="#8faa8f" opacity="0.15" />
      <circle cx="100" cy="75" r="10" fill="#e8b4b8" stroke="#d4a0a5" strokeWidth="1" />
      <circle cx="130" cy="100" r="10" fill="#e8b4b8" stroke="#d4a0a5" strokeWidth="1" />
      <circle cx="70" cy="100" r="10" fill="#e8b4b8" stroke="#d4a0a5" strokeWidth="1" />
      <circle cx="85" cy="130" r="10" fill="#e8b4b8" stroke="#d4a0a5" strokeWidth="1" />
      <circle cx="115" cy="130" r="10" fill="#e8b4b8" stroke="#d4a0a5" strokeWidth="1" />
      <text x="100" y="190" textAnchor="middle" fill="#c4878d" fontSize="10">主花均勻分佈</text>
    </svg>
  );
}

function RoundStep4() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <text x="100" y="18" textAnchor="middle" className="fill-text-light" fontSize="11">俯視圖</text>
      <circle cx="100" cy="110" r="60" fill="none" stroke="#a3bda3" strokeWidth="1" strokeDasharray="4 3" />
      <circle cx="100" cy="75" r="10" fill="#e8b4b8" stroke="#d4a0a5" strokeWidth="1" />
      <circle cx="130" cy="100" r="10" fill="#e8b4b8" stroke="#d4a0a5" strokeWidth="1" />
      <circle cx="70" cy="100" r="10" fill="#e8b4b8" stroke="#d4a0a5" strokeWidth="1" />
      <circle cx="85" cy="130" r="10" fill="#e8b4b8" stroke="#d4a0a5" strokeWidth="1" />
      <circle cx="115" cy="130" r="10" fill="#e8b4b8" stroke="#d4a0a5" strokeWidth="1" />
      <circle cx="115" cy="82" r="8" fill="#f0d4d8" stroke="#e8b4b8" strokeWidth="1" />
      <circle cx="82" cy="82" r="8" fill="#f0d4d8" stroke="#e8b4b8" strokeWidth="1" />
      <circle cx="100" cy="140" r="8" fill="#f0d4d8" stroke="#e8b4b8" strokeWidth="1" />
      <circle cx="135" cy="120" r="8" fill="#f0d4d8" stroke="#e8b4b8" strokeWidth="1" />
      <text x="100" y="190" textAnchor="middle" fill="#c4878d" fontSize="10">配花填補空隙</text>
    </svg>
  );
}

function RoundStep5() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <text x="100" y="18" textAnchor="middle" className="fill-text-light" fontSize="11">俯視圖 — 完成</text>
      <circle cx="100" cy="110" r="65" fill="#a3bda3" opacity="0.08" />
      <circle cx="100" cy="110" r="60" fill="none" stroke="#a3bda3" strokeWidth="1.5" />
      <circle cx="100" cy="75" r="10" fill="#e8b4b8" />
      <circle cx="130" cy="100" r="10" fill="#e8b4b8" />
      <circle cx="70" cy="100" r="10" fill="#e8b4b8" />
      <circle cx="85" cy="130" r="10" fill="#e8b4b8" />
      <circle cx="115" cy="130" r="10" fill="#e8b4b8" />
      <circle cx="115" cy="82" r="8" fill="#f0d4d8" />
      <circle cx="82" cy="82" r="8" fill="#f0d4d8" />
      <circle cx="100" cy="140" r="8" fill="#f0d4d8" />
      <circle cx="135" cy="120" r="8" fill="#f0d4d8" />
      {[55,75,95,115,130,145,62,88,108,138].map((x, i) =>
        <circle key={i} cx={x} cy={[65,55,60,55,70,65,115,145,150,140][i]} r="2.5" fill="white" opacity="0.7" />
      )}
      <text x="100" y="190" textAnchor="middle" fill="#6b8a6b" fontSize="10">滿天星點綴完成 ✓</text>
    </svg>
  );
}

function TriangleStep1() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <text x="100" y="18" textAnchor="middle" className="fill-text-light" fontSize="11">正面圖</text>
      <rect x="50" y="155" width="100" height="25" rx="4" fill="#c4a882" opacity="0.3" stroke="#c4a882" strokeWidth="1" />
      <line x1="100" y1="155" x2="100" y2="35" stroke="#8faa8f" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="100" cy="32" r="10" fill="#e8b4b8" stroke="#d4a0a5" strokeWidth="1" />
      <text x="110" y="32" fill="#c4878d" fontSize="9" dominantBaseline="middle">← 頂點</text>
      <line x1="100" y1="45" x2="100" y2="155" stroke="#d4a0a5" strokeWidth="0.5" strokeDasharray="3 3" />
      <text x="100" y="195" textAnchor="middle" fill="#8b7355" fontSize="10">高度 = 花器 × 1.5~2</text>
    </svg>
  );
}

function TriangleStep2() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <text x="100" y="18" textAnchor="middle" className="fill-text-light" fontSize="11">正面圖</text>
      <rect x="50" y="155" width="100" height="25" rx="4" fill="#c4a882" opacity="0.3" stroke="#c4a882" strokeWidth="1" />
      <line x1="100" y1="155" x2="100" y2="35" stroke="#8faa8f" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      <circle cx="100" cy="32" r="8" fill="#e8b4b8" opacity="0.5" />
      <line x1="75" y1="155" x2="25" y2="145" stroke="#8faa8f" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="22" cy="144" r="8" fill="#e8b4b8" stroke="#d4a0a5" strokeWidth="1" />
      <line x1="125" y1="155" x2="175" y2="145" stroke="#8faa8f" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="178" cy="144" r="8" fill="#e8b4b8" stroke="#d4a0a5" strokeWidth="1" />
      <line x1="22" y1="144" x2="178" y2="144" stroke="#d4a0a5" strokeWidth="0.5" strokeDasharray="3 3" />
      <text x="100" y="195" textAnchor="middle" fill="#c4878d" fontSize="10">底邊兩端確定寬度</text>
    </svg>
  );
}

function TriangleStep3() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <text x="100" y="18" textAnchor="middle" className="fill-text-light" fontSize="11">正面圖</text>
      <rect x="50" y="155" width="100" height="25" rx="4" fill="#c4a882" opacity="0.2" />
      <polygon points="100,32 22,144 178,144" fill="none" stroke="#d4a0a5" strokeWidth="1" strokeDasharray="4 3" />
      <circle cx="100" cy="32" r="7" fill="#e8b4b8" opacity="0.5" />
      <circle cx="22" cy="144" r="7" fill="#e8b4b8" opacity="0.5" />
      <circle cx="178" cy="144" r="7" fill="#e8b4b8" opacity="0.5" />
      <circle cx="60" cy="90" r="8" fill="#d4a0a5" stroke="#c4878d" strokeWidth="1" />
      <circle cx="140" cy="90" r="8" fill="#d4a0a5" stroke="#c4878d" strokeWidth="1" />
      <circle cx="45" cy="118" r="7" fill="#a3bda3" />
      <circle cx="155" cy="118" r="7" fill="#a3bda3" />
      <text x="100" y="195" textAnchor="middle" fill="#6b8a6b" fontSize="10">沿斜邊由高到低插花</text>
    </svg>
  );
}

function TriangleStep4() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <text x="100" y="18" textAnchor="middle" className="fill-text-light" fontSize="11">正面圖</text>
      <rect x="50" y="155" width="100" height="25" rx="4" fill="#c4a882" opacity="0.2" />
      <polygon points="100,32 22,144 178,144" fill="#e8b4b8" opacity="0.06" stroke="#d4a0a5" strokeWidth="1" strokeDasharray="4 3" />
      <circle cx="100" cy="32" r="6" fill="#e8b4b8" opacity="0.4" />
      <circle cx="60" cy="90" r="7" fill="#d4a0a5" opacity="0.4" />
      <circle cx="140" cy="90" r="7" fill="#d4a0a5" opacity="0.4" />
      <circle cx="100" cy="100" r="12" fill="#e8b4b8" stroke="#c4878d" strokeWidth="1.5" />
      <circle cx="80" cy="120" r="10" fill="#e8b4b8" stroke="#d4a0a5" strokeWidth="1" />
      <circle cx="120" cy="120" r="10" fill="#e8b4b8" stroke="#d4a0a5" strokeWidth="1" />
      <circle cx="100" cy="130" r="9" fill="#f0d4d8" stroke="#e8b4b8" strokeWidth="1" />
      <text x="100" y="98" textAnchor="middle" fill="#c4878d" fontSize="8" fontWeight="bold">焦點</text>
      <text x="100" y="195" textAnchor="middle" fill="#c4878d" fontSize="10">中心填充焦點花</text>
    </svg>
  );
}

function TriangleStep5() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <text x="100" y="18" textAnchor="middle" className="fill-text-light" fontSize="11">正面圖 — 完成</text>
      <rect x="50" y="155" width="100" height="25" rx="4" fill="#c4a882" opacity="0.3" stroke="#c4a882" strokeWidth="1" />
      <polygon points="100,32 22,144 178,144" fill="#a3bda3" opacity="0.06" stroke="#a3bda3" strokeWidth="1.5" />
      <circle cx="100" cy="32" r="8" fill="#e8b4b8" />
      <circle cx="60" cy="90" r="8" fill="#d4a0a5" />
      <circle cx="140" cy="90" r="8" fill="#d4a0a5" />
      <circle cx="45" cy="118" r="7" fill="#a3bda3" />
      <circle cx="155" cy="118" r="7" fill="#a3bda3" />
      <circle cx="22" cy="144" r="7" fill="#a3bda3" />
      <circle cx="178" cy="144" r="7" fill="#a3bda3" />
      <circle cx="100" cy="100" r="12" fill="#e8b4b8" />
      <circle cx="80" cy="120" r="10" fill="#e8b4b8" />
      <circle cx="120" cy="120" r="10" fill="#e8b4b8" />
      <circle cx="100" cy="130" r="9" fill="#f0d4d8" />
      <text x="100" y="195" textAnchor="middle" fill="#6b8a6b" fontSize="10">葉材柔化邊緣 ✓</text>
    </svg>
  );
}

function LinearStep1() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <text x="100" y="18" textAnchor="middle" className="fill-text-light" fontSize="11">側面圖</text>
      <rect x="80" y="140" width="40" height="45" rx="3" fill="#c4a882" opacity="0.3" stroke="#c4a882" strokeWidth="1" />
      <path d="M 95 140 Q 80 80 70 30" fill="none" stroke="#8faa8f" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="70" cy="28" r="6" fill="#e8b4b8" stroke="#d4a0a5" strokeWidth="1" />
      <text x="130" y="60" fill="#6b8a6b" fontSize="9" textAnchor="start">← 主線條</text>
      <text x="130" y="75" fill="#6b8a6b" fontSize="8" textAnchor="start">保留自然彎曲</text>
      <text x="100" y="195" textAnchor="middle" fill="#8faa8f" fontSize="10">觀察花材的自然姿態</text>
    </svg>
  );
}

function LinearStep2() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <text x="100" y="18" textAnchor="middle" className="fill-text-light" fontSize="11">側面圖</text>
      <rect x="80" y="140" width="40" height="45" rx="3" fill="#c4a882" opacity="0.3" stroke="#c4a882" strokeWidth="1" />
      <path d="M 95 140 Q 80 80 70 30" fill="none" stroke="#8faa8f" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <circle cx="70" cy="28" r="5" fill="#e8b4b8" opacity="0.5" />
      <path d="M 105 140 Q 115 100 140 70" fill="none" stroke="#8faa8f" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="142" cy="68" r="5" fill="#d4a0a5" />
      <path d="M 90 140 Q 60 120 40 110" fill="none" stroke="#a3bda3" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="38" cy="108" rx="6" ry="3" fill="#a3bda3" transform="rotate(-15 38 108)" />
      <text x="100" y="195" textAnchor="middle" fill="#8faa8f" fontSize="10">線條間有角度變化</text>
    </svg>
  );
}

function LinearStep3() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <text x="100" y="18" textAnchor="middle" className="fill-text-light" fontSize="11">側面圖</text>
      <rect x="80" y="140" width="40" height="45" rx="3" fill="#c4a882" opacity="0.3" stroke="#c4a882" strokeWidth="1" />
      <path d="M 95 140 Q 80 80 70 30" fill="none" stroke="#8faa8f" strokeWidth="1.5" opacity="0.4" />
      <path d="M 105 140 Q 115 100 140 70" fill="none" stroke="#8faa8f" strokeWidth="1.5" opacity="0.4" />
      <circle cx="70" cy="28" r="4" fill="#e8b4b8" opacity="0.4" />
      <circle cx="142" cy="68" r="4" fill="#d4a0a5" opacity="0.4" />
      <circle cx="98" cy="125" r="14" fill="#e8b4b8" stroke="#c4878d" strokeWidth="1.5" />
      <text x="98" y="129" textAnchor="middle" fill="#c4878d" fontSize="8" fontWeight="bold">焦點</text>
      <text x="100" y="195" textAnchor="middle" fill="#c4878d" fontSize="10">焦點花在線條交匯處</text>
    </svg>
  );
}

function LinearStep4() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <text x="100" y="18" textAnchor="middle" className="fill-text-light" fontSize="11">側面圖 — 完成</text>
      <rect x="80" y="140" width="40" height="45" rx="3" fill="#c4a882" opacity="0.3" stroke="#c4a882" strokeWidth="1" />
      <path d="M 95 140 Q 80 80 70 30" fill="none" stroke="#8faa8f" strokeWidth="2" strokeLinecap="round" />
      <path d="M 105 140 Q 115 100 140 70" fill="none" stroke="#8faa8f" strokeWidth="2" strokeLinecap="round" />
      <path d="M 90 140 Q 60 120 40 110" fill="none" stroke="#a3bda3" strokeWidth="2" strokeLinecap="round" />
      <circle cx="70" cy="28" r="5" fill="#e8b4b8" />
      <circle cx="142" cy="68" r="5" fill="#d4a0a5" />
      <ellipse cx="38" cy="108" rx="6" ry="3" fill="#a3bda3" transform="rotate(-15 38 108)" />
      <circle cx="98" cy="125" r="12" fill="#e8b4b8" stroke="#c4878d" strokeWidth="1" />
      <rect x="10" y="50" width="30" height="40" fill="none" stroke="#d4a0a5" strokeWidth="0.5" strokeDasharray="2 2" rx="2" />
      <text x="25" y="73" textAnchor="middle" fill="#d4a0a5" fontSize="7">留白</text>
      <rect x="150" y="100" width="35" height="30" fill="none" stroke="#d4a0a5" strokeWidth="0.5" strokeDasharray="2 2" rx="2" />
      <text x="167" y="118" textAnchor="middle" fill="#d4a0a5" fontSize="7">留白</text>
      <text x="100" y="195" textAnchor="middle" fill="#6b8a6b" fontSize="10">少即是多 ✓</text>
    </svg>
  );
}

const stepDiagrams: Record<string, Record<number, () => React.ReactElement>> = {
  round: {
    1: RoundStep1,
    2: RoundStep2,
    3: RoundStep3,
    4: RoundStep4,
    5: RoundStep5,
  },
  triangle: {
    1: TriangleStep1,
    2: TriangleStep2,
    3: TriangleStep3,
    4: TriangleStep4,
    5: TriangleStep5,
  },
  linear: {
    1: LinearStep1,
    2: LinearStep2,
    3: LinearStep3,
    4: LinearStep4,
  },
};

export default function StepDiagram({ arrangementSlug, stepNumber }: StepDiagramProps) {
  const diagrams = stepDiagrams[arrangementSlug];
  if (!diagrams) return null;

  const DiagramComponent = diagrams[stepNumber];
  if (!DiagramComponent) return null;

  return (
    <div className="bg-warm-bg/50 rounded-lg border border-border p-3 aspect-square flex items-center justify-center">
      <DiagramComponent />
    </div>
  );
}
