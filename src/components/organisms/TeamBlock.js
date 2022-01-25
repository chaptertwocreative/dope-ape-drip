import styled from "styled-components"
import Image from "next/image"
import { FlexContainer } from "components/atoms"
import SocialIconLink from "../atoms/SocialIconLink"

const ImageContainer = styled.div`
  height: 225px;
  width: 225px;
  border-radius: 6px;
  overflow: hidden;
  transition: transform 0.25s ease-in-out;

  &:hover {
    transform: scale(1.02, 1.02);
  }

  @media only screen and (max-width: 768px) {
    height: 200px;
    width: 200px;
  }

  @media only screen and (max-width: 425px) {
    width: 325px;
    height: 325px;
  }
`
const TeamBlock = ({ src, alt, name, role, handles }) => {
  const hasTwitter = handles["twitter"]
  const hasInstagram = handles["instagram"]
  return (
    <div>
      <ImageContainer>
        <Image
          src={src}
          alt={alt}
          layout="responsive"
          height={225}
          width={225}
        />
      </ImageContainer>
      <h3>{name}</h3>
      <p>{role}</p>
      <FlexContainer
        justify="flex-start"
        gap="1rem"
        style={{ flexDirection: "row" }}
      >
        {hasTwitter && <SocialIconLink social="twitter" handles={handles} />}
        {hasInstagram && (
          <SocialIconLink social="instagram" handles={handles} />
        )}
      </FlexContainer>
    </div>
  )
}

export default TeamBlock
