import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link, graphql } from "gatsby"



// styled Components
import Tile from "../themes/Components/Tile"
import {
  FlexCenter,
  Heading,
  ReadMoreBtn,
  Button,
  Tags,
} from "../themes/Pages/PageStyles"


const Wines = ({
  data: {
    allGraphCmsArticle: { edges },
  },
}) => (
  <Layout>

    <Heading id="news">Wines</Heading>
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
      
              <Link to={`/${page.node.slug}`}>
                <h3>{homePageBlogRoll.title}</h3>
              </Link>
              <span>{page.node.date}</span>
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
  query WinesPageQuery {
    allGraphCmsArticle(filter: { tags: { eq: "wine" } }) {
      edges {
        node {
          slug
          tags
          thumbnail {
            gatsbyImageData(placeholder: BLURRED)
          }

          description
          date
          title
        }
      }
    }
  }
`

export const Head = () => <Seo title="Wines" />

export default Wines
