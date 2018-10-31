import React from 'react'
import {
  cardsAnim,
  StyledLink,
  Image,
  Overlay,
  Title,
  TagsList,
  TagItem,
} from './ProjectPreview.styled'

const ProjectPreview = ({ project, index }) => {
  const { slug, previewImage, tags, title } = project

  return (
    <StyledLink to={`/projects/${slug}`} index={index}>
      <Image src={previewImage.file.url} alt="" className="image" />
      <Overlay className="overlay">
        <Title>{title}</Title>
        <TagsList>
          {tags.map(tag => <TagItem key={tag}>{tag}</TagItem>)}
        </TagsList>
      </Overlay>
    </StyledLink>
  )
}

export default ProjectPreview
