"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mode, setMode] = useState<'light'|'dark'>(() => {
    if (typeof window === 'undefined') return 'light';
    return (localStorage.getItem('theme') as 'light'|'dark') || (document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  });

  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [mode]);

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setMode((m) => (m === 'dark' ? 'light' : 'dark'))}
      className="px-3 py-2 rounded-md bg-gray-100 dark:bg-white/5 text-sm"
    >
      {mode === 'dark' ? 'Light' : 'Dark'}
    </button>
  );
}
