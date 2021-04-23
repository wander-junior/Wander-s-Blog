import * as React from "react"
import { Container, DefaultGrid } from "../../GlobalStyle"
import Layout from "../components/Layout"
import BlogDetails from "../components/BlogDetails"

const IndexPage = () => {
  return (
    <Layout lang={"pt"}>
      <Container>
        <DefaultGrid>
          <div>
          </div>
          <BlogDetails />
        </DefaultGrid>
      </Container>
    </Layout>
  )
}

export default IndexPage
