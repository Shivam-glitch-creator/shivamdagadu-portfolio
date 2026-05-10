import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })
  const raf = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX - 5 + 'px'
        dotRef.current.style.top = e.clientY - 5 + 'px'
      }
    }

    const animate = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = ringPos.current.x + 'px'
        ringRef.current.style.top = ringPos.current.y + 'px'
      }
      raf.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    raf.current = requestAnimationFrame(animate)

    const links = document.querySelectorAll('a, button, [data-hover]')
    const onEnter = () => {
      if (dotRef.current) dotRef.current.style.transform = 'scale(2.5)'
      if (ringRef.current) { ringRef.current.style.width = '54px'; ringRef.current.style.height = '54px'; ringRef.current.style.opacity = '0.8' }
    }
    const onLeave = () => {
      if (dotRef.current) dotRef.current.style.transform = 'scale(1)'
      if (ringRef.current) { ringRef.current.style.width = '36px'; ringRef.current.style.height = '36px'; ringRef.current.style.opacity = '0.5' }
    }
    links.forEach(el => { el.addEventListener('mouseenter', onEnter); el.addEventListener('mouseleave', onLeave) })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor" style={{ position: 'fixed', pointerEvents: 'none', zIndex: 9999 }} />
      <div ref={ringRef} className="cursor-ring" style={{ position: 'fixed', pointerEvents: 'none', zIndex: 9998 }} />
    </>
  )
}
