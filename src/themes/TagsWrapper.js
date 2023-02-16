
import styled from "styled-components"


const TagsWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: .5em;
margin: 2em 0;
li{
  list-style: none;

}
a{
  text-decoration: none;
  font-size: 1.2em;
  color: #475569;
}

ul{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5em;
}

.all-tags{
    font-size: 1.8em;
    font-weight: 600;
}
`


export default TagsWrapper