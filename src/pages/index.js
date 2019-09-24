import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const { markdownRemark } = data

  return (
    <Layout>
      <SEO />
      <header>
        <h1>Wouter Landuydt</h1>
      </header>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
      <p>Last updated {markdownRemark.frontmatter.date}</p>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    markdownRemark(frontmatter: { path: { eq: "/" } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

export default IndexPage
