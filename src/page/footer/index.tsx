import { JSX } from "react";

export default function Footer(): JSX.Element {
    return (
        <footer className="h-14 w-full flex-row-center backdrop-blur-sm bg-silver-haze/25 border-b border-gray-950/15 shadow-[0.1rem_0.1rem_0.5rem] shadow-gray-400/15">
            <span className="font-liberation-mono font-semibold text-sm">&copy; 2025 Aang Solihin. All rights reserved.</span>
        </footer>
    )
}