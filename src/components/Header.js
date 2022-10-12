import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const HeaderWrapper = styled.div`
  font-family: "Roboto", sans-serif;
`
const HeaderImgWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  img{
    width: 100vw;
    max-height: 300px;
  }

  h2 {
    /* margin-top: 1em; */
    font-size: 2em;

  }

  h4 {
    font-weight: 400;
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
  }

  @media (min-width: 640px) {
    justify-content: start;
    align-items: left;
    img{
    width: 100vw;
    max-height: 500px;
  }
  h2{
    font-size: 3em;
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
  @media (min-width: 640px) {
   background-color: rgba(0, 0, 0, 0);
   align-items: flex-start;
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
`
const Category = styled.div``

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
          <h2>Homemade Polish Wines</h2>
          <h4>Blog about making Polish wines you never saw and never taste </h4>
          <Link to="#news">
            <button>Read More</button>
          </Link>
        </HeaderImgTextWrapper>
      </HeaderImgWrapper>
      <Category>
        <CategoryTile>
          <StaticImage
            src="../images/hard-apple-cider-stock-2000x1333.jpg"
            alt=""
          />
          <h5 className="cider">Ciders</h5>
        </CategoryTile>
        <CategoryTile>
          <StaticImage
            src="../images/brett-jordan-yS-RmAfMoCo-unsplash.jpg"
            alt=""
          />
          <h5 className="wine">Wines</h5>
        </CategoryTile>
      </Category>
    </HeaderWrapper>
  )
}
