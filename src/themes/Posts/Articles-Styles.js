import styled from "styled-components";

export const Article = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #fff;
margin-top: 1em;
margin-bottom: 1em;
border-radius: 5px;
@media (min-width: 640px) {
  max-width: 60vw;
  margin-inline: auto;
}
`
export const ArticleWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0 1em;
gap: 1em;

h1 {
  margin-top: 0.5em;
}
span {
  font-weight: 600;
  margin-bottom: 1em;
}



@media (min-width: 640px) {
  img {

    max-width: 1100px;

    aspect-ratio: 3/1;

  }
}
`
export const ArticleTags = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: start;
margin-left: 2em;
margin-bottom: 1em;

button {
  margin-right: 0.5em;
padding: 0.4em 0.5em;
font-weight: 600;
border: 1px solid #6b7280;
border-radius: 5px;
background-color: #fff;
color: #64748b;
cursor: pointer;
:hover{
  background-color: #f1f5f9;
}
}

h4 {
  margin-right: 0.5em;
}
`