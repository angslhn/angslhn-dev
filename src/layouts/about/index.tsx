"use client"

import { JSX, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Section from "@/wrappers/section"
import angslhn from "@/assets/images/angslhn.jpg"

type Resolution = {
    height: number,
    width: number
}

export default function About(): JSX.Element {
    const [resolution, setResolution] = useState<Resolution>({ height: 0, width: 0 })

    useEffect(() => {
        const handleResize = () => {
            setResolution({ height: window.innerHeight, width: window.innerWidth })
        }

        handleResize()

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    useEffect(() => {
        const $target = document.querySelector(".about") as HTMLElement
        
        const { width, height } = resolution

        if (width < 950 || height < 601) {
            $target.classList.add("h-[52rem]")
            $target.classList.remove("h-screen")
        } else {
            $target.classList.remove("h-[52rem]")
            $target.classList.add("h-screen")
        }

    }, [resolution])

    return (
        <Section name="about">
            <div className="xxs:h-[52rem] lg:h-[22rem] xxs:w-full lg:w-[57rem] xxs:flex-col-center lg:flex-row-between">
                <div className="xxs:h-[17rem] lg:h-full w-[15rem] flex-col-center gap-1.5">
                    <div className="h-[8rem] w-full flex-row-center">
                        <Image className="xxs:h-[8rem] xxs:w-[8rem] lg:h-[9rem] lg:w-[9rem] opacity-80 rounded-xl shadow-[0.1rem_0.1rem_0.3rem] shadow-charcoal-blue/30" src={angslhn} alt="Profile Picture" title="Aang Solihin"/>
                    </div>
                    <div className="h-[9rem] w-[90%] flex-col-center gap-2">
                        <strong className="w-full py-1.5 text-center font-jetbrains-mono text-[1.1rem] font-extrabold text-silver-haze border border-charcoal-blue/15 rounded-sm bg-charcoal-blue">
                            Aang Solihin
                        </strong>
                        <div className="relative w-full flex-row-start gap-1.5 py-1.5 text-silver-haze  border border-charcoal-blue/15 rounded-sm bg-charcoal-blue">
                            <i className="h-full flex justify-end items-center w-5">
                                <svg className="w-3 text-silver-haze " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path className="fill-current" d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z"/>
                                </svg>
                            </i>
                            <span className="absolute font-jetbrains-mono w-full text-center text-sm font-semibold">
                                3 - August - 2005
                            </span>
                        </div>
                        <div className="relative w-full flex-row-start gap-1.5 py-1.5 text-silver-haze  border border-charcoal-blue/15 rounded-sm bg-charcoal-blue hover:bg-charcoal-blue/85 transition-colors duration-300">
                            <i className="h-full flex justify-end items-center w-5">
                                <svg className="w-3 text-silver-haze " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path className="fill-current" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                                </svg>
                            </i>
                            <Link href="https://maps.app.goo.gl/zAxCWieZuDX3oXLX6" className="absolute w-full font-jetbrains-mono text-center text-sm font-semibold" target="_blank">
                                Sumedang, Indonesia
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="xxs:h-[34rem] sm:h-[27rem] lg:h-full xxs:w-[19.5rem] xs:w-[21rem] s:-w-[22.5rem] s-plus:w-[24rem] s-medium:w-[25.5rem] sm:w-[29.5rem] lg:w-[40rem] flex-col-center gap-2">
                    <h2 className="hoverable py-1.5 px-3 mb-2 font-jetbrains-mono text-center text-2xl font-extrabold text-silver-haze border border-charcoal-blue/15 rounded-sm bg-charcoal-blue backdrop-blur-sm">
                        About Me
                    </h2>
                    <p className="py-1.5 px-3 text-justify font-jetbrains-mono text-sm font-semibold border border-charcoal-blue/15 rounded-sm bg-silver-haze/15 backdrop-blur-sm">
                        Heyyy, let me introduce myself. I'm Aang Solihin, 20 years old, and currently studying Informatics Engineering. I'm on a journey to achieve my dream of becoming a fullstack developer.
                    </p>
                    <p className="py-1.5 px-3 text-justify font-jetbrains-mono text-sm font-semibold border border-charcoal-blue/15 rounded-sm bg-silver-haze/15 backdrop-blur-sm">
                        As part of this journey, I constantly strive to learn and explore various topics related to technology—especially in fullstack development. Recently, I've also begun studying Artificial Intelligence (AI) to stay relevant in this rapidly evolving era.
                    </p>
                    <p className="py-1.5 px-3 text-justify font-jetbrains-mono text-sm font-semibold border border-charcoal-blue/15 rounded-sm bg-silver-haze/15 backdrop-blur-sm">
                        Looking ahead, I hope to create technology that is not only innovative but also beneficial and sustainable for many people—technology that improves lives without causing harm to its users.
                    </p>
                </div>
            </div>
        </Section>
    )
}