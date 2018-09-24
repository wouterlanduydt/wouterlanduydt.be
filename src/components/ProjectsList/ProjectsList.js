import React from 'react'
import styled from 'styled-components'
import ProjectPreview from './ProjectPreview'

const Wrapper = styled.section`
  width: ${props => props.theme.grid.container};
  max-width: ${props => props.theme.grid.maxWidth};
  margin: 40px auto 0;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    margin: 64px auto 0;
  }
`

const List = styled.ol`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const ProjectWrapper = styled.li`
  width: 100%;
  height: auto;
  margin-bottom: 16px;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    margin-bottom: 24px;
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    width: 49%;
  }
`

const ProjectsList = ({ projects }) => (
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

export default ProjectsList
