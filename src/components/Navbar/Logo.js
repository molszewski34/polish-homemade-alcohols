import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"

const LogoWrapper = styled.div`
  font-size: 1.3em;
  text-align: center;
  color: #eeeeee;
  /* font-family: "Edu VIC WA NT Beginner", cursive; */
  font-family: 'Quicksand', sans-serif;


  span {
    color: red;
  }
`



export const Logo = () => {
    return (

        <LogoWrapper>

          Homemade <span>Polish</span> Wines
        </LogoWrapper>

    )
  }