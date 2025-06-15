export type Resolution = {
    height: number,
    width: number
}

export type App = {
    locale: string,
    setLocale: (locale: string) => void
}

export interface Localization {
    header: {
        en: HeaderContent
        id: HeaderContent
    }
    main: {
        en: MainContent
        id: MainContent
    }
    footer: {
        en: FooterContent
        id: FooterContent
    }
    other: {
        en: OtherContent
        id: OtherContent
    }
}

export interface HeaderContent {
    menu: {
        nav_1: string
        nav_2: string
        nav_3: string
        nav_4: string
        nav_5: string
    }
}

export interface MainContent {
    home: {
        text_1: string
        text_2: string
        text_3: string
        description_1: string
        button_1: string
        button_2: string
    }
    about: {
        bio_text_1: string
        bio_text_2: string
        bio_text_3: string
        text_heading_title_1: string
        description_1: string
        description_2: string
        description_3: string
    }
    experience: {
        text_heading_title_1: string
        text_heading_title_2: string
        description_1: string
        description_2: string
        description_3: string
    }
    project: {
        text_heading_title_1: string
        description_1: string
        data_not_found: string
    }
    contact: {
        text_heading_title_1: string
        description_1: string
        description_2: string
        description_3: string
        button_1: string
    }
}

export interface FooterContent {
    text_1: string
}

export interface OtherContent {
    data_not_found: string
}