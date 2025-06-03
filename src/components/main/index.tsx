"use client"

import gsap from "gsap"
import Lenis from "lenis"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { JSX, useEffect } from "react"

import Home from "@/layouts/home"
import About from "@/layouts/about"
import Project from "@/layouts/project"
import Contact from "@/layouts/contact"

gsap.registerPlugin(ScrollTrigger)

export default function Main(): JSX.Element {
    useEffect(() => {
        const lenis = new Lenis()

        function raf(time: number) {
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
    }, [])

    return (
        <main>
            <Home/>
            <About/>
            <Project/>
            <Contact/>
        </main>
    )
}