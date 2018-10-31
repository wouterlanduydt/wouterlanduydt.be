import React from 'react'
import ProjectPreview from '../ProjectPreview'
import { Wrapper, List, ProjectWrapper } from './ProjectList.styled'

const ProjectList = ({ projects }) => (
  <Wrapper>
    <header style={{ display: 'none' }}>
      <h2>Projects</h2>
    </header>
    <List>
      {projects.map((project, index) => (
        <ProjectWrapper key={project.node.slug}>
          <ProjectPreview project={project.node} index={index} />
        </ProjectWrapper>
      ))}
    </List>
  </Wrapper>
)

export default ProjectList
