import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: ${props => props.theme.palette.dark};
`

export const ContentWrapper = styled.section`
  display: flex;
  color: ${props => props.theme.palette.light};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: ${props => props.theme.grid.container};
  max-width: ${props => props.theme.grid.maxWidth};
  font-family: ${props => props.theme.fontFamilies.merriweather};
`

export const Text = styled.div`
  max-width: ${props => props.theme.grid.maxWidthSm};
  text-align: center;
  margin-top: 56px;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    margin-top: 80px;
  }

  a {
    color: ${props => props.theme.palette.light};
    position: relative;

    &::after {
      position: absolute;
      content: '';
      margin: 0 auto;
      left: 0;
      right: 0;
      bottom: 2px;
      width: 95%;
      height: 2px;
      background-color: ${props => props.theme.palette.light};
    }

    &:hover {
      font-weight: ${props => props.theme.fontWeights.bold};

      &::after {
        bottom: 1px;
        height: 3px;
      }
    }
  }

  p {
    font-weight: ${props => props.theme.fontWeights.medium};
    font-size: 2.4em !important;
    line-height: 1.3em;

    @media (min-width: ${props => props.theme.breakpoints.sm}) {
      font-size: 2.6em !important;
    }

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      font-size: 3.2em !important;
    }
  }
`

export const LinkList = styled.ul`
  display: flex;
  margin: 40px 0 56px;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    margin: 64px 0 72px;
  }
`

export const LinkItem = styled.li`
  &:not(:last-child) {
    margin-right: 24px;
  }
`

export const LinkText = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme.palette.light};
  font-size: 2.2em;
  font-weight: ${props => props.theme.fontWeights.semibold};
  letter-spacing: 0.08em;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 2.4em;
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: 2.8em;
  }

  &:hover::after {
    transform: scaleX(0.8);
  }

  &::after {
    content: '';
    display: block;
    margin-top: 6px;
    width: 100%;
    height: 3px;
    transform: scaleX(0.2);
    background-color: ${props => props.theme.palette.light};
    transition: transform 250ms ease-in-out;
  }
`
