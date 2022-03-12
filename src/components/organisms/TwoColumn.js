import styled from "styled-components"
import { FlexContainer, Title } from "components/atoms"
import Image from "next/image"

const Text = styled.div`
  width: 60%;
  @media only screen and (max-width: 768px) {
    width: 50%;
  }
  @media only screen and (max-width: 430px) {
    width: 100%;
  }

  p {
    font-size: 18px;
    margin: 0;
    margin-bottom: 2rem;
    line-height: 175%;
    @media only screen and (max-width: 768px) {
      font-size: 15px;
    }
  }
`

const ImageContainer = styled.div`
  height: 375px;
  width: 375px;
  border-radius: 6px;
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    height: 255px;
    width: 255px;
  }
`

const TwoColumn = ({ title, paragraphs, imageSrc, alt }) => {
  return (
    <FlexContainer style={{ padding: "6rem 0" }} as="section" gap="2rem">
      <Text>
        <Title>{title}</Title>
        {paragraphs.map((para, id) => (
          <p key={id}>{para}</p>
        ))}
      </Text>
      <ImageContainer>
        <Image
          src={imageSrc}
          alt={alt}
          layout="responsive"
          height={375}
          width={375}
        />
      </ImageContainer>
    </FlexContainer>
  )
}

export default TwoColumn
