"use client"

import { useEffect, useState, ReactNode, JSX } from "react"

type SectionProps = {
    children: ReactNode
    name: string
}

export default function Section({ children, name }: SectionProps): JSX.Element {
    const [height, setHeight] = useState<number>(0)
    
    useEffect(() => {
        const updateHeight = () => setHeight(window.innerHeight)

        window.addEventListener('resize', updateHeight)

        updateHeight()

        return () => window.removeEventListener('resize', updateHeight)
    }, [])

    return (
        <section className={`${name} ${height < 550 ? "h-[37.5625rem]" : "h-screen"} w-full flex-row-center`}>
            { children }
        </section>
    )
}