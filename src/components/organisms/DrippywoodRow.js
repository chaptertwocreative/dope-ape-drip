import styled from "styled-components"
import { IconSingleColumn } from "components/molecules"
import { FlexContainer, Title } from "components/atoms"
import { useWindowSize } from "hooks/useWindowSize"

const Container = styled.section`
  padding: 4rem 0;

  h2 {
    font-size: 64px;
    margin: 0;
    text-transform: uppercase;
    margin-bottom: 4rem;

    @media only screen and (max-width: 768px) {
      font-size: 50px;
    }
  }
`

const DrippywoodRow = ({ title, icons }) => {
  const { width } = useWindowSize()
  return (
    <Container>
      <Title>{title}</Title>
      <FlexContainer alignItems="flex-start" wrap gap={"2rem"}>
        {icons.map((icon) => {
          const { src, alt, title, description } = icon

          return (
            <IconSingleColumn
              key={title}
              imageSrc={src}
              title={title}
              description={description}
              alt={alt}
            />
          )
        })}
      </FlexContainer>
    </Container>
  )
}

export default DrippywoodRow
