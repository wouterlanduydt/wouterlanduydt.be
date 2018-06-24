import React from 'react'
import styled from 'styled-components'
import Button from '../Button'

const Wrapper = styled.div`
  margin: 0 auto;
  width: ${props => props.theme.grid.container};
  max-width: ${props => props.theme.grid.maxWidthXs};
`

const Title = styled.h2`
  font-size: 4.2em;
  line-height: 1.2em;
  padding: 64px 0;
`

const ButtonWrapper = styled.div`
  margin: 48px 0 80px;

  a:not(:last-child) {
    margin-right: 16px;
  }
`

const SubTitle = styled.h3`
  font-size: 2.4em;
  margin: 48px 0 8px;
`

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  font-size: 1.8em;
  font-weight: ${props => props.theme.fontWeights.bold};
  margin: 2px 0;
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
    <div
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
        <SubTitle>What I Know</SubTitle>
        <List>{iKnow.map(item => <ListItem>{item}</ListItem>)}</List>
      </div>
    )}
    {iLove && (
      <div>
        <SubTitle>What I Love</SubTitle>
        <List>{iLove.map(item => <ListItem>{item}</ListItem>)}</List>
      </div>
    )}
  </Wrapper>
)

export default AboutContent
