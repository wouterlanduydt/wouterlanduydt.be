import React from 'react'
import styled from 'styled-components'
import Button from '../Button'

const Wrapper = styled.div`
  margin: 0 auto;
  width: ${props => props.theme.grid.container};
  max-width: ${props => props.theme.grid.maxWidthXs};
`

const Title = styled.h2`
  font-size: 3.6em;
  line-height: 1.2em;
  padding: 40px 0;

  @media (min-width: ${props => props.theme.breakpoints.about}) {
    font-size: 4.2em;
    padding: 64px 0;
  }
`

const Intro = styled.div`
  p:not(:last-child) {
    margin-bottom: 22px;
  }

  a {
    color: ${props => props.theme.palette.dark};
    text-decoration: underline;
    font-weight: ${props => props.theme.fontWeights.bold};
  }
`

const ButtonWrapper = styled.div`
  margin: 32px 0 64px;

  a:not(:last-child) {
    margin-right: 16px;
  }

  a:last-child {
    margin-top: 8px;
  }

  @media (min-width: ${props => props.theme.breakpoints.about}) {
    margin: 40px 0 72px;
  }
`

const SubTitle = styled.h3`
  font-size: 2.4em;
  margin: 40px 0 8px;

  @media (min-width: ${props => props.theme.breakpoints.about}) {
    margin: 48px 0 8px;
  }
`

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  font-size: 1.8em;
  font-weight: ${props => props.theme.fontWeights.bold};
  margin: 4px 0;
  display: flex;

  &:not(:last-child)::after {
    white-space: pre-wrap;
    display: block;
    content: ', ';
  }
`

const AboutContent = ({
  aboutTitle,
  aboutText,
  iKnow,
  iLove,
  resume,
  email,
}) => (
  <Wrapper>
    <Title>{aboutTitle}</Title>
    <Intro
      dangerouslySetInnerHTML={{
        __html: aboutText.childMarkdownRemark.html,
      }}
    />
    {console.log(`http://localhost:8000/about${resume.file.url}`)}
    <ButtonWrapper>
      <Button text="Email Me" link={`mailto:${email}`} />
      <Button text="My Resume" link={resume.file.url} target="_blank" />
    </ButtonWrapper>
    {iKnow && (
      <div>
        <SubTitle>What I Use(d)</SubTitle>
        <List>{iKnow.map(item => <ListItem key={item}>{item}</ListItem>)}</List>
      </div>
    )}
    {iLove && (
      <div>
        <SubTitle>What I Love</SubTitle>
        <List>{iLove.map(item => <ListItem key={item}>{item}</ListItem>)}</List>
      </div>
    )}
  </Wrapper>
)

export default AboutContent
