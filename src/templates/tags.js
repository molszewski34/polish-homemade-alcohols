import React from "react"

// Components
import { Link, graphql } from "gatsby"
import PropTypes from "prop-types"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  // const { edges } = data.allGraphCmsArticle.edges
  const {edges, totalCount } = data.allGraphCmsArticle
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <div>
      <h1>{tagHeader}</h1>
      <ul>
        {edges.map(({ node }) => {
          const { slug } = node
          const { title } = node
          return (
            <li key={slug}>
              <Link to={slug}>{title}</Link>
            </li>
          )
        })}
      </ul>
      {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
      <Link to="/tags">All tags</Link>
    </div>
  )
}

export default Tags

export const pageQuery = graphql`
  query TagPageQuery {
    allGraphCmsArticle {
      edges {
        node {
          tags
          title
          slug
        }
      }
      totalCount
    }
  }
`
Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allGraphCmsArticle: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            title: PropTypes.string.isRequired,
            slug: PropTypes.string.isRequired,
          }),
        }).isRequired
      ),
    }),
  }),
}
// export const pageQuery = graphql`
//   query($tag: String) {
//     allMarkdownRemark(
//       limit: 2000
//       sort: { fields: [frontmatter___date], order: DESC }
//       filter: { frontmatter: { tags: { in: [$tag] } } }
//     ) {
//       totalCount
//       edges {
//         node {
//           fields {
//             slug
//           }
//           frontmatter {
//             title
//           }
//         }
//       }
//     }
//   }
// `
