import { useMemo } from 'react'

interface Spark {
  id: number
  left: number
  top: number
  size: number
  duration: number
  delay: number
  dx: number
  dy: number
}

function buildSparks(count: number): Spark[] {
  return Array.from({ length: count }, (_, id) => {
    const angle = (id / count) * Math.PI * 2 + Math.random() * 0.6
    const radius = 70 + Math.random() * 30
    return {
      id,
      left: 50 + Math.cos(angle) * 34,
      top: 50 + Math.sin(angle) * 34,
      size: 4 + Math.random() * 5,
      duration: 1.4 + Math.random() * 1.1,
      delay: Math.random() * 0.5,
      dx: Math.cos(angle) * radius,
      dy: Math.sin(angle) * radius - 20,
    }
  })
}

/**
 * A short burst of glowing purple sparks around the mascot, distinct
 * from the ambient `GhostField` that drifts across the whole page while
 * the Gengar theme is active — this one belongs to the reveal moment
 * itself. Caller is responsible for not rendering this under reduced
 * motion (GengarTakeover already is never mounted in that case).
 */
export function GhostParticles({ count = 10 }: { count?: number }) {
  const sparks = useMemo(() => buildSparks(count), [count])

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {sparks.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-[#c792ea] animate-mascot-spark motion-reduce:hidden"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            animationDuration: `${s.duration.toFixed(2)}s`,
            animationDelay: `${s.delay.toFixed(2)}s`,
            boxShadow: '0 0 6px 2px rgba(199,146,234,0.7)',
            ['--spark-x' as string]: `${s.dx.toFixed(0)}px`,
            ['--spark-y' as string]: `${s.dy.toFixed(0)}px`,
          }}
        />
      ))}
    </div>
  )
}
