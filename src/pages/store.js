import Layout from "components/Layout"
import styled from "styled-components"
import LOGO from "@assets/Dope-Ape-Circle.png"
import Image from "next/image"

const Container = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
`

export default function Page() {
  return (
    <Layout>
      <Container>
        <div style={{ height: 300, width: 300 }}>
          <Image src={LOGO} layout="responsive" height={95} width={95} />
        </div>
        <h2>Coming soon...</h2>
      </Container>
    </Layout>
  )
}
