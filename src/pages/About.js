import React from 'react'
import Helmet from 'react-helmet'
import AboutContent from '../components/AboutContent'

const About = props => {
  const siteTitle = props.data.site.siteMetadata.title
  const about = props.data.allContentfulAbout.edges[0].node
  const { aboutTitle, aboutText, iKnow, iLove } = about

  return (
    <div>
      <Helmet title={`About | ${siteTitle}`} />
      <AboutContent
        aboutTitle={aboutTitle}
        aboutText={aboutText}
        iKnow={iKnow}
        iLove={iLove}
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
      }
    }
  }
`
