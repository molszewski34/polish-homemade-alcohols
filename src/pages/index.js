import * as React from "react"


import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link, graphql } from "gatsby"



// const IndexPage = () => (
//   <Layout>
//     <Seo title="Home" />
//   <h1>Home Page</h1>
// <Link to="/blog">Link to blog</Link>
//   </Layout>
// )

const IndexPage = ({
  data: {
    allGraphCmsArticle: {edges},
 
  },
}) => (
<Layout>
{edges.map((page, index) => {
const homePageBlogRoll = page.node
 return(
  <div index={index}>
    <img src={page.node.thumbnail.url} alt="" />
    <span>{page.node.date}</span>
<Link to={page.node.slug}>  {homePageBlogRoll.title}</Link>
<p>{page.node.description}</p>

 </div>
 )

 }


)
}
</Layout>
)

export const query = graphql`

query HomePageQuery {
  allGraphCmsArticle {
    edges {
      node {
        slug
        tags
        thumbnail {
          url
        }
        description
        date

        title
      }
    }
  }
}
`



// export const query = graphql`
//   query HomePageQuery {
//    allGraphCmsArticle {
//     edges {
//       node {
//         slug
//         tags
//         thumbnail {
//           url
//         }
//         description
//         date
//         content {
//           markdown
//         }
//         title
//       }
//     }
//   }
//   }
// `
// export const query = graphql`
//   query HomePageQuery {
//     site {
//       siteMetadata {
//         description
//       }
//     }
//   }
// `


export const Head = () => <Seo title="Home" />

export default IndexPage
