import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider, injectGlobal } from 'styled-components'
import branding from '../styles/branding'
import global from '../styles/global'
import reset from 'styled-reset'
import Navigation from '../components/general/Navigation'

injectGlobal`
  ${reset}
  ${global}
`

class Template extends Component {
  render() {
    const { children } = this.props
    const siteMetadata = this.props.data.site.siteMetadata

    const {
      author,
      title,
      description,
      coverImage,
      url,
      keywords,
    } = siteMetadata

    let rootPath = `/`

    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <ThemeProvider theme={branding}>
        <div>
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
          <header style={{ display: 'none' }}>
            <h1>{title}</h1>
          </header>
          <Navigation />
          {children()}
        </div>
      </ThemeProvider>
    )
  }
}

export default Template

export const pageQuery = graphql`
  query LayoutIndexQuery {
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
`
