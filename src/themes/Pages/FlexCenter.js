import styled from "styled-components"
const FlexCenter = styled.section`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  /* max-width: 800px; */
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  @media (min-width: 640px) {
    /* flex-direction: row;
    align-items: stretch; */
    
    grid-template-columns: repeat(2, 300px);
    justify-content: center;
    grid-column-gap: 1em;
  }


  @media (min-width: 1024px) {
    /* flex-direction: row;
    align-items: stretch; */
  
    grid-template-columns: repeat(3, 300px);
    justify-content: center;
    grid-column-gap: 1em;
  }
`

export default FlexCenter
