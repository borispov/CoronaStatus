import App from 'next/app'
import Router from 'next/router'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import axios from 'axios'

import { LocaleProvider } from '../context/LocaleContext'
import { ProxyContextProvider } from '../context/proxy-context'
import GlobalStyle from './Global'
import { themes } from '../utils/themes'
import * as gtag from '../utils/gtag'
import Layout from '../components/Layout';

Router.events.on('routeChangeComplete', url => gtag.pageview(url))

const lightTheme = () => ({
  ...themes['common'],
  ...themes['light'],
})


function MyApp ({ Component, pageProps }) {

  const [theme, setTheme] = useState(lightTheme())

  return (
    <ProxyContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <LocaleProvider>

        <Layout>
            <Component {...pageProps} />
          </Layout>
        </LocaleProvider>

      </ThemeProvider>
    </ProxyContextProvider>
  )
}

export default MyApp
