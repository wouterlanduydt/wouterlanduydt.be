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
  margin: 0 auto;
  height: 100%;
  width: ${props => props.theme.grid.container};
  max-width: ${props => props.theme.grid.maxWidth};

  .bar-item {
    flex: 1;
    display: flex;
    justify-content: center;

    &:first-child {
      margin-right: auto;
    }

    &:last-child {
      margin-left: auto;
      justify-content: flex-end;
    }
  }
`

const LogoLink = styled(Link)``

const Logo = styled.img`
  height: 40px;
  width: 57px;
  padding: 0 10px;
`

const PagesList = styled.ol`
  display: flex;
  margin-left: auto;

  .nav-item:not(:last-child) {
    margin-right: 16px;
  }
`

const StyledLink = styled(Link)`
  display: inline-block;
  font-size: 1.4em;
  letter-spacing: 2px;
  color: ${props => props.theme.palette.light};
  text-transform: uppercase;
`

const Navigation = () => (
  <Wrapper role="navigation">
    <Nav>
      <header style={{ display: 'none' }}>
        <h2>Main Navigation</h2>
      </header>
      <div className="bar-item" />
      <LogoLink className="bar-item" to="/" aria-label="home">
        <Logo src={LogoImage} alt="" />
      </LogoLink>
      <PagesList className="bar-item">
        <li className="nav-item">
          <StyledLink to="/about">About</StyledLink>
        </li>
      </PagesList>
    </Nav>
  </Wrapper>
)

export default Navigation
