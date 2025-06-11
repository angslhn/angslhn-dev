"use client"

import { JSX, useEffect, useState } from "react"
import Link from "next/link"
import Menu from "@/fragments/sidebars/menu"

export default function Header(): JSX.Element {
    const [showMenu, setShowMenu] = useState<boolean>(false)

    const toggleMenu = (): void => {
        setShowMenu(!showMenu)
    }

    useEffect(() => {
        const triggerScroll = () => setShowMenu(false)

        window.addEventListener("scroll", triggerScroll)

        return () => window.removeEventListener("scroll", triggerScroll)
    }, [])

    return (
        <header className="fixed top-0 left-0 z-50 flex-row-between items-center w-full h-16">
            <div className="h-full xxs:w-[6rem] lg:w-[8rem] flex-row-center">
                <Link href="/" className="hoverable flex-row-center xxs:gap-0 lg:gap-0.5 hover:opacity-80 transition-opacity ease-in-out duration-200" draggable="false">
                    <svg className="xxs:w-12 lg:w-14 text-gray-950/80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                        <path className="fill-current" d="m270.5 537 83.6 96.1-121.5 230.5-149.3.5zm334.6 15.5 138-2.4 171 325.3H776.7z"/>
                        <path className="fill-current" d="m425.4 263.7 163.9 2.1 132.1 241-127.9 4.4L519 374.1h-26.2l-57.2 108.4 157.9 202.7-1 190.2-307-7.8 51.9-105 140.5 1.5 1.1-52.6L293.4 490zm13.3-36.2 131.4 1.9-66.7-121.8z"/>
                    </svg>
                </Link>
            </div>
            <div className="relative h-full xxs:w-[6rem] lg:w-[8rem] flex-row-center">
                <svg onClick={() => toggleMenu() } className="hoverable xxs:!cursor-pointer sm:!cursor-none h-16 text-gray-950" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path className="fill-current" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" d="M5 7h14M5 12h14M5 17h14"/>
                </svg>
                <Menu show={showMenu}/>
            </div>
        </header>
    )
}