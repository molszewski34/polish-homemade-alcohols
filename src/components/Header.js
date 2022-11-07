import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const HeaderWrapper = styled.div`
  font-family: "Roboto", sans-serif;
  @media (min-width: 640px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
const HeaderImgWrapper = styled.div`
  position: relative;

  color: #fff;
  width: 100%;

  img {
    object-fit: cover;
    height: auto;
  }

  h2 {
    font-size: 1.5em;
    display: none;
  }

  h4 {
    font-weight: 600;
    font-size: clamp(0.5rem, 5vw, 1rem);
  }

  button {
    margin-top: 2em;
    padding: 0.5em 2em;
    border-radius: 20px;
  
    background-color: #1e293b;

    border: none;
    color: #fff;
    font-weight: 600;
    font-size: clamp(0.5rem, 3vw, 1rem);
    cursor: pointer;
    :hover {
      opacity: 0.9;
    }
    .background {

    }
    @media (min-width: 640px) {
      font-size: 1.3em;
      border-radius: 0;
      margin-top: 1em;

    }
  }

  @media (min-width: 640px) {
    justify-content: start;
    align-items: left;
    display: grid;
    grid-template-columns: 1fr;
    img {
      width: 100%;
      max-height: 450px;
      object-fit: cover;
    }
    h2 {
      font-size: 2.5em;
      display: flex;
      flex-wrap: wrap;
    }
    h4 {
      font-size: 1.5em;
      font-weight: 400;
    }
  }
`
const HeroImgTextWrapper = styled.div`
  position: absolute;
  align-self: center;
 /* justify-self: center; */
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
    button{
      background-color: #1e293b;
    }

  }
`
const Category = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 640px) {

    flex-direction: row;
    margin-top: -2em;
  }

`

const CategoryTile = styled.div`
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

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderImgWrapper>
        <StaticImage
          src="../images/marco-bianchetti-9JSO1c5ryz0-unsplash.jpg"
          alt="Polish Homemade Wines Header"
         
        />

        <HeroImgTextWrapper>
          <h2>
            Homemade <span>Polish</span> Alcohols
          </h2>
          <h4>
            Blog about making Polish homemade alcohols you probably never saw and never
            taste
          </h4>
          <Link to="#news">
            <button>Read More</button>
          </Link>
        </HeroImgTextWrapper>
      </HeaderImgWrapper>
      <Category>

        <Link to="/ciders">
          <CategoryTile>
            <StaticImage
              src="../images/hard-apple-cider-stock-2000x1333.jpg"
              alt=""
            />
            <h5 className="cider">Ciders</h5>
          </CategoryTile>
        </Link>
        <Link to="/wines">
          <CategoryTile>
            <StaticImage
              src="../images/brett-jordan-yS-RmAfMoCo-unsplash.jpg"
              alt=""
            />
            <h5 className="wine">Wines</h5>
          </CategoryTile>
        </Link>
        <Link to="/tinctures">
          <CategoryTile>
            <StaticImage
              src="../images/egor-myznik-68iAoftYXX4-unsplash.jpg"
              alt=""
            />
            <h5 className="tincture">Tinctures</h5>
          </CategoryTile>
        </Link>
      </Category>
    </HeaderWrapper>
  )
}
