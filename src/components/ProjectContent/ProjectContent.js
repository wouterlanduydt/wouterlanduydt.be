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
  font-size: 1.8em;
  line-height: 1.2em;
  margin-top: 56px;

  p:not(:last-child) {
    margin-bottom: 16px;
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

const ProjectContent = ({ description, detailImages, link }) => (
  <Wrapper>
    <Text
      dangerouslySetInnerHTML={{
        __html: description.childMarkdownRemark.html,
      }}
    />
    <Button link={link} text="online" target="_blank" />
    {detailImages &&
      detailImages.map(image => (
        <StyledImage src={image.file.url} key={image.file.url} alt="" />
      ))}
  </Wrapper>
)

export default ProjectContent
