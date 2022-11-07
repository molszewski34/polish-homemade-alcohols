import styled from "styled-components"
export const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10em;
`

export const FlexCenter = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 300px);
    justify-content: center;
    grid-column-gap: 1em;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 300px);
    justify-content: center;
    grid-column-gap: 1em;
  }
`
export const Heading = styled.h3`
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

export const ReadMoreBtn = styled.button`
  margin-top: 1em;

  padding: 0.5em;
  font-size: 1.5em;
  font-weight: 600;

  border-radius: 5px;
  border: 2px solid #6b7280;

  background-color: #fff;
  color: #6b7280;
  cursor: pointer;
  place-self: center;
  :hover {
    opacity: 0.7;
  }
`

export const Tags = styled.div`
  display: flex;
  gap: 0.5em;

  bottom: 1em;
  button {
    padding: 0.4em 0.5em;
    font-weight: 600;
    border: 1px solid #6b7280;
    border-radius: 5px;
    background-color: #fff;

    color: #64748b;
    cursor: pointer;
    :hover {
      background-color: #f1f5f9;
    }
  }
`

