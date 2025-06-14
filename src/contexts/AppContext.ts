"use client"

import { createContext } from "react"
import { App } from "@/libs/types"

export const AppContext = createContext<App>({
    locale: "en",
    setLocale: () => {}
})