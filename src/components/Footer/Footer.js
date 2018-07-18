import React from 'react'
import styled from 'styled-components'
import Spotify from '../../assets/svg/spotify.svg'
import Vimeo from '../../assets/svg/vimeo.svg'
import Instagram from '../../assets/svg/instagram.svg'
import Github from '../../assets/svg/github.svg'
import LinkedIn from '../../assets/svg/linkedin.svg'
import Envelope from '../../assets/svg/envelope.svg'
import Twitter from '../../assets/svg/twitter.svg'

const Wrapper = styled.footer`
  margin: 80px 0 72px;
  width: 100%;
`

const SocialsList = styled.ol`
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover .social-item {
    transition: opacity 200ms;
    opacity: 0.2;
  }

  .social-item:hover {
    transition: opacity 200ms;
    opacity: 1;
  }
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

const Footer = ({
  linkedInLink,
  githubLink,
  vimeoLink,
  instagramLink,
  twitterLink,
  spotifyLink,
  email,
}) => (
  <Wrapper>
    <SocialsList>
      <SocialItem className="social-item">
        <a href={`mailto:${email}`}>
          <SocialIcon src={Envelope} alt="Envelope icon" />
        </a>
      </SocialItem>
      <SocialItem className="social-item">
        <a href={linkedInLink} target="_blank" rel="noopener">
          <SocialIcon src={LinkedIn} alt="LinkedIn icon" />
        </a>
      </SocialItem>
      <SocialItem className="social-item">
        <a href={githubLink} target="_blank" rel="noopener">
          <SocialIcon src={Github} alt="Github icon" />
        </a>
      </SocialItem>
      <SocialItem className="social-item">
        <a href={vimeoLink} target="_blank" rel="noopener">
          <SocialIcon src={Vimeo} alt="Vimeo icon" />
        </a>
      </SocialItem>
      <SocialItem className="social-item">
        <a href={twitterLink} target="_blank" rel="noopener">
          <SocialIcon src={Twitter} alt="Twitter icon" />
        </a>
      </SocialItem>
      <SocialItem className="social-item">
        <a href={instagramLink} target="_blank" rel="noopener">
          <SocialIcon src={Instagram} alt="Instagram icon" />
        </a>
      </SocialItem>
      <SocialItem className="social-item">
        <a href={spotifyLink} target="_blank" rel="noopener">
          <SocialIcon src={Spotify} alt="Spotify icon" />
        </a>
      </SocialItem>
    </SocialsList>
  </Wrapper>
)

export default Footer
