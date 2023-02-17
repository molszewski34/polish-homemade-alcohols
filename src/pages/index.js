import React from "react"
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

const IndexPage = ({
  data: {
    allGraphCmsArticle: { edges },
  },
}) => (
  <Layout>
    <>
      <title>Polish Homemade Alcohols</title>
      <meta name="" content="" />
    </>
    <Heading id="news">New Posts</Heading>
    <FlexCenter>
      {edges.map((page, index) => {
        const homePageBlogRoll = page.node
        const image = getImage(page.node.thumbnail)
        return (
          <Tile index={index}>
            <GatsbyImage
              placeholder="none"
              image={image}
              alt={`Thumbnail of ${page.node.title} article`}
            />
            <div className="tile_wrapper">
              <div className="meta-info">
                <Link to={page.node.slug}>
                  <h3>{homePageBlogRoll.title}</h3>
                </Link>
                <span>{page.node.date}</span>
                <p>{page.node.description}</p>
              </div>
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
      <ReadMoreBtn href="/blog">
        Read More
      </ReadMoreBtn>
    </Button>
  </Layout>
)

export const pageQuery = graphql`
  query HomePageQuery {
    allGraphCmsArticle(sort: { fields: date, order: DESC }) {
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

export default IndexPage
