import React from 'react'
import { Wrapper, SocialsList, SocialItem, SocialIcon } from './Footer.styled'
import { StaticQuery, graphql } from 'gatsby'
import getSocialsList from '../../utils/getSocialsList'

const Footer = () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        allContentfulAbout {
          edges {
            node {
              linkedInLink
              githubLink
              spotifyLink
            }
          }
        }
        site {
          siteMetadata {
            email
          }
        }
      }
    `}
    render={data => {
      const about = data.allContentfulAbout.edges[0].node
      const email = data.site.siteMetadata.email

      const { linkedInLink, githubLink, spotifyLink } = about

      const socialsList = getSocialsList(
        linkedInLink,
        githubLink,
        spotifyLink,
        email
      )

      return (
        <Wrapper>
          <SocialsList>
            {socialsList.map(socialItem => (
              <SocialItem key={socialItem.name} className="social-item-li">
                <a
                  href={socialItem.link}
                  target={socialItem.target || '_blank'}
                  rel="noopener"
                >
                  <SocialIcon
                    src={require(`../../assets/svg/${socialItem.icon ||
                      socialItem.name}.svg`)}
                    alt={socialItem.name}
                  />
                </a>
              </SocialItem>
            ))}
          </SocialsList>
        </Wrapper>
      )
    }}
  />
)

export default Footer
