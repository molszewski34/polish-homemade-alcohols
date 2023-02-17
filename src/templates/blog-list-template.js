import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Tile from "../themes/Components/Tile"
import { Tags, FlexCenter, Heading } from "../themes/Pages/PageStyles"
import styled from "styled-components"

const Blog = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const PageList = styled.ul`
  display: flex;
  margin: 1em;
  justify-content: center;
  align-items: center;
  gap: 1em;
  a {
    text-decoration: none;
    color: #000;
    font-size: 1.5em;
  }

  li {
    list-style: none;
  }
`

export default class BlogList extends React.Component {
  render() {
    const posts = this.props.data.allGraphCmsArticle.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : `/blog/${(currentPage - 1).toString()}`
    const nextPage = `/blog/${(currentPage + 1).toString()}`
    console.log(currentPage)
    return (
      <Layout>
     
  
    

        <Blog>
        <Heading id="news">Articles</Heading>

          <FlexCenter>
            {posts.map(({ node }) => {
              const title = node.title || node.slug
              const image = getImage(node.thumbnail)
              return (
                <Tile>
                  <title>{node.title}</title>
                  <meta name="description" content={node.description} />
                  <GatsbyImage
                    placeholder="none"
                    image={image}
                    alt={`Thumbnail of ${node.title} article`}
                  />
                  <div className="tile_wrapper">
                  <div className="meta-info">
                      <Link to={`/${node.slug}`}>
                      <h3>{title}</h3>
                    </Link>
                    <span>{node.date}</span>
                    <p>{node.description}</p>
                  </div>
                    </div>
                  <Tags>
                    {node.tags.map(tag => {
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

          <PageList>
            {!isFirst && (
              <Link to={prevPage} rel="prev">
                ← Previous Page
              </Link>
            )}
            {Array.from({ length: numPages }, (_, i) => (
                  // const nextPage = `/blog/${(currentPage + 1).toString()}`
              <li key={`pagination-number${i + 1}`}>
                <Link
                  to={`/blog/${i === 0 ? "" :  (i + 1)}`}
                  // to={`${/blog/+ 4}`}
                  style={{
                    color: i + 1 === currentPage ? "#ffffff" : "",
                    background: i + 1 === currentPage ? "#6b7280" : "",
                    padding: i + 1 === currentPage ? " 2px 7px" : "",
                  }}
                >
                  {i + 1}
                </Link>
              </li>
            ))}
            {!isLast && (
              <Link to={nextPage} rel="next">
                Next Page →
              </Link>
            )}
          </PageList>
        </Blog>
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
