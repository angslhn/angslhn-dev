"use client"

import { JSX, ReactNode, useEffect, useState } from "react"
import { AppContext } from "@/contexts/AppContext"
import getLocale from "@/helpers/locale"

import type { Locale } from "@/libs/types"

export default function AppProvider({ children }: { children: ReactNode }): JSX.Element {
    const [locale, setLocale] = useState<Locale>(getLocale())

    useEffect(() => {
        document.documentElement.lang = locale

        if(localStorage.getItem("locale")) {
            localStorage.setItem("locale", locale)
        }
    }, [locale])

    return (
        <AppContext.Provider value={{ locale, setLocale }}>
            { children }
        </AppContext.Provider>
    )
}