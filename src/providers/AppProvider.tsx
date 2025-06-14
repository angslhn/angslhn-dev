"use client"

import { AppContext } from "@/contexts/AppContext"
import { JSX, ReactNode, useState } from "react"

export default function AppProvider({ children }: { children: ReactNode }): JSX.Element {
    const [locale, setLocale] = useState<string>("en")

    return (
        <AppContext.Provider value={{ locale, setLocale }}>
            { children }
        </AppContext.Provider>
    )
}