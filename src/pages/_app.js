import { ThemeProvider } from "styled-components";
import "./styles/normalize.css";
import GlobalStyle from "./GlobalStyles";
import "./styles/navigation.css";
import Head from "next/head";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import dynamic from "next/dynamic";
import UserContext from "context/User";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const theme = {
  primary: "#FBC50D",
};

export default function App({ Component, pageProps }) {
  function getLibrary(provider) {
    const library = new Web3Provider(provider);
    library.pollingInterval = 15000;
    return library;
  }

  const Web3ReactProviderDefault = dynamic(
    () => import("../components/defaultprovider"),
    { ssr: false }
  );

  return (
    <>
      <Head>
        <link rel='shortcut icon' href='/images/favicon.ico' />
        <title>Dope Ape Drip Society</title>
      </Head>

      <GlobalStyle />
      <ToastContainer />
      <Web3ReactProvider getLibrary={getLibrary}>
        <Web3ReactProviderDefault getLibrary={getLibrary}>
          <ThemeProvider theme={theme}>
            <UserContext>
              <Component {...pageProps} />
            </UserContext>
          </ThemeProvider>
        </Web3ReactProviderDefault>
      </Web3ReactProvider>
    </>
  );
}
