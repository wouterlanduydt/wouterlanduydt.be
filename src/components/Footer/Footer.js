import React from 'react'
import styled from 'styled-components'
import Spotify from '../../assets/svg/spotify.svg'
import Vimeo from '../../assets/svg/vimeo.svg'
import Instagram from '../../assets/svg/instagram.svg'
import Github from '../../assets/svg/github.svg'
import LinkedIn from '../../assets/svg/linkedin.svg'
import Envelope from '../../assets/svg/envelope.svg'

const Wrapper = styled.footer`
  margin: 80px 0 72px;
  width: 100%;
`

const SocialsList = styled.ol`
  display: flex;
  align-items: center;
  justify-content: center;
`

const SocialItem = styled.li`
  user-select: none;

  &:not(:last-child) {
    margin-right: 16px;
  }
`

const SocialIcon = styled.img`
  transform: scale(0.8);
`

const Footer = ({}) => (
  <Wrapper>
    <SocialsList>
      <SocialItem>
        <a href="" target="_blank">
          <SocialIcon src={Envelope} alt="Envelope icon" />
        </a>
      </SocialItem>
      <SocialItem>
        <a href="" target="_blank">
          <SocialIcon src={LinkedIn} alt="LinkedIn icon" />
        </a>
      </SocialItem>
      <SocialItem>
        <a href="" target="_blank">
          <SocialIcon src={Github} alt="Github icon" />
        </a>
      </SocialItem>
      <SocialItem>
        <a href="" target="_blank">
          <SocialIcon src={Instagram} alt="Instagram icon" />
        </a>
      </SocialItem>
      <SocialItem>
        <a href="" target="_blank">
          <SocialIcon src={Vimeo} alt="Vimeo icon" />
        </a>
      </SocialItem>
      <SocialItem>
        <a href="" target="_blank">
          <SocialIcon src={Spotify} alt="Spotify icon" />
        </a>
      </SocialItem>
    </SocialsList>
  </Wrapper>
)

export default Footer
