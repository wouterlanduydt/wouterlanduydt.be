import React from 'react'
import Helmet from 'react-helmet'
import AboutContent from '../components/AboutContent'

const About = props => {
  const siteMetadata = props.data.site.siteMetadata
  const { title, email } = siteMetadata
  const about = props.data.allContentfulAbout.edges[0].node
  const { aboutTitle, aboutText, iKnow, iLove, resume } = about

  return (
    <div>
      <Helmet title={`About | ${title}`} />
      <AboutContent
        aboutTitle={aboutTitle}
        aboutText={aboutText}
        iKnow={iKnow}
        iLove={iLove}
        resume={resume}
        email={email}
      />
    </div>
  )
}

export default About

export const pageQuery = graphql`
  query AboutQuery {
    allContentfulAbout {
      edges {
        node {
          aboutTitle
          aboutText {
            childMarkdownRemark {
              html
            }
          }
          iKnow
          iLove
          resume {
            file {
              url
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        email
      }
    }
  }
`
