import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

class Home extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const projects = get(this, 'props.data.allContentfulProject.edges')

    return (
      <div>
        <Helmet title={siteTitle} />
        <div>
          <ul>
            {projects.map(({ project }) => {
              return (
                <Link to={`/projects/${project.slug}`} key={project.slug}>
                  {project.slug}
                </Link>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default Home

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulProject(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`
