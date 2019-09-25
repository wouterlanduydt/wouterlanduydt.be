import React from "react"
import PropTypes from "prop-types"

import "normalize.css"
import "../styles/global.css"

const Layout = ({ children }) => (
  <div>
    <main>{children}</main>
    <footer>© Wouter Landuydt - {new Date().getFullYear()}</footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
