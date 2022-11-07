import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link, graphql } from "gatsby"
import { Header } from "../components/Header"
// styled Components
import Tile from "../themes/Tile"
import Button from "../themes/Pages/Button"
import FlexCenter from "../themes/Pages/FlexCenter"
import Heading from "../themes/Pages/Heading"
import ReadMoreBtn from "../themes/Pages/ReadMoreBtn"
import Tags from "../themes/Pages/Tags"






const Ciders = ({
  data: {
    allGraphCmsArticle: { edges },
  },
}) => (
  <Layout>
    <Header />
    <Heading id="news">Ciders</Heading>
    <FlexCenter>
      {edges.map((page, index) => {
        const homePageBlogRoll = page.node
        const image = getImage(page.node.thumbnail)
        return (
          <Tile index={index}>
            <GatsbyImage
              image={image}
              alt={`Thumbnail of ${page.node.title} article`}
            />
            <div className="tile__wrapper">
              <span>{page.node.date}</span>
              <Link to={page.node.slug}>
                <h3>{homePageBlogRoll.title}</h3>
              </Link>
              <p>{page.node.description}</p>
   
            </div>
              <Tags>
                {page.node.tags.map(tag => {
                  return (
                    <Link to={`/tags/${tag}`}>
                      <button>{tag}</button>
                    </Link>
                  )
                })}
              </Tags>
          </Tile>
        )
      })}
    </FlexCenter>
    <Button>
      <Link to="/blog">
        <ReadMoreBtn>Read More</ReadMoreBtn>
      </Link>
    </Button>
  </Layout>
)

export const query = graphql`
  query CidersPageQuery {
    allGraphCmsArticle (filter: { tags: { eq: "cider" } }){
      edges {
        node {
          slug
          tags
          thumbnail {
            gatsbyImageData(placeholder: BLURRED)
          }
          content {
            markdown
            text
            raw
          }
          description
          date
          title
        }
      }
    }
  }
`

export const Head = () => <Seo title="Home" />

export default Ciders
