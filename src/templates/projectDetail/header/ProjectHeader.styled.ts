import styled, { css } from 'styled-components'
import Link from 'gatsby-link'

export const Wrapper = styled.div`
  background-color: ${props => props.theme.palette.dark};
  color: ${props => props.theme.palette.light};
`

export const InnerWrapper = styled.header`
  margin: 0 auto;
  width: ${props => props.theme.grid.container};
  max-width: ${props => props.theme.grid.maxWidth};
`

export const BackButton = styled(Link)`
  display: inline-block;
  margin-top: 16px;
  height: 16px;
`

export const Title = styled.h1`
  padding: 40px 0 4px;
  font-size: 3.8em;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: 5.2em;
  }
`

export const SubtitleWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`

export const Subtitle = styled.span`
  font-size: 1.8em;
  line-height: 0.96em;
  font-weight: ${props => props.theme.fontWeights.medium};
  margin: 6px 8px 0 0;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: 2em;
  }
`

export const PublishedDate = styled.span`
  font-size: 1.4em;
  font-weight: ${props => props.theme.fontWeights.regular};
  text-transform: uppercase;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: 1.6em;
  }
`

export const StatsList = styled.ol`
  display: flex;
  flex-wrap: wrap;
  padding: 40px 0px 8px;
`

export const Stat = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  &:not(:last-child) {
    margin-right: 32px;
  }
`

export const StatTitle = styled.span`
  font-size: 2.2em;
  font-family: ${props => props.theme.fontFamilies.merriweather};
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-bottom: 8px;
`

const statContentStyling = css`
  font-size: 1.6em;
  font-weight: ${props => props.theme.fontWeights.medium};
`

export const StatContent = styled.span`
  ${statContentStyling};
`

export const StatContentLi = styled.li`
  ${statContentStyling};

  &.tag {
    text-transform: capitalize;
  }

  &:not(:last-child) {
    margin-bottom: 4px;
  }
`

export const TagsList = styled.ul`
  display: flex;
`
