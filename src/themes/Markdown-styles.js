import styled from "styled-components"

const Markdown = styled.section`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  margin: 1em;
  /* width: 300px; */
  gap: 1em;
  /* margin-bottom: 5em; */
  border-bottom: 1px solid #cbd5e1;
  padding-bottom: 1em;

  p {
    /* color: red; */
  }

  img {
    width: 100%;
    /* width: 300px; */
    /* height: 300px; */
    align-self: center;
    border-radius: 5px;
  }


  .article-inner-gallery{
    display: grid;
    /* grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) ); */
    grid-template-columns: 1fr;
    place-items: center;
    width: 40vw;
    place-self: center;
    /* background-color: #fef3c7; */
    /* border: 1px solid #000; */
    /* padding: 1em; */
    @media (min-width: 640px){
      grid-template-columns: 1fr 1fr;
    }
  }

  .article-inner-gallery img{
    width: 100%;
    height: 300px;;
  }

  .article-image-description{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
    
    img{
      /* height: auto; */
      object-fit: cover;
      height: 300px;
    }
    p{
      font-size: 0.8em;
      font-weight: 600;
    /* background-color: #fdba74; */
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
    /* margin: 1em 0; */
    color: #475569;
    /* width: 300px; */
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
