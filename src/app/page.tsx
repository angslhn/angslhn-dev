import { JSX } from "react"

import Header from "@/layouts/header"
import SocialMedia from "@/fragments/sidebars/socialmedia"
import Main from "@/layouts/main"
import Footer from "@/layouts/footer"
import Cursor from "@/elements/cursor"
import Animation from "@/fragments/animation"
import AppProvider from "@/providers/AppProvider"
import { Localization } from "@/libs/types"

export default async function Page(): Promise<JSX.Element> {
  const response: Response = await fetch("http://localhost:5000/localization")

  const localization: Localization  = await response.json()

  return (
    <>
      <Cursor/>
      <AppProvider>
        <Header localization={ localization.header } />
        <SocialMedia/>
        <Main localization={ localization.main }/>
        <Footer localization={ localization.footer }/>
      </AppProvider>
      <Animation/>
    </>
  )
}
