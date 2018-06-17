import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Wrapper = styled.div`
  height: 400px;
  background-color: ${props => props.theme.palette.dark};
`

const ContentWrapper = styled.section`
  display: flex;
  color: ${props => props.theme.palette.light};
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: ${props => props.theme.grid.container};
  max-width: ${props => props.theme.grid.maxWidth};
`

const Text = styled.p`
  max-width: ${props => props.theme.grid.maxWidthSm};
  text-align: center;
  font-size: 3.2em;
  margin-top: 88px;
`

const LinkList = styled.ul`
  margin-top: 40px;
  display: flex;
`

const LinkItem = styled.li`
  :not(:last-child) {
    margin-right: 16px;
  }
`

const LinkText = styled.a`
  color: ${props => props.theme.palette.light};
  font-size: 2.8em;
`

const Intro = () => (
  <Wrapper>
    <ContentWrapper>
      <Text>
        I'm Wouter Landuydt, Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Duis ultricies nec neque nec feugiat. Curabitur rutrum volutpat
        semper. Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia Curae.
      </Text>
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
      <div>^</div>
    </ContentWrapper>
  </Wrapper>
)

export default Intro
