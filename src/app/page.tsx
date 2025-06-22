import { JSX } from "react"
import AppProvider from "@/providers/AppProvider"
import { API_URL } from "@/libs/api"

import BGAnimation from "@/fragments/animation"
import Cursor from "@/elements/cursor"
import Header from "@/layouts/header"
import Sidebar from "@/fragments/menu/sidebar"
import Main from "@/layouts/main"
import Footer from "@/layouts/footer"
import Loading from "@/elements/loading"

import type { Localization } from "@/libs/types"

export default async function Page(): Promise<JSX.Element> {
    let localization: Localization | undefined = undefined

    if (!API_URL) return (
        <>
            <BGAnimation/>
            <Cursor/>
            <Loading/>
        </>
    )

    try {
        const response: Response = await fetch(API_URL + "/data/localization")
    
        if (!response.ok) {
            throw new Error("An error occurred while retrieving the localization data.")
        }

        localization = await response.json()
    } catch (error) {
        if (error instanceof Error) {
            console.info(error.message)
        } else {
            console.info(error)
        }
    }

    return (
        <>
            <BGAnimation/>
            <Cursor/>
            {
                !localization ? (
                    <Loading />
                ) : (
                    <AppProvider>
                        <Header localization={ localization.header } />
                        <Sidebar/>
                        <Main localization={ localization.main }/>
                        <Footer localization={ localization.footer }/>
                    </AppProvider>
                )
            }
        </>
  )
}
