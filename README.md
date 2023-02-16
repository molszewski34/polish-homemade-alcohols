<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->

<h1 align="center">
  Homemade <span style = color:red>Polish </span>  Alcohols
</h1>

 Homemade Polish Alcohols is a blog about making delicious and not common alcohols. 

## How it works
This page use node and graphql to pass backend data to homepage and create projects archive. All pages are created by gatsby-node with context passed with function CreatePages. Some nodes in graphql are created with “createTypes” and were made this way to pass additional data to query of pages. Normally this would be no case, but in this build I tried to pass data in only one query and do not create few sets of data.

## Features
  **Programaticaly made:**
  - Blog Pages
  - Tags
  - Pagination
  - Images rendering
   
   **Optimization**
  - Gatsby images
  - styled components

  **Desktop and mobile view**
  - support for < 640px and 1024px 


## 🚀 Development
 **Stack**
- Gatsby.js
- React.js
- Node
- Graphql
- Headless Cms: GraphCms
- Gatsby starter: gatsby-starter-default npx gatsby new gatsby-starter-default https://github.com/gatsbyjs/gatsby-starter-default
- npm packages: 
gatsby-plugin-image
gatsby-plugin-react-helmet
gatsby-omni-font-loader
gatsby-plugin-styled-components
gatsby-transformer-sharp
gatsby-plugin-sharp
gatsby-transformer-remark

### Further Development
Depending on popularity of blog i plan to add: Featured articles, comment section and authorization. 

## Installation
* Clone repository * Install dependencies 
* Sing up on https://hygraph.com/ 
* Create new schema and content https://hygraph.com/docs 
* If you want to use current query, you must create project with name "Polish Wines" and schema with name "Articles". All schema fields must be named as in the current query, or you're going to get a GraphQL error. 
* If you don't want to copy my schema, just follow Hygraph documentation linked above.
* Project use additional queries created by node with "createTypes". To make project work you need to name the  fields in Hygraph the same, or change a whole function with different names for fields you created or you get graphql error and some fields in context fields in graphiql will be not visible and in result not passed to index.js
* Create file .env.development and copy your variables https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/. In case of deployment to gh-pages name of file must be changed to .env.production.
*  Run command npm start and check if you have any errors from graphql
* Project is by default hosted on localhost:8000

## Requirements
This build uses Netlify and data from Hygraph. To run it you need to create Hygraph account and configure API on their service with endpoints of same name as designed in project. You also need to change name in GraphQL references.
Gatsby-node.js use .env file to hide API config with environment name: GRAPHCMS_ENDPOINT. For development use .env.development. Production use .env.production. More info about it on URL https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/

<!-- AUTO-GENERATED-CONTENT:END -->
