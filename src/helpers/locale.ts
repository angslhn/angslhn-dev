import type { Locale } from "@/libs/types"

export default function getLocale(): Locale {
    if (typeof localStorage === "undefined") return "en"

    let locale: Locale = navigator.language.toLowerCase().split("-")[0] === "id" ? "id" : "en"

    const storedLocale = localStorage.getItem("locale")

    if (!storedLocale) {
        localStorage.setItem("locale", locale)
    } else {
        locale = storedLocale as Locale
    }

    return locale
}