import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

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
      <h1>{title}</h1>
      <span>{date}</span>
      <ol>
        {teamMembers && (
          <li>
            <span>team</span>
            <ul>{teamMembers.map(member => <li>{member}</li>)}</ul>
          </li>
        )}
        <li>
          <span>tags</span>
          <ul>{tags.map(tag => <li>{tag}</li>)}</ul>
        </li>
        <li>
          <span>client</span>
          <span>{client}</span>
        </li>
        <li>
          <span>online</span>
          <span>{link}</span>
        </li>
      </ol>
      <div
        dangerouslySetInnerHTML={{
          __html: description.childMarkdownRemark.html,
        }}
      />
      {detailImages.map(image => <img src={image.file.url} alt="" />)}
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
