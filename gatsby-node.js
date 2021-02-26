const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

// Connect pages from Wordpress to Gatsby
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => { 
    graphql(`
      {
        allWpPage(sort: { fields: [date] }) {
          nodes {
            id
            slug
            status
            template {
              templateName
            }
            title
            content
          }
        }
      }
    `).then((result) => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

      // Create Page pages.
      const pageTemplate = path.resolve("./src/templates/page.js")

      //highlight-start
      result.data.allWpPage.nodes.forEach((node) => {
        createPage({
          path: `/${node.slug}/`,
          component: slash(pageTemplate),
          context: node,
        })
      })
      //highlight-end
    })

    .then(() => {
      graphql(`
        {
          allWpPost(sort: { fields: [date] }) {
            nodes {
              id
              title
              excerpt
              content
              slug
            }
          }
        }
      `).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }

          // Create Post pages.
          const postTemplate = path.resolve("./src/templates/blog-post.js")

          // highlight start
          result.data.allWpPost.nodes.forEach((node) => {
            createPage({
              path: `/${node.slug}/`,
              component: slash(postTemplate),
              context: node,
            })
          })
          resolve()
        })
    })
    // ==== END POSTS ====
  })
}
