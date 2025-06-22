"use client"

import { useEffect, useState } from "react"

export const useMobile = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const detectMobile = () => {
            const ua = navigator.userAgent || ""
            const isTouch = navigator.maxTouchPoints > 1
            const isHeightScreen = window.innerHeight > 700
            const isSmallScreen = Math.min(window.innerWidth, window.innerHeight) < 700

            const extendedMobileRE = /mobile|iphone|ipod|android.*mobile|blackberry|iemobile|opera mini|windows phone|kindle|palm|fennec|meego|nokia|symbian|redmi|pocket|psp|samsung.*mobile|xiaomi|realme|vivo|oppo|huawei/i
            const isMobileUA = extendedMobileRE.test(ua)

            const isModernIPad = isTouch && ua.includes("Macintosh") && ua.includes("Safari") && !ua.includes("Chrome")

            const result = isMobileUA || isModernIPad || (isTouch && isSmallScreen) || (isTouch && isHeightScreen)
            
            setIsMobile(result)
        } 

        detectMobile()

        window.addEventListener("resize", detectMobile)

        return () => window.removeEventListener("resize", detectMobile)
    }, [])

    return isMobile
}