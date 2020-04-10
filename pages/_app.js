import App from 'next/app'
import Router from 'next/router'
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react'
import { ThemeProvider } from 'styled-components'

import useOutSide from '../utils/useOutSide'
import GlobalStyle from './Global'
import Header from '../components/Header'
import { Button } from '../components/S'
import Burger from '../components/Burger';
import Menu from '../components/Menu';
import { MoonIcon, SunIcon, WorldIcon } from '../components/Icons/ThemeIcon'
import { themes } from '../utils/themes'
import * as gtag from '../utils/gtag'

Router.events.on('routeChangeComplete', url => gtag.pageview(url))

const lightTheme = () => ({
  ...themes['common'],
  ...themes['light'],
})

const darkTheme = () => ({
  ...themes['common'],
  ...themes['dark'],
})


export default (props) => {
  const [theme, setTheme] = useState(lightTheme())
  const [isHeb, setHeb] = useState(true)
  const [menuOpen, setOpen] = useState(false)

  const closeMenu     = () => setOpen(false)
  const toggleMenu    = () => setOpen(!menuOpen)
  const toggleLang    = () => {closeMenu(), setHeb(!isHeb)}
  const setDarkTheme  = () => {closeMenu(), setTheme(darkTheme())}
  const setLightTheme = () => {closeMenu(), setTheme(lightTheme())}

  const node          = useRef()
  useOutSide(node, closeMenu)

  const displayLang   = isHeb ? 'English' : 'עברית'
  const isLight       = theme.type === 'light'

  const { Component, pageProps } = props


  return (
    <ThemeProvider theme={theme}>

      <GlobalStyle isHeb={isHeb}/>
      <Header title='nCorona' isHeb={isHeb} >
        <div ref={node}>
          <Burger setOpen={toggleMenu} open={menuOpen} />
          <Menu setOpen={toggleMenu} open={menuOpen} >

            <Link href="/News">
              <a alt="news" onClick={() => closeMenu()}>
                <span>&#128240;</span>
                { isHeb && 'חדשות' || 'News' }
              </a>
            </Link>

            <Link href="/Statistics">
              <a alt="stats" onClick={() => closeMenu()}>
                <span>	&#128506;</span>
                { isHeb && 'נתונים' || 'Data' }
              </a>
            </Link>

            <Link href="/About">
              <a alt="about" onClick={() => closeMenu()}>
                <span>	&#128506;</span>
                { isHeb && 'אודות' || 'About' }
              </a>
            </Link>

            <a onClick={isLight ?setDarkTheme : setLightTheme}>
              <span>{ isLight ? '🌒' : '🌞'}</span>
              {
                isLight
                ? (isHeb && 'מצב לילה' || 'Dark Mode')
                : (isHeb && 'מצב יום' || 'Light Mode')
              }
            </a>

            <a onClick={toggleLang}>
              <span>&#127760;</span>
              {displayLang}
            </a>

          </Menu>
        </div>

      </Header>
      <Component {...pageProps} isHeb={isHeb}/>
    </ThemeProvider>
  )

}
