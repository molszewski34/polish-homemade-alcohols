import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const LogoWrapper = styled.div`
  font-size: 1.3em;
  text-align: center;
  color: #eeeeee;
  font-family: 'Righteous', cursive;
  span {
    color: red;
  }
  a{
    color: #fff;
    text-decoration: none;
  }
`

export const Logo = () => {
  return (
    <LogoWrapper>
      <Link to="/">   
        Homemade <span>Polish</span> Alcohols
      </Link>
    </LogoWrapper>
  )
}
