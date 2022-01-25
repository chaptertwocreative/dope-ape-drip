import Layout from "components/Layout"
import styled from "styled-components"
import Image from "next/image"
import MANSION from "@assets/drippywood.png"
import LOGO from "@assets/Dope-Ape-Circle.png"
import { useWindowSize } from "hooks/useWindowSize"
import { Button } from "components/atoms"
import Link from "next/link"

const FullWidth = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`

const HomeCard = styled.div`
  position: absolute;
  padding: 2rem;
  border-radius: 6px;
  background-color: rgba(31, 31, 31, 0.9);
  bottom: 0;
  right: 0;
  transform: translate(4rem, 3rem);

  @media only screen and (max-width: 768px) {
    position: relative;
    transform: translate(0, 0);
    background-color: rgba(31, 31, 31, 0);
    padding-left: 0;
  }
`
const Logo = styled.div`
  height: 95px;
  width: 95px;
  @media only screen and (max-width: 425px) {
    margin: 0 auto;
  }
`

const SmallSentence = styled.p`
  width: 55%;
  font-size: 18px;
  line-height: 150%;
  margin-bottom: 3rem;
  @media only screen and (max-width: 768px) {
    width: 100%;
    font-size: 15px;
  }
`

export default function Home() {
  const { width } = useWindowSize()
  return (
    <Layout>
      <FullWidth>
        <Image
          src={MANSION}
          alt="inside of Drippywood mansion"
          layout="responsive"
          width={1200}
          height={800}
          priority
        />
        <HomeCard>
          <Logo>
            <Image
              src={LOGO}
              layout="responsive"
              height={95}
              width={95}
              alt="DAD circle logo"
            />
          </Logo>
          <h1 style={{ textAlign: width <= 425 && "center" }}>
            Welcome to the Dope Ape Society
          </h1>
          <Link href="/home" passHref>
            <Button
              style={{
                color: "#000",
                display: "block",
                width: 260,
                fontWeight: 700,
                fontSize: 26,
                margin: width <= 425 && "0 auto"
              }}
            >
              Enter
            </Button>
          </Link>
        </HomeCard>
      </FullWidth>
      <SmallSentence>
        A limited NFT collection where this token will double as your membership
        into the dopest community residing on the Ethereum Blockchain. Come on
        in!
      </SmallSentence>
    </Layout>
  )
}
