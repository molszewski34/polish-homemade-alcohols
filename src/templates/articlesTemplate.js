import React from "react"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Markdown from "../themes/Components/Markdown-styles"
import { Link } from "gatsby"
import {
  Article,
  ArticleWrapper,
  ArticleTags,
} from "../themes/Posts/Articles-Styles"

const articlesTemplate = ({ pageContext: { data } }) => {
  const image = getImage(data.thumbnail)

  return (
    <Layout>
      <title>{data.title}</title>
      <Article>
        <ArticleWrapper>
          <h1>{data.title}</h1>
          <span>{data.lead}</span>
          <GatsbyImage
            image={image}
            alt={`Thumbnail of ${data.title} article`}
          />
        </ArticleWrapper>
        <Markdown dangerouslySetInnerHTML={{ __html: data.content.html }} />
        <ArticleTags>
          <h4>Tags:</h4>
          {data.tags.map(tag => {
            return (
              <Link to={`/tags/${tag}`}>
                <button>{tag}</button>
              </Link>
            )
          })}
        </ArticleTags>
      </Article>
    </Layout>
  )
}
export default articlesTemplate
