import { css } from 'styled-components'
import { textStyles, fontWeights, fontFamilies, palette } from './branding'

export default css`
  html {
    -webkit-text-size-adjust: 100%;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-size: 62.5%;
    font-family: ${fontFamilies.openSans};
    font-weight: ${fontWeights.light};
  }

  p {
    font-size: 1.8em;
    line-height: 1.2em;
  }

  a {
    text-decoration: none;
  }

  strong {
    font-weight: ${fontWeights.bold};
  }

  h1 {
    ${textStyles.heading01};
  }

  h2 {
    ${textStyles.heading02};
  }

  h3 {
    ${textStyles.heading03};
  }

  ::selection {
    color: ${palette.white};
    background: ${palette.selectionColor};
  }

  ::-moz-selection {
    color: ${palette.white};
    background: ${palette.selectionColor};
  }
`
