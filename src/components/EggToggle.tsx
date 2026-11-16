import { useTheme } from '../context/ThemeContext';

/**
 * The hidden Easter egg. A small ghost silhouette tucked into the footer,
 * nearly invisible at rest (low opacity, blends into the background) so
 * it has to be found rather than announced — but it's a real, focusable,
 * labeled <button>, so keyboard and screen-reader visitors can discover
 * and use it exactly as easily as a mouse visitor who happens to hover it.
 */
export function EggToggle() {
  const { theme, toggleTheme } = useTheme();
  const isGengar = theme === 'gengar';

  return (
    <button
      type="button"
      className="egg-toggle"
      aria-pressed={isGengar}
      aria-label="Toggle secret theme"
      title={isGengar ? 'Back to the normal world?' : 'Hehe... found you!'}
      onClick={toggleTheme}
    >
      <svg viewBox="0 0 24 28" aria-hidden="true">
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 1C6.48 1 2 5.48 2 11v13.2c0 .66.78 1.02 1.28.58l1.9-1.67a1 1 0 011.33 0l1.8 1.6a1 1 0 001.33 0l1.8-1.6a1 1 0 011.33 0l1.8 1.6a1 1 0 001.33 0l1.8-1.6a1 1 0 011.33 0l1.9 1.67c.5.44 1.28.08 1.28-.58V11c0-5.52-4.48-10-10-10zM8.5 9.4a1.6 1.6 0 100 3.2 1.6 1.6 0 000-3.2zm7 0a1.6 1.6 0 100 3.2 1.6 1.6 0 000-3.2z"
        />
      </svg>
    </button>
  );
}
