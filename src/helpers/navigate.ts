import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollToPlugin)

export default function Navigate(section: string) {
    const target = document.querySelector("." + section)

    if (!target) return

    gsap.context(() => {
        gsap.to(window, { 
            duration: 1, 
            scrollTo: {
                y: target
            }, 
            ease: "power3.out",
        })
    })
}