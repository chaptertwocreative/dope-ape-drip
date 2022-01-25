import Image from "next/image"
import React from "react"
import styled from "styled-components"
import LOGO from "@assets/logo-word.png"
import SKULL from "@assets/Dope-Ape-Skull.png"
import Link from "next/link"
import { useWindowSize } from "hooks/useWindowSize"
import { slide as Menu } from "react-burger-menu"
import { FlexContainer } from "components/atoms"

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 7.5rem;

  @media only screen and (max-width: 768px) {
    margin: 1rem 3rem;
  }
`

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    margin: 0 1rem;
    color: white;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      text-decoration: underline;
    }

    &:active {
      text-weight: 700;
    }

    @media only screen and (max-width: 768px) {
      font-size: 15px;
    }
    @media only screen and (max-width: 425px) {
      text-align: center;
      display: inline-block;
    }
  }

  @media only screen and (max-width: 425px) {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .social-links {
    margin: 0 0.5rem;
  }
`

const Logo = styled.div`
  height: 70px;
  width: 210px;

  @media only screen and (max-width: 425px) {
    height: 50px;
    width: 75px;
  }
`

const NavBar = ({ isHome }) => {
  const { height, width } = useWindowSize()
  return (
    <Container>
      <Link href="/" passHref>
        <Logo>
          <Image
            src={width <= 768 && isHome ? SKULL : LOGO}
            alt="Dope Ape Drip Society Logo"
            layout="responsive"
            height={width <= 768 && isHome ? 50 : 70}
            width={width <= 768 && isHome ? 75 : 210}
          />
        </Logo>
      </Link>
      <div style={{ display: "flex", alignItems: "center" }}>
        {isHome && (
          <Links>
            <Link href="/home#mint">Buy an ape</Link>
            <Link href="/home#roadmap">Roadmap</Link>
            <Link href="/store">Store</Link>
            <Link href="/home#team">Team</Link>
            <Link href="/home#faqs">FAQs</Link>
          </Links>
        )}
        <Links>
          <a
            href="https://instagram.com/dopeapedripsociety"
            target="_blank"
            rel="noreferrer"
            className="social-links"
          >
            <Image
              src="/instagram-logo-gray.svg"
              alt="instagram logo"
              height={30}
              width={30}
            />
          </a>
          <a
            href="https://twitter.com/dopeapedrip"
            target="_blank"
            rel="noreferrer"
            className="social-links"
          >
            <Image
              src="/twitter-logo-gray.svg"
              alt="twitter logo"
              height={30}
              width={30}
            />
          </a>
          <a
            href="https://discord.gg/dopeapedrip"
            target="_blank"
            rel="noreferrer"
            className="social-links"
          >
            <Image
              src="/discord-logo-gray.svg"
              alt="discord logo"
              height={30}
              width={30}
            />
          </a>
          <a
            href="https://opensea.io/collection/dopeapedripsociety"
            target="_blank"
            rel="noreferrer"
            className="social-links"
          >
            <Image
              src="/opensea-logo-gray.svg"
              alt="opensea logo"
              height={30}
              width={30}
            />
          </a>
        </Links>
        {isHome && width <= 425 && (
          <Menu right width={"85%"}>
            <Link href="/home#mint">Buy an ape</Link>
            <Link href="/home#roadmap">Roadmap</Link>
            <Link href="/store">Store</Link>
            <Link href="/home#team">Team</Link>
            <Link href="/home#faqs">FAQs</Link>
            <FlexContainer>
              <a
                href="https://instagram.com/dopeapedripsociety"
                target="_blank"
                rel="noreferrer"
                className="social-links"
              >
                <Image
                  src="/instagram-logo-gray.svg"
                  alt="instagram logo"
                  height={30}
                  width={30}
                />
              </a>
              <a
                href="https://twitter.com/dopeapedrip"
                target="_blank"
                rel="noreferrer"
                className="social-links"
              >
                <Image
                  src="/twitter-logo-gray.svg"
                  alt="twitter logo"
                  height={30}
                  width={30}
                />
              </a>
              <a
                href="https://discord.gg/dopeapedrip"
                target="_blank"
                rel="noreferrer"
                className="social-links"
              >
                <Image
                  src="/discord-logo-gray.svg"
                  alt="discord logo"
                  height={30}
                  width={30}
                />
              </a>
              <a
                href="https://opensea.io/collection/"
                target="_blank"
                rel="noreferrer"
                className="social-links"
              >
                <Image
                  src="/opensea-logo-gray.svg"
                  alt="opensea logo"
                  height={30}
                  width={30}
                />
              </a>
            </FlexContainer>
          </Menu>
        )}
      </div>
    </Container>
  )
}

export default NavBar
