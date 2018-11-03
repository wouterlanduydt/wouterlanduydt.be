const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const Project = path.resolve('./src/templates/projectDetail/index.tsx')
    resolve(
      graphql(
        `
          {
            allContentfulProject(limit: 20) {
              edges {
                node {
                  slug
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

        const projects = result.data.allContentfulProject.edges
        projects.forEach(project => {
          createPage({
            path: `/projects/${project.node.slug}/`,
            component: Project,
            context: {
              slug: project.node.slug,
            },
          })
        })
      })
    )
  })
}
