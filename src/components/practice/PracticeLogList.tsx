import { useState } from 'react';
import type { PracticeLog, MoodEmoji } from '@/types';

const MOODS: MoodEmoji[] = ['😊', '😌', '🤔', '💪', '🌸'];

interface PracticeLogListProps {
  readonly logs: readonly PracticeLog[];
  readonly onDelete: (id: string) => void;
  readonly onUpdate: (id: string, patch: Partial<Omit<PracticeLog, 'id'>>) => void;
}

export default function PracticeLogList({ logs, onDelete, onUpdate }: PracticeLogListProps) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editMood, setEditMood] = useState<MoodEmoji>('😊');
  const [editNotes, setEditNotes] = useState('');
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  const startEdit = (log: PracticeLog) => {
    setEditingId(log.id);
    setEditMood(log.mood);
    setEditNotes(log.notes);
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  const saveEdit = () => {
    if (!editingId) return;
    onUpdate(editingId, { mood: editMood, notes: editNotes });
    setEditingId(null);
  };

  const handleDelete = (id: string) => {
    if (confirmDeleteId === id) {
      onDelete(id);
      setConfirmDeleteId(null);
    } else {
      setConfirmDeleteId(id);
    }
  };

  return (
    <div className="space-y-3">
      {logs.map((log) => {
        const isEditing = editingId === log.id;
        const isConfirmingDelete = confirmDeleteId === log.id;

        return (
          <div
            key={log.id}
            className="bg-warm-card rounded-lg border border-border p-4"
          >
            {isEditing ? (
              <div>
                <div className="flex items-baseline justify-between mb-3">
                  <h4 className="font-medium text-text-primary text-sm">{log.title}</h4>
                  <span className="text-text-light text-xs">{log.date}</span>
                </div>
                <div className="flex gap-2 mb-3">
                  {MOODS.map((mood) => (
                    <button
                      key={mood}
                      type="button"
                      onClick={() => setEditMood(mood)}
                      className={`text-xl p-1.5 rounded-full transition-all ${
                        editMood === mood ? 'bg-rose-light scale-110' : 'hover:bg-warm-bg'
                      }`}
                    >
                      {mood}
                    </button>
                  ))}
                </div>
                <textarea
                  value={editNotes}
                  onChange={(e) => setEditNotes(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-border bg-warm-bg text-text-primary text-sm resize-none h-20 mb-3 focus:outline-none focus:border-rose transition-colors"
                />
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={saveEdit}
                    className="px-4 py-1.5 bg-sage text-white rounded-full text-xs font-medium hover:bg-sage-dark transition-colors"
                  >
                    儲存
                  </button>
                  <button
                    type="button"
                    onClick={cancelEdit}
                    className="px-4 py-1.5 border border-border text-text-secondary rounded-full text-xs font-medium hover:bg-warm-bg transition-colors"
                  >
                    取消
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-start gap-3">
                <span className="text-2xl shrink-0">{log.mood}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between mb-1">
                    <h4 className="font-medium text-text-primary text-sm">{log.title}</h4>
                    <span className="text-text-light text-xs shrink-0 ml-2">{log.date}</span>
                  </div>
                  {log.feeling && (
                    <p className="text-xs text-rose mb-1">{log.feeling}</p>
                  )}
                  {log.notes && (
                    <p className="text-text-secondary text-xs leading-relaxed">{log.notes}</p>
                  )}
                </div>
                <div className="flex gap-1 shrink-0">
                  <button
                    type="button"
                    onClick={() => startEdit(log)}
                    className="p-1.5 text-text-light hover:text-text-primary hover:bg-warm-bg rounded-lg transition-colors"
                    title="編輯"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(log.id)}
                    className={`p-1.5 rounded-lg transition-colors ${
                      isConfirmingDelete
                        ? 'text-red-500 bg-red-50'
                        : 'text-text-light hover:text-red-500 hover:bg-warm-bg'
                    }`}
                    title={isConfirmingDelete ? '再按一次確認刪除' : '刪除'}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
