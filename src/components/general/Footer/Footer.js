import React from 'react'
import { Wrapper, SocialsList, SocialItem, SocialIcon } from './Footer.styled'

const Footer = ({ socialsList }) => (
  <Wrapper>
    <SocialsList>
      {socialsList.map(socialItem => (
        <SocialItem key={socialItem.name} className="social-item">
          <a
            href={socialItem.link}
            target={socialItem.target || '_blank'}
            rel="noopener"
          >
            <SocialIcon
              src={require(`../../../assets/svg/${socialItem.icon ||
                socialItem.name}.svg`)}
              alt={socialItem.name}
            />
          </a>
        </SocialItem>
      ))}
    </SocialsList>
  </Wrapper>
)

export default Footer
