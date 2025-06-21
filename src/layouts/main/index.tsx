"use client"

import gsap from "gsap"
import Lenis from "lenis"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { useSupported } from "@/hooks/useSupported"

import Home from "@/page/home"
import About from "@/page/about"
import Experience from "@/page/experience"
import Project from "@/page/project"
import Contact from "@/page/contact"
import NotSupported from "@/page/notsupported"

import type { JSX } from "react"
import type { MainContent } from "@/libs/types"

gsap.registerPlugin(ScrollTrigger)

interface MainProps {
    localization: {
        en: MainContent
        id: MainContent
    }
}

export default function Main({ localization }: MainProps): JSX.Element {
    const supported = useSupported()

    useGSAP(() => {
        const lenis = new Lenis({
            smoothWheel: true,
            duration: 2,
        })
    
        function raf(time: number): void {
            lenis.raf(time)

            requestAnimationFrame(raf)
        }
    
        requestAnimationFrame(raf)
    
        const updateScrollTrigger = () => ScrollTrigger.update()

        gsap.ticker.fps(60)

        gsap.ticker.add(updateScrollTrigger)
    
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
            
            gsap.ticker.remove(updateScrollTrigger)

            lenis.stop()
            lenis.raf(0)
            lenis.destroy()
        }
    }, { dependencies: [] })

    return (
        <main>
            {
                supported ?
                    <>
                        <Home localization={{ en: localization.en.home, id: localization.id.home }} />
                        <About localization={{ en: localization.en.about, id: localization.id.about }} />
                        <Experience localization={{ en: localization.en.experience, id: localization.id.experience }} />
                        <Project localization={{ en: localization.en.project, id: localization.id.project }} />
                        <Contact localization={{ en: localization.en.contact, id: localization.id.contact }} />
                    </>
                :
                    <>
                        <NotSupported localization={{ en:localization.en.other.not_supported, id: localization.id.other.not_supported }}/>
                    </>
            }
        </main>
    )
}