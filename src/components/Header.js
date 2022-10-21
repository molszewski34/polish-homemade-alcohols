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
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  img {
    width: 100vw;
    /* max-height: 300px; */
  }

  h2 {
    /* margin-top: 1em; */
    font-size: 1.8em;
  }

  h4 {
    font-weight: 400;
    font-size: .8;
    /* padding: 0 2em; */
  }

  button {
    margin-top: 2em;
    padding: 0.5em 2em;
    border-radius: 20px;
    background-color: rgb(255, 255, 255, 0.2);
    border: 1px solid #fff;
    color: #fff;
    font-weight: 600;
    @media(min-width: 640px){
      font-size: 1.3em;
      border-radius: 0;
      margin-top: 1em;
    }
  }

  @media (min-width: 640px) {
    justify-content: start;
    align-items: left;

    img {
      width: 100vw;
      max-height: 450px;

    }
    h2 {
      font-size: 2.5em;
    }
    h4 {
      font-size: 1.5em;
    }
  }
`
const HeaderImgTextWrapper = styled.div`
  position: absolute;
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
  span{
    color: #dc2626;
    font-weight: 700;
  }
  @media (min-width: 640px) {
    background-color: rgba(0, 0, 0, 0);
    align-items: flex-start;
    text-align: left;
    max-width: 40vw;
    margin: 0;
    margin-left: 3em;
  }
`

const CategoryTile = styled.div`
  position: relative;
  display: flex;
  margin-top: 1em;
  padding: 0 1em;

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
  @media (min-width: 640px) {

    width: 20%;
    min-width: 200px;
    margin-top: -20px;
    border-radius: 10px;
    img {
      border: 1px solid #ccc;
      box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);

      object-fit: cover;
      overflow: hidden;
    }
  }
`
const Category = styled.div`
  @media (min-width: 640px) {

    display: flex;
    justify-content: center;
  }
`

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderImgWrapper>
        <StaticImage
          src="../images/the-blowup-xXTLmxuwaH8-unsplash.jpg"
          alt="Polish Homemade Wines Header"
        />
        {/* <img src="../images/the-blowup-xXTLmxuwaH8-unsplash.jpg" alt="ja pierdole" /> */}
        <HeaderImgTextWrapper>
          <h2>Homemade <span>Polish</span>  Wines</h2>
          <h4>Blog about making Polish wines you probably never saw and never taste </h4>
          <Link to="#news">
            <button>Read More</button>
          </Link>
        </HeaderImgTextWrapper>
      </HeaderImgWrapper>
      <Category>
        <CategoryTile>
          {/* <Link to="/ciders"> */}
          <StaticImage
            src="../images/hard-apple-cider-stock-2000x1333.jpg"
            alt=""
          />
          <h5 className="cider">Ciders</h5>
          {/* </Link> */}
        </CategoryTile>
        <CategoryTile>
          <Link to="/wines">
            <StaticImage
              src="../images/brett-jordan-yS-RmAfMoCo-unsplash.jpg"
              alt=""
            />
            <h5 className="wine">Wines</h5>
          </Link>
        </CategoryTile>
        <CategoryTile>
        
            <StaticImage
              src="../images/egor-myznik-68iAoftYXX4-unsplash.jpg"
              alt=""
            />
            <h5 className="tincture">Tinctures</h5>
      
        </CategoryTile>
      </Category>
    </HeaderWrapper>
  )
}
