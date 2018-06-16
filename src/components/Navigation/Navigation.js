import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Wrapper = styled.nav`
  background-color: ${props => props.theme.palette.neutral01};
`

const Navigation = () => (
  <Wrapper role="navigation">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </Wrapper>
)

export default Navigation
