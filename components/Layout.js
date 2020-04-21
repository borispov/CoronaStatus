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

const Layout = ({ children }) => {
  const { t } = useTranslation()

  const [proxy,  setProxy ]  = useContext(ProxyContext)
  const { locale, setLocale } = useContext(LocaleContext)

  const [ig, setIgnore] = useState(false)


  // Initiation of Context API's
  useEffect(() => {
      const ip2proxy = JSON.parse(localStorage.getItem('ip2proxy'))
      const locationFromStorage = ip2proxy && ip2proxy.countryName
        let loc = getInitialLocale(locationFromStorage)
        setLocale(loc)

    return () => {}
  }, [proxy])


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
                  {t('news', 'links')}
                </a>
              </Link>

              <Link href="/Statistics">
                <a alt="stats" onClick={() => closeMenu()}>
                  {t('statistics', 'links')}
                </a>
              </Link>

              <Link href="/About">
                <a alt="about" onClick={() => closeMenu()}>
                  {t('about', 'links')}
                </a>
              </Link>

              <a onClick={toggleLang}>
                {displayLang}
              </a>

            </Menu>
          </div>

        </Header>
        <div className="AppContainer">
          {children}
          <style jsx global>{`
            .AppContainer {
              ${ menuOpen && `
                filter: blur(${menuOpen ? '1px' : '0px'});
                transition: all 500ms ease-in-out;
                -webkit-transition: -webkit-filter 500ms linear;
                }
              `}
            }
          `}</style>
        </div>
      </>
    </>
  )
}

export default Layout
