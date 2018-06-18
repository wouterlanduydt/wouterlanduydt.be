import { css } from 'styled-components'
import { textStyles, fontWeights, fontFamilies } from './branding'

export default css`
  html {
    -webkit-text-size-adjust: 100%;
  }

  body {
    font-size: 62.5%;
    margin-top: 72px;
    font-family: ${fontFamilies.openSans};
    font-weight: ${fontWeights.light};
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
