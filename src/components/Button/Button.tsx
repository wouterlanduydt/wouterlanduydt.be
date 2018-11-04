import React from 'react'
import { StyledLink } from './Button.styled'

type TProps = {
  link: string
  text: string
  target?: string
}

const Button = (props: TProps) => {
  const { link, text, target } = props

  return (
    <StyledLink
      href={link}
      target={target}
      rel={(target === '_blank' && 'noopener') || undefined}
    >
      {text}
    </StyledLink>
  )
}

export default Button
