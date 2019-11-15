import React from "react"
import SEO from "../components/SEO"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import memoji from "../assets/img/memoji.png"
import "../styles/reset.css"
import "../styles/global.css"
import IcoGithub from "../assets/icons/IcoGithub"
import IcoLinkedIn from "../assets/icons/IcoLinkedIn"
import IcoMail from "../assets/icons/IcoMail"
import Measure from "react-measure"
import { useWindowHeight } from "../utils/useWindowHeight"

const IndexPage = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  const [contentHeight, setContentHeight] = React.useState(-1)
  const windowHeight = useWindowHeight()

  const MINIMAL_PADDING = 64
  const doesntFit = contentHeight + MINIMAL_PADDING > windowHeight

  return (
    <Measure bounds onResize={({ bounds }) => setContentHeight(bounds.height)}>
      {({ measureRef }) => (
        <main ref={measureRef} className={doesntFit ? "no-center" : "center"}>
          <Helmet>
            <base target="_blank" href="*" />
          </Helmet>
          <SEO />
          <div className="header-wrap">
            <img
              src={memoji}
              alt="Memoji"
              height={86}
              width={64}
              draggable={false}
            />
            <header>
              <h1>{frontmatter.title}</h1>
              <h2>{frontmatter.subtitle}</h2>
            </header>
          </div>
          <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
          <ol className="icon-list">
            <li>
              <a href={frontmatter.github}>
                <IcoGithub />
              </a>
            </li>
            <li>
              <a href={frontmatter.linkedin}>
                <IcoLinkedIn />
              </a>
            </li>
            <li>
              <a href={frontmatter.mail}>
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
  query IndexQuery {
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
  }
`

export default IndexPage
