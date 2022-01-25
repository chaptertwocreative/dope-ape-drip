import { Footer, NavBar } from "./molecules"
import styled from "styled-components"
import { useRouter } from "next/router"

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 7.5rem;

  @media only screen and (max-width: 768px) {
    padding: 0 3rem;
  }

  @media only screen and (max-width: 425px) {
    padding: 0 2rem;
  }
`

const Layout = ({ children }) => {
  const router = useRouter()
  const isHome = router.pathname !== "/"

  return (
    <>
      <NavBar isHome={isHome} />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

export default Layout
