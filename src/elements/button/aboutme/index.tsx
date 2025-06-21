import { JSX, ReactNode } from "react"
import Navigate from "@/helpers/navigate"

type ButtonProps = {
    children: ReactNode
    ref: React.Ref<HTMLButtonElement>
}

export default function AboutMe({ children, ref }: ButtonProps): JSX.Element {
    return (
        <button ref={ ref } type="button" onClick={ () => Navigate("about") } className="big-hoverable flex-row-center gap-2.5 xxs:px-4 sm:px-6 xxs:py-2 sm:py-2.5 bg-charcoal-blue hover:bg-charcoal-blue/85 transition-colors duration-300 rounded-sm">
            { children }
        </button>
    )
}