const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    const infoPage = path.resolve('./src/templates/info-page.js')
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC },
              limit: 1000,
              ) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                  }
                  fileAbsolutePath
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        const posts = result.data.allMarkdownRemark.edges;

        _.each(posts, (post, index) => {
          // Only use blog posts when setting previous and next
          const isBlog = node => /\/posts\//.test(node.fileAbsolutePath)
          let previousNode;
          for (let pindex = index + 1; isBlog(post.node) && pindex < posts.length; pindex++) {
            if (isBlog(posts[pindex].node)) {
              previousNode = posts[pindex].node
              break
            }
          }
          let nextNode;
          for (let pindex = index - 1; isBlog(post.node) && pindex >= 0; pindex--) {
            if (isBlog(posts[pindex].node)) {
              nextNode = posts[pindex].node
              break
            }
          }

          createPage({
            path: post.node.fields.slug,
            component: isBlog(post.node) ? blogPost : infoPage,
            context: {
              slug: post.node.fields.slug,
              postType: isBlog(post.node) ? 'blog' : 'page',
              previousNode,
              nextNode
            },
          })
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
