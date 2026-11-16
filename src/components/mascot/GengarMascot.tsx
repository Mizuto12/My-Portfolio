import { GhostBody } from './GhostBody'
import { GhostFace } from './GhostFace'
import { GhostParticles } from './GhostParticles'

/**
 * The full illustrated mascot: silhouette + expression + a burst of
 * sparks around it, with an entrance pop and a continuous gentle float.
 * Purely decorative — callers mark the wrapping context aria-hidden.
 */
export function GengarMascot({ size = 160 }: { size?: number }) {
  return (
    <div className="relative animate-mascot-enter motion-reduce:animate-none" style={{ width: size, height: size }}>
      <GhostParticles count={size < 120 ? 6 : 10} />
      <svg
        viewBox="0 0 220 220"
        width={size}
        height={size}
        className="relative drop-shadow-[0_0_28px_rgba(102,54,165,0.55)] animate-mascot-float motion-reduce:animate-none"
      >
        <GhostBody />
        <GhostFace />
      </svg>
    </div>
  )
}
