import React from 'react'
import {
  Wrapper,
  ContentWrapper,
  Text,
  LinkList,
  LinkItem,
  LinkText,
} from './Intro.styled'

const Intro = ({ intro, githubLink, linkedInLink }) => (
  <Wrapper>
    <ContentWrapper>
      <header style={{ display: 'none' }}>
        <h2>Intro</h2>
      </header>
      <Text
        dangerouslySetInnerHTML={{
          __html: intro.childMarkdownRemark.html,
        }}
      />
      <LinkList>
        <LinkItem>
          <LinkText href={linkedInLink} target="_blank" rel="noopener">
            LinkedIn
          </LinkText>
        </LinkItem>
        <LinkItem>
          <LinkText href={githubLink} target="_blank" rel="noopener">
            GitHub
          </LinkText>
        </LinkItem>
      </LinkList>
    </ContentWrapper>
  </Wrapper>
)

export default Intro
