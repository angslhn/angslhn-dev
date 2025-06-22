"use client"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { JSX, useRef } from "react"
import { useApp } from "@/hooks/useApp"
import Navigate from "@/helpers/navigate"

interface NavigationProps { 
    localization: { 
        en: NavigationLocalization
        id: NavigationLocalization
    }
    navigation: boolean,
}

interface NavigationLocalization {
    nav_1: string;
    nav_2: string;
    nav_3: string;
    nav_4: string;
    nav_5: string;
}

export default function Navigation({ localization, navigation }: NavigationProps): JSX.Element {
    const navigationRef = useRef<HTMLElement | null>(null)

    const { locale } = useApp()

    useGSAP(() => {
        const ctx = gsap.context(() => {
            gsap.to(navigationRef.current, {
                duration: 1,
                ease: "power3.out",
                x: navigation ? -12 : 250,
            })
        })

        return () => ctx.revert()
    }, { dependencies: [navigation] })

    return (
        <nav ref={ navigationRef } className="absolute w-[13rem] h-[15rem] top-[5rem] translate-x-[15.625rem] border border-charcoal-blue/15 rounded-sm bg-silver-haze/25 backdrop-blur-lg z-30">
            <ul className="flex-col-between text-charcoal-blue">
                <li className="flex relative items-center h-[3rem] w-full">
                    <svg className="ml-4 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path className="fill-current" d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
                    </svg>
                    <span onClick={() => Navigate("home")} className="absolute small-hoverable w-full text-center text-sm font-jetbrains-mono font-extrabold select-none hover:opacity-70">
                        { String(localization[locale].nav_1).toUpperCase() }
                    </span>
                </li>
                <li className="flex relative items-center h-[3rem] w-full">
                    <svg className="ml-4 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path className="fill-current" d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm80 256l64 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16L80 384c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
                    </svg>
                    <span onClick={() => Navigate("about")} className="absolute small-hoverable w-full text-center text-sm font-jetbrains-mono font-extrabold select-none hover:opacity-70">
                        { String(localization[locale].nav_2).toUpperCase() }
                    </span>
                </li>
                <li className="flex relative items-center h-[3rem] w-full">
                    <svg className="ml-4 h-6 pl-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path className="fill-current" d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"/>
                    </svg>
                    <span onClick={() => Navigate("experience")} className="absolute small-hoverable w-full text-center text-sm font-jetbrains-mono font-extrabold select-none hover:opacity-70">
                        { String(localization[locale].nav_3).toUpperCase() }
                    </span>
                </li>
                <li className="flex relative items-center h-[3rem] w-full">
                    <svg className="ml-4 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path className="fill-current" d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z"/>
                    </svg>
                    <span onClick={() => Navigate("project")} className="absolute small-hoverable w-full text-center text-sm font-jetbrains-mono font-extrabold select-none hover:opacity-70">
                        { String(localization[locale].nav_4).toUpperCase() }
                    </span>
                </li>
                <li className="flex relative items-center h-[3rem] w-full">
                    <svg className="ml-4 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M96 0C60.7 0 32 28.7 32 64l0 384c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L96 0zM208 288l64 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64zM496 192c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64z"/>
                    </svg>
                    <span onClick={() => Navigate("contact")} className="absolute small-hoverable w-full text-center text-sm font-jetbrains-mono font-extrabold select-none hover:opacity-70">
                        { String(localization[locale].nav_5).toUpperCase() }
                    </span>
                </li>
            </ul>
        </nav>
    )
}