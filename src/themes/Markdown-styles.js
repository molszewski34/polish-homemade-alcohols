import styled from "styled-components"

const Markdown = styled.section`
  display: flex;
  flex-direction: column;
  margin: 1em;
  gap: 1em;
  border-bottom: 1px solid #cbd5e1;
  padding-bottom: 1em;

  p {

  }

  img {
    width: 100%;
    align-self: center;
    border-radius: 5px;
    max-height: 300px;
  }


  .article-inner-gallery{
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    width: auto;
    place-self: center;
    grid-gap: 1em;
    @media (min-width: 640px){
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  .article-inner-gallery img{
    width: 100%;
    max-height: 300px;
  }

  .article-image-description{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
    
    img{
      object-fit: cover;
      height: 300px;
    }
    p{
      font-size: 0.8em;
      font-weight: 600;
      color: #1e293b;
      padding: 0.5em;
      border-radius: 5px;
    }
  }

  .article-inner-gallery p{
    font-weight: 600;
    background-color: #fdba74;
    padding: 0.5em;
    border-radius: 5px;
  }

  blockquote{
    border-left: 2px solid #cbd5e1;
    padding-left: 1em;
    color: #475569;
  }


  @media (min-width: 640px){
    img{
      max-width: 300px;
      height: auto;

    }
  }
  .warning{
    color: #ef4444;
  }
 
`

export default Markdown
