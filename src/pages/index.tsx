import React from 'react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import Intro from '../pageComponents/home/intro'
import ProjectList from '../pageComponents/home/projectList'
import { graphql } from 'gatsby'

type TProps = {
  data: any
}

const Home = (props: TProps) => {
  const { title } = props.data.site.siteMetadata
  const projects = props.data.allContentfulProject.edges
  const about = props.data.allContentfulAbout.edges[0].node
  const { intro, linkedInLink, githubLink } = about

  return (
    <Layout>
      <div role="main">
        <Helmet title={title} />
        <Intro
          intro={intro}
          githubLink={githubLink}
          linkedInLink={linkedInLink}
        />
        <ProjectList projects={projects} />
      </div>
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulProject(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          slug
          previewImage {
            file {
              url
            }
          }
          tags
        }
      }
    }
    allContentfulAbout {
      edges {
        node {
          intro {
            childMarkdownRemark {
              html
            }
          }
          linkedInLink
          githubLink
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
