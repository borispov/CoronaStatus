import CoronaApp from '../components/CoronaApp'
import styled, { css, ThemeProvider } from 'styled-components'
import GlobalStyle from './Global'
import { useState } from 'react'
import { themes } from '../utils/themes'

const lightTheme = () => ({
  ...themes['common'],
  ...themes['light'],
})

const darkTheme = () => ({
  ...themes['common'],
  ...themes['dark'],
})

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
  background: ${props => props.theme.searchBgColor};
  color: ${props => props.theme.color};
  font-size: 14px;
  font-weight: 600;
  padding: 6px 10px;
  width: 45px;
  outline: none;
  text-align: center;
  border: none;
  border-radius: 6px;
  @media (max-width: 768px) {
    width: 30px;
    font-size: 12px;
    font-weight: 400;
    padding: 4px 6px;
  }

`

const BtnContainer = styled.div`
  position: absolute;
  top: 5%;
  right: 3%;
  padding: 0 12px;
  @media (max-width: 768px) {
    right: 0%;
    top: 8%;
    padding: 0;
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

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle lang={lang}/>
        <CoronaApp theme={theme} lang={lang}/>

        <BtnContainer>
            <LangBtn
              style={{position: 'relative', margin: '0 12px'}}
              onClick={lang === 'heb' ? setEng : () => {}}
            >En</LangBtn>
            <LangBtn
              onClick={lang === 'eng' ? setHeb : () => {}}
            >עבר</LangBtn>
        </BtnContainer>
      </ThemeProvider>
    </>
  )
}
