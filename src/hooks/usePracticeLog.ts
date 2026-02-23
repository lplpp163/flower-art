import { useState, useEffect, useCallback } from 'react';
import type { PracticeLog } from '@/types';

const STORAGE_KEY = 'flower-practice-logs';

function readLogs(): PracticeLog[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as PracticeLog[]) : [];
  } catch {
    return [];
  }
}

function writeLogs(logs: readonly PracticeLog[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(logs));
  } catch {
    // localStorage full or unavailable
  }
}

export function usePracticeLog() {
  const [logs, setLogs] = useState<PracticeLog[]>([]);

  useEffect(() => {
    setLogs(readLogs());
  }, []);

  const addLog = useCallback((log: PracticeLog) => {
    setLogs((prev) => {
      const next = [log, ...prev];
      writeLogs(next);
      return next;
    });
  }, []);

  return { logs, addLog } as const;
}
