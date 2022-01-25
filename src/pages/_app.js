import { ThemeProvider } from "styled-components"
import "./styles/normalize.css"
import GlobalStyle from "./GlobalStyles"
import "./styles/navigation.css"
import Head from "next/head"

const theme = {
  primary: "#FBC50D"
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>Dope Ape Drip Society</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
