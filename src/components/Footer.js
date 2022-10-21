import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
// import FooterWrapper from "../themes/FooterWrapper"
import { Logo } from "./Navbar/Logo"

const FooterSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: sticky;
  bottom: 0;
  left: 0;
  right: 0; */
  /* margin-top: 5em; */
  background-color: rgb(92, 34, 30);
  font-weight: 500;
  color: #9ca3af;
  padding: 1em;
  gap: 0.5em;
  /* margin-top: 3em; */
  /* font-weight: 600; */
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
  gap: .5em;
  align-items: center;
  color: #926f6c;
/* @media(min-width: 640px){
  display: flex;
  flex-direction: column;
  gap: .5em;
} */

`


export const Footer = () => {
  return (
    <FooterSection>
      <FooterWrapper>
        <Link>Home</Link>
        <Link>About me</Link>

        <Link>Winemaking tools</Link>
        <Link>Usefull Links</Link>
      </FooterWrapper>
      <Logo/>
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
