import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'

const About = props => {
  const siteTitle = props.data.site.siteMetadata.title

  return (
    <div>
      <Helmet title={`About | ${siteTitle}`} />
      <p>about</p>
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
