import * as React from "react"
import ContactForm from "../components/ContactForm"
import Layout from "../components/Layout"


const Contact = () => {
  const lang = "pt"
  return (
    <Layout lang={lang}>
      <ContactForm lang={lang}/>
    </Layout>
  )
}

export default Contact
