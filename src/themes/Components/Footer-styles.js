import styled from "styled-components"

export const FooterSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1e293b;
  font-weight: 500;
  color: #e2e8f0;
  padding: 2em 0;
  gap: 1.5em;

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
    justify-content: space-around;
  }
`
export const FooterWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
gap: 1em;
@media (min-width: 640px) {
    justify-content: space-around;
    flex-direction: row;
  }
`

export const FooterLinks = styled.ul`
  display: flex;


  justify-content: center;
  gap: 1em;
  align-items: left;
  color: #cbd5e1;
  font-weight: 700;

  padding: 0 2em;
  .logo {
    display: flex;
    align-items: center;
    font-size: 3em;
  }
  a {
    text-decoration: none;
    color: #cbd5e1;
    font-size: 1, 5em;
  }
  svg {
    font-size: 1.5em;
  }
  .wrapper {
    display: flex;
    align-items: center;
  }
`
export const FooterContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5em;
  border-top: 1px solid #94a3b8;
  padding-top: 1em;
  @media (min-width: 640px) {
    border-top: none;
    padding-top: 0;
    text-align: left;
    
  }
`