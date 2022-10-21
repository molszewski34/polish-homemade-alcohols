const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require("lodash")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve("src/templates/articlesTemplate.js")

  return graphql(
    `
      {
        allGraphCmsArticle(sort: { fields: date, order: DESC }, limit: 1000) {
          edges {
            node {
              slug
              title
              description
              date
              tags
              thumbnail {
                gatsbyImageData(placeholder: BLURRED)
              }
              lead
              content {
                markdown
              }
            }
          }
          group(field: tags) {
            fieldValue
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allGraphCmsArticle.edges

    posts.forEach(post => {
      // const previous = index === posts.length - 1 ? null : posts[index + 1].node
      // const next = index === 0 ? null : posts[index - 1].node
      const slug = post.node.slug
      console.log(slug)

      createPage({
        path: post.node.slug,
        component: blogPost,
        context: {
          data: post.node,
          // slug: slug,
          // previous,
          // next,
        },
      })
    })

    // tags
    const tagTemplate = path.resolve("src/templates/tags.js")

    // Create post detail pages
    // posts.forEach(({ node }) => {
    //   createPage({
    //     path: node.slug,
    //     component: blogPost,
    //   })
    // })
    const tags = result.data.allGraphCmsArticle.group

    tags.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
        component: tagTemplate,
        context: {
          tag: tag.fieldValue,
        },
      })
    })

    //Pagination
    // Create blog post list pages
    const postsPerPage = 2
    const numPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog` : `/blog${i + 1}`,
        component: path.resolve("./src/templates/blog-list-template.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `GraphCmsArticle`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
