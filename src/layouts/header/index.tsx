"use client"

import { JSX, useEffect, useState } from "react"
import { useApp } from "@/hooks/useApp"
import Menu from "@/fragments/sidebars/menu"

import type { HeaderContent } from "@/libs/types"
import Navigate from "@/helpers/navigate"

interface HeaderProps {
    localization: {
        en: HeaderContent
        id: HeaderContent
    }
}

export default function Header({ localization }: HeaderProps): JSX.Element {
    const [showMenu, setShowMenu] = useState<boolean>(false)

    const { locale, setLocale } = useApp()

    const toggleMenu = (): void => {
        setShowMenu(!showMenu)
    }

    useEffect(() => {
        document.documentElement.lang = locale
    }, [locale])

    useEffect(() => {
        const triggerScroll = () => setShowMenu(false)

        window.addEventListener("scroll", triggerScroll)

        return () => window.removeEventListener("scroll", triggerScroll)
    }, [])

    return (
        <header className="fixed top-0 left-0 z-30 xxs:border-b xxs:border-charcoal-blue/15 xxs:bg-silver-haze/10 xxs:backdrop-blur-[0.3rem] s-large:bg-transparent s-large:border-none s-large:backdrop-blur-none flex-row-between items-center w-full h-16">
            <div className="h-full xxs:w-[12rem] xxs:pl-3 s-plus:pl-4 sm:pl-6 lg:pl-8 flex-row-start">
                <div role="button" onClick={() => Navigate("home")} className="big-hoverable hover:opacity-80 transition-opacity ease-in-out duration-200" draggable="false">
                    <svg className="xxs:w-12 lg:w-14 text-charcoal-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                        <path className="fill-current" d="m270.5 537 83.6 96.1-121.5 230.5-149.3.5zm334.6 15.5 138-2.4 171 325.3H776.7z"/>
                        <path className="fill-current" d="m425.4 263.7 163.9 2.1 132.1 241-127.9 4.4L519 374.1h-26.2l-57.2 108.4 157.9 202.7-1 190.2-307-7.8 51.9-105 140.5 1.5 1.1-52.6L293.4 490zm13.3-36.2 131.4 1.9-66.7-121.8z"/>
                    </svg>
                </div>
            </div>
            <div className="relative h-full xxs:w-[12rem] xxs:pr-3 s-plus:pr-4 sm:pr-6 lg:pr-8 flex-row-end gap-1">
                <div className="flex-row-center xxs:pr-0.5 sm:pr-2 xxs:gap-1">
                    <span role="button" onClick={() => setLocale("en")} className="small-hoverable font-jetbrains-mono font-extrabold select-none text-charcoal-blue hover:text-charcoal-blue/80">EN</span>
                    <span className="select-none text-charcoal-blue">|</span>
                    <span role="button" onClick={() => setLocale("id")} className="small-hoverable font-jetbrains-mono font-extrabold select-none text-charcoal-blue hover:text-charcoal-blue/80">ID</span>
                </div>
                <svg onClick={() => toggleMenu() } className="big-hoverable xxs:!cursor-pointer sm:!cursor-none h-16 text-gray-1024" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path className="fill-current" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" d="M5 7h14M5 12h14M5 17h14"/>
                </svg>
                <Menu localization={{ en: localization.en.menu, id: localization.id.menu }} show={ showMenu }/>
            </div>
        </header>
    )
}