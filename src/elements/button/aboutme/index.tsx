import { JSX, ReactNode } from "react"
import Navigate from "@/utils/navigate"

type ButtonProps = {
    children: ReactNode
}

export default function AboutMe({ children }: ButtonProps): JSX.Element {
    return (
        <button onClick={ () => Navigate("about") } className="big-hoverable flex-row-center gap-2.5 xxs:px-4 sm:px-6 xxs:py-2 sm:py-2.5 bg-charcoal-blue hover:bg-charcoal-blue/85 transition-colors duration-300 rounded-sm">
            { children }
        </button>
    )
}