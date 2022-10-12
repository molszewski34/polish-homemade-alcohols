import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const FooterSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(92, 34, 30);
  font-weight: 500;
  color: #9ca3af;
  padding: 1em;
  gap: 0.5em;
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
`

export const Footer = () => {
  return (
    <FooterSection>

        <Link>
         Home
        </Link>
        <Link>
          About me
        </Link>
        <Link>
       Winemaking tools
        </Link>
        <Link>
          Usefull Links
        </Link>
    
  
        <li className="contact">CONTACT</li>
        <li>mariuszolszewski21@gmail.com</li>
 
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
