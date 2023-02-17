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



export const Navbar = () => {
  return (
    <WrapperNav>
      <Logo/>
     
 
    </WrapperNav>
  )
}
