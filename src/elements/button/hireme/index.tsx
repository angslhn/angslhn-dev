import { JSX } from "react"
import Link from "next/link"
import React from "react"

type ButtonProps = {
    children: React.ReactNode
}

export default function HireMe({ children }: ButtonProps): JSX.Element {
    return (
        <Link href="mailto:angslhn@gmail.com" className="hoverable flex-row-center gap-2.5 xxs:px-4 sm:px-6 xxs:py-1.5 sm:py-2.5 bg-charcoal-blue hover:bg-charcoal-blue/85 transition-colors duration-300 rounded-sm" draggable="false">
            { children }
        </Link>
    )
}