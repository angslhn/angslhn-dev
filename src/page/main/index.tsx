"use client"

import gsap from "gsap"
import Lenis from "lenis"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { JSX } from "react"

import Home from "@/layouts/home"
import About from "@/layouts/about"
import Experience from "@/layouts/experience"
import Project from "@/layouts/project"
import Contact from "@/layouts/contact"

gsap.registerPlugin(ScrollTrigger)

export default function Main(): JSX.Element {
    useGSAP(() => {
        const lenis = new Lenis({
            smoothWheel: true,
            duration: 1.75,
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
            <Home/>
            <About/>
            <Experience/>
            <Project/>
            <Contact/>
        </main>
    )
}