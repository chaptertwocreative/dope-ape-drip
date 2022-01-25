import styled from "styled-components"

export const Button = styled.button`
  border: 0;
  background: none;
  background-color: ${(props) => props.color || props.theme.primary};
  border-radius: 6px;
  font-style: ${(props) => props.italic && "italic"};
  text-transform: ${(props) => props.uppercase && "uppercase"};
  color: white;
  padding: 1rem 2rem;
  text-align: center;
  font-size: 28px;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    font-size: 22px;
  }
`

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "space-between"};
  align-items: ${(props) => props.alignItems || "center"};
  align-content: ${(props) => props.alignContent || "center"};
  flex-wrap: ${(props) => props.wrap && "wrap"};
  gap: ${(props) => props.gap};

  @media only screen and (max-width: 425px) {
    flex-direction: ${(props) => props.direction || "column"};
  }
`

export const Title = styled.h2`
  font-size: 64px;
  margin: 0;
  text-transform: uppercase;
  margin-bottom: 1rem;
  @media only screen and (max-width: 768px) {
    font-size: 50px;
    margin-bottom: 2rem;
  }
`
export const RoadmapDot = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50px;
  background-color: #595959;
  border: 8px solid #fbc50d;
  @media only screen and (max-width: 768px) {
    height: 45px;
    width: 45px;
  }
  @media only screen and (max-width: 425px) {
    height: 40px;
    width: 40px;
    border-width: 6px;
  }
`

export const Line = styled.div`
  position: absolute;
  height: 180px;
  width: 8px;
  background-color: #fbc50d;
  transform: translate(34px, 50%);
  z-index: -1;

  @media only screen and (max-width: 768px) {
    transform: translate(26px, 50%);
    height: 175px;
  }
  @media only screen and (max-width: 425px) {
    display: none;
  }
`
