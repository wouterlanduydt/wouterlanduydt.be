import React, { Component } from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Intro from '../components/Intro'

class Home extends Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const projects = get(this, 'props.data.allContentfulProject.edges')

    return (
      <div>
        <Helmet title={siteTitle} />
        <Intro />
        <ul>
          {projects.map(({ node }) => {
            return (
              <li key={node.slug}>
                <Link to={`/projects/${node.slug}`}>{node.slug}</Link>
              </li>
            )
          })}
        </ul>
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
    site {
      siteMetadata {
        title
      }
    }
  }
`
