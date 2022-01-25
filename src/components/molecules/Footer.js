import React from "react"
import styled from "styled-components"
import SocialIconLink from "../atoms/SocialIconLink"
import { FlexContainer } from "components/atoms"
import Image from "next/image"
import LOGO from "@assets/Dope-Ape-Circle.png"
import { useRouter } from "next/router"

const IFooter = styled.footer`
  position: relative;
  padding: 6rem 7.5rem 3rem 7.5rem;

  p {
    @media only screen and (max-width: 425px) {
      display: none;
    }
  }
`

const ImageContainer = styled.div`
  height: 185px;
  width: 185px;
  @media only screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }
`

const Line = styled.div`
  position: absolute;
  height: 30px;
  width: 100%;
  background-color: ${(props) => props.theme.primary};
  left: 0;
  bottom: 0;
`

const Footer = () => {
  const router = useRouter()
  const isHome = router.pathname !== "/"
  return (
    <IFooter style={{ display: isHome ? "block" : "none" }}>
      <FlexContainer alignItems="flex-end" style={{ marginBottom: "2rem" }}>
        <p>© Dope Ape Drip Society</p>
        <ImageContainer>
          <Image
            src={LOGO}
            alt="DADs circle logo"
            layout="responsive"
            height={185}
            width={185}
          />
        </ImageContainer>
        <FlexContainer gap="1rem" style={{ flexDirection: "row" }}>
          <SocialIconLink
            social="instagram"
            handles={{ instagram: "dopeapedripsociety" }}
          />
          <SocialIconLink
            social="twitter"
            handles={{ twitter: "dopeapedrip" }}
          />
          <SocialIconLink
            social="discord"
            handles={{ discord: "dopeapedrip" }}
          />
          <SocialIconLink social="opensea" handles={{ opensea: "" }} />
        </FlexContainer>
      </FlexContainer>
      <Line />
    </IFooter>
  )
}

export default Footer
