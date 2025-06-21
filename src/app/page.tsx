import { Suspense, JSX } from "react"
import AppProvider from "@/providers/AppProvider"

import BGAnimation from "@/fragments/animation"
import Cursor from "@/elements/cursor"
import Header from "@/layouts/header"
import SocialMedia from "@/fragments/sidebars/socialmedia"
import Main from "@/layouts/main"
import Footer from "@/layouts/footer"
import Loading from "@/elements/loading"

import type { Localization } from "@/libs/types"

export default async function Page(): Promise<JSX.Element> {
    const ApiEndpoint = "https://angslhn-dev-api.vercel.app/data/localization"

    let localization: Localization

    try {
        const response: Response = await fetch(ApiEndpoint)

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

        localization = {} as Localization
    }

    return (
        <>
            <BGAnimation/>
            <Cursor/>
            <Suspense fallback={ <Loading/> }>      
                <AppProvider>
                    <Header localization={ localization.header } />
                    <SocialMedia/>
                    <Main localization={ localization.main }/>
                    <Footer localization={ localization.footer }/>
                </AppProvider>
            </Suspense>
        </>
  )
}
