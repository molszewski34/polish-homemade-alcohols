import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const articlesTemplate = ({ pageContext: data }) => {
  const post = data
  console.log(data)
return (
  <Layout>
    <div>
      <div className="">
        <h1>{post.title}</h1>
        <p>{post.lead}</p>
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
    lead
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