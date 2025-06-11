import yearnow from "@/utils/yearnow";
import { JSX } from "react";

export default function Footer(): JSX.Element {
    const year = yearnow()

    return (
        <footer className="h-14 w-full flex-row-center border-t border-charcoal-blue/15 bg-silver-haze/15 backdrop-blur-sm shadow-[0.1rem_0.1rem_0.5rem] shadow-gray-400/15">
            <span className="font-jetbrains-mono font-extrabold select-none xxs:text-[0.7rem] sm:text-sm select-none xxs:text-center lg:text-justify">
                © { year } Aang Solihin. All rights reserved.
            </span>
        </footer>
    )
}