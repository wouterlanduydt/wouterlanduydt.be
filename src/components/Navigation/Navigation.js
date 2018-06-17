import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Logo from '../../assets/svg/logo.svg'

const Wrapper = styled.div`
  background-color: ${props => props.theme.palette.dark};
  height: 56px;
  width: 100%;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 auto;
  height: 100%;
  position: relative;
  width: ${props => props.theme.grid.container};
  max-width: ${props => props.theme.grid.maxWidth};
`

const LogoLink = styled(Link)`
  flex: 0 1 auto;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`

const PagesList = styled.ol`
  display: flex;
  flex: 0 1 auto;
  margin-left: auto;
`

const Navigation = () => (
  <Wrapper role="navigation">
    <Nav>
      <LogoLink to="/">
        <img src={Logo} alt="" />
      </LogoLink>
      <PagesList>
        <li>
          <Link to="/about">About</Link>
        </li>
      </PagesList>
    </Nav>
  </Wrapper>
)

export default Navigation
