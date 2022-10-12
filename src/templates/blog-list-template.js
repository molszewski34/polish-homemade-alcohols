import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
export default class BlogList extends React.Component {
  render() {
    const posts = this.props.data.allGraphCmsArticle.edges
    return (
      <Layout>
        {posts.map(({ node }) => {
          const title = node.title || node.slug
          const image = getImage(node.thumbnail)
          return (
            <div className="">
                     <GatsbyImage image={image} alt={`Thumbnail of ${node.title} article`} />

              <span>{node.date}</span>
              <Link to={node.slug}> {title}</Link>
              <p>{node.description}</p>
              {node.tags.map(tag => {
                return <Link to={`/tags/${tag}`}>{tag}</Link>
              })}
            </div>
          )
        })}
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
            gatsbyImageData(
              placeholder: BLURRED
            )
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
