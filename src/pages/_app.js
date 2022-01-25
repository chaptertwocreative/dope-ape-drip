import { ThemeProvider } from "styled-components"
import "./styles/normalize.css"
import GlobalStyle from "./GlobalStyles"
import "./styles/navigation.css"

const theme = {
  primary: "#FBC50D"
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
