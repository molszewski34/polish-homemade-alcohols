import { Link } from "gatsby"
import React from "react"
import { Logo } from "./Navbar/Logo"
import { CiApple } from "react-icons/ci"
import { GiHeartBottle, GiWineBottle } from "react-icons/gi"
import {
  FooterSection,
  FooterWrapper,
  FooterLinks,
  FooterContact,
} from "../themes/Footer-styles"

export const Footer = () => {
  const today = new Date()
  const year = today.getFullYear()
  return (
    <FooterSection>
      <FooterWrapper>
        <Logo
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "3em",
          }}
          className="logo"
        />
        <FooterLinks>
          <div className="wrapper">
            <GiWineBottle />
            <Link to="/wines">Wines</Link>
          </div>

          <div className="wrapper">
            <CiApple />
            <Link to="/ciders">Ciders</Link>
          </div>
          <div className="wrapper">
            <GiHeartBottle />
            <Link to="/tinctures">Tinctures</Link>
          </div>
        </FooterLinks>

        <FooterContact>
          <Link className="contact">CONTACT</Link>
          <Link style={{ fontSize: "1em" }}>
            Email: mariuszolszewski21@gmail.com
          </Link>
        </FooterContact>
      </FooterWrapper>
      <p style={{ fontSize: ".8em" }}>
        © {year} Mariusz Olszewski. All rights reserved.
      </p>
    </FooterSection>
  )
}
