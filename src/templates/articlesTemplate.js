import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const articlesTemplate = ({ data }) => {
  const post = data.graphCmsArticle

return (
  <Layout>
    <div>
      <div className="">
        <h1>{post.title}</h1>
        <p>{post.description}</p>
      </div>

      <div
        className=""
        dangerouslySetInnerHTML={{ __html: post.content.html }}
      ></div>

    </div>
  </Layout>
)
}
export default articlesTemplate



export const query = graphql`
query articleQuery {
  graphCmsArticle {
    date
    description
    content {
      html
    }
    tags
    thumbnail {
      gatsbyImageData(placeholder: BLURRED)
    }
    title
  }
}
`