import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

const ProjectTemplate = props => {
  const project = props.data.contentfulProject
  const { title, description } = project

  const siteTitle = get(props, 'data.site.siteMetadata.title')

  return (
    <div>
      <Helmet title={`${title} | ${siteTitle}`} />
      <h1>{title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: description.childMarkdownRemark.html,
        }}
      />
    </div>
  )
}

export default ProjectTemplate

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      description {
        childMarkdownRemark {
          html
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
