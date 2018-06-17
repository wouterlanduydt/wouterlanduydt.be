import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Wrapper = styled.li`
  width: 49%;
  height: 304px;
`

const StyledLink = styled(Link)`
  position: relative;
  display: block;
  overflow: hidden;

  &:hover .overlay {
    transform: translateY(0);
  }

  &:hover .image {
    transform: scale(1.05);
  }
`

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  transform-origin: center bottom;
  transition: transform 800ms;
`

const Overlay = styled.header`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${props => props.theme.palette.dark};
  overflow: hidden;
  width: 100%;
  height: 80px;
  transform: translateY(112px);
  transform-origin: center bottom;
  transition: transform 300ms ease-out;
  padding: 16px;
`

const Title = styled.h2`
  color: ${props => props.theme.palette.light};
`

const ProjectPreview = ({ project }) => {
  const { slug, previewImage, tags, title } = project

  return (
    <Wrapper>
      <StyledLink to={`/projects/${slug}`}>
        <Image src={previewImage.file.url} alt="" className="image" />
        <Overlay className="overlay">
          <Title>{title}</Title>
          <ul>{tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
        </Overlay>
      </StyledLink>
    </Wrapper>
  )
}

export default ProjectPreview
