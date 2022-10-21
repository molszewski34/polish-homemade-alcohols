import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Tile from "../themes/Tile"
import styled from "styled-components"

const FlexCenter = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: stretch;
  }
`
const Tags = styled.div`
  margin-top: 0.5em;
  display: flex;
  gap: 0.5em;
  button {
    padding: 0.4em 0.5em;
    font-weight: 600;
    border: none;
    border-radius: 5px;
    background-color: #fecaca;
    color: #374151;
    cursor: pointer;
  }
`

export default class BlogList extends React.Component {
  render() {
    const posts = this.props.data.allGraphCmsArticle.edges
    return (
      <Layout>
        <FlexCenter>
          {posts.map(({ node }) => {
            const title = node.title || node.slug
            const image = getImage(node.thumbnail)
            return (
              <Tile>
                <GatsbyImage
                  image={image}
                  alt={`Thumbnail of ${node.title} article`}
                />
                <div className="tile__wrapper">
                  <span>{node.date}</span>
                  <Link to={node.slug}> {title}</Link>
                  <p>{node.description}</p>
                  <Tags>
                    {node.tags.map(tag => {
                      return (
                        <Link to={`/tags/${tag}`}>
                          <button>{tag}</button>
                        </Link>
                      )
                    })}
                  </Tags>
                </div>
              </Tile>
            )
          })}
        </FlexCenter>
      </Layout>
    )
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allGraphCmsArticle(
      sort: { fields: publishedAt, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          slug
          tags
          thumbnail {
            gatsbyImageData(placeholder: BLURRED)
          }
          description
          date
          content {
            html
          }
          title
        }
      }
    }
  }
`
