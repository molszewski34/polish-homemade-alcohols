import styled from "styled-components"

const Tile = styled.article`
  -webkit-box-shadow: 6px 5px 21px -7px rgba(66, 68, 90, 1);
  -moz-box-shadow: 6px 5px 21px -7px rgba(66, 68, 90, 1);
  box-shadow: 6px 5px 21px -7px rgba(66, 68, 90, 1);
  margin: 1em 1em 0 1em;
  padding: 1em;
  border-radius: 8px;
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 200px 200px 10%;
  background-color: #fafaf9;


  @media(min-width: 640px){
    width: 300px;
  }

  span {
    font-size: 0.8em;
    color: #4b5563;
    font-weight: 600;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  h3 {
    margin-top: 1em;
    font-size: 1.5em;
    font-weight: 800;
    color: #1e293b;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  p {
    color: #475569;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  button {
  }

  .tile_wrapper{
    display: flex;
    flex-direction: column;
  
  }

  .meta-info {
    flex-direction: column;
    justify-content: space-around;
    gap: 0.5em;
    height:200px;
  }

  img{
    border-radius: 5px;
  }

  @media (width: 640px) {
    img {
      width: 100%;
    }
  }
`

export default Tile
