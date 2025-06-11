import { JSX, useState, useEffect } from 'react'
import Section from '@/wrappers/section'

type Resolution = {
    height: number,
    width: number
}

export default function Project(): JSX.Element {
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
        const $target = document.querySelector(".project") as HTMLElement
        
        const { width, height } = resolution

        if (width < 950 || height < 601) {
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
                    <h3 className="hoverable font-jetbrains-mono text-silver-haze font-extrabold select-none xxs:text-[1.5rem] sm:text-[1.6rem] px-2 py-1.5 bg-charcoal-blue rounded-sm">My Projects</h3>
                    <p className="font-jetbrains-mono text-silver-haze px-2 py-1.5 bg-charcoal-blue font-semibold select-none xxs:text-center lg:text-justify text-sm rounded-sm">Here are some projects I have been working on recently.</p>
                </div>
                <div className="xxs:h-[37rem] lg:h-[29.5rem] xxs:w-[19.5rem] xs:w-[21rem] lg:w-full flex-row-center">
                    <p className="font-jetbrains-mono text-charcoal-blue font-extrabold select-none xxs:text-[1rem] md:text-xl">Data could not be found!</p>
                </div>
            </div>
        </Section>
    )
}