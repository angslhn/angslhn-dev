import { JSX, ReactNode } from "react"
import Navigate from "@/utils/navigate"

type ButtonProps = {
    children: ReactNode
}

export default function Button({ children }: ButtonProps): JSX.Element {
    return (
        <button onClick={ () => Navigate("about") } className="hoverable px-6 py-2.5 bg-charcoal-blue font-jetbrains-mono font-extrabold text-[1.05rem] text-gray-200 rounded-md">
            { children }
        </button>
    )
}