import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const Head = () => (
  <StaticQuery
    query={graphql`
      query HeadIndexQuery {
        site {
          siteMetadata {
            author
            title
            description
            coverImage
            url
            keywords
          }
        }
      }
    `}
    render={data => {
      const siteMetadata = data.site.siteMetadata

      const {
        author,
        title,
        description,
        coverImage,
        url,
        keywords,
      } = siteMetadata

      return (
        <Helmet>
          <html lang="en" />
          <meta name="author" content={author} />
          <meta itemprop="name" content={title} />
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="image" content={coverImage} />
          <meta itemprop="description" content={description} />
          <meta itemprop="image" content={coverImage} />
          <meta property="og:url" content={url} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={coverImage} />
          <meta property="og:image:url" content={coverImage} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={coverImage} />
          <meta name="theme-color" content="#ffffff" />
        </Helmet>
      )
    }}
  />
)

export default Head
