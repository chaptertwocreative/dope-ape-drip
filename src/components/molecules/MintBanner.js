import { useWindowSize } from "hooks/useWindowSize"
import styled from "styled-components"
import { Button } from "../atoms"

const Container = styled.div`
  background-color: ${(props) => props.theme.primary};
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  @media only screen and (max-width: 768px) {
    padding: 2.5rem 3rem;
  }
  @media only screen and (max-width: 430px) {
    padding: 2rem;
    flex-direction: column;
  }
`

const Text = styled.div`
  color: #1c1c1c;
  text-transform: uppercase;

  h2 {
    font-weight: 700;
    font-style: italic;
    font-size: 30px;
    margin: 0 0 0.5rem 0;
    @media only screen and (max-width: 768px) {
      font-size: 24px;
    }
    @media only screen and (max-width: 430px) {
      font-size: 20px;
      text-align: center;
    }
  }

  p {
    font-size: 20px;
    margin: 0;
    @media only screen and (max-width: 768px) {
      font-size: 16px;
    }
    @media only screen and (max-width: 430px) {
      margin-bottom: 1rem;
      text-align: center;
    }
  }
`

const MintBanner = () => {
  const { width } = useWindowSize()
  return (
    <Container id="mint">
      <Text>
        <h2>Buy an ape</h2>
        <p>Don&apos;t miss your chance to join the Drip</p>
      </Text>
      <Button
        italic
        uppercase
        color="#1C1C1C"
        style={{ width: width <= 768 ? 200 : 255 }}
      >
        Coming Soon
      </Button>
    </Container>
  )
}

export default MintBanner
