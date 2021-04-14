import * as React from "react"
import Header from "../components/header"
import GlobalStyle from "../../GlobalStyle";
import { ThemeProvider } from "styled-components";
import globalTheme from "../../globalTheme";

const IndexPage = () => {
  return (
    <React.Fragment>
        <ThemeProvider theme={globalTheme}/>
        <GlobalStyle />
        <Header />
    </React.Fragment>
  )
}

export default IndexPage
