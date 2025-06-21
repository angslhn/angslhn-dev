"use client"

import { useApp } from "@/hooks/useApp"
import { useSupported } from "@/hooks/useSupported"
import yearnow from "@/helpers/yearnow"

import type { JSX } from "react"
import type { FooterContent } from "@/libs/types"

interface FooterProps {
    localization: {
        en: FooterContent,
        id: FooterContent
    }
}

export default function Footer({ localization }: FooterProps): JSX.Element {
    const { locale } = useApp()
    const supported = useSupported()

    if (!supported) return <></>

    return (
        <footer className="h-14 w-full flex-row-center border-t border-charcoal-blue/15 bg-silver-haze/15 backdrop-blur-sm shadow-[0.1rem_0.1rem_0.5rem] shadow-gray-400/15">
            <span className="font-jetbrains-mono font-extrabold select-none xxs:text-[0.8rem] xxs:text-center lg:text-justify">
                { String(locale === "en" ? localization.en.text_1 : localization.id.text_1).replace("<Year>", yearnow()) }
            </span>
        </footer>
    )
}