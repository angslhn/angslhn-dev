import { JSX } from "react"

import Header from "@/page/header"
import Main from "@/page/main"
import Footer from "@/page/footer"
import Animation from "@/fragments/animation"

export default function Root(): JSX.Element {
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
      <Animation/>
    </>
  )
}
