import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Markdown from "../themes/Markdown-styles"
const articlesTemplate = ({ pageContext: { data } }) => {
  const Article = styled.main`
    /* max-width: 650px; */
    /* margin-inline: auto; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `
  return (
    <Layout>
      <Article>
        <h1>{data.title}</h1>
        <span>{data.lead}</span>
        {/* <Markdown
          className=""
          dangerouslySetInnerHTML={{ __html: data.content.html }}
        /> */}
      </Article>
    </Layout>
  )
}
export default articlesTemplate

// export const query = graphql`
// query ($slug: String){
//   graphCmsArticle(slug: {eq: $slug})  {
//     date
//     description
//     lead
//     content {
//       html
//     }
//     tags
//     thumbnail {
//       gatsbyImageData(placeholder: BLURRED)
//     }
//     title
//     slug
//   }
// }
// `
