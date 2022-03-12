import styled from "styled-components"
import { useState, useRef, useEffect } from "react"

const Container = styled.div`
  border-bottom: 1px solid #d8d8d8;
  padding: 1rem 0;

  .question-section {
    background: none;
    border: none;
    cursor: pointer;
  }

  .answer {
    margin-left: 8px;
    margin-right: 8px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.6s ease;
    text-align: left;
    color: white;
    line-height: 170%;
  }

  .faq-question {
    color: ${(prop) => prop.theme.primary};
    font-size: 20px;
    text-align: left;
  }
`

const FaqLine = ({ question, answer }) => {
  const [active, setActive] = useState(false)
  const contentRef = useRef(null)

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px"
  }, [contentRef, active])

  const toggleAccordion = () => {
    setActive(!active)
  }

  return (
    <Container>
      <button
        onClick={toggleAccordion}
        className={`question-section ${active}`}
      >
        <p className="faq-question">{question}</p>
        <div
          ref={contentRef}
          className={active ? `answer answer-divider` : `answer`}
        >
          <p className="faq-answer">{answer}</p>
        </div>
      </button>
    </Container>
  )
}

export default FaqLine
