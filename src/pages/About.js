import React from 'react'
import Helmet from 'react-helmet'
import AboutContent from '../components/about/AboutContent'
import Footer from '../components/general/Footer'
import getSocialsList from '../utils/getSocialsList'

const About = props => {
  const siteMetadata = props.data.site.siteMetadata
  const { title, email } = siteMetadata
  const about = props.data.allContentfulAbout.edges[0].node
  const {
    aboutTitle,
    aboutText,
    iKnow,
    iLove,
    resume,
    linkedInLink,
    githubLink,
    vimeoLink,
    instagramLink,
    twitterLink,
    spotifyLink,
  } = about

  return (
    <div role="main">
      <Helmet title={`${title} | About`} />
      <AboutContent
        aboutTitle={aboutTitle}
        aboutText={aboutText}
        iKnow={iKnow}
        iLove={iLove}
        resume={resume}
        email={email}
      />
      <Footer
        socialsList={getSocialsList(
          linkedInLink,
          githubLink,
          vimeoLink,
          instagramLink,
          twitterLink,
          spotifyLink,
          email
        )}
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
        title
        email
      }
    }
  }
`
