"use client"

import { JSX, useEffect, useState } from "react"
import { useApp } from "@/hooks/useApp"
import Section from "@/containers/Section"

import type { Resolution } from "@/libs/types"

// NotSupported Props
interface NotSupportedProps {
    localization: {
        en: string
        id: string
    }
}

export default function NotSupported({ localization }: NotSupportedProps): JSX.Element {
    const [resolution, setResolution] = useState<Resolution>({ height: 0, width: 0 })

    const { locale } = useApp()

    useEffect(() => {
        const handleResize = () => setResolution({ height: window.innerHeight, width: window.innerWidth })

        handleResize()

        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    useEffect(() => {
        const $target = document.querySelector(".not-supported") as HTMLElement

        const { height } = resolution

        if (height < 601) {
            $target.classList.add("h-[37.5625rem]")
            $target.classList.remove("h-screen")
        } else {
            $target.classList.remove("h-[37.5625rem]")
            $target.classList.add("h-screen")
        }
    }, [resolution])

    return (
        <Section name="not-supported">
            <div className="h-full w-full flex-row-center px-4">
                <span className="p-1.5 font-jetbrains-mono text-charcoal-blue text-sm font-bold text-justify leading-4 border border-charcoal-blue/15 rounded-sm bg-silver-haze/15 backdrop-blur-sm">
                    { localization[locale] }
                </span>
            </div>
        </Section>
    )
}