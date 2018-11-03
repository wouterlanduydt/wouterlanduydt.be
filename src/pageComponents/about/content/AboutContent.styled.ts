import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 0 auto;
  width: ${props => props.theme.grid.container};
  max-width: ${props => props.theme.grid.maxWidthXs};
`

export const Title = styled.h2`
  font-size: 2.8em;
  line-height: 1.2em;
  padding: 40px 0;

  @media (min-width: ${props => props.theme.breakpoints.about}) {
    font-size: 3.6em;
    padding: 64px 0;
  }
`

export const Intro = styled.div`
  p:not(:last-child) {
    margin-bottom: 22px;
  }

  a {
    color: ${props => props.theme.palette.dark};
    text-decoration: underline;
    font-weight: ${props => props.theme.fontWeights.bold};
  }
`

export const ButtonWrapper = styled.div`
  margin: 32px 0 64px;

  a:not(:last-child) {
    margin-right: 16px;
  }

  a:last-child {
    margin-top: 8px;
  }

  @media (min-width: ${props => props.theme.breakpoints.about}) {
    margin: 40px 0 72px;
  }
`

export const SubTitle = styled.h3`
  font-size: 2.4em;
  margin: 40px 0 8px;

  @media (min-width: ${props => props.theme.breakpoints.about}) {
    margin: 48px 0 8px;
  }
`

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

export const ListItem = styled.li`
  font-size: 1.8em;
  font-weight: ${props => props.theme.fontWeights.bold};
  margin: 2px 0;
  display: flex;

  &:not(:last-child)::after {
    white-space: pre-wrap;
    display: block;
    content: ', ';
  }
`
