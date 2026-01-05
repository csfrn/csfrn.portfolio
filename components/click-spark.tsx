"use client"

import React, { useRef, useEffect, useCallback } from "react"

type ClickSparkProps = {
  sparkSize?: number
  sparkRadius?: number
  sparkCount?: number
  duration?: number
  easing?: "linear" | "ease-in" | "ease-out" | "ease-in-out"
  extraScale?: number
  children: React.ReactNode
}

type Spark = {
  x: number
  y: number
  angle: number
  startTime: number
}

export default function ClickSpark({
  sparkSize = 50,
  sparkRadius = 25,
  sparkCount = 12,
  duration = 600,
  easing = "ease-in-out",
  extraScale = 3.0,
  children,
}: ClickSparkProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const sparksRef = useRef<Spark[]>([])
  const startTimeRef = useRef<number | null>(null)
  const colorRef = useRef<string>("#fff")

  // keep canvas sized to parent
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const parent = canvas.parentElement
    if (!parent) return

    let resizeTimeout: number | undefined

    const resizeCanvas = () => {
      const { width, height } = parent.getBoundingClientRect()
      if (canvas.width !== Math.floor(width) || canvas.height !== Math.floor(height)) {
        canvas.width = Math.floor(width)
        canvas.height = Math.floor(height)
      }
    }

    const handleResize = () => {
      if (resizeTimeout) window.clearTimeout(resizeTimeout)
      resizeTimeout = window.setTimeout(resizeCanvas, 100)
    }

    const ro = new ResizeObserver(handleResize)
    ro.observe(parent)
    resizeCanvas()

    return () => {
      ro.disconnect()
      if (resizeTimeout) window.clearTimeout(resizeTimeout)
    }
  }, [])

  // read global CSS var and keep it updated when theme class changes
  useEffect(() => {
    const readColor = () => {
      const v = getComputedStyle(document.documentElement).getPropertyValue("--spark-color").trim()
      colorRef.current = v || "#fff"
    }

    readColor()

    const mo = new MutationObserver(readColor)
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })

    return () => mo.disconnect()
  }, [])

  const easeFunc = useCallback(
    (t: number) => {
      switch (easing) {
        case "linear":
          return t
        case "ease-in":
          return t * t
        case "ease-in-out":
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
        default:
          return t * (2 - t)
      }
    },
    [easing]
  )

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId = 0

    const draw = (timestamp: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const stroke = colorRef.current

      sparksRef.current = sparksRef.current.filter((spark) => {
        const elapsed = timestamp - spark.startTime
        if (elapsed >= duration) return false

        const progress = elapsed / duration
        const eased = easeFunc(progress)

        const distance = eased * sparkRadius * extraScale
        const lineLength = sparkSize * (1 - eased)

        const x1 = spark.x + distance * Math.cos(spark.angle)
        const y1 = spark.y + distance * Math.sin(spark.angle)
        const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle)
        const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle)

        ctx.strokeStyle = stroke
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()

        return true
      })

      animationId = requestAnimationFrame(draw)
    }

    animationId = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(animationId)
  }, [sparkSize, sparkRadius, sparkCount, duration, easeFunc, extraScale])

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const now = performance.now()
    const newSparks: Spark[] = Array.from({ length: sparkCount }, (_, i) => ({
      x,
      y,
      angle: (2 * Math.PI * i) / sparkCount,
      startTime: now,
    }))

    sparksRef.current.push(...newSparks)
  }

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }} onClick={handleClick}>
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          userSelect: "none",
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
        }}
      />
      {children}
    </div>
  )
}