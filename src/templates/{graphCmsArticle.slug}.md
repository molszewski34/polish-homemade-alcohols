import React from "react"
import Layout from "../components/layout"

const Articles = ({data}) => {
    console.log(data)
    
  return (
    <Layout>
      <h1></h1>
    </Layout>
  )
}

export default Articles

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