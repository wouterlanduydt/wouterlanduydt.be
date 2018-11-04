import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import reset from 'styled-reset'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import globalStyle from '../styles/global'
import branding from '../styles/branding'
import Navigation from './Navigation'
import Footer from './Footer'
import Head from './head'

type TProps = {
  children: React.ReactNode
}

const GlobalStyles = createGlobalStyle`
  ${reset}
  ${globalStyle}
`

const Layout = ({ children }: TProps) => (
  <StaticQuery
    query={graphql`
      query LayoutIndexQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      const { title } = data.site.siteMetadata

      return (
        <ThemeProvider theme={branding}>
          <Fragment>
            <Head />
            <header className="hide">
              <h1>{title}</h1>
            </header>
            <GlobalStyles />
            <Navigation />
            {children}
            <Footer />
          </Fragment>
        </ThemeProvider>
      )
    }}
  />
)

export default Layout
