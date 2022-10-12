import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import { Header } from "../components/Header"
import Tile from "../themes/Tile"
//styled Components
const Heading = styled.h3`
  font-weight: 600;
  font-size: 1.4em;
  margin-left: 0.5em;
  padding-left:0.3em;
  margin-top: 0.5em;
  border-left: 4px solid #047857;
`
const FlexCenter = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Tags = styled.div`
  margin-top: 0.5em;
  display: flex;
  gap: 0.5em;
  button {
    padding: 0.4em 0.5em;
    font-weight: 600;
    border: none;
    border-radius: 5px;
    background-color: #fecaca;
    color: #374151;
    cursor: pointer;
  }
`

const ReadMoreBtn = styled.button`
margin-top: 1em;
margin-bottom: 4em;
padding: .5em;
font-size: 1.5em;
font-weight: 600;
/* border: 2px solid rgba(251, 146, 60, 0.87); */
border-radius: 5px;
border: none;
background-color: rgba(251, 146, 60);
color: #fff;
cursor: pointer;
`

const IndexPage = ({
  data: {
    allGraphCmsArticle: { edges },
  },
}) => (
  <Layout>
    <Header />
    <Heading id="news">Recipes</Heading>
    <FlexCenter>
      {edges.map((page, index) => {
        const homePageBlogRoll = page.node
        const image = getImage(page.node.thumbnail)
        return (
          <Tile index={index}>
            <GatsbyImage
              image={image}
              alt={`Thumbnail of ${page.node.title} article`}
            />
            <div className="tile__wrapper">
            <span>{page.node.date}</span>
            <Link to={page.node.slug}>
              {" "}
              <h3>{homePageBlogRoll.title}</h3>{" "}
            </Link>
            <p>{page.node.description}</p>
            <Tags>
              {page.node.tags.map(tag => {
                return (
                  <Link to={`/tags/${tag}`}>
                    <button>{tag}</button>{" "}
                  </Link>
                )
              })}
            </Tags>
            </div>
          </Tile>
        )
      })}
      <Link to="/blog">
        <ReadMoreBtn>Read More</ReadMoreBtn>
      </Link>
    </FlexCenter>
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
            gatsbyImageData(placeholder: BLURRED)
          }
          description
          date
          title
        }
      }
    }
  }
`

export const Head = () => <Seo title="Home" />

export default IndexPage
