import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import ProjectHeader from '../components/ProjectHeader'

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
      <div
        dangerouslySetInnerHTML={{
          __html: description.childMarkdownRemark.html,
        }}
      />
      <a href={link}>ONLINE</a>
      {detailImages.map(image => (
        <img src={image.file.url} key={image.file.url} alt="" />
      ))}
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
