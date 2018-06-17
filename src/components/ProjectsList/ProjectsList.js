import React from 'react'
import styled from 'styled-components'
import ProjectPreview from './ProjectPreview'

const Wrapper = styled.section`
  width: ${props => props.theme.grid.container};
  max-width: ${props => props.theme.grid.maxWidth};
  margin: 0 auto;
  margin-top: 64px;
`

const List = styled.ol`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const ProjectsList = ({ projects }) => (
  <Wrapper>
    <List>
      {projects.map(({ node }) => (
        <ProjectPreview key={node.slug} project={node} />
      ))}
    </List>
  </Wrapper>
)

export default ProjectsList
