import React from "react"
import styled from "styled-components"

import { Logo } from "./Navbar/Logo"

//Styled Components

const WrapperNav = styled.nav`
  display: flex;
  justify-content: center;
  padding: 1em;
  background-color: #212121;
  a{
    text-decoration: none;
  }
  @media (min-width: 640px){
    justify-content: left;
    padding-left: 2em;
  }

`

// const Logo = styled.div`
//   font-size: 1.3em;
//   text-align: center;
//   color: #eeeeee;

//   font-family: 'Quicksand', sans-serif;


//   span {
//     color: red;
//   }
// `
// const AboutMe = styled.div``

export const Navbar = () => {
  return (
    <WrapperNav>
      {/* <Logo>
        Homemade <span>Polish</span> Wines
      </Logo> */}
      <Logo/>
     
 
    </WrapperNav>
  )
}
