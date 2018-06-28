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
`

const SocialItem = styled.li`
  user-select: none;

  &:not(:last-child) {
    margin-right: 16px;
  }
`

const SocialIcon = styled.img`
  transform: scale(0.8);
  transition: transform 150ms ease-in-out;

  &:hover {
    transform: scale(0.9);
  }
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
      <SocialItem>
        <a href={`mailto:${email}`}>
          <SocialIcon src={Envelope} alt="Envelope icon" />
        </a>
      </SocialItem>
      <SocialItem>
        <a href={linkedInLink} target="_blank" rel="noopener">
          <SocialIcon src={LinkedIn} alt="LinkedIn icon" />
        </a>
      </SocialItem>
      <SocialItem>
        <a href={githubLink} target="_blank" rel="noopener">
          <SocialIcon src={Github} alt="Github icon" />
        </a>
      </SocialItem>
      <SocialItem>
        <a href={vimeoLink} target="_blank" rel="noopener">
          <SocialIcon src={Vimeo} alt="Vimeo icon" />
        </a>
      </SocialItem>
      <SocialItem>
        <a href={twitterLink} target="_blank" rel="noopener">
          <SocialIcon src={Twitter} alt="Twitter icon" />
        </a>
      </SocialItem>
      <SocialItem>
        <a href={instagramLink} target="_blank" rel="noopener">
          <SocialIcon src={Instagram} alt="Instagram icon" />
        </a>
      </SocialItem>
      <SocialItem>
        <a href={spotifyLink} target="_blank" rel="noopener">
          <SocialIcon src={Spotify} alt="Spotify icon" />
        </a>
      </SocialItem>
    </SocialsList>
  </Wrapper>
)

export default Footer
