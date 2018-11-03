import React from 'react'
import Button from '../../../components/Button'
import {
  Wrapper,
  Title,
  Intro,
  ButtonWrapper,
  SubTitle,
  List,
  ListItem,
} from './AboutContent.styled'

type TProps = {
  aboutTitle: string
  aboutText: any
  iKnow: Array<string>
  iLove: Array<string>
  resume: any
  email: string
}

const AboutContent = (props: TProps) => {
  const { aboutTitle, aboutText, iKnow, iLove, resume, email } = props

  return (
    <Wrapper>
      <Title>{aboutTitle}</Title>
      <Intro
        dangerouslySetInnerHTML={{
          __html: aboutText.childMarkdownRemark.html,
        }}
      />
      <ButtonWrapper>
        <Button text="Email Me" link={`mailto:${email}`} />
        <Button text="My Resume" link={resume.file.url} target="_blank" />
      </ButtonWrapper>
      {iKnow && (
        <div>
          <SubTitle>What I Use(d)</SubTitle>
          <List>
            {iKnow.map(item => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </List>
        </div>
      )}
      {iLove && (
        <div>
          <SubTitle>What I Love</SubTitle>
          <List>
            {iLove.map(item => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </List>
        </div>
      )}
    </Wrapper>
  )
}

export default AboutContent
