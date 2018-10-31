import styled from 'styled-components'

export const StyledLink = styled.a`
  display: inline-block;
  font-size: 2em;
  font-family: ${props => props.theme.fontFamilies.merriweather};
  font-weight: ${props => props.theme.fontWeights.medium};
  border: 2px solid ${props => props.theme.palette.dark};
  color: ${props => props.theme.palette.dark};
  padding: 8px 24px;
  transition: all 150ms;
  user-select: none;

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.palette.light};
    background-color: ${props => props.theme.palette.dark};
  }
`
