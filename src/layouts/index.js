import React from 'react'
import Link from 'gatsby-link'
import Navigation from '../components/navigation'

class Template extends React.Component {
  render() {
    const { children } = this.props

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <div>
        <Navigation />
        {children()}
      </div>
    )
  }
}

export default Template
