"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored === 'dark') {
        document.documentElement.classList.add('dark');
        setIsDark(true);
        return;
      }
      if (stored === 'light') {
        document.documentElement.classList.remove('dark');
        setIsDark(false);
        return;
      }
      // no stored preference — follow system
      const prefers = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefers) {
        document.documentElement.classList.add('dark');
        setIsDark(true);
      } else {
        document.documentElement.classList.remove('dark');
        setIsDark(false);
      }
    } catch (e) {
      setIsDark(false);
    }
  }, []);

  const toggle = () => {
    try {
      const next = !isDark;
      if (next) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      setIsDark(next);
    } catch (e) {
      // ignore
    }
  };

  return (
    <div className="theme-toggle-root">
      <button
        type="button"
        aria-pressed={!!isDark}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        onClick={toggle}
        className="bg-primary text-on-primary shadow-brand px-3 py-2 rounded-md flex items-center gap-2"
      >
        {isDark ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" fill="currentColor" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M12 3v2M12 19v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42M12 7a5 5 0 100 10 5 5 0 000-10z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        <span className="btn-text">{isDark ? 'Dark' : 'Light'}</span>
      </button>
    </div>
  );
}
