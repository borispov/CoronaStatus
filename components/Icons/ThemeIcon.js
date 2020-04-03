import styled, { css } from 'styled-components'
import MoonSVG from './moon.svg'
import SunSVG from './sun.svg'
import World from '../../public/world.svg'
import CoffeeSVG from '../../public/coffee.svg'

const ThemeIcon = css`
  width: 2rem;
  height: 2rem;
  margin-left: auto;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0;
  }
`

export const Coffee = styled(CoffeeSVG)`
  ${ThemeIcon}
  width: 1.5rem;
  height: 1.5rem;
`

export const WorldIcon = styled(World)`
  ${ThemeIcon}
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 8px;
`

export const MoonIcon = styled(MoonSVG)`
  ${ThemeIcon}
  color: lightblue;
`

export const SunIcon = styled(SunSVG)`
  ${ThemeIcon}
`
