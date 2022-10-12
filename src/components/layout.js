import * as React from "react"
import  {Navbar}  from "./Navbar"
import { createGlobalStyle } from "styled-components"
import {Footer} from "./Footer"
const GlobalStyle = createGlobalStyle`
*, ::after, ::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body{
  font-family: 'Raleway', sans-serif;
}
`

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyle/>
      <Navbar />
      {children}
      <Footer/>
    </div>
  )
}

export default Layout
