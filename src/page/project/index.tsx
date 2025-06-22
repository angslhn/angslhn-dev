import gsap from "gsap"
import { JSX, useState, useEffect, useRef } from "react"
import { useApp } from "@/hooks/useApp"
import { API_URL } from "@/libs/api"
import { useMobile } from "@/hooks/useMobile"

import Section from "@/containers/Section"

import type { Resolution, ProjectContent } from "@/libs/types"

// Props Types
interface ProjectProps {
    localization: {
        en: ProjectContent
        id: ProjectContent
    }
}

// Fetch Response Types
interface Project {
    project: ProjectLocale[]
}

interface ProjectLocale {
    en: {
        image: string,
        title: string,
        description: string,
        release: number,
        source: string
    }
    id: {
        image: string,
        title: string,
        description: string,
        release: number,
        source: string
    }
}

export default function Project({ localization }: ProjectProps): JSX.Element {
    const [dataProject, setDataProject] = useState<ProjectLocale[]>([])
    const [resolution, setResolution] = useState<Resolution>({ height: 0, width: 0 })

    const wrapperRef = useRef<HTMLDivElement | null>(null) 
    const headingRef = useRef<HTMLHeadingElement | null>(null)
    const descriptionRef = useRef<HTMLHeadingElement | null>(null)
    const projectsRef = useRef<HTMLDivElement | null>(null) 

    const { locale } = useApp()
    const isMobile = useMobile()

    useEffect(() => {
        async function getProjectData(): Promise<void> {
            try {
                const response: Response = await fetch(API_URL + "/data/project")
                
                if (!response.ok) {
                    throw new Error("An error occurred while retrieving the project data.")
                }

                const { project }: Project = await response.json()

                setDataProject(project)
            } catch (error) {
                if (error instanceof Error) {
                    console.info(error.message)
                }  else {
                    console.info(error)
                }
            }
        }

        getProjectData()
    }, [])
    
    useEffect(() => {
        const handleResize = () => setResolution({ height: window.innerHeight, width: window.innerWidth })

        handleResize()

        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    useEffect(() => {
        const section = document.querySelector(".project") as HTMLElement
        
        const { width, height } = resolution

        if (section) section.classList.replace(width < 1024 || height < 601 ? "h-screen" : "h-[47rem]", width < 1024 || height < 601 ? "h-[47rem]" : "h-screen")
    }, [resolution])

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (isMobile) return

            gsap.fromTo(headingRef.current, {
                x: -80,
                scale: 0.9,
                opacity: 0
            }, {
                x: 0,
                scale: 1,
                opacity: 1,
                duration: 1,
                ease: "power3",
                delay: 0.3,
                scrollTrigger: {
                    trigger: wrapperRef.current,
                    start: "top 15%",
                    end: "bottom 15%",
                    toggleActions: "play reverse play reverse"
                }
            })

            gsap.fromTo(descriptionRef.current, {
                x: 80,
                scale: 0.9,
                opacity: 0
            }, {
                x: 0,
                scale: 1,
                opacity: 1,
                duration: 1,
                ease: "power3",
                delay: 0.6,
                scrollTrigger: {
                    trigger: wrapperRef.current,
                    start: "top 15%",
                    end: "bottom 15%",
                    toggleActions: "play reverse play reverse"
                }
            })

            gsap.fromTo(projectsRef.current, {
                x: -80,
                scale: 0.9,
                opacity: 0
            }, {
                x: 0,
                scale: 1,
                opacity: 1,
                duration: 1,
                ease: "power3",
                delay: 0.9,
                scrollTrigger: {
                    trigger: wrapperRef.current,
                    start: "top 15%",
                    end: "bottom 15%",
                    toggleActions: "play reverse play reverse"
                }
            })
        })

        return () => ctx.revert()
    }, [isMobile, resolution])

    return (
        <Section name="project">
            <div ref={ wrapperRef } className="h-full w-full flex-row-center">
                <div className="xxs:h-[45rem] lg:h-[37.5rem] xxs:w-full lg:w-[55rem] flex-col-center">
                    <div className="xxs:h-[8rem] xxs:w-[19.5rem] xs:w-[21rem] s:-w-[22.5rem] s-plus:w-[24rem] s-medium:w-[25.5rem] sm:w-[28.5rem] lg:w-full flex-col-center gap-2.5">
                        <h3 ref={ headingRef } className="big-hoverable font-jetbrains-mono text-silver-haze font-extrabold select-none xxs:text-[1.3rem] sm:text-[1.4rem] px-3 py-1.5 bg-charcoal-blue rounded-sm">
                            { localization[locale].text_heading_title_1 }
                        </h3>
                        <p ref={ descriptionRef } className="font-jetbrains-mono text-silver-haze px-2 py-1.5 bg-charcoal-blue font-semibold select-none xxs:text-center lg:text-justify text-sm rounded-sm">
                            { localization[locale].description_1 }
                        </p>
                    </div>
                    <div ref={ projectsRef } className="xxs:h-[37rem] lg:h-[27.5rem] xxs:w-[19.5rem] xs:w-[21rem] s:-w-[22.5rem] s-plus:w-[24rem] s-medium:w-[25.5rem] sm:w-[29.5rem] md:w-[33rem] lg:w-full flex-row-center flex-wrap border border-charcoal-blue/15 rounded-sm bg-silver-haze/15 backdrop-blur-sm">
                        {
                            dataProject?.length === 0 ?
                                <p className="px-4 font-jetbrains-mono text-charcoal-blue font-extrabold select-none text-center xxs:text-sm md:text-[1rem]">
                                    { localization[locale].data_not_found }
                                </p>
                            :
                                dataProject?.map((project, index): JSX.Element => (
                                    <div key={ index }>
                                    </div>
                                ))
                        }
                    </div>
                </div>
            </div>
        </Section>
    )
}