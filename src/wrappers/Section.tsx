"use client"

import { ReactNode, JSX } from "react"

type SectionProps = {
    children: ReactNode
    name: string
}

export default function Section({ children, name}: SectionProps): JSX.Element {
    return (
        <section className={`${name} h-screen w-full overflow-x-hidden`}>
            { children }
        </section>
    )
}