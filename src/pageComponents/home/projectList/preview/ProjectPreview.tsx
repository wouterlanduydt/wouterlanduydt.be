import React from 'react'
import {
  StyledLink,
  Image,
  Overlay,
  Title,
  TagsList,
  TagItem,
} from './ProjectPreview.styled'
import { TProjectNode } from '../../../../config/types'

type TProps = {
  project: TProjectNode
}

const ProjectPreview = (props: TProps) => {
  const { project } = props
  const { slug, previewImage, tags, title } = project

  return (
    <StyledLink to={`/projects/${slug}`}>
      <Image src={previewImage.file.url} alt="" className="image" />
      <Overlay className="overlay">
        <Title>{title}</Title>
        <TagsList>
          {tags.map((tag: string) => (
            <TagItem key={tag}>{tag}</TagItem>
          ))}
        </TagsList>
      </Overlay>
    </StyledLink>
  )
}

export default ProjectPreview
