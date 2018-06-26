import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Button from '../Button'

const Wrapper = styled.div`
  margin: 0 auto;
  width: ${props => props.theme.grid.container};
  max-width: ${props => props.theme.grid.maxWidth};
`

const Text = styled.div`
  margin-top: 56px;

  p:not(:last-child) {
    margin-bottom: 16px;
  }
`

const ButtonWrapper = styled.div`
  margin: 32px 0 80px;
`

const Movie = styled.div`
  width: 100%;
  background-color: ${props => props.theme.palette.loading};

  position: relative;
  padding-bottom: 56.3%;
  overflow: hidden;

  iframe,
  object,
  embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const StyledImage = styled.img`
  display: block;
  width: 100%;
  height: auto;

  &:not(:last-child) {
    margin-bottom: 32px;
  }
`

const ProjectContent = ({ description, images, projectVideo, link }) => (
  <Wrapper>
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
