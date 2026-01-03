"use client"

import { useEffect, useRef } from "react"

type Point = { x: number; y: number }

const lerp = (a: number, b: number, t: number) => a + (b - a) * t
const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n))

export function MagneticCursor() {
  const ringRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  const mouse = useRef<Point>({ x: 0, y: 0 })
  const ringPos = useRef<Point>({ x: 0, y: 0 })
  const ringTarget = useRef<Point>({ x: 0, y: 0 })

  const hoveredEl = useRef<HTMLElement | null>(null)
  const isMagnetic = useRef(false)

  useEffect(() => {
    const ring = ringRef.current
    const dot = dotRef.current
    if (!ring || !dot) return

    // Start centered and visible immediately
    mouse.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    ringPos.current = { ...mouse.current }
    ringTarget.current = { ...mouse.current }

    // Ensure initial transforms apply before first mousemove
    ring.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`
    dot.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0) translate(-50%, -50%)`

    let raf = 0
    let last = performance.now()

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    const onOver = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest?.("[data-magnetic]") as HTMLElement | null
      hoveredEl.current = el
      isMagnetic.current = !!el

      if (el) {
        ring.classList.add("scale-150")
        dot.classList.add("scale-0")
      }
    }

    const onOut = (e: MouseEvent) => {
      const related = e.relatedTarget as HTMLElement | null
      if (related?.closest?.("[data-magnetic]")) return

      // Reset any nudge we applied
      if (hoveredEl.current) hoveredEl.current.style.transform = ""

      hoveredEl.current = null
      isMagnetic.current = false

      ring.classList.remove("scale-150")
      dot.classList.remove("scale-0")
    }

    const animate = (t: number) => {
      const dt = Math.min((t - last) / 1000, 0.033)
      last = t

      // Default target is the mouse
      ringTarget.current.x = mouse.current.x
      ringTarget.current.y = mouse.current.y

      // Magnetic pull to hovered element center (only when [data-magnetic])
      if (isMagnetic.current && hoveredEl.current) {
        const rect = hoveredEl.current.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2

        const dx = mouse.current.x - cx
        const dy = mouse.current.y - cy

        const max = Math.max(rect.width, rect.height) * 0.85
        const dist = Math.hypot(dx, dy)
        const falloff = 1 - clamp(dist / max, 0, 1)

        const strength = 0.45 // stickiness
        ringTarget.current.x = lerp(mouse.current.x, cx, strength * falloff)
        ringTarget.current.y = lerp(mouse.current.y, cy, strength * falloff)

        // Tiny nudge on the element for a premium feel
        hoveredEl.current.style.transform = `translate(${dx * 0.05}px, ${dy * 0.05}px)`
        hoveredEl.current.style.willChange = "transform"
      }

      // Smooth follow (stable across FPS)
      const follow = 1 - Math.pow(0.0005, dt)
      ringPos.current.x = lerp(ringPos.current.x, ringTarget.current.x, follow)
      ringPos.current.y = lerp(ringPos.current.y, ringTarget.current.y, follow)

      // Apply transforms
      ring.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`
      dot.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0) translate(-50%, -50%)`

      raf = requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    document.addEventListener("mouseover", onOver, { passive: true })
    document.addEventListener("mouseout", onOut, { passive: true })

    raf = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseover", onOver)
      document.removeEventListener("mouseout", onOut)

      if (hoveredEl.current) hoveredEl.current.style.transform = ""
    }
  }, [])

  return (
    <>
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed left-0 top-0 z-[9999] pointer-events-none h-8 w-8 rounded-full border transition-transform duration-150"
        style={{ borderColor: "var(--cursor-ring)" }}

      />
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed left-0 top-0 z-[9999] pointer-events-none h-2 w-2 rounded-full transition-transform duration-150"
        style={{ backgroundColor: "var(--cursor-dot)" }}
      />
    </>
  )
}
