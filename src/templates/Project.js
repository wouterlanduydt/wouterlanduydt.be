import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import ProjectHeader from '../components/ProjectHeader'
import ProjectContent from '../components/ProjectContent'
import Footer from '../components/Footer'

const ProjectTemplate = props => {
  const siteTitle = props.data.site.siteMetadata.title
  const email = props.data.site.siteMetadata.title
  const project = props.data.contentfulProject
  const about = props.data.allContentfulAbout.edges[0].node
  const {
    title,
    subtitle,
    description,
    tags,
    teamMembers,
    client,
    date,
    link,
    images,
    projectVideo,
  } = project

  const {
    linkedInLink,
    githubLink,
    vimeoLink,
    instagramLink,
    twitterLink,
    spotifyLink,
  } = about

  return (
    <div>
      <Helmet title={`${title} | ${siteTitle}`} />
      <ProjectHeader
        title={title}
        subtitle={subtitle}
        date={date}
        teamMembers={teamMembers}
        client={client}
        tags={tags}
      />
      <ProjectContent
        description={description}
        projectVideo={projectVideo}
        images={images}
        link={link}
      />
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

export default ProjectTemplate

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      subtitle
      tags
      client
      link
      teamMembers
      date
      projectVideo
      images {
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
    allContentfulAbout {
      edges {
        node {
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
