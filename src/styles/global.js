import { css } from 'styled-components'
import { textStyles } from './branding'

export default css`
  html {
    -webkit-text-size-adjust: 100%;
  }

  body {
    font-size: 62.5%;
    margin-top: 72px;
  }

  a {
    text-decoration: none;
  }

  h1 {
    ${textStyles.heading01};
  }

  h2 {
    ${textStyles.heading02};
  }
`
