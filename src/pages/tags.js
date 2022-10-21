import React from "react"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
// import styled from "styled-components"
import Layout from "../components/layout"
import FlexWrapper from "../themes/FlexWrapper"
import TagsWrapper from "../themes/TagsWrapper"



const TagsPage = ({
  data: {
    allGraphCmsArticle: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
  <FlexWrapper>
    <Helmet title={title} />
    <TagsWrapper>
      <h1>Tags</h1>
      <ul>
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              #{tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </TagsWrapper>
  </FlexWrapper>
  </Layout>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allGraphCmsArticle: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allGraphCmsArticle {
      group(field: tags) {
        fieldValue
        totalCount
      }
    }
  }
`

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(limit: 2000) {
//       group(field: frontmatter___tags) {
//         fieldValue
//         totalCount
//       }
//     }
//   }
// `