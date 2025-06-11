import { JSX } from "react";

export default function Footer(): JSX.Element {
    return (
        <footer className="h-14 w-full flex-row-center backdrop-blur-sm bg-silver-haze/25 border-b border-gray-950/15 shadow-[0.1rem_0.1rem_0.5rem] shadow-gray-400/15">
            <span className="font-jetbrains-mono font-extrabold xxs:text-[0.7rem] sm:text-sm xxs:text-center lg:text-justify">&copy; 2025 Aang Solihin. All rights reserved.</span>
        </footer>
    )
}