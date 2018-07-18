import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Headroom from 'react-headroom'
import LogoImage from '../../assets/svg/logo.svg'

const StyledHeadroom = styled(Headroom)`
  .headroom {
    height: 72px !important;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    background-color: ${props => props.theme.palette.dark};
  }
  .headroom--unfixed {
    position: relative;
    transform: translateY(0);
  }
  .headroom--scrolled {
    transition: transform 150ms ease-in-out;
  }
  .headroom--unpinned {
    position: fixed;
    transform: translateY(-72px);
  }
  .headroom--pinned {
    position: fixed;
    transform: translateY(0px);
  }
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

const Logo = styled.img`
  height: 40px;
  width: 57px;
  padding: 0 10px;
  transition: transform 200ms ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`

const PagesList = styled.ol`
  display: flex;
  margin-left: auto;

  .nav-item:not(:last-child) {
    margin-right: 16px;
  }
`

const StyledLink = styled(Link)`
  display: flex;
  font-size: 1.4em;
  letter-spacing: 2px;
  color: ${props => props.theme.palette.light};
  text-transform: uppercase;

  &:hover::after {
    transform: scale(1);
    width: 16px;
  }

  &::after {
    content: '→';
    display: block;
    width: 0px;
    transform: scale(0);
    transition: all 200ms ease-in-out;
  }
`

const Navigation = () => (
  <StyledHeadroom disableInlineStyles role="navigation">
    <Nav>
      <header style={{ display: 'none' }}>
        <h2>Main Navigation</h2>
      </header>
      <div className="bar-item" />
      <Link className="bar-item" to="/" aria-label="home">
        <Logo src={LogoImage} alt="" className="logo" />
      </Link>
      <PagesList className="bar-item">
        <li className="nav-item">
          <StyledLink to="/about">About</StyledLink>
        </li>
      </PagesList>
    </Nav>
  </StyledHeadroom>
)

export default Navigation
