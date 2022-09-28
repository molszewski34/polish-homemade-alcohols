import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default class BlogList extends React.Component {
  render() {
    const posts = this.props.data.allGraphCmsArticle.edges
    return (
      <Layout>
        {posts.map(({ node }) => {
          const title = node.title || node.slug
          return <div key={node.slug}>
            
         <h1>  {title}</h1> 
            
            
            </div>
          
      
          
        })}
      </Layout>
    )
  }
}

// export const blogListQuery = graphql`
//   query blogListQuery($skip: Int!, $limit: Int!) {
//     allMarkdownRemark(
//       sort: { fields: [frontmatter___date], order: DESC }
//       limit: $limit
//       skip: $skip
//     ) {
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
export const blogListQuery = graphql`
query blogListQuery($skip: Int!, $limit: Int!) {
  allGraphCmsArticle(
    sort: {fields: publishedAt, order: DESC}
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