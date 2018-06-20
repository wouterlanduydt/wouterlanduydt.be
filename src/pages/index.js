import React, { Component } from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Intro from '../components/Intro'
import ProjectsList from '../components/ProjectsList'

class Home extends Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const projects = this.props.data.allContentfulProject.edges
    const about = this.props.data.allContentfulAbout.edges[0].node

    return (
      <div>
        <Helmet title={siteTitle} />
        <Intro
          intro={about.intro}
          githubLink={about.githubLink}
          linkedInLink={about.linkedInLink}
        />
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
    allContentfulAbout {
      edges {
        node {
          intro {
            childMarkdownRemark {
              html
            }
          }
          githubLink
          linkedInLink
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
