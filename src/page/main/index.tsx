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
        const lenis = new Lenis()

        function raf(time: number): void {
            lenis.raf(time)

            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        const scroll = () => ScrollTrigger.update()

        gsap.ticker.add(scroll)

        return () => {
            gsap.ticker.remove(scroll)
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