import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
// import FooterWrapper from "../themes/FooterWrapper"
import { Logo } from "./Navbar/Logo"

const FooterSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: #1e293b;
  font-weight: 500;
  color: #e2e8f0;
  padding: 1em;
  gap: 0.5em;
  
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
   
    gap: 0.5em;
  }

  li {
    list-style: none;
  }
  .contact {
    font-weight: bold;
  }
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-around;
  }
`
const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: .5em;
  align-items: left;
  color: #cbd5e1;
  font-weight: 700;
  .logo{
    margin-bottom: 3em;
  }
  a{
    text-decoration: none;
    color: #cbd5e1;
  }

`


export const Footer = () => {
  return (
    <FooterSection>
      <FooterWrapper>
        <Logo className="logo"/>
        <Link to="/">Home</Link>
        <Link to="/wines">Wines</Link>

        <Link to="/ciders">Ciders</Link>
        <Link to="/tinctures">Tinctures</Link>
      </FooterWrapper>
      
      <FooterWrapper>
      <Link className="contact">CONTACT</Link>
      <Link>email: mariuszolszewski21@gmail.com</Link>
      </FooterWrapper>
    </FooterSection>
  )
}

// export const Navbar = () => {
//     return (
//       <WrapperNav>
//           <Logo>
//          Polo <span>Alkoholo</span>
//           </Logo>
//           {/* <AboutMe>
//   About me
//           </AboutMe> */}
//       </WrapperNav>
//     )
//   }

// rgba(251, 146, 60, 0.87)
