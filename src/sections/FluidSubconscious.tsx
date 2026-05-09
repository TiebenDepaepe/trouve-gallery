import { useEffect, useRef } from 'react'
import { heroConfig } from '../config'
import { asset } from '../lib/asset'

const MAX_SHIFT = 14

export default function FluidSubconscious() {
  const imageRef = useRef<HTMLDivElement>(null)
  const targetRef = useRef({ x: 0, y: 0 })
  const currentRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef(0)

  useEffect(() => {
    if (!heroConfig.fluidImagePath) return

    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    const onMouseMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1
      const ny = (e.clientY / window.innerHeight) * 2 - 1
      targetRef.current.x = -nx * MAX_SHIFT
      targetRef.current.y = -ny * MAX_SHIFT
    }

    const animate = () => {
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.08
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.08
      const el = imageRef.current
      if (el) {
        el.style.transform = `scale(1.06) translate3d(${currentRef.current.x}px, ${currentRef.current.y}px, 0)`
      }
      rafRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMouseMove)
    animate()

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  if (!heroConfig.fluidImagePath) {
    return (
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: '#000000',
          zIndex: 0,
        }}
      />
    )
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
        background: '#000000',
      }}
    >
      <div
        ref={imageRef}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${asset(heroConfig.fluidImagePath)})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: 'scale(1.06)',
          willChange: 'transform',
        }}
      />
    </div>
  )
}
