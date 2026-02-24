import { useState } from 'react';
import type { MoodEmoji, GeneratedSuggestion } from '@/types';

const MOODS: MoodEmoji[] = ['😊', '😌', '🤔', '💪', '🌸'];

interface PracticeRecorderProps {
  readonly suggestion: GeneratedSuggestion;
  readonly onSave: (mood: MoodEmoji, notes: string) => void;
}

export default function PracticeRecorder({ suggestion, onSave }: PracticeRecorderProps) {
  const [selectedMood, setSelectedMood] = useState<MoodEmoji | null>(null);
  const [notes, setNotes] = useState('');

  const handleSave = () => {
    if (!selectedMood) return;
    onSave(selectedMood, notes);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-warm-card rounded-xl border border-rose-light p-6">
        <h3 className="font-serif text-lg font-bold text-text-primary mb-1">
          {suggestion.title}
        </h3>
        <p className="text-text-light text-sm mb-6">練習完了嗎？記錄一下今天的心情吧！</p>

        <div className="mb-5">
          <p className="text-sm font-medium text-text-primary mb-3">今天的心情：</p>
          <div className="flex gap-3">
            {MOODS.map((mood) => (
              <button
                key={mood}
                type="button"
                onClick={() => setSelectedMood(mood)}
                className={`text-2xl p-2.5 rounded-full transition-all ${
                  selectedMood === mood
                    ? 'bg-rose-light scale-110 shadow-sm'
                    : 'hover:bg-warm-bg'
                }`}
              >
                {mood}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-5">
          <p className="text-sm font-medium text-text-primary mb-2">練習心得：</p>
          <textarea
            placeholder="今天的練習有什麼收穫？遇到什麼困難？"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-border bg-warm-bg text-text-primary placeholder:text-text-light focus:outline-none focus:border-rose transition-colors text-sm resize-none h-28"
          />
        </div>

        <button
          type="button"
          onClick={handleSave}
          disabled={!selectedMood}
          className="w-full px-6 py-3 bg-sage text-white rounded-full font-medium hover:bg-sage-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          儲存練習紀錄
        </button>
      </div>
    </div>
  );
}
