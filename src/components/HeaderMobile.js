import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { CiApple } from "react-icons/ci"

import { GiHeartBottle, GiWineBottle } from "react-icons/gi"

const HeaderMobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
  header {
    font-size: 1.7em;
    font-weight: 600;
  }
  @media(min-width: 640px){
    display: none;
  }
`
const CategoryMobile = styled.div`
  display: flex;
  font-size: 1.2em;
  font-weight: 600;
  color: #fff;
  padding: 0.5em;
  background-color: red;
  margin-top: 0.5em;
  border-radius: 3px;
  align-items: center;
  cursor: pointer;
  svg {
    font-size: 1.5em;
  }
  a{
    text-decoration: none;
    display: flex;
    align-items: center;
  }
`

const HeaderMobile = () => {
  return (
    <HeaderMobileWrapper>
      <CategoryMobile
        style={{
          backgroundColor: "#22c55e",
        }}
      >
        <Link to="/ciders"
        style={{color: "#ecfccb"}}
        >
        <CiApple />
        Ciders
        </Link>
      </CategoryMobile>
      <CategoryMobile
        style={{
          backgroundColor: "#f87171",
        }}
      >
        <Link to="/wines"  style={{color: "#fef2f2"}}>
        <GiWineBottle />
        Wines
        </Link>
      </CategoryMobile>
      <CategoryMobile
        style={{
          backgroundColor: "#f59e0b",
        }}
      >
        <Link to="/tinctures" style={{color: "#fffbeb"}}>
        <GiHeartBottle/>
        
        Tinctures
        </Link>
      </CategoryMobile>
    </HeaderMobileWrapper>
  )
}

export default HeaderMobile
