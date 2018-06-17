import React, { Component } from 'react'
import { ThemeProvider, injectGlobal } from 'styled-components'
import branding from '../styles/branding'
import global from '../styles/global'
import reset from 'styled-reset'
import Navigation from '../components/Navigation'

injectGlobal`
  ${reset}
  ${global}
`

class Template extends Component {
  render() {
    const { children } = this.props

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <ThemeProvider theme={branding}>
        <div>
          <Navigation />
          {children()}
        </div>
      </ThemeProvider>
    )
  }
}

export default Template
