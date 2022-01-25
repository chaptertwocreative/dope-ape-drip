import styled from "styled-components"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"

const Hamburger = styled.div`
  /* display: none; */
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  flex-wrap: wrap;
  width: 42px;

  a {
    text-decoration: none;
    margin: 0 1rem;
    color: white;
    font-size: 14px;
    cursor: pointer;
    display: none;

    &:active {
      text-weight: 700;
    }

    @media only screen and (max-width: 768px) {
      font-size: 15px;
      display: block;
    }
  }
`

const Lines = styled.div`
  width: 35px;
  height: 3px;
  background-color: #efefef;
  margin: 4px 0;
  transition: all 0.2s;
`

const MobileNav = () => {
  return (
    <Hamburger>
      <Lines />
      <Lines />
      <Lines />
      <div>
        <Link href="/#mint">Buy an ape</Link>
        <Link href="/#roadmap">Roadmap</Link>
        <Link href="/store">Store</Link>
        <Link href="/#team">Team</Link>
        <Link href="/#faqs">FAQs</Link>
      </div>
    </Hamburger>
  )
}

export default MobileNav
