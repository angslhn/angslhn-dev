"use client"

import { JSX, ReactNode, useEffect, useState } from "react"
import { AppContext } from "@/contexts/AppContext"

export default function AppProvider({ children }: { children: ReactNode }): JSX.Element {
    const [locale, setLocale] = useState<"en" | "id">("en")

    useEffect(() => {
        const localeNow: "en" | "id" = String(window.navigator.language).toLowerCase().split("-")[0] === "id" ? "id" : "en"

        document.documentElement.lang = localeNow

        setLocale(localeNow)
    }, [])

    return (
        <AppContext.Provider value={{ locale, setLocale }}>
            { children }
        </AppContext.Provider>
    )
}