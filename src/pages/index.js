import React from "react"
import SEO from "../components/SEO"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import "../styles/reset.css"
import "../styles/global.css"
import IcoGithub from "../assets/icons/IcoGithub"
import IcoLinkedIn from "../assets/icons/IcoLinkedIn"
import IcoMail from "../assets/icons/IcoMail"
import Measure from "react-measure"
import { useWindowHeight } from "../utils/useWindowHeight"
import Img from "gatsby-image"

const IndexPage = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  const [contentHeight, setContentHeight] = React.useState(-1)
  const windowHeight = useWindowHeight()

  const MINIMAL_PADDING = 64
  const perfectFit = contentHeight + MINIMAL_PADDING < windowHeight

  return (
    <Measure bounds onResize={({ bounds }) => setContentHeight(bounds.height)}>
      {({ measureRef }) => (
        <main ref={measureRef} className={perfectFit ? "center" : "no-center"}>
          <Helmet>
            <base target="_blank" href="*" />
          </Helmet>
          <SEO />
          <div className="header-wrap">
            <Img fixed={data.file.childImageSharp.fixed} alt="memoji" />

            <header>
              <h1>{frontmatter.title}</h1>
              <h2>{frontmatter.subtitle}</h2>
            </header>
          </div>
          <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
          <ol className="icon-list">
            <li>
              <a href={frontmatter.github} aria-label="github">
                <IcoGithub />
              </a>
            </li>
            <li>
              <a href={frontmatter.linkedin} aria-label="linkedin">
                <IcoLinkedIn />
              </a>
            </li>
            <li>
              <a href={frontmatter.mail} aria-label="email">
                <IcoMail />
              </a>
            </li>
          </ol>
        </main>
      )}
    </Measure>
  )
}

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { path: { eq: "/" } }) {
      html
      frontmatter {
        title
        subtitle
        github
        linkedin
        mail
      }
    }

    file(name: { eq: "memoji" }) {
      childImageSharp {
        fixed(width: 64, height: 86, traceSVG: { color: "#bb9c84" }) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
