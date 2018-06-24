import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const StyledLink = styled.a`
  display: inline-block;
  font-size: 2em;
  font-family: ${props => props.theme.fontFamilies.merriweather};
  font-weight: ${props => props.theme.fontWeights.regular};
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

const Button = ({ link, text, target }) => (
  <StyledLink href={link} target={target}>
    {text}
  </StyledLink>
)

export default Button
