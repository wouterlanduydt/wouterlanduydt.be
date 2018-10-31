import styled from 'styled-components'
import Link from 'gatsby-link'

export const Wrapper = styled.article`
  margin: 0 auto;
  width: ${props => props.theme.grid.container};
  max-width: ${props => props.theme.grid.maxWidth};
`

export const Text = styled.div`
  margin-top: 56px;

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
  margin: 32px 0 40px;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    margin: 32px 0 80px;
  }
`

export const Movie = styled.div`
  width: 100%;
  background-color: ${props => props.theme.palette.loading};
  position: relative;
  padding-bottom: 56.3%;
  overflow: hidden;
  margin-bottom: 16px;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    margin-bottom: 32px;
  }

  iframe,
  object,
  embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

export const StyledImage = styled.img`
  display: block;
  width: 100%;
  height: auto;

  &:not(:last-child) {
    margin-bottom: 16px;

    @media (min-width: ${props => props.theme.breakpoints.sm}) {
      margin-bottom: 32px;
    }
  }
`
