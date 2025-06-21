// Resolution Types
export type Resolution = {
    height: number,
    width: number
}

// App Types
export type App = {
    locale: "en" | "id",
    setLocale: (locale: "en" | "id") => void
}

// Localization Types
export interface Localization {
    header: HeaderLocale
    main: MainLocale
    footer: FooterLocale
    other: OtherLocale
}

export interface HeaderLocale {
    en: HeaderContent
    id: HeaderContent
}

export interface MainLocale {
    en: MainContent
    id: MainContent
}

export interface FooterLocale {
    en: FooterContent
    id: FooterContent
}

export interface OtherLocale {
    en: OtherContent
    id: OtherContent
}

// Header Localization Types
export interface HeaderContent {
    menu: MenuContent
}
// Header Localization Types
export interface HeaderContent {
    menu: MenuContent
}

export interface MenuContent {
    nav_1: string
    nav_2: string
    nav_3: string
    nav_4: string
    nav_5: string
}

// Main Localization Types
export interface MainContent {
    home: HomeContent
    about: AboutContent
    experience: ExperienceContent
    project: ProjectContent
    contact: ContactContent
    other: OtherContent
}

export interface HomeContent {
    text_1: string
    text_2: string
    text_3: string
    description_1: string
    button_1: string
    button_2: string
}

export interface AboutContent {
    bio_text_1: string
    bio_text_2: string
    bio_text_3: string
    text_heading_title_1: string
    description_1: string
    description_2: string
    description_3: string
}

export interface ExperienceContent {
    text_heading_title_1: string
    text_heading_title_2: string
    description_1: string
    description_2: string
    description_3: string
}

export interface ProjectContent {
    text_heading_title_1: string
    description_1: string
    data_not_found: string
}

export interface ContactContent{
    text_heading_title_1: string
    description_1: string
    description_2: string
    description_3: string
    button_1: string
}

// Footer Localization Types
export interface FooterContent {
    text_1: string
}

// Other Localization Types
export interface OtherContent {
    not_supported: string
}