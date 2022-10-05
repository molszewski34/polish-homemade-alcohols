// import React from "react"
// import { graphql } from "gatsby"
// import Layout from "../components/layout"
// import { Link } from "gatsby"

// // import { GatsbyImage, getImage } from "gatsby-plugin-image"

// export default class BlogList extends React.Component {
//   render() {
//     const posts = this.props.data.allGraphCmsArticle.edges
//     const { currentPage, numPages } = this.props.pageContext
//     const isFirst = currentPage === 1
//     const isLast = currentPage === numPages
//     const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
//     const nextPage = (currentPage + 1).toString()
//     return (
//       <Layout>
//         {posts.map(({ node }) => {
      
          
//           const title = node.title || node.slug
//           return (
//             <div key={node.slug}>
//               <img src={node.thumbnail.url} alt="" />
         
//               <h1> {title}</h1>

//             </div>
//           )
//         })}
//         <div className="">

//           {!isFirst && (
//             <Link to={prevPage} rel="prev">
//               ← Previous Page
//             </Link>
//           )}
//                   {Array.from({ length: numPages }, (_, i) => (
//         <Link key={`pagination-number${i + 1}`} to={`/${i === 0 ? "" : i + 1}`}>
//           {i + 1}
//         </Link>
//       ))}
//           {!isLast && (
//             <Link to={nextPage} rel="next">
//               Next Page →
//             </Link>
//           )}
//         </div>
//       </Layout>
//     )
//   }
// }

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
          return <div key={node.slug}>{title}</div>
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
           url
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
