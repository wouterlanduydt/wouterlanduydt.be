import React from 'react'
import { StyledLink } from './Button.styled'

const Button = ({ link, text, target }) => (
  <StyledLink
    href={link}
    target={target}
    rel={target === '_blank' && 'noopener'}
  >
    {text}
  </StyledLink>
)

export default Button
