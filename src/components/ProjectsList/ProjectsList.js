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

const ProjectWrapper = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 24px;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    width: 49%;
  }
`

const ProjectsList = ({ projects }) => (
  <Wrapper>
    <List>
      {projects.map(({ node }) => (
        <ProjectWrapper key={node.slug}>
          <ProjectPreview project={node} />
        </ProjectWrapper>
      ))}
    </List>
  </Wrapper>
)

export default ProjectsList
