import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: "PT Sans", san-serif;
    background-color: #0C0C0C;
    color: white;
  }

  a {
    text-decoration: none;
    color: #0c0c0c;
    cursor: pointer;
  }

  p {
    @media only screen and (max-width: 768px) {
      font-size: 15px;
    }
  }
`
export default GlobalStyle
