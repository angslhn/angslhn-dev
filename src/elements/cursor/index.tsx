"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function Cursor() {
  const bigBallRef = useRef<HTMLDivElement | null>(null)
  const smallBallRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const bigBall = bigBallRef.current
    const smallBall = smallBallRef.current
    const hoverables = document.querySelectorAll<HTMLElement>(".hoverable")

    if (!bigBall || !smallBall) return
    
    const onMouseMove = (e: MouseEvent) => {
      gsap.to(bigBall, {
        duration: 1,
        ease: "power4",
        x: e.clientX - 15,
        y: e.clientY - 15
      })

      gsap.to(smallBall, {
        duration: 0.4,
        ease: "power4",
        x: e.clientX - 5,
        y: e.clientY - 7
      })
    }

    const onMouseEnter = () => {
      gsap.to(bigBall, { duration: 0.3, scale: 2 })
    }

    const onMouseLeave = () => {
      gsap.to(bigBall, { duration: 0.3, scale: 1 })
    }

    window.addEventListener("mousemove", onMouseMove)
    
    hoverables.forEach(el => {
      el.addEventListener("mouseenter", onMouseEnter)
      el.addEventListener("mouseleave", onMouseLeave)
    })

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      hoverables.forEach(el => {
        el.removeEventListener("mouseenter", onMouseEnter)
        el.removeEventListener("mouseleave", onMouseLeave)
      })
    }
  }, [])

  return (
    <div className="cursor">
      <div className="cursor__ball cursor__ball--big" ref={bigBallRef}>
        <svg height="30" width="30">
          <circle cx="15" cy="15" r="12" strokeWidth="0" fill="#f7f8fa" />
        </svg>
      </div>
      <div className="cursor__ball cursor__ball--small" ref={smallBallRef}>
        <svg height="10" width="10">
          <circle cx="5" cy="5" r="4" strokeWidth="0" fill="#f7f8fa" />
        </svg>
      </div>
    </div>
  )
}