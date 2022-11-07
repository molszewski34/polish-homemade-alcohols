import styled from "styled-components"
const Heading = styled.h3`
  font-weight: 600;
  font-size: 1.4em;
  margin-left: 0.5em;
  padding-left: 0.3em;
  margin-top: 0.5em;
  border-left: 4px solid #047857;

  @media (min-width: 640px) {
    display: flex;
    justify-content: center;
    font-size: 3em;
    border-left: none;
    margin-bottom: 1, 5em;
    font-weight: 700;
  }
`

export default Heading