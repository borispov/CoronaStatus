import { useEffect, useRef, useState, useContext } from 'react'
import Head from 'next/head'
import Link from 'next/link';

import { themes } from '../utils/themes'

// Components
import Burger from '../components/Burger';
import Menu from '../components/Menu';
import Header from '../components/Header'

// Context & Hooks
import { ProxyContext } from '../context/proxy-context'
import { LocaleContext } from '../context/LocaleContext'
import useOutSide from '../hooks/useOutSide'
import useTranslation from '../hooks/useTranslation.js'

import { getInitialLocale } from '../locales/getInitialLocale'


// Functions for changing themes
const lightTheme = () => ({
  ...themes['common'],
  ...themes['light'],
})
const darkTheme = () => ({
  ...themes['common'],
  ...themes['dark'],
})

const langs = [ 'he', 'en' ]

const Layout = ({ children, newProxy }) => {
  const { t } = useTranslation()

  const [proxy,  setProxy ]  = useContext(ProxyContext)
  const { locale, setLocale } = useContext(LocaleContext)

  const [ig, setIgnore] = useState(false)


  // Initiation of Context API's
  useEffect(() => {
    if (locale && !ig) {
      let loc = getInitialLocale(proxy && proxy.countryName)
      setLocale(loc)
    }
    return () => { setIgnore(true) }
  }, [])

  useEffect(() => {
    let ignore = false
    if (newProxy && !ignore) {
      setProxy(newProxy)
    }
    return () => { ignore: true }
  }, [newProxy])

  // setting locale. not  sure yet if I use it or context API only
  const [menuOpen, setOpen] = useState(false)

  const closeMenu     = () => setOpen(false)
  const toggleMenu    = () => setOpen(!menuOpen)
  const toggleLang    = () => {closeMenu(); const newLocale = langs[+!langs.indexOf(locale)]; setLocale(newLocale)}
  const node          = useRef()
  useOutSide(node, closeMenu)
  const displayLang   = locale === 'he' ? 'English' : 'עברית'

  return (
    <>
      <Head>
        <title>{t('metaTitle')}</title>
        <meta name="description" content={t('metaDescription')}/>
        <meta name="keywords" content={t('metaKeywords')}/>
      </Head>
      <>
        <Header >

          <div ref={node}>

            {/*-------- /// Burger Menu & Menu /// --------- */}

            <Burger setOpen={toggleMenu} open={menuOpen} />
            <Menu setOpen={toggleMenu} open={menuOpen} >

            {/*-------- /// NAV LINKS /// --------- */}

              <Link href="/News">
                <a alt="news" onClick={() => closeMenu()}>
                  <span>&#128240;</span>
                  {t('news', 'links')}
                </a>
              </Link>

              <Link href="/Statistics">
                <a alt="stats" onClick={() => closeMenu()}>
                  <span>	&#128506;</span>
                  {t('statistics', 'links')}
                </a>
              </Link>

              <Link href="/About">
                <a alt="about" onClick={() => closeMenu()}>
                  <span>	&#128506;</span>
                  {t('about', 'links')}
                </a>
              </Link>

              {/*
                    // MEANT FOR NIGHT MODE -
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
        {children}
      </>
    </>
  )
}

export default Layout
