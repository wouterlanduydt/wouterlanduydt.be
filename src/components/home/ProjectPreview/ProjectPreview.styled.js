import styled, { keyframes } from 'styled-components'
import Link from 'gatsby-link'

export const cardsAnim = keyframes`
  from { opacity: 0; transform: translateY(60px); }
  to { opacity: 1; transform: translateY(0px); }
`

export const StyledLink = styled(Link)`
  position: relative;
  display: block;
  overflow: hidden;
  opacity: 0;
  animation: ${cardsAnim} 400ms forwards ease-out;
  animation-delay: ${props => props.index * 80}ms;

  &:hover .overlay {
    transform: translateY(0);
  }

  &:hover .image {
    transform: scale(1.05);
  }
`

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  transform-origin: center bottom;
  transition: transform 800ms;
`

export const Overlay = styled.header`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${props => props.theme.palette.dark};
  overflow: hidden;
  width: 100%;
  height: 80px;
  transform: translateY(80px);
  transform-origin: center bottom;
  transition: transform 300ms ease-out;
  padding: 16px;
`

export const Title = styled.h3`
  color: ${props => props.theme.palette.light};
  margin: 2px 0 8px;
`

export const TagsList = styled.ul`
  display: flex;
`

export const TagItem = styled.li`
  font-size: 1.6em;
  color: ${props => props.theme.palette.light};
  text-transform: uppercase;

  &:not(:last-child) {
    margin-right: 4px;
  }
`
