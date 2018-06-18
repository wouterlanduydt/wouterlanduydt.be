import { css } from 'styled-components'

const palette = {
  light: '#ffffff',
  dark: '#000000',
}

const fontFamilies = {
  merriweather: 'merriweather',
  openSans: 'open sans',
}

const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
}

const textStyles = {
  heading01: css`
    font-size: 3.6em;
    font-weight: ${fontWeights.semibold};
    font-family: ${fontFamilies.merriweather};
  `,

  heading02: css`
    font-size: 2em;
    font-family: ${fontFamilies.merriweather};
    font-weight: ${fontWeights.semibold};
  `,
}

const grid = {
  maxWidth: '1120px',
  maxWidthSm: '960px',
  container: '90%',
}

const breakpoints = {
  xxl: '1290px',
  xl: '1100px',
  md: '960px',
  sm: '680px',
  xs: '520px',
}

export default {
  palette,
  grid,
  breakpoints,
  textStyles,
  fontWeights,
  fontFamilies,
}
