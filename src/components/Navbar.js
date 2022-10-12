import React from "react"
import styled from "styled-components"

//Styled Components

const WrapperNav = styled.nav`
  display: flex;
  justify-content: center;
  padding: 1em;
  background-color: #212121;
  @media (min-width: 640px){
    justify-content: left;
    padding-left: 2em;
  }

`

const Logo = styled.div`
  font-size: 1.2em;
  text-align: center;
  color: #eeeeee;
  font-family: "Edu VIC WA NT Beginner", cursive;


  span {
    color: red;
  }
`
const AboutMe = styled.div``

export const Navbar = () => {
  return (
    <WrapperNav>
      <Logo>
        Polo <span>Alkoholo</span>
      </Logo>
      {/* <AboutMe>
About me
        </AboutMe> */}
    </WrapperNav>
  )
}
