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
    transform: scale(1.1);
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
  height: 48px;
  transform: translateY(80px);
  transform-origin: center bottom;
  transition: transform 300ms ease-out;
  padding: 16px;
`

const Title = styled.h2`
  color: ${props => props.theme.palette.light};
  margin: 2px 0 8px;
`

const TagsList = styled.ul`
  display: flex;
`

const TagItem = styled.li`
  font-size: 1.6em;
  color: ${props => props.theme.palette.light};
  text-transform: uppercase;

  &:not(:last-child) {
    margin-right: 4px;
  }
`

const ProjectPreview = ({ project }) => {
  const { slug, previewImage, tags, title } = project

  return (
    <Wrapper>
      <StyledLink to={`/projects/${slug}`}>
        <Image src={previewImage.file.url} alt="" className="image" />
        <Overlay className="overlay">
          <Title>{title}</Title>
          <TagsList>
            {tags.map(tag => <TagItem key={tag}>{tag}</TagItem>)}
          </TagsList>
        </Overlay>
      </StyledLink>
    </Wrapper>
  )
}

export default ProjectPreview
