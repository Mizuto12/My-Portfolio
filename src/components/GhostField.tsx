import { useMemo } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Ghost {
  id: number;
  left: number;
  duration: number;
  delay: number;
  drift: number;
}

function buildGhosts(count: number): Ghost[] {
  return Array.from({ length: count }, (_, id) => ({
    id,
    left: Math.round(Math.random() * 94) + 2,
    duration: 14 + Math.random() * 10,
    delay: Math.random() * 12,
    drift: Math.round(10 + Math.random() * 30),
  }));
}

/**
 * Ambient floating ghosts shown only while the Gengar theme is active.
 * Decorative and inert (aria-hidden, pointer-events: none). Skipped
 * entirely under prefers-reduced-motion.
 */
export function GhostField() {
  const { theme, prefersReducedMotion } = useTheme();

  // Regenerated only when entering/leaving the Gengar theme (or the motion
  // preference changes) — not on every render — since the deps rarely change.
  const ghosts = useMemo<Ghost[]>(() => {
    if (theme !== 'gengar' || prefersReducedMotion) return [];
    const count = window.innerWidth < 560 ? 4 : 7;
    return buildGhosts(count);
  }, [theme, prefersReducedMotion]);

  if (!ghosts.length) return null;

  return (
    <div className="ghost-field" aria-hidden="true">
      {ghosts.map((g) => (
        <div
          key={g.id}
          className="ghost-particle"
          style={{
            left: `${g.left}%`,
            animationDuration: `${g.duration.toFixed(1)}s`,
            animationDelay: `-${g.delay.toFixed(1)}s`,
            ['--drift' as string]: `${g.drift}px`,
          }}
        >
          <svg viewBox="0 0 24 28" fill="currentColor">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 1C6.48 1 2 5.48 2 11v13.2c0 .66.78 1.02 1.28.58l1.9-1.67a1 1 0 011.33 0l1.8 1.6a1 1 0 001.33 0l1.8-1.6a1 1 0 011.33 0l1.8 1.6a1 1 0 001.33 0l1.8-1.6a1 1 0 011.33 0l1.9 1.67c.5.44 1.28.08 1.28-.58V11c0-5.52-4.48-10-10-10zM8.5 9.4a1.6 1.6 0 100 3.2 1.6 1.6 0 000-3.2zm7 0a1.6 1.6 0 100 3.2 1.6 1.6 0 000-3.2z"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
