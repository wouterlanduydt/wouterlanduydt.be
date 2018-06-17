import React, { Component } from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Intro from '../components/Intro'
import ProjectsList from '../components/ProjectsList'

class Home extends Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const projects = get(this, 'props.data.allContentfulProject.edges')

    return (
      <div>
        <Helmet title={siteTitle} />
        <Intro />
        <ProjectsList projects={projects} />
        <div style={{ height: '1000px' }} />
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
          previewImage {
            file {
              url
            }
          }
          tags
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
