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
import { template } from "../utils/template"

const IndexPage = ({ data }) => {
  const { markdownRemark, allExtraData } = data
  const { frontmatter, html } = markdownRemark

  const extraData = allExtraData.nodes[0]

  const [contentHeight, setContentHeight] = React.useState(-1)
  const [visualLoaded, setVisualLoaded] = React.useState(false)
  const windowHeight = useWindowHeight()

  const MINIMAL_PADDING = 64
  const perfectFit = contentHeight + MINIMAL_PADDING < windowHeight

  const socials = [
    {
      link: frontmatter.github,
      name: "github",
      icon: <IcoGithub />
    },
    {
      link: frontmatter.linkedin,
      name: "linkedin",
      icon: <IcoLinkedIn />
    },
    {
      link: frontmatter.mail,
      name: "email",
      icon: <IcoMail />
    }
  ]

  const artists = extraData.artists.sort(() => .5 - Math.random()).slice(0, 6).join(", ").replace(/,(?!.*,)/gmi, ' &')
  const hrs = Math.round(extraData.listenTimeInMinutes / 60)
  const kms = Math.round(extraData.cycleDistanceInMeters / 1000)
  const cycleTime = Math.round(extraData.cycleTime / 3600)


  const list = [
    <>
      Studied <a>Digital Design &amp; Development</a> at Howest Kortrijk<br />
      <span className="text-small">2D Kickstarter explainer video, interactive installation for a film festival, React app for MSK, VJ app combining Web MIDI, Web Audio and three.js</span>
    </>,
    <>Did an internship at November Five</>,
    <>
      Listened to <a href="appel">{hrs} hours of music</a> this year<br />
      <span className="text-small">{artists} are some of my current favorites</span>
    </>,
    <>Been <a href="strava">on the saddle for {cycleTime}h</a> this year</>,
    "Full-time  fanboy",
  ]

  return (
    <Measure bounds onResize={({ bounds }) => setContentHeight(bounds.height)}>
      {({ measureRef }) => (
        <main
          ref={measureRef}
          style={{ opacity: visualLoaded ? 1 : 0 }}
          className={perfectFit ? "center" : "no-center"}
        >
          <Helmet>
            <base target="_blank" href="*" />
          </Helmet>
          <SEO />
          <div className="header-wrap">
            <Img
              fixed={data.file.childImageSharp.fixed}
              durationFadeIn={100}
              onLoad={() => setVisualLoaded(true)}
              alt=""
            />

            <header>
              <h1>{frontmatter.title}</h1>
              <h2>{frontmatter.subtitle}</h2>
            </header>
          </div>
          <div className="content">
            <section dangerouslySetInnerHTML={{ __html: html }} />
            <p>Here's {list.length} things you need to know about me &darr;</p>
            <ul>
              {list.map((item, i) => (
                <li key={`item-${i}`}>{item}</li>
              ))}
            </ul>
          </div>
          <ol className="icon-list">
            {socials.map(social => (
              <li key={social.name}>
                <a href={social.link} aria-label={social.name}>
                  {social.icon}
                </a>
              </li>
            ))}
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

    allExtraData {
      nodes {
        artists
        listenTimeInMinutes
        cycleDistanceInMeters
        cycleTime
      }
    }

    file(name: { eq: "memoji" }) {
      childImageSharp {
        fixed(width: 64, height: 86) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
  }
`

export default IndexPage
