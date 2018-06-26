import { css } from 'styled-components'

const palette = {
  light: '#ffffff',
  dark: '#000000',
  loading: 'rgb(229,227,223)',
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
    font-size: 5.2em;
    font-weight: ${fontWeights.semibold};
    font-family: ${fontFamilies.merriweather};
  `,

  heading02: css`
    font-size: 2em;
    font-family: ${fontFamilies.merriweather};
    font-weight: ${fontWeights.semibold};
  `,

  heading03: css`
    font-size: 2em;
    font-family: ${fontFamilies.merriweather};
    font-weight: ${fontWeights.semibold};
  `,
}

const grid = {
  maxWidth: '1120px',
  maxWidthSm: '960px',
  maxWidthXs: '648px',
  container: '90%',
}

const breakpoints = {
  md: '860px',
  about: '648px',
  sm: '540px',
  xs: '460px',
}

export default {
  palette,
  grid,
  breakpoints,
  textStyles,
  fontWeights,
  fontFamilies,
}
