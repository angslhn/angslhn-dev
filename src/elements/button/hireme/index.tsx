import { JSX } from "react"
import Link from "next/link"
import React from "react"

type ButtonProps = {
    children: React.ReactNode
    ref: React.Ref<HTMLAnchorElement>
}

export default function HireMe({ children, ref }: ButtonProps): JSX.Element {
    return (
        <Link ref={ ref } href="mailto:angslhn@gmail.com" className="big-hoverable flex-row-center gap-2.5 xxs:px-4 sm:px-6 xxs:py-2 sm:py-2.5 bg-charcoal-blue hover:bg-charcoal-blue/85 transition-colors duration-300 rounded-sm" draggable="false">
            { children }
        </Link>
    )
}