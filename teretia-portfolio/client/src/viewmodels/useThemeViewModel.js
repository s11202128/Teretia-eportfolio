import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'tt-theme';

function readInitialTheme() {
  const attr = document.documentElement.getAttribute('data-theme');
  if (attr === 'light' || attr === 'dark') return attr;
  try {
    if (window.matchMedia('(prefers-color-scheme: light)').matches) return 'light';
  } catch (e) { /* ignore */ }
  return 'dark';
}

/** Light / dark mode: remembers the visitor's choice, follows the system until they choose. */
export function useThemeViewModel() {
  const [theme, setTheme] = useState(readInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'light' ? '#fff5fa' : '#150a24');
  }, [theme]);

  // Follow OS changes only while the visitor hasn't picked a mode
  useEffect(() => {
    let mq;
    try { mq = window.matchMedia('(prefers-color-scheme: light)'); } catch (e) { return undefined; }
    const onChange = (e) => {
      let saved = null;
      try { saved = localStorage.getItem(STORAGE_KEY); } catch (err) { /* ignore */ }
      if (!saved) setTheme(e.matches ? 'light' : 'dark');
    };
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      try { localStorage.setItem(STORAGE_KEY, next); } catch (e) { /* ignore */ }
      return next;
    });
  }, []);

  return { theme, toggleTheme };
}
