import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Wrapper = styled.div`
  background-color: ${props => props.theme.palette.dark};
`

const ContentWrapper = styled.section`
  display: flex;
  color: ${props => props.theme.palette.light};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: ${props => props.theme.grid.container};
  max-width: ${props => props.theme.grid.maxWidth};
  font-family: ${props => props.theme.fontFamilies.merriweather};
`

const Text = styled.div`
  max-width: ${props => props.theme.grid.maxWidthSm};
  line-height: 1.3em;
  text-align: center;
  margin-top: 80px;

  p {
    font-size: 3.2em !important;
  }
`

const LinkList = styled.ul`
  margin-top: 56px;
  display: flex;
`

const LinkItem = styled.li`
  &:not(:last-child) {
    margin-right: 24px;
  }
`

const LinkText = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme.palette.light};
  font-size: 2.8em;
  font-weight: ${props => props.theme.fontWeights.semibold};
  letter-spacing: 0.08em;

  &:hover::after {
    transform: scaleX(0.8);
  }

  &::after {
    content: '';
    display: block;
    margin-top: 6px;
    width: 100%;
    height: 3px;
    transform: scaleX(0.2);
    background-color: ${props => props.theme.palette.light};
    transition: transform 250ms ease-in-out;
  }
`

const Arrow = styled.div`
  margin: 72px 0 40px;
`

const Intro = ({ intro, githubLink, linkedInLink }) => (
  <Wrapper>
    <ContentWrapper>
      <Text
        dangerouslySetInnerHTML={{
          __html: intro.childMarkdownRemark.html,
        }}
      />
      <LinkList>
        <LinkItem>
          <LinkText href={githubLink} target="_blank">
            GitHub
          </LinkText>
        </LinkItem>
        <LinkItem>
          <LinkText href={linkedInLink} target="_blank">
            LinkedIn
          </LinkText>
        </LinkItem>
      </LinkList>
      <Arrow />
    </ContentWrapper>
  </Wrapper>
)

export default Intro
