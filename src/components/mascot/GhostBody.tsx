/**
 * The silhouette layer: a rounded body with two top spikes (ears), two
 * stubby side nubs (arms), and a three-pointed jagged underside — the
 * combination that reads as "Gengar-shaped" rather than a generic blob
 * ghost. Pure original paths/gradients, no traced or copied artwork.
 * Meant to be composed inside a parent <svg viewBox="0 0 220 220">.
 */
export function GhostBody() {
  return (
    <g>
      <defs>
        <linearGradient id="mascotBodyFill" x1="20%" y1="10%" x2="85%" y2="95%">
          <stop offset="0%" stopColor="#8a5fd1" />
          <stop offset="45%" stopColor="#5b34a8" />
          <stop offset="100%" stopColor="#2e1456" />
        </linearGradient>
        <radialGradient id="mascotSheen" cx="32%" cy="22%" r="55%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="45%" stopColor="#ffffff" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="mascotUnderShadow" x1="50%" y1="55%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#1a0f33" stopOpacity="0" />
          <stop offset="100%" stopColor="#140a28" stopOpacity="0.75" />
        </linearGradient>
      </defs>

      {/* Main silhouette: rounded crown, two ear-spikes, two arm-nubs,
          three-point jagged base. */}
      <path
        fill="url(#mascotBodyFill)"
        d="
          M110 14
          C80 14 66 30 60 44
          C52 40 40 38 32 46
          C26 52 28 62 36 66
          C30 76 26 92 26 108
          C26 108 10 118 12 132
          C14 144 28 142 34 134
          C32 150 32 168 40 182
          C48 194 62 186 66 176
          C70 190 86 198 98 194
          C104 206 120 206 126 194
          C138 198 154 190 158 176
          C162 186 176 194 184 182
          C192 168 192 150 190 134
          C196 142 210 144 212 132
          C214 118 198 108 198 108
          C198 92 194 76 188 66
          C196 62 198 52 192 46
          C184 38 172 40 164 44
          C158 30 144 14 114 14
          Z
        "
      />

      {/* Darker lower-body shading so the silhouette reads as lit from
          above rather than flat. */}
      <path
        fill="url(#mascotUnderShadow)"
        d="
          M26 108 C26 128 30 150 40 182 C48 194 62 186 66 176
          C70 190 86 198 98 194 C104 206 120 206 126 194
          C138 198 154 190 158 176 C162 186 176 194 184 182
          C194 150 198 128 198 108
          C198 140 180 172 150 186 C128 196 92 196 70 186
          C40 172 26 140 26 108 Z
        "
      />

      {/* Soft top-left specular sheen for dimensional roundness. */}
      <ellipse cx="78" cy="56" rx="46" ry="34" fill="url(#mascotSheen)" />
    </g>
  )
}
