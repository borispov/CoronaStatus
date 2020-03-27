import CoronaApp from '../components/CoronaApp'
import styled, { css, ThemeProvider } from 'styled-components'
import GlobalStyle from './Global'
import { themes } from '../utils/themes'
import React, { useState } from 'react'
import MoonSVG from '../utils/moon.svg'
import SunSVG from '../assets/icons/sun.svg'
import Header from '../components/Header'
import Button from '../components/Button'

import InfoSection from '../components/InfoSection'
import Footer from '../components/Footer'


const lightTheme = () => ({
  ...themes['common'],
  ...themes['light'],
})

const darkTheme = () => ({
  ...themes['common'],
  ...themes['dark'],
})

const ThemeIcon = css`
  width: 4rem;
  height: 4rem;
  margin-left: auto;
  cursor: pointer;
`

const MoonIcon = styled(MoonSVG)`
  ${ThemeIcon}
  color: lightblue;
`

const SunIcon = styled(SunSVG)`
  ${ThemeIcon}
`


const Btn = styled.button`
  color: ${props => props.theme.bgColor};
  background-color: ${props => props.theme.color};
  border-radius: 50%;
  position: absolute;
  top: ${props => props.top};
  right: ${props => props.right};
  left: ${props => props.left};
  padding: 6px 2px;
  outline: none;
`
const LangBtn = styled.button`
  position: relative;
  background: ${props => props.theme.bgColor};
  color: ${props => props.theme.color};
  font-size: 14px;
  font-weight: 600;
  font-family: 'Sans';
  padding: 8px 10px;
  width: 100%;
  outline: none;
  text-align: center;
  border: none;
  border-radius: 6px;
  margin: 0 6px;
  margin-left: 16px;
  @media (max-width: 768px) {
    width: 30px;
    font-size: 12px;
    font-weight: 400;
    padding: 4px 6px;
  }

`

export default function IndexPage() {
  const [theme, setTheme] = useState(lightTheme())
  const setDarkTheme = () => setTheme(darkTheme())
  const setLightTheme = () => setTheme(lightTheme())

  const [lang, setLang] = useState('heb');
  const setHeb = () => setLang('heb')
  const setEng = () => setLang('eng')

  const isLight = theme.type === 'light'
  const handleLanguage = lang === 'heb' ? setEng : setHeb

  const themeButton = isLight && <MoonIcon onClick={setDarkTheme} /> || <SunIcon onClick={setLightTheme} />
  const displayLang = lang === 'heb' ? 'English' : 'עברית'


  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle lang={lang}/>

        <Header title='C19.FeeD'>
          { themeButton }
          <LangBtn onClick={handleLanguage}>{displayLang}</LangBtn>
        </Header>

        <CoronaApp theme={theme} lang={lang}/>

        <InfoSection theme={theme} />

        <Footer />

      </ThemeProvider>
    </>
  )
}
