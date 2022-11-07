import styled from "styled-components"

const Tile = styled.article`
  width: 300px;
  -webkit-box-shadow: 6px 5px 21px -7px rgba(66, 68, 90, 1);
  -moz-box-shadow: 6px 5px 21px -7px rgba(66, 68, 90, 1);
  box-shadow: 6px 5px 21px -7px rgba(66, 68, 90, 1);
  margin: 1em 1em 0 1em;
  display: flex;
  flex-direction: column;
  /* display: grid; */
 
  /* justify-content: space-around; */
  padding: 1em;
  border-radius: 8px;
  position: relative;
  /* max-height: 700px; */

  img{
    object-fit: cover;
    height: auto;
  }

  .gatsby-image-wrapper img{
      width: 300px;
      height: 200px;
      object-fit: cover;
    }

  span{
    /* margin-top: 1em; */
    font-size: .9em;
    color: #4b5563;
    font-weight: 600;
  }

  a{
    text-decoration: none;
    color: #000;
  }
  h3{
    font-size: 2em;
    font-weight: 800;
    color: #1e293b;
  }

  p{
    color: #475569;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical; 
    overflow: hidden;

  }

  button{

  }

  .tile__wrapper{
    
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    /* justify-content: space-around; */
    /* width: 300px; */
    gap: 0.5em;
    /* margin-bottom: 1em; */
    height: 100%;
  }

  @media(width: 640px){

    img{
      width: 100%;
      /* max-height: 200px; */
      /* display: block; */
    }
  }


`

// const TileWrapper = styled.div`
// padding: 1em;

// `

export default Tile


{/* <Tile index={index}>
<GatsbyImage image={image} alt={`Thumbnail of ${page.node.title} article`} />
<span>{page.node.date}</span>
<Link to={page.node.slug}> {homePageBlogRoll.title}</Link>
<p>{page.node.description}</p>
{page.node.tags.map(tag => {
  return <Link to={`/tags/${tag}`}>{tag}</Link>
})}
</Tile> */}