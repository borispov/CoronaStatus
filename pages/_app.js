import App from 'next/app'
import Router from 'next/router'
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import axios from 'axios'

import { LocaleProvider } from '../context/LocaleContext'
import { ProxyContextProvider } from '../context/proxy-context'
import useOutSide from '../hooks/useOutSide'
import GlobalStyle from './Global'
import Header from '../components/Header'
import Burger from '../components/Burger';
import Menu from '../components/Menu';
import { themes } from '../utils/themes'
import * as gtag from '../utils/gtag'
import Layout from '../components/Layout';

const getCountryFromData = response => response.data.country
const currentCountry = async (url) => await axios.get(url).then(getCountryFromData).catch(e => 'israel')

Router.events.on('routeChangeComplete', url => gtag.pageview(url))

const lightTheme = () => ({
  ...themes['common'],
  ...themes['light'],
})

const darkTheme = () => ({
  ...themes['common'],
  ...themes['dark'],
})


function MyApp ({ Component, pageProps, newProxy }) {

  const [theme, setTheme] = useState(lightTheme())
  const [isHeb, setHeb] = useState(newProxy && newProxy.countryName.toLowerCase() === 'israel' ? true : false)
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
    <ProxyContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle isHeb={isHeb}/>
        <LocaleProvider>

        <Layout newProxy={newProxy} >
          {/* <Header title='nCorona' isHeb={isHeb} >
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

                <a onClick={toggleLang}>
                  <span>&#127760;</span>
                  {displayLang}
                </a>

              </Menu>
            </div>

              </Header> */}
            <Component {...pageProps} isHeb={isHeb} newProxy={newProxy} />
          </Layout>
        </LocaleProvider>

      </ThemeProvider>
    </ProxyContextProvider>
  )
}


MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  let proxyUrl
  const req = appContext.ctx && appContext.ctx.req

  if (req) {
    // grab client's ip address
    const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress
    const localAddresses = ['::1', '127.0.0.1', 'localhost']
    // Construct URL with IP ADDRESS
    if (!localAddresses.includes(ipAddress)) {
      proxyUrl = `https://extreme-ip-lookup.com/json/${ipAddress}`
    }
    try {
      const countryName = await currentCountry(proxyUrl)
      const newProxy = { countryName, ipAddress }
      return { newProxy, ...appProps }
    } catch(e) {
      return { errorCode: e.code, errorMessage: e.message, ...appProps }
    }
  }
  return { ...appProps, newProxy: null }
}

export default MyApp
