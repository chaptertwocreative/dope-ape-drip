import styled from "styled-components"
import Image from "next/image"

const SocialContainer = styled.div`
  height: 30px;
  width: 30px;
`

const socialsMap = {
  twitter: "https://twitter.com/",
  instagram: "https://instagram.com/",
  discord: "https://discord.gg/",
  opensea: "https://opensea.io/collection/"
}

const SocialIconLink = ({ social, handles }) => {
  const handle = handles[social] ? handles[social] : ""
  return (
    <a href={`${socialsMap[social]}${handle}`} target="_blank" rel="noreferrer">
      <SocialContainer>
        <Image
          src={`/${social}-logo.svg`}
          alt={`${social} logo`}
          layout="responsive"
          height={30}
          width={30}
        />
      </SocialContainer>
    </a>
  )
}

export default SocialIconLink
