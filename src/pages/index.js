import * as React from "react"
import Header from "../components/Header"
import GlobalStyle from "../../GlobalStyle";
import { ThemeProvider } from "styled-components";
import globalTheme from "../../globalTheme";

const IndexPage = () => {
  return (
    <React.Fragment>
        <ThemeProvider theme={globalTheme}>
          <GlobalStyle />
          <Header lang="pt"/>
        </ThemeProvider>
    </React.Fragment>
  )
}

export default IndexPage
