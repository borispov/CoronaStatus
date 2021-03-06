import { useContext } from 'react'
import { Button, Container, FadeIn } from '../S'
import { Coffee } from '../Icons/ThemeIcon'
import { LangContainer, LangText, HeaderWrapper, HeaderTag, Nav, Span, NavList, NavItem, Logo } from './Header.styled'
import Link from 'next/link'
import styled from 'styled-components'

import { LocaleContext } from '../../context/LocaleContext'
import useTranslation from '../../hooks/useTranslation.js'

const Header = ({ theme, children }) => {

  const { locale, setLocale } = useContext(LocaleContext)
  const { t } = useTranslation()

  const switchLangHandler = lang => {
    locale !== lang && setLocale(lang)
  }


  const font = t('tipFont')
  const text = t('tipButton')

  return (
    <HeaderWrapper>
        <FadeIn duration='0.4s'>
        <HeaderTag>
          <Nav>
            <NavList>
                <Link href="/">
                  <Logo>n<Span>C</Span>orona</Logo>
                </Link>
                <NavItem>
                  {children}
                </NavItem>

              <NavItem>
                <NavItem>
                  <LangContainer>
                    <LangText 
                      onClick={() => switchLangHandler('en')} 
                      active={locale==='en'}
                    >
                      EN
                    </LangText>
                    <LangText 
                      onClick={() => switchLangHandler('he')} 
                      active={locale==='he'}
                    >
                      HE
                    </LangText>
                  </LangContainer>
                </NavItem>
                <NavItem kofi>
                  <Link href='/Coffee'>
                    <a style={{textDecoration: 'none'}}>
                      <Button
                        KoFi-NAV
                        KoFi
                        hoverUp
                        hoverColor='error2'
                        fontFamily={font}
                      >
                      <img src='./kofi.png' alt='Buy Me A Coffee @ ko-fi.com'/>
                      <span className="kofitext">
                        {text}
                      </span>
                      </Button>
                    </a>
                  </Link>
                </NavItem>
              </NavItem>
            </NavList>
          </Nav>
        </HeaderTag>
      </FadeIn>
    <style jsx>{`
    @keyframes kofi-wiggle {
      0% {
        transform: rotate(0);
        scale(1);
      }
      60% {
        transform:rotate(0);
        scale(1);
      }
      75% {
        transform:rotate(0);
        scale(1.12);
      }
      80% {
        transform:rotate(0);
        scale(1.1);
      }
      84% {
        transform:rotate(-10deg);
        scale(1.1);
      }
      88% {
        transform:rotate(10deg);
        scale(1.1);
      }
      92% {
        transform:rotate(-10deg);
        scale(1.1);
      }
      96% {
        transform:rotate(10deg);
        scale(1.1);
      }
      100% {
        transform:rotate(0);
        scale(1);
      }
    }

      img {
        height: 28px;
        width: 26px;
        border: 0px;
        margin-right: 8px;
        animation: kofi-wiggle 3s infinite;
      }
    `}</style>
    </HeaderWrapper>

  )
}

export default Header
