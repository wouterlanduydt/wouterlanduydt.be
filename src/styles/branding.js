import { css } from 'styled-components'

const palette = {
  light: '#ffffff',
  dark: '#1A1E22',
}

const textStyles = {
  heading01: css`
    font-size: 3.2em;
  `,

  heading02: css`
    font-size: 2em;
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
}
