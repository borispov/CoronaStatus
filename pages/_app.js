import App from 'next/app'
import Router from 'next/router'
import Link from 'next/link';
import { useState, useRef } from 'react'
import { ThemeProvider } from 'styled-components'
import axios from 'axios'

import useOutSide from '../utils/useOutSide'
import GlobalStyle from './Global'
import Header from '../components/Header'
import Burger from '../components/Burger';
import Menu from '../components/Menu';
import { MoonIcon, SunIcon, WorldIcon } from '../components/Icons/ThemeIcon'
import { themes } from '../utils/themes'
import * as gtag from '../utils/gtag'

async function currentCountry(ip){
  return await axios
    .get(`https://extreme-ip-lookup.com/json/${ip}`)
    .then(res => res.data.country)
    .catch(e => 'israel')
}

Router.events.on('routeChangeComplete', url => gtag.pageview(url))

const lightTheme = () => ({
  ...themes['common'],
  ...themes['light'],
})

const darkTheme = () => ({
  ...themes['common'],
  ...themes['dark'],
})


function MyApp ({ Component, pageProps, userLocation }) {
  const [theme, setTheme] = useState(lightTheme())
  const [isHeb, setHeb] = useState(userLocation === 'israel' || userLocation === 'Israel' ? true : false)
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

    {/*
    // This is Night Mode.. Currently disabled
            <a onClick={isLight ?setDarkTheme : setLightTheme}>
              <span>{ isLight ? '🌒' : '🌞'}</span>
              {
                isLight
                ? (isHeb && 'מצב לילה' || 'Dark Mode')
                : (isHeb && 'מצב יום' || 'Light Mode')
              }
            </a>
    */}

            <a onClick={toggleLang}>
              <span>&#127760;</span>
              {displayLang}
            </a>

          </Menu>
        </div>

      </Header>
      <Component {...pageProps} isHeb={isHeb} userLocation={userLocation}  />
    </ThemeProvider>
  )
}


MyApp.getInitialProps = async (appContext) => {
  const ipAdress = appContext.ctx.req.connection.remoteAddress
  const ip = ipAdress === '::1' || ipAdress === '127.0.0.1' || ipAdress === '0.0.0.0' ? 'localhost' : ipAdress
  const userLocation = await currentCountry(ip)
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps, userLocation}
}

export default MyApp
