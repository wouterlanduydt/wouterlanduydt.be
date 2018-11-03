import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import ProjectHeader from './header'
import ProjectContent from './content'

type TProps = {
  data: any
}

const ProjectTemplate = (props: TProps) => {
  const siteTitle = props.data.site.siteMetadata.title
  const project = props.data.contentfulProject
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

  return (
    <Layout>
      <div role="main">
        <Helmet title={`${siteTitle} | ${title}`} />
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
      </div>
    </Layout>
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
    site {
      siteMetadata {
        title
      }
    }
  }
`
