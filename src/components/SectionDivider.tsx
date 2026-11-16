import { useTheme } from '../context/ThemeContext';

/**
 * A thin rule between sections. In the green theme it's just a plain
 * divider; in the Gengar theme a tiny ghost glyph sits on it, one of the
 * "Gengar's presence throughout the portfolio" touches from the brief.
 * Purely decorative.
 */
export function SectionDivider() {
  const { theme } = useTheme();
  return (
    <div className="section-divider" aria-hidden="true">
      {theme === 'gengar' && (
        <svg className="section-divider__ghost" viewBox="0 0 24 28" fill="currentColor">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 1C6.48 1 2 5.48 2 11v13.2c0 .66.78 1.02 1.28.58l1.9-1.67a1 1 0 011.33 0l1.8 1.6a1 1 0 001.33 0l1.8-1.6a1 1 0 011.33 0l1.8 1.6a1 1 0 001.33 0l1.8-1.6a1 1 0 011.33 0l1.9 1.67c.5.44 1.28.08 1.28-.58V11c0-5.52-4.48-10-10-10zM8.5 9.4a1.6 1.6 0 100 3.2 1.6 1.6 0 000-3.2zm7 0a1.6 1.6 0 100 3.2 1.6 1.6 0 000-3.2z"
          />
        </svg>
      )}
    </div>
  );
}
