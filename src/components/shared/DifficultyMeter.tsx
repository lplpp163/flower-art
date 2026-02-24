interface DifficultyMeterProps {
  readonly level: '簡單' | '中等' | '進階';
}

const levelConfig = {
  '簡單': { dots: 1, color: 'bg-sage', label: '簡單' },
  '中等': { dots: 2, color: 'bg-rose', label: '中等' },
  '進階': { dots: 3, color: 'bg-yellow-500', label: '進階' },
} as const;

export default function DifficultyMeter({ level }: DifficultyMeterProps) {
  const config = levelConfig[level];
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        {[1, 2, 3].map((dot) => (
          <span
            key={dot}
            className={`w-2.5 h-2.5 rounded-full ${
              dot <= config.dots ? config.color : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
      <span className="text-xs text-text-light">{config.label}</span>
    </div>
  );
}
