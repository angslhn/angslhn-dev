import { JSX, useEffect, useState } from 'react'
import { useApp } from '@/hooks/useApp'
import Section from '@/wrappers/section'
import AboutMe from '@/elements/button/aboutme'
import HireMe from '@/elements/button/hireme'

import { Resolution } from '@/libs/types'

interface HomeProps {
    localization: {
        en: HomeLocalization
        id: HomeLocalization
    }
}

interface HomeLocalization {
    text_1: string
    text_2: string
    text_3: string
    description_1: string
    button_1: string
    button_2: string
}

export default function Home({ localization }: HomeProps): JSX.Element {
    const [resolution, setResolution] = useState<Resolution>({ height: 0, width: 0 })

    const { locale } = useApp()

    useEffect(() => {
        const handleResize = () => setResolution({ height: window.innerHeight, width: window.innerWidth })

        handleResize()

        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    useEffect(() => {
        const $target = document.querySelector(".home") as HTMLElement
        
        const { height } = resolution

        if (height < 600) {
            $target.classList.add("h-[37.5625rem]")
            $target.classList.remove("h-screen")
        } else {
            $target.classList.remove("h-[37.5625rem]")
            $target.classList.add("h-screen")
        }

    }, [resolution])

    return (
        <Section name="home">
            <div className="py-2 xxs:w-[19.5rem] xs:w-[21rem] s:-w-[22.5rem] s-plus:w-[24rem] s-medium:w-[25.5rem] sm:w-[29.5rem] md:w-[33rem] lg:w-[40rem] flex-col-center border border-charcoal-blue/15 rounded-xl bg-silver-haze/15 backdrop-blur-sm">
                <div className="flex-col-start py-2 w-11/12 xxs:gap-1.5 sm:gap-3">
                    <h1 className="order-2 font-stalinist-one text-charcoal-blue xxs:leading-6 lg:leading-9 tracking-wide xxs:text-[1.35rem] xs:text-[1.45rem] s:text-[1.51rem] s-plus:text-[1.7rem] sm:text-[2rem] md:text-[2.3rem] lg:text-[2.8rem] font-semibold select-none xxs:text-shadow-[0.1rem_0.1rem_0.05rem] sm:text-shadow-[0.2rem_0.2rem_0.05rem] text-shadow-charcoal-blue/80">
                        { locale === "en" ? localization.en.text_2 : localization.id.text_2 }
                    </h1>
                    <h2 className="order-1 mb-1 font-jetbrains-mono text-charcoal-blue tracking-wide font-extrabold select-none xxs:text-[1.25rem] xs:text-[1.34rem] sm:text-[1.4rem] md:text-[1.5rem] lg:text-[1.875rem]">
                        { locale === "en" ? localization.en.text_1 : localization.id.text_1 }
                    </h2>
                    <h2 className="order-3 font-jetbrains-mono text-charcoal-blue tracking-wide font-extrabold select-none xxs:text-[1.18rem] xs:text-[1.23rem] sm:text-[1.43rem] md:text-[1.52rem] lg:text-[1.9rem]">
                        { locale === "en" ? localization.en.text_3 : localization.id.text_3 }
                    </h2>
                    <p className="order-4 font-jetbrains-mono text-charcoal-blue font-semibold text-justify xxs:leading-4 sm:leading-5 select-none xxs:text-[0.75rem] sm:text-sm">
                        { locale === "en" ? localization.en.description_1 : localization.id.description_1 }
                    </p>
                </div>
                <div className="py-2 flex items-start justify-center gap-3">
                    <AboutMe>
                        <span className="text-silver-haze font-jetbrains-mono xxs:text-sm font-extrabold">
                            { locale === "en" ? localization.en.button_1 : localization.id.button_1 }
                        </span>
                        <svg className="text-silver-haze w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path className="fill-current" d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
                        </svg>
                    </AboutMe>
                    <HireMe>
                        <span className="text-silver-haze font-jetbrains-mono xxs:text-sm font-extrabold">
                            { locale === "en" ? localization.en.button_2 : localization.id.button_2 }
                        </span>
                        <svg className="text-silver-haze w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path className="fill-current" d="M153.6 29.9l16-21.3C173.6 3.2 180 0 186.7 0C198.4 0 208 9.6 208 21.3V43.5c0 13.1 5.4 25.7 14.9 34.7L307.6 159C356.4 205.6 384 270.2 384 337.7C384 434 306 512 209.7 512H192C86 512 0 426 0 320v-3.8c0-48.8 19.4-95.6 53.9-130.1l3.5-3.5c4.2-4.2 10-6.6 16-6.6C85.9 176 96 186.1 96 198.6V288c0 35.3 28.7 64 64 64s64-28.7 64-64v-3.9c0-18-7.2-35.3-19.9-48l-38.6-38.6c-24-24-37.5-56.7-37.5-90.7c0-27.7 9-54.8 25.6-76.9z"/>
                        </svg>
                    </HireMe>
                </div>
            </div>
        </Section>
    )
}