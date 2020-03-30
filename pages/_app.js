import App from 'next/app'
import Router from 'next/router'
import styled, { css, ThemeProvider } from 'styled-components'
import GlobalStyle from './Global'

import Header from '../components/Header'
import Button from '../components/Button'

import { MoonIcon, SunIcon } from '../components/Icons/ThemeIcon'
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

export default class MyApp extends App {

  state = {
    theme: lightTheme(),
    isHeb: true,
  }

  toggleLang =    () => this.setState(prevState => ({ ...prevState, isHeb: !prevState.isHeb }))
  setDarkTheme =  () => this.setState(prevState => ({ ...prevState, theme: darkTheme() }))
  setLightTheme = () => this.setState(prevState => ({ ...prevState, theme: lightTheme() }))

  render() {
    const { theme, isHeb } = this.state
    const displayLang = isHeb ? 'English' : 'עברית'
    const isLight = theme.type === 'light'
    const themeButton = (isLight && <MoonIcon onClick={this.setDarkTheme} />) || <SunIcon onClick={this.setLightTheme} />
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle isHeb={isHeb}/>
        <Header title='C19.FeeD' isHeb={isHeb}>
          { themeButton }
          <Button langBtn onClick={this.toggleLang}>{displayLang}</Button>
        </Header>
        <Component {...pageProps} isHeb={isHeb}/>
      </ThemeProvider>
    )
  }
}
