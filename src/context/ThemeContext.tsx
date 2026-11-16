import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import type { Theme } from '../types';

const STORAGE_KEY = 'portfolio-theme';

function readStoredTheme(): Theme {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'gengar' ? 'gengar' : 'green';
  } catch {
    return 'green';
  }
}

function storeTheme(theme: Theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // storage unavailable (private mode, etc.) — theme still applies for this view
  }
}

interface ThemeContextValue {
  theme: Theme;
  /** True while the takeover animation overlay is actively playing. */
  isTransitioning: boolean;
  /** Screen-reader-only status text, updated on every switch. */
  announcement: string;
  toggleTheme: () => void;
  prefersReducedMotion: boolean;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => readStoredTheme());
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [announcement, setAnnouncement] = useState('');
  const prefersReducedMotion = useMemo(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    [],
  );
  const timeouts = useRef<number[]>([]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    // `ids` and `timeouts.current` are the same array object for the whole
    // component lifetime (only ever mutated via push, never reassigned),
    // so capturing it here still sees every id pushed before unmount.
    const ids = timeouts.current;
    return () => {
      ids.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  const toggleTheme = useCallback(() => {
    const next: Theme = theme === 'gengar' ? 'green' : 'gengar';

    if (prefersReducedMotion) {
      setTheme(next);
      storeTheme(next);
      setAnnouncement(
        next === 'gengar'
          ? 'Gengar has entered the portfolio.'
          : 'Back to the normal world. Green theme restored.',
      );
      return;
    }

    // Clear any timers from a sequence still in flight — reachable now
    // that GengarTakeover's own "Back to normal" button and Escape key
    // can re-trigger this before the first sequence's 1.2s run finishes.
    // Without this, the stale sequence's final setIsTransitioning(false)
    // could fire mid-way through the new one and cut it short. Mutated
    // in place (length = 0), not reassigned — the unmount-cleanup effect
    // below captures this same array object once and relies on it never
    // being replaced.
    timeouts.current.forEach((id) => window.clearTimeout(id));
    timeouts.current.length = 0;

    // Takeover sequence: a ghostly shadow appears, Gengar's face reveals
    // over it, the theme flips underneath mid-animation, then the overlay
    // fades out leaving a brief playful message behind.
    setIsTransitioning(true);
    const t1 = window.setTimeout(() => {
      setTheme(next);
      storeTheme(next);
    }, 420); // theme flips once the overlay has fully covered the viewport
    const t2 = window.setTimeout(() => {
      setAnnouncement(
        next === 'gengar'
          ? 'Hehe... Gengar has entered the portfolio!'
          : 'Back to the normal world. Green theme restored.',
      );
    }, 480);
    const t3 = window.setTimeout(() => {
      setIsTransitioning(false);
    }, 1200);
    timeouts.current.push(t1, t2, t3);
  }, [theme, prefersReducedMotion]);

  const value = useMemo(
    () => ({ theme, isTransitioning, announcement, toggleTheme, prefersReducedMotion }),
    [theme, isTransitioning, announcement, toggleTheme, prefersReducedMotion],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider');
  return ctx;
}
