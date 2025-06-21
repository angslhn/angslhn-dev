"use client"

import { gsap } from "gsap"
import { JSX, useEffect, useRef } from "react"
import { isMobile } from "react-device-detect"

export default function Cursor(): JSX.Element {
    const bigBallRef = useRef<HTMLDivElement | null>(null)
    const smallBallRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const target = document.querySelector(".cursor")

        if (target && isMobile) target.remove()
    }, [])

    useEffect(() => {
        const bigBall = bigBallRef.current
        const smallBall = smallBallRef.current
        const bigHoverables = document.querySelectorAll<HTMLElement>(".big-hoverable")
        const smallHoverables = document.querySelectorAll<HTMLElement>(".small-hoverable")

        if (!bigBall || !smallBall || isMobile) return
        
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

        const onSmallMouseEnter = () => {
            gsap.to(bigBall, { duration: 0.3, scale: 0.75 })
        }

        const onBigMouseEnter = () => {
            gsap.to(bigBall, { duration: 0.3, scale: 2 })
        }

        const onMouseLeave = () => {
            gsap.to(bigBall, { duration: 0.3, scale: 1 })
        }

        window.addEventListener("mousemove", onMouseMove)
        
        smallHoverables.forEach(el => {
            el.addEventListener("mouseenter", onSmallMouseEnter)
            el.addEventListener("mouseleave", onMouseLeave)
        })

        bigHoverables.forEach(el => {
            el.addEventListener("mouseenter", onBigMouseEnter)
            el.addEventListener("mouseleave", onMouseLeave)
        })

        return () => {
            window.removeEventListener("mousemove", onMouseMove)

            smallHoverables.forEach(el => {
              el.removeEventListener("mouseenter", onSmallMouseEnter)
              el.removeEventListener("mouseleave", onMouseLeave)
            })

            bigHoverables.forEach(el => {
              el.removeEventListener("mouseenter", onBigMouseEnter)
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