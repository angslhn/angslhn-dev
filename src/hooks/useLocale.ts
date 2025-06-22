"use client"

import { useEffect } from "react"
import getLocale from "@/helpers/locale"

import type { Locale } from "@/libs/types"

export const useLocale = (): Locale => {
    const storedLocale = typeof localStorage !== "undefined" ? localStorage.getItem("locale") : getLocale()

    useEffect(() => {
        if (!storedLocale) localStorage.setItem("locale", getLocale())
    }, [storedLocale])
    
    return storedLocale as Locale
}