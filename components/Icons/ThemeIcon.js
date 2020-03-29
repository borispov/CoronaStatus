import styled, { css } from 'styled-components'
import MoonSVG from './moon.svg'
import SunSVG from './sun.svg'

const ThemeIcon = css`
  width: 4rem;
  height: 4rem;
  margin-left: auto;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 3rem;
    height: 3rem;
  }
`

export const MoonIcon = styled(MoonSVG)`
  ${ThemeIcon}
  color: lightblue;
`

export const SunIcon = styled(SunSVG)`
  ${ThemeIcon}
`
