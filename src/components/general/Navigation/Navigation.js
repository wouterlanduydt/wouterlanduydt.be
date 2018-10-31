import React from 'react'
import Link from 'gatsby-link'
import LogoImage from '../../../assets/svg/logo.svg'
import {
  StyledHeadroom,
  Nav,
  Logo,
  PagesList,
  StyledLink,
} from './Navigation.styled'

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
