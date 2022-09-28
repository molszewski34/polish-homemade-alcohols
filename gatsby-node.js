const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    // `
    //   {
    //     allMarkdownRemark(
    //       sort: { fields: [frontmatter___date], order: DESC }
    //       limit: 1000
    //     ) {
    //       edges {
    //         node {
    //           fields {
    //             slug
    //           }
    //         }
    //       }
    //     }
    //   }
    // `
    `
      {
        allGraphCmsArticle(
          sort: { fields: publishedAt, order: DESC }
          limit: 2
        ) {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // ...

  // Create blog-list pages
  // const posts = result.data.allMarkdownRemark.edges
  const posts = result.data.allGraphCmsArticle.edges
  const postsPerPage = 6
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve("./src/templates/blog-list-template.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
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
