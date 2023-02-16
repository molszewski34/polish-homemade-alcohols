import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import {
  HeaderWrapper,
  HeaderImgWrapper,
  HeroImgText,
  Category,
  CategoryTile,
} from "../themes/Header-styles"

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderImgWrapper>
        <StaticImage
          src="../images/marco-bianchetti-9JSO1c5ryz0-unsplash.jpg"
          alt="Polish Homemade Wines Header"
          placeholder="blurred"
        />

        <HeroImgText>
          <h2>
            Homemade <span>
            Polish
              </span>  Alcohols
          </h2>
          <h4>
            Blog about making Polish homemade alcohols you probably never saw
            and never taste
          </h4>
 
        </HeroImgText>
      </HeaderImgWrapper>
      <Category>
        <Link to="/ciders">
          <CategoryTile>
            <StaticImage
              src="../images/hard-apple-cider-stock-2000x1333.jpg"
              alt=""
              placeholder="blurred"
            />
            <h5 className="cider">Ciders</h5>
          </CategoryTile>
        </Link>
        <Link to="/wines">
          <CategoryTile>
            <StaticImage
              src="../images/brett-jordan-yS-RmAfMoCo-unsplash.jpg"
              alt=""
              placeholder="blurred"
            />
            <h5 className="wine">Wines</h5>
          </CategoryTile>
        </Link>
        <Link to="/tinctures">
          <CategoryTile>
            <StaticImage
              src="../images/egor-myznik-68iAoftYXX4-unsplash.jpg"
              alt=""
              placeholder="blurred"
            />
            <h5 className="tincture">Tinctures</h5>
          </CategoryTile>
        </Link>
      </Category>
    </HeaderWrapper>
  )
}

export default Header
