"use client"

import { ReactNode, JSX } from "react"

type SectionProps = {
    children: ReactNode
    name: string
}

export default function Section({ children, name}: SectionProps): JSX.Element {
    return (
        <section className={`${name} w-full flex-row-center`}>
            { children }
        </section>
    )
}