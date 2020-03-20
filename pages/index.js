import CoronaApp from '../components/CoronaApp'
import styled, { ThemeProvider } from 'styled-components'
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
  top: 5%;
  left: 1%;
  padding: 6px 2px;
  outline: none;
`

export default function IndexPage() {
  const [theme, setTheme] = useState(lightTheme())
  const setDarkTheme = () => setTheme(darkTheme())
  const setLightTheme = () => setTheme(lightTheme())

  const isLight = theme.type === 'light'

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <CoronaApp />
        <Btn onClick={!isLight ? setLightTheme : setDarkTheme}>
          {!isLight ? 'Light' : 'Dark'}
        </Btn>
      </ThemeProvider>
    </>
  )
}
