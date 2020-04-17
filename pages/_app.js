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


function MyApp ({ Component, pageProps, newProxy }) {

  const [theme, setTheme] = useState(lightTheme())

  return (
    <ProxyContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <LocaleProvider>

        <Layout newProxy={newProxy} >
            <Component {...pageProps} newProxy={newProxy} />
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
