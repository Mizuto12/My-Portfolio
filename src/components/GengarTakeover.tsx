import { useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import { GengarMascot } from './mascot/GengarMascot'

/**
 * The full-viewport takeover overlay played when the Easter egg is
 * triggered. Mounted only while `isTransitioning` is true; ThemeProvider
 * already skips starting this sequence entirely when the visitor prefers
 * reduced motion, so this component never renders in that case.
 *
 * Mostly decorative (aria-hidden) — the real, accessible announcement is
 * ThemeContext's `announcement` string, rendered as an aria-live region
 * in Footer.tsx. The one exception is the visible close control below,
 * which is a real, focusable, labeled button, not aria-hidden.
 */
export function GengarTakeover() {
  const { isTransitioning, theme, toggleTheme } = useTheme()
  const isGengar = theme === 'gengar'

  // Escape closes the overlay early by restoring green — only meaningful
  // for the "Gengar has taken over" direction, same condition as the
  // visible close button below.
  useEffect(() => {
    if (!isTransitioning || !isGengar) return
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') toggleTheme()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isTransitioning, isGengar, toggleTheme])

  if (!isTransitioning) return null

  return (
    <div className={`gengar-takeover gengar-takeover--${theme}`}>
      <div aria-hidden="true" className="contents">
        <div className="gengar-takeover__shadow" />
        <GengarMascot size={160} />
        <p className="gengar-takeover__msg">
          {isGengar ? 'Hehe... Gengar has entered the portfolio!' : 'Back to the normal world.'}
        </p>
      </div>

      {isGengar && (
        <button
          type="button"
          onClick={toggleTheme}
          className="pointer-events-auto absolute top-5 right-5 rounded-full border border-white/25 bg-black/30 px-3 py-1.5 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-black/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label="Close — return to the green theme"
        >
          ✕ Back to normal
        </button>
      )}
    </div>
  )
}
