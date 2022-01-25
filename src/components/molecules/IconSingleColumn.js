import styled from "styled-components"
import Image from "next/image"
import { FlexContainer } from "components/atoms"
import { useWindowSize } from "hooks/useWindowSize"

const ImageContainer = styled.div`
  height: 126px;
  width: 126px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }

  @media only screen and (max-width: 768px) {
    height: 100px;
    width: 100px;
  }
  @media only screen and (max-width: 425px) {
    height: 180px;
    width: 180px;
  }
`
const Text = styled.div`
  text-align: center;
  h3 {
    margin: 1rem 0 0.5rem 0;
    font-size: 20px;
    @media only screen and (max-width: 768px) {
      font-size: 18px;
    }
    @media only screen and (max-width: 425px) {
      font-size: 22px;
    }
  }
  p {
    margin: 0;
    width: 200px;
    color: #dbdbdb;
    @media only screen and (max-width: 768px) {
      width: 150px;
      font-size: 14px;
    }
    @media only screen and (max-width: 425px) {
      font-size: 16px;
      width: 90%;
      margin: 0 auto;
    }
  }
`

const IconSingleColumn = ({ imageSrc, alt, title, description }) => {
  const { width } = useWindowSize()
  return (
    <FlexContainer direction="column">
      <ImageContainer>
        <Image
          src={imageSrc}
          alt={alt}
          layout="responsive"
          width={width <= 768 ? 100 : 126}
          height={width <= 768 ? 100 : 126}
        />
      </ImageContainer>
      <Text>
        <h3>{title}</h3>
        <p>{description}</p>
      </Text>
    </FlexContainer>
  )
}

export default IconSingleColumn
