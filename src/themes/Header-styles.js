import styled from "styled-components"

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
`

export const HeaderImgWrapper = styled.div`
  display: none;
  @media (min-width: 640px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  img {
    display: none;
    @media (min-width: 640px) {
      display: block;
    }
  }
`

export const HeroImgTextWrapper = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.3);
  margin: 0 1em;
  padding: 1em;
  border-radius: 5px;
  max-width: 60vw;
  z-index: 1;
  top: 30%;
  left: 15%;
  span {
    color: #dc2626;
    font-weight: 700;
  }
  @media (min-width: 640px) {
    background-color: rgba(0, 0, 0, 0 0.2);
    align-items: flex-start;
    text-align: left;
    top: 20%;
    left: 5%;
    margin: 0;
    margin-left: 3em;
    width: 50%;
    button {
      background-color: #1e293b;
    }
  }
`
export const HeroImgText = styled.div`
  background-color: #1e293b;
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Righteous", cursive;
  width: 100%;
  h2 {
    font-size: 2.5em;
    @media (min-width: 1024px) {
      font-size: 4em;
    }
  }
  span {
    color: #ff0000;
  }
`

export const Category = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 640px) {
    flex-direction: row;
    display: flex;
    margin-top: -1em;
  }
`

export const CategoryTile = styled.div`
  position: relative;

  :hover {
  }
  h5 {
    position: absolute;
    bottom: 1em;
    margin-left: 1em;
    color: #eeee;
    font-size: 1.1em;
    border-top: 3px solid;
  }

  .cider {
    border-color: #16a34a;
  }

  .wine {
    border-color: #881337;
  }
  a {
  }
  img {
    display: flex;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 640px) {
    max-width: 300px;

    img {
      border: 1px solid #ccc;
      box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);

      height: 300px;
      overflow: hidden;
      opacity: 0.3;
    }
  }

  :before,
  :after {
    background-color: rgba(0, 0, 0, 0.5);

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: "";
    transition: all 0.3s ease;
    z-index: 3;
    opacity: 0;
  }

  :hover:before,
  :hover:after {
    opacity: 0.25;
  }
`





