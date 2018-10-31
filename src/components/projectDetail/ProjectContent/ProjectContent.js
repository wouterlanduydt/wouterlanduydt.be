import React from 'react'
import Button from '../../general/Button'
import {
  Wrapper,
  Text,
  ButtonWrapper,
  Movie,
  StyledImage,
} from './ProjectContent.styled'

const ProjectContent = ({ description, images, projectVideo, link }) => (
  <Wrapper>
    <header style={{ display: 'none' }}>
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
      images.map(image => (
        <StyledImage src={image.file.url} key={image.file.url} alt="" />
      ))}
  </Wrapper>
)

export default ProjectContent
