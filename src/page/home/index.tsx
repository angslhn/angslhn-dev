import gsap from "gsap"
import { SplitText } from "gsap/all"
import { JSX, useEffect, useRef, useState } from "react"
import { useApp } from "@/hooks/useApp"
import { useMobile } from "@/hooks/useMobile"

import Section from "@/containers/Section"
import AboutMe from "@/elements/button/aboutme"
import HireMe from "@/elements/button/hireme"

import type { Resolution, HomeContent } from "@/libs/types"

// Props Types
interface HomeProps {
    localization: {
        en: HomeContent
        id: HomeContent
    }
}

gsap.registerPlugin(SplitText)

export default function Home({ localization }: HomeProps): JSX.Element {
    const [resolution, setResolution] = useState<Resolution>({ height: 0, width: 0 })

    const wrapperRef = useRef<HTMLDivElement | null>(null)
    const textsRef = useRef<(HTMLElement | null)[]>([])
    const buttonsRef = useRef<(HTMLButtonElement | HTMLAnchorElement | null)[]>([])

    const { locale } = useApp()
    const isMobile = useMobile()

    useEffect(() => {
        const handleResize = () => setResolution({ height: window.innerHeight, width: window.innerWidth })

        handleResize()

        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    useEffect(() => {
        const section = document.querySelector(".home") as HTMLElement
        
        const { height, width } = resolution

        if (section) section.classList.replace(width < 1024 || height < 601 ? "h-screen" : "h-[37.5625rem]", width < 1024 || height < 601 ? "h-[37.5625rem]" : "h-screen")
    }, [resolution])

    useEffect(() => {
        if (isMobile) return

        const ctx = gsap.context(() => {
            gsap.fromTo(wrapperRef.current, {
                y: -150,
                scale: 0.9,
                opacity: 0
            }, {
                y: 0,
                duration: 1,
                scale: 1,
                opacity: 1,
                ease: "power3",
                scrollTrigger: {
                    trigger: wrapperRef.current,
                    start: "top 15%",
                    end: "bottom 15%",
                    toggleActions: "play reverse play reverse"
                }
            })

            const textValues = { 
                y: [3, 10],
                stagger: [0.10, 0.15]
            }

            textsRef.current.forEach((element, index) => {                
                const text = SplitText.create(element, { type: index !== 3 ? "chars" : "words" })
    
                gsap.from(index !== 3 ? text.chars : text.words, {
                    y: index !== 1 ? textValues.y[0] : textValues.y[1],     
                    duration: 1,
                    ease: "power3",
                    rotation: "random(1, -1)",
                    autoAlpha: 0,
                    stagger: index !== 1 ? textValues.stagger[0] : textValues.stagger[1],
                    delay: index * 1.2,
                })
            })

            buttonsRef.current.forEach((element, index) => {                
                gsap.from(element, {
                    opacity: 0,
                    x: index === 0 ? -30 : 30,
                    ease: "power3.out",
                    duration: 2,
                    delay: 6
                })
            })
        })

        return () => ctx.revert()
    }, [isMobile, resolution])

    return (
        <Section name="home">
            <div ref={ wrapperRef } className="h-full w-full flex-row-center">
                <div className="py-2 xxs:w-[19.5rem] xs:w-[21rem] s:-w-[22.5rem] s-plus:w-[24rem] s-medium:w-[25.5rem] sm:w-[29.5rem] md:w-[33rem] lg:w-[40rem] flex-col-center border border-charcoal-blue/15 rounded-xl bg-silver-haze/15 backdrop-blur-sm">
                    <div className="flex-col-start py-2 w-11/12 xxs:gap-1.5 sm:gap-3">
                        <h1 ref={ (text) => { textsRef.current[1] = text }} className="order-2 font-stalinist-one text-charcoal-blue xxs:leading-6 lg:leading-9 tracking-wide xxs:text-[1.35rem] xs:text-[1.45rem] s:text-[1.51rem] s-plus:text-[1.7rem] sm:text-[2rem] md:text-[2.3rem] lg:text-[2.8rem] font-semibold select-none xxs:text-shadow-[0.1rem_0.1rem_0.05rem] sm:text-shadow-[0.2rem_0.2rem_0.05rem] text-shadow-charcoal-blue/75">
                            { localization[locale].text_2 }
                        </h1>
                        <h2 ref={ (text) => { textsRef.current[0] = text }} className="order-1 mb-1 font-jetbrains-mono text-charcoal-blue tracking-wide font-extrabold select-none xxs:text-[1.25rem] xs:text-[1.34rem] sm:text-[1.4rem] md:text-[1.5rem] lg:text-[1.875rem]">
                            { localization[locale].text_1 }
                        </h2>
                        <h2 ref={ (text) => { textsRef.current[2] = text }} className="order-3 font-jetbrains-mono text-charcoal-blue tracking-wide font-extrabold select-none xxs:text-[1.18rem] xs:text-[1.23rem] sm:text-[1.43rem] md:text-[1.52rem] lg:text-[1.9rem]">
                            { localization[locale].text_3 }
                        </h2>
                        <p ref={ (text) => { textsRef.current[3] = text } } className="order-4 font-jetbrains-mono text-charcoal-blue font-semibold text-justify xxs:leading-4 sm:leading-5 select-none xxs:text-[0.75rem] sm:text-sm">
                            { localization[locale].description_1 }
                        </p>
                    </div>
                    <div className="py-2 flex items-start justify-center gap-3">
                        <AboutMe ref={ (button) => { buttonsRef.current[0] = button }}>
                            <span className="text-silver-haze font-jetbrains-mono xxs:text-[0.75rem] xs:text-sm md:text-[1rem] font-extrabold">
                                { localization[locale].button_1 }
                            </span>
                            <svg className="text-silver-haze w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path className="fill-current" d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
                            </svg>
                        </AboutMe>
                        <HireMe ref={ (button) => { buttonsRef.current[1] = button }}>
                            <span className="text-silver-haze font-jetbrains-mono xxs:text-[0.75rem] xs:text-sm md:text-[1rem] font-extrabold">
                                { localization[locale].button_2 }
                            </span>
                            <svg className="text-silver-haze w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path className="fill-current" d="M153.6 29.9l16-21.3C173.6 3.2 180 0 186.7 0C198.4 0 208 9.6 208 21.3V43.5c0 13.1 5.4 25.7 14.9 34.7L307.6 159C356.4 205.6 384 270.2 384 337.7C384 434 306 512 209.7 512H192C86 512 0 426 0 320v-3.8c0-48.8 19.4-95.6 53.9-130.1l3.5-3.5c4.2-4.2 10-6.6 16-6.6C85.9 176 96 186.1 96 198.6V288c0 35.3 28.7 64 64 64s64-28.7 64-64v-3.9c0-18-7.2-35.3-19.9-48l-38.6-38.6c-24-24-37.5-56.7-37.5-90.7c0-27.7 9-54.8 25.6-76.9z"/>
                            </svg>
                        </HireMe>
                    </div>
                </div>
            </div>
        </Section>
    )
}