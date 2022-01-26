import { FlexContainer, Line, RoadmapDot } from "components/atoms"
import styled from "styled-components"

const RoadmapItem = styled.p`
  width: 75%;
  line-height: 170%;
  font-size: 18px;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`

const RoadmapLine = ({ text, idx }) => {
  let percentage
  if (idx === 6) {
    percentage = 100
  } else {
    percentage = (idx + 1) * 14
  }
  return (
    <FlexContainer style={{ width: "100%" }} className="roadmapLineContainer">
      <Line className="roadmap-line" />
      <RoadmapDot>{percentage}%</RoadmapDot>
      <RoadmapItem>{text}</RoadmapItem>
    </FlexContainer>
  )
}

export default RoadmapLine
