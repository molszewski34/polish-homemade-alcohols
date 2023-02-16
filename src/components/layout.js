import * as React from "react"
import  {Navbar}  from "./Navbar"
import { createGlobalStyle} from "styled-components"
// import styled from "styled-components"
import {Footer} from "./Footer"
import Header from "./Header"
import HeaderMobile from "./HeaderMobile"
const GlobalStyle = createGlobalStyle`
*, ::after, ::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body{
  font-family: 'Raleway', sans-serif;
  background-color: #ffedd5;
}

.height{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
main{
  flex-grow: 1;
}
`


const Layout = ({ children }) => {
  return (
    <>
    <div className="height">
      <GlobalStyle/>
      <Navbar />
      <Header/>
      <HeaderMobile/>
      <main>

      {children}
      </main>
      <Footer/>
    </div>
    </>
  )
}

export default Layout
