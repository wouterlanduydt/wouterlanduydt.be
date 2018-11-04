import React from 'react'
import {
  Wrapper,
  ContentWrapper,
  Text,
  LinkList,
  LinkItem,
  LinkText,
} from './Intro.styled'

type TProps = {
  intro: any
  githubLink: string
  linkedInLink: string
}

const Intro = (props: TProps) => {
  const { intro, linkedInLink, githubLink } = props

  return (
    <Wrapper>
      <ContentWrapper>
        <header className="hide">
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
}

export default Intro
