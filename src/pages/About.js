import React from 'react'
import Helmet from 'react-helmet'

const About = props => {
  const siteTitle = props.data.site.siteMetadata.title

  return (
    <div>
      <Helmet title={`About | ${siteTitle}`} />
      <p>About</p>
    </div>
  )
}

export default About

export const pageQuery = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
