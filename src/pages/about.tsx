import Layout from '../components/layout'
import React from 'react'
import Helmet from 'react-helmet'
import AboutContent from '../pageComponents/about/content'
import { graphql } from 'gatsby'

type TProps = {
  data: any
}

const About = (props: TProps) => {
  const siteMetadata = props.data.site.siteMetadata
  const { title, email } = siteMetadata
  const about = props.data.allContentfulAbout.edges[0].node
  const { aboutTitle, aboutText, iKnow, iLove, resume } = about

  return (
    <Layout>
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
      </div>
    </Layout>
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
