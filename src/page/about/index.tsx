import gsap from "gsap"
import Link from "next/link"
import Image from "next/image"
import { JSX, useEffect, useRef, useState } from "react"
import { SplitText } from "gsap/all"
import { useApp } from "@/hooks/useApp"
import { useMobile } from "@/hooks/useMobile"

import Section from "@/containers/Section"
import source from "@/assets/images/angslhn.webp"
import Age from "@/helpers/age"

import type { Resolution, AboutContent } from "@/libs/types"

// Props Types
interface AboutProps {
    localization: {
        en: AboutContent
        id: AboutContent
    }
}

gsap.registerPlugin(SplitText)

export default function About({ localization }: AboutProps): JSX.Element {
    const [resolution, setResolution] = useState<Resolution>({ height: 0, width: 0 })

    const wrapperRef = useRef<HTMLDivElement | null>(null)
    const bioRef = useRef<(HTMLElement | null)[]>([])
    const aboutRef = useRef<(HTMLParagraphElement | null)[]>([])

    const { locale } = useApp()
    const isMobile = useMobile()

    useEffect(() => {
        const handleResize = () => setResolution({ height: window.innerHeight, width: window.innerWidth })

        handleResize()

        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    useEffect(() => {
        const section = document.querySelector(".about") as HTMLElement
        
        const { width, height } = resolution

        if (section) section.classList.replace(width < 1024 || height < 601 ? "h-screen" : "h-[58rem]", width < 1024 || height < 601 ? "h-[58rem]" : "h-screen")
    }, [resolution, locale])

    useEffect(() => {
        if (isMobile) return

        const ctx = gsap.context(() => {
            bioRef.current.forEach((element, index) => {
                gsap.fromTo(element, {
                    x: -80,
                    scale: 0.9,
                    opacity: 0
                }, {
                    x: 0,
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    ease: "power3",
                    delay: index * 0.3,
                    scrollTrigger: {
                        trigger: wrapperRef.current,
                        start: "top 15%",
                        end: "bottom 15%",
                        toggleActions: "play reverse play reverse"
                    }
                })
            })

            aboutRef.current.forEach((element, index) => {
                gsap.fromTo(element, {
                    x: 80,
                    scale: 0.9,
                    opacity: 0
                }, {
                    x: 0,
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    ease: "power3",
                    delay: index * 0.3,
                    scrollTrigger: {
                        trigger: wrapperRef.current,
                        start: "top 15%",
                        end: "bottom 15%",
                        toggleActions: "play reverse play reverse"
                    }
                })
            })
        })

        return () => ctx.revert()
    }, [isMobile, resolution])

    return (
        <Section name="about">
            <div ref={ wrapperRef } className="h-full w-full flex-row-center">
                <div className="xxs:h-[55rem] lg:h-[22rem] xxs:w-full lg:w-[55rem] xxs:flex-col-center lg:flex-row-between">
                    <div className="xxs:h-[17rem] lg:h-full w-[15rem] flex-col-center gap-1.5">
                        <div ref={ (image) => { bioRef.current[0] = image }} className="h-[8rem] w-full flex-row-center">
                            <Image className="xxs:h-[8rem] xxs:w-[8rem] lg:h-[9rem] lg:w-[9rem] opacity-80 rounded-xl shadow-[0.1rem_0.1rem_0.3rem] shadow-charcoal-blue/30" src={source} draggable="false" alt="Profile Picture" title="Aang Solihin"/>
                        </div>
                        <div className="h-[9rem] w-[90%] flex-col-center gap-2">
                            <strong ref={ (bio) => { bioRef.current[1] = bio }} className="w-full py-1.5 text-center font-jetbrains-mono select-none text-[1.05rem] font-extrabold text-silver-haze border border-charcoal-blue/15 rounded-sm bg-charcoal-blue">
                                { localization[locale].bio_text_1 }
                            </strong>
                            <div ref={ (bio) => { bioRef.current[2] = bio }} className="relative w-full flex-row-start gap-1.5 py-1.5 text-silver-haze  border border-charcoal-blue/15 rounded-sm bg-charcoal-blue">
                                <i className="h-full flex justify-end items-center w-5">
                                    <svg className="w-3 text-silver-haze " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path className="fill-current" d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z"/>
                                    </svg>
                                </i>
                                <span className="absolute font-jetbrains-mono w-full text-center select-none text-sm font-semibold">
                                    { localization[locale].bio_text_2 }
                                </span>
                            </div>
                            <div ref={ (bio) => { bioRef.current[3] = bio } } className="relative w-full flex-row-start gap-1.5 py-1.5 text-silver-haze  border border-charcoal-blue/15 rounded-sm bg-charcoal-blue hover:bg-charcoal-blue/85 transition-colors duration-300">
                                <i className="h-full flex justify-end items-center w-5">
                                    <svg className="w-3 text-silver-haze " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                        <path className="fill-current" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                                    </svg>
                                </i>
                                <Link href="https://maps.app.goo.gl/zAxCWieZuDX3oXLX6" draggable="false" className="small-hoverable absolute w-full font-jetbrains-mono text-center select-none text-sm font-semibold" target="_blank">
                                    { localization[locale].bio_text_3 }
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="xxs:h-[38rem] sm:h-[27rem] lg:h-full xxs:w-[19.5rem] xs:w-[21rem] s:-w-[22.5rem] s-plus:w-[24rem] s-medium:w-[25.5rem] sm:w-[29.5rem] md:w-[33rem] lg:w-[40rem] flex-col-center gap-2">
                        <h2 ref={ (header) => { aboutRef.current[0] = header }} className="big-hoverable py-1.5 px-2 mb-2 font-jetbrains-mono text-center select-none xxs:text-[1.3rem] sm:text-[1.4rem] font-extrabold text-silver-haze border border-charcoal-blue/15 rounded-sm bg-charcoal-blue backdrop-blur-sm">
                            { localization[locale].text_heading_title_1 }
                        </h2>
                        <p ref={ (paragraph) => { aboutRef.current[1] = paragraph }} className="py-1.5 px-3 text-justify font-jetbrains-mono select-none text-sm font-semibold border border-charcoal-blue/15 rounded-sm bg-silver-haze/15 backdrop-blur-sm">
                            { String(localization[locale].description_1).replace("<Age>", Age()) }
                        </p>
                        <p ref={ (paragraph) => { aboutRef.current[2] = paragraph }} className="py-1.5 px-3 text-justify font-jetbrains-mono select-none text-sm font-semibold border border-charcoal-blue/15 rounded-sm bg-silver-haze/15 backdrop-blur-sm">
                            { localization[locale].description_2 }
                        </p>
                        <p ref={ (paragraph) => { aboutRef.current[3] = paragraph }} className="py-1.5 px-3 text-justify font-jetbrains-mono select-none text-sm font-semibold border border-charcoal-blue/15 rounded-sm bg-silver-haze/15 backdrop-blur-sm">
                            { localization[locale].description_3 }
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    )
}