import styled from 'styled-components'

export const Wrapper = styled.section`
  width: ${props => props.theme.grid.container};
  max-width: ${props => props.theme.grid.maxWidth};
  margin: 40px auto 0;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    margin: 64px auto 0;
  }
`

export const List = styled.ol`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const ProjectWrapper = styled.li`
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
