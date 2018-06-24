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
    <ButtonWrapper>
      <Button link={link} text="online" target="_blank" />
    </ButtonWrapper>
    {detailImages &&
      detailImages.map(image => (
        <StyledImage src={image.file.url} key={image.file.url} alt="" />
      ))}
  </Wrapper>
)

export default ProjectContent
