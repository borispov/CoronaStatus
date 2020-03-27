import App from 'next/app'
import Router from 'next/router'
import { ThemeProvider } from 'styled-components'
import { themes } from '../utils/themes'

import * as gtag from '../utils/gtag'

Router.events.on('routeChangeComplete', url => gtag.pageview(url))

export default class MyApp extends App {

 render() {
    const { Component, pageProps } = this.props

    return (
      <Component {...pageProps} />
    )
  }
}
