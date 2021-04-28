import * as React from "react"
import { Container, DefaultGrid } from "../../GlobalStyle"
import Layout from "../components/Layout"
import BlogDetails from "../components/BlogDetails"

const IndexPage = () => {
  const lang = "en";

  return (
    <Layout lang={lang}>
      <Container>
        <DefaultGrid>
          <div>
          </div>
          <BlogDetails lang={lang}/>
        </DefaultGrid>
      </Container>
    </Layout>
  )
}

export default IndexPage
