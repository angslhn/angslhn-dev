"use client"

import { JSX, ReactNode, useState } from "react"
import { AppContext } from "@/contexts/AppContext"
import { useLocale } from "@/hooks/useLocale"

import type { Locale } from "@/libs/types"

export default function AppProvider({ children }: { children: ReactNode }): JSX.Element {
    const [locale, setLocale] = useState<Locale>(useLocale() || "en")

    return (
        <AppContext.Provider value={{ locale, setLocale }}>
            { children }
        </AppContext.Provider>
    )
}