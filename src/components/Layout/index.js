import * as React from "react"
import Header from "../Header"
import Footer from "../Footer"
import GlobalStyle from "../../../GlobalStyle";
import { ThemeProvider } from "styled-components";
import globalTheme from "../../../globalTheme";

const Layout = ({lang, children}) => {
  return (
    <React.Fragment>
        <ThemeProvider theme={globalTheme}>
          <GlobalStyle />
          <Header lang={lang}/>
            {children}
          <Footer lang={lang}/>
        </ThemeProvider>
    </React.Fragment>
  )
}

export default Layout;