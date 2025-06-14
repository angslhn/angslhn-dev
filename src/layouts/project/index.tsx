import { JSX, useState, useEffect } from 'react'
import { useApp } from '@/hooks/useApp'
import Section from '@/wrappers/section'

import { Resolution } from '@/libs/types'

interface ProjectProps {
    localization: {
        en: ProjectLocalization
        id: ProjectLocalization
    }
}

interface ProjectLocalization {
    text_heading_title_1: string
    description_1: string
}

export default function Project({ localization }: ProjectProps): JSX.Element {
    const [resolution, setResolution] = useState<Resolution>({ height: 0, width: 0 })

    const { locale } = useApp()
    
    useEffect(() => {
        const handleResize = () => setResolution({ height: window.innerHeight, width: window.innerWidth })

        handleResize()

        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    useEffect(() => {
        const $target = document.querySelector(".project") as HTMLElement
        
        const { width, height } = resolution

        if (width < 1024 || height < 601) {
            $target.classList.add("h-[47rem]")
            $target.classList.remove("h-screen")
        } else {
            $target.classList.remove("h-[47rem]")
            $target.classList.add("h-screen")
        }

    }, [resolution])

    return (
        <Section name="project">
            <div className="xxs:h-[45rem] lg:h-[37.5rem] xxs:w-full lg:w-[55rem] flex-col-center">
                <div className="xxs:h-[8rem] xxs:w-[19.5rem] xs:w-[21rem] s:-w-[22.5rem] s-plus:w-[24rem] s-medium:w-[25.5rem] sm:w-[28.5rem] lg:w-full flex-col-center gap-2.5">
                    <h3 className="big-hoverable font-jetbrains-mono text-silver-haze font-extrabold select-none xxs:text-[1.3rem] sm:text-[1.4rem] px-3 py-1.5 bg-charcoal-blue rounded-sm">
                        { locale === "en" ? localization.en.text_heading_title_1 : localization.id.text_heading_title_1 }
                    </h3>
                    <p className="font-jetbrains-mono text-silver-haze px-2 py-1.5 bg-charcoal-blue font-semibold select-none xxs:text-center lg:text-justify text-sm rounded-sm">
                        { locale === "en" ? localization.en.description_1 : localization.id.description_1 }
                    </p>
                </div>
                <div className="xxs:h-[37rem] lg:h-[29.5rem] xxs:w-[19.5rem] xs:w-[21rem] lg:w-full flex-row-center">
                    <p className="font-jetbrains-mono text-charcoal-blue font-extrabold select-none xxs:text-[1rem] md:text-xl">
                        Data could not be found!
                    </p>
                </div>
            </div>
        </Section>
    )
}