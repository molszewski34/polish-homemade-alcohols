// import { createGlobalStyle } from "styled-components";
import styled from "styled-components"



const PageStyles = () => {
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
  const FlexCenter = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 1024px) {
      flex-direction: row;
      align-items: stretch;
    }
  `

  const Tags = styled.div`
    margin-top: 0.5em;
    display: flex;
    gap: 0.5em;
    button {
      padding: 0.4em 0.5em;
      font-weight: 600;
      border: none;
      border-radius: 5px;
      background-color: #fecaca;
      color: #a21caf;
      cursor: pointer;
    }
  `

  const Button = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10em;
    /* align-items: center; */
  `

  const ReadMoreBtn = styled.button`
    margin-top: 1em;
    /* margin-bottom: 4em; */
    padding: 0.5em;
    font-size: 1.5em;
    font-weight: 600;
    /* border: 2px solid rgba(251, 146, 60, 0.87); */
    border-radius: 5px;
    border: none;
    background-color: rgba(251, 146, 60);
    color: #fff;
    cursor: pointer;
    place-self: center;
  `
}

export default PageStyles
