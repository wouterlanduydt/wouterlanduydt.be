import React from 'react'
import Preview from './preview'
import { Wrapper, List, ProjectWrapper } from './ProjectList.styled'
import { TProject } from '../../../config/types'

type TProps = {
  projects: TProject[]
}

const ProjectList = (props: TProps) => {
  const { projects } = props

  return (
    <Wrapper>
      <header className="hide">
        <h2>Projects</h2>
      </header>
      <List>
        {projects.map((project, index) => (
          <ProjectWrapper key={project.node.slug}>
            <Preview project={project.node} />
          </ProjectWrapper>
        ))}
      </List>
    </Wrapper>
  )
}

export default ProjectList
