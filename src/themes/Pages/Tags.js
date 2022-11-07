import styled from "styled-components"
const Tags = styled.div`
  
  display: flex;
  gap: 0.5em;
  /* position: absolute; */
  bottom: 1em;
  button {

    padding: 0.4em 0.5em;
    font-weight: 600;
    border: 1px solid #6b7280;
    border-radius: 5px;
    background-color: #fff;
    /* background-color: #fecaca; */
    /* color: #a21caf; */
    color: #64748b;
    cursor: pointer;
    :hover{
      background-color: #f1f5f9;
    }
  }

`

export default Tags