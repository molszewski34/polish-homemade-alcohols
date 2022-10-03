const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const _ = require("lodash")

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions
//   createTypes(`
//     type SitePage implements Node {
//       context: SitePageContext
//     }
//     type SitePageContext {
//       data: dataContext
//     }
//     type dataContext {
//       features: String,

//       description: String
//       image: imageContext,
//       link: String,
//       slug: String,
//       technologies: String,
//       title: String,
//       text: textContext,    
//       thumbnailAsset:  thumbnailAssetContext,
//       githubLink: String,
//     }


//     type imageContext {
//       url: String
//       id: String
//     }
//     type textContext {
//       text: String
//     }

//     type thumbnailAssetContext {
//       url: String
//       id: String
//     }


//   `)
// }

// Pagination 

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
      {
        allGraphCmsArticle(
          sort: { fields: date, order: DESC }
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

  const posts = result.data.allGraphCmsArticle.edges
  const postsPerPage = 2
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

// create article template 
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const projectTemplate = path.resolve(`src/templates/articlesTemplate.js`)

//   const projectsQuery = await graphql(`
//     {
//       allGraphCmsArticle {
//         edges {
//           node {
//             slug
//             tags
//             thumbnail {
//               url
//             }
//             description
//             date
//             content {
//               html
//             }
//             title
//           }
//         }
//       }
//     }
//   `)


//   projectsQuery.data.allGraphCmsArticle.edges.forEach(project => {
//     createPage({
//       path: project.node.slug,
//       component: projectTemplate,
//       context: {
//         data: project.node,
     
//       },
//     })
//   })
// }


// tags


// exports.createPages = async ({ actions, graphql, reporter }) => {
//   const { createPage } = actions

//   const blogPostTemplate = path.resolve("src/templates/articlesTemplate.js")
//   const tagTemplate = path.resolve("src/templates/tags.js")

//   const result = await graphql(`
// {
//   allGraphCmsArticle(sort: {fields: date, order: DESC}, limit: 2) {
//     edges {
//       node {
//         slug
//       }
//     }
//    group(field: tags) {
//       fieldValue
//     }
//   }
// }
//  `)



//   if (result.errors) {
//     reporter.panicOnBuild(`Error while running GraphQL query.`)
//     return
//   }

//   const posts = result.data.allGraphCmsArticle.edges

//   Create post detail pages
//   posts.forEach( node  => {
//     createPage({
//       path: node.node.slug,
//       component: blogPostTemplate,
//     })
//   })

//   Extract tag data from query
//   const tags = result.data.allGraphCmsArticle.group

//   Make tag pages
//   tags.forEach(tag => {
//     createPage({
//       path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
//       component: tagTemplate,
//       context: {
//         tag: tag.fieldValue,
//       },
//     })
//   })
// }