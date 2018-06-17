import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Wrapper = styled.li`
  width: 49%;
  height: 304px;
`

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`

const ProjectPreview = ({ project }) => (
  <Wrapper>
    <Link to={`/projects/${project.slug}`}>
      <Image src="http://via.placeholder.com/350x150" alt="" />
    </Link>
  </Wrapper>
)

export default ProjectPreview
