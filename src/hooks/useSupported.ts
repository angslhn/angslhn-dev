import { useState, useEffect } from "react"

export const useSupported = (): boolean => {
    const [supported, setSupported] = useState<boolean>(true)
    
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth

            if (width < 320) {
                setSupported(false)
            } else {
                setSupported(true)
            }
        }

        window.addEventListener("resize", handleResize)

        handleResize()

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return supported
}