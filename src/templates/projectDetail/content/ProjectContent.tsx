import React from 'react'
import Button from '../../../components/Button'
import {
  Wrapper,
  Text,
  ButtonWrapper,
  Movie,
  StyledImage,
} from './ProjectContent.styled'

type TProps = {
  description: any
  images: any[]
  projectVideo: string
  link: string
}

const ProjectContent = (props: TProps) => {
  const { description, images, projectVideo, link } = props

  return (
    <Wrapper>
      <header className="hide">
        <h1>Project Description</h1>
      </header>
      <Text
        dangerouslySetInnerHTML={{
          __html: description.childMarkdownRemark.html,
        }}
      />
      <ButtonWrapper>
        <Button link={link} text="Online" target="_blank" />
      </ButtonWrapper>
      {projectVideo && (
        <Movie>
          <iframe src={projectVideo} allowFullScreen />
        </Movie>
      )}
      {images &&
        images.length >= 1 &&
        images.map(image => (
          <StyledImage src={image.file.url} key={image.file.url} alt="" />
        ))}
    </Wrapper>
  )
}

export default ProjectContent
