import React, { Component } from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Intro from '../components/home/Intro'
import ProjectList from '../components/home/ProjectList'
import Footer from '../components/general/Footer'

class Home extends Component {
  render() {
    const siteMetadata = this.props.data.site.siteMetadata
    const { title, email } = siteMetadata
    const projects = this.props.data.allContentfulProject.edges
    const about = this.props.data.allContentfulAbout.edges[0].node
    const {
      intro,
      linkedInLink,
      githubLink,
      vimeoLink,
      instagramLink,
      twitterLink,
      spotifyLink,
    } = about

    return (
      <div role="main">
        <Helmet title={title} />
        <Intro
          intro={intro}
          githubLink={githubLink}
          linkedInLink={linkedInLink}
        />
        <ProjectList projects={projects} />
        <Footer
          linkedInLink={linkedInLink}
          githubLink={githubLink}
          vimeoLink={vimeoLink}
          instagramLink={instagramLink}
          twitterLink={twitterLink}
          spotifyLink={spotifyLink}
          email={email}
        />
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
          linkedInLink
          githubLink
          vimeoLink
          instagramLink
          twitterLink
          spotifyLink
        }
      }
    }
    site {
      siteMetadata {
        email
        title
      }
    }
  }
`
