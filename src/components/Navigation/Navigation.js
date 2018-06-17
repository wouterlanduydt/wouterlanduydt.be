import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import LogoImage from '../../assets/svg/logo.svg'

const Wrapper = styled.div`
  background-color: ${props => props.theme.palette.dark};
  position: fixed;
  top: 0;
  z-index: 9999;
  height: 72px;
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

const Logo = styled.img`
  height: 40px;
  width: auto;
`

const PagesList = styled.ol`
  display: flex;
  flex: 0 1 auto;
  margin-left: auto;
`

const StyledLink = styled(Link)`
  font-size: 1.6em;
  color: ${props => props.theme.palette.light};
  text-transform: uppercase;
`

const Navigation = () => (
  <Wrapper role="navigation">
    <Nav>
      <LogoLink to="/">
        <Logo src={LogoImage} alt="" />
      </LogoLink>
      <PagesList>
        <li>
          <StyledLink to="/about">About</StyledLink>
        </li>
      </PagesList>
    </Nav>
  </Wrapper>
)

export default Navigation
