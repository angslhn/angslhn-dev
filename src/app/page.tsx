import { JSX } from "react"

import Header from "@/components/header"
import Main from "@/components/main"
import Footer from "@/components/footer"
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
