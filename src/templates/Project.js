import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import ProjectHeader from '../components/ProjectHeader'
import ProjectContent from '../components/ProjectContent'

const ProjectTemplate = props => {
  const siteTitle = props.data.site.siteMetadata.title
  const project = props.data.contentfulProject
  const {
    title,
    description,
    tags,
    teamMembers,
    client,
    date,
    link,
    detailImages,
  } = project

  return (
    <div>
      <Helmet title={`${title} | ${siteTitle}`} />
      <ProjectHeader
        title={title}
        date={date}
        teamMembers={teamMembers}
        client={client}
        tags={tags}
      />
      <ProjectContent
        description={description}
        detailImages={detailImages}
        link={link}
      />
    </div>
  )
}

export default ProjectTemplate

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      tags
      client
      link
      teamMembers
      date
      detailImages {
        file {
          url
        }
      }
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
