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
`

const Text = styled.p`
  max-width: ${props => props.theme.grid.maxWidthSm};
  text-align: center;
  font-size: 3.2em;
  margin-top: 80px;
`

const LinkList = styled.ul`
  margin-top: 40px;
  display: flex;
`

const LinkItem = styled.li`
  &:not(:last-child) {
    margin-right: 16px;
  }
`

const LinkText = styled.a`
  color: ${props => props.theme.palette.light};
  font-size: 2.8em;
`

const Arrow = styled.div`
  margin: 72px 0 40px;
`

const Intro = ({ intro }) => (
  <Wrapper>
    <ContentWrapper>
      <Text
        dangerouslySetInnerHTML={{
          __html: intro.childMarkdownRemark.html,
        }}
      />
      <LinkList>
        <LinkItem>
          <LinkText href="https://www.google.com">social</LinkText>
        </LinkItem>
        <LinkItem>
          <LinkText href="https://www.google.com">social</LinkText>
        </LinkItem>
        <LinkItem>
          <LinkText href="https://www.google.com">social</LinkText>
        </LinkItem>
      </LinkList>
      <Arrow>x</Arrow>
    </ContentWrapper>
  </Wrapper>
)

export default Intro
