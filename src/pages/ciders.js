import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link, graphql } from "gatsby"

// styled Components
import Tile from "../themes/Tile"
import {
  FlexCenter,
  Heading,
  ReadMoreBtn,
  Button,
  Tags,
} from "../themes/Pages/PageStyles"

const Ciders = ({
  data: {
    allGraphCmsArticle: { edges },
  },
}) => (
  <Layout>
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
  query CidersPageQuery {
    allGraphCmsArticle(
      filter: { tags: { eq: "cider" } }
      sort: { fields: date, order: DESC }
    ) {
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

export const Head = () => <Seo title="Ciders" />

export default Ciders
