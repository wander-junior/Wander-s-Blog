import * as React from "react"
import Layout from "../components/Layout"
import AboutContent from '../components/AboutContent'

const AboutPage = () => {
  const lang = 'en';
  
  return (
    <Layout lang={lang}>
      <AboutContent lang={lang}/>
    </Layout>
  )
}

export default AboutPage
