"use client"

import gsap from "gsap"
import Lenis from "lenis"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { JSX } from "react"

import Home from "@/pages/home"
import About from "@/pages/about"
import Experience from "@/pages/experience"
import Project from "@/pages/project"
import Contact from "@/pages/contact"
import { MainContent } from "@/libs/types"

gsap.registerPlugin(ScrollTrigger)

interface MainProps {
    localization: {
        en: MainContent
        id: MainContent
    }
}

export default function Main({ localization }: MainProps): JSX.Element {
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
        gsap.ticker.add(updateScrollTrigger)
    
        return () => {
            gsap.ticker.remove(updateScrollTrigger)
            
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())

            lenis.stop()
            lenis.raf(0)
            lenis.destroy()
        }
    }, { dependencies: [] })

    return (
        <main>
            <Home localization={{ en: localization.en.home, id: localization.id.home }} />
            <About localization={{ en: localization.en.about, id: localization.id.about }} />
            <Experience localization={{ en: localization.en.experience, id: localization.id.experience }} />
            <Project localization={{ en: localization.en.project, id: localization.id.project }} />
            <Contact localization={{ en: localization.en.contact, id: localization.id.contact }} />
        </main>
    )
}