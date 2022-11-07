import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Markdown from "../themes/Markdown-styles"
import { Link } from "gatsby"



const articlesTemplate = ({ pageContext: { data } }) => {
  // const { previous, next } = pageContext
  const image = getImage(data.thumbnail)

  const Article = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 640px) {
      max-width: 60vw;
      margin-inline: auto;
    }
  `

  const ArticleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* max-width: 60vw; */
    padding: 0 1em;
    gap: 1em;
    h1 {
      margin-top: 0.5em;
    }
    span {
      font-weight: 600;
      margin-bottom: 1em;
    }
    @media (min-width: 640px) {
      img {
        /* max-height: 400px; */
        max-width: 1100px;
        /* height: auto; */
        aspect-ratio: 3/1;
        /* display: block; */
      }
    }
  `

  const TextRed = styled.h1`
    color: red;
  `
  const ArticleTags = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: start;
    margin-left: 1em;
    margin-bottom: 3em;
    button {
      margin-right: 0.5em;
    padding: 0.4em 0.5em;
    font-weight: 600;
    border: 1px solid #6b7280;
    border-radius: 5px;
    background-color: #fff;
    /* background-color: #fecaca; */
    /* color: #a21caf; */
    color: #64748b;
    cursor: pointer;
    :hover{
      background-color: #f1f5f9;
    }
  }

    h4 {
      margin-right: 0.5em;
    }
  `

  // const Imgs = styled.img`
  //   width: 300px;
  //   height: 300px;
  // `

  return (
    <Layout>
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

        {/* <ul

        >
          <li>
            {previous && (
              <Link to={previous.slug} rel="prev">
                ← {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.slug} rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </ul> */}
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
