/**
 * The expression layer: glowing red eyes (gradient + pupil + highlight,
 * with a CSS glow-pulse and an occasional blink), sly angled brows, and
 * a wide jagged grin with visible pointed teeth. Composed inside the
 * same parent <svg viewBox="0 0 220 220"> as GhostBody.
 */
export function GhostFace() {
  return (
    <g>
      <defs>
        <radialGradient id="mascotEyeFill" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ff8a8a" />
          <stop offset="40%" stopColor="#ff3b3b" />
          <stop offset="100%" stopColor="#b40f0f" />
        </radialGradient>
      </defs>

      {/* Sly, angled brows — the main signal of "mischievous" rather than
          "surprised". */}
      <path d="M52 68 Q68 56 86 64" stroke="#1a0f33" strokeWidth="5" strokeLinecap="round" fill="none" />
      <path d="M134 64 Q152 56 168 68" stroke="#1a0f33" strokeWidth="5" strokeLinecap="round" fill="none" />

      {/* Eyes: glow-pulse via CSS (animate-mascot-eye-glow), occasional
          blink via CSS (animate-mascot-blink) scaling the whole eye
          group on its own transform-origin. */}
      <g className="origin-center animate-mascot-eye-glow motion-reduce:animate-none">
        <g className="origin-center animate-mascot-blink motion-reduce:animate-none" style={{ transformOrigin: '68px 86px' }}>
          <ellipse cx="68" cy="86" rx="19" ry="23" fill="url(#mascotEyeFill)" />
          <ellipse cx="68" cy="86" rx="19" ry="23" fill="none" stroke="#3a0d0d" strokeWidth="2" />
          <circle cx="68" cy="88" r="7" fill="#200404" />
          <circle cx="62" cy="80" r="3.4" fill="#fff" fillOpacity="0.9" />
        </g>
        <g className="origin-center animate-mascot-blink motion-reduce:animate-none" style={{ transformOrigin: '152px 86px', animationDelay: '-0.35s' }}>
          <ellipse cx="152" cy="86" rx="19" ry="23" fill="url(#mascotEyeFill)" />
          <ellipse cx="152" cy="86" rx="19" ry="23" fill="none" stroke="#3a0d0d" strokeWidth="2" />
          <circle cx="152" cy="88" r="7" fill="#200404" />
          <circle cx="146" cy="80" r="3.4" fill="#fff" fillOpacity="0.9" />
        </g>
      </g>

      {/* Wide grin: dark mouth cavity, jagged light teeth along the top
          edge, and a small tongue hint for extra personality. */}
      <path
        d="M46 122 Q110 176 174 122 Q174 150 146 164 Q110 180 74 164 Q46 150 46 122 Z"
        fill="#140a24"
      />
      <path
        d="M58 128 l10 14 l10 -14 l10 14 l10 -14 l10 14 l10 -14 l10 14 l10 -14 l10 10"
        fill="none"
        stroke="#f3eafc"
        strokeWidth="9"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <ellipse cx="110" cy="152" rx="14" ry="9" fill="#d2487a" fillOpacity="0.85" />
    </g>
  )
}
