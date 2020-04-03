import App from 'next/app'
import Router from 'next/router'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './Global'
import Link from 'next/link';

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

export default class MyApp extends App {

  state = {
    theme: lightTheme(),
    isHeb: true,
    menuOpen: false
  }

  toggleMenu    = () => this.setState({ menuOpen: !this.state.menuOpen })
  toggleLang    = () => this.setState({ isHeb: !this.state.isHeb })
  setDarkTheme  = () => this.setState(prevState => ({ ...prevState, theme: darkTheme() }))
  setLightTheme = () => this.setState(prevState => ({ ...prevState, theme: lightTheme() }))

  render() {
    const { theme, isHeb }  = this.state
    const displayLang       = isHeb ? 'English' : 'עברית'
    const isLight           = theme.type === 'light'
    const themeButton       = isLight
      && <MoonIcon onClick={this.setDarkTheme} />
      || <SunIcon onClick={this.setLightTheme} />

    const { Component, pageProps } = this.props

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle isHeb={isHeb}/>
        <Header title='nCorona' isHeb={isHeb}>
          <Burger setOpen={this.toggleMenu} open={this.state.menuOpen} />
          <Menu setOpen={this.toggleMenu} open={this.state.menuOpen} >
            <a onClick={isLight ? this.setDarkTheme : this.setLightTheme}>
              <span>{ isLight ? '🌒' : '🌞'}</span>
              { isLight ? 'Dark Mode' : 'Light Mode' }
            </a>
            <a onClick={this.toggleLang}>
              <span>&#127760;</span>
              {displayLang}
            </a>
            <Link href="/News">
              <a alt="news">
                <span>&#128240;</span>
                News
              </a>
            </Link>

          </Menu>

        </Header>
        <Component {...pageProps} isHeb={isHeb}/>
      </ThemeProvider>
    )
  }
}
