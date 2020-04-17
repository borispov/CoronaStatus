import { Button, Container, FadeIn } from '../S'
import { Coffee } from '../Icons/ThemeIcon'
import { HeaderWrapper, HeaderTag, Nav, Span, NavList, NavItem, Logo } from './Header.styled'
import Link from 'next/link'
import styled from 'styled-components'

import useTranslation from '../../hooks/useTranslation.js'

const Header = ({ theme, children }) => {

  const { t } = useTranslation()

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
              {children}
              <NavItem>
                <Link href='/Coffee'>
                  <a style={{textDecoration: 'none'}}>
                    <Button
                        KoFi
                        hoverUp
                        hoverColor='error2'
                        fontFamily={font}
                      >
                      <img height='36' style={{ height: '36px', border: '0px', marginRight: '8px' }} src='./kofi.png' alt='Buy Me A Coffee @ ko-fi.com'/>
                      {text}
                    </Button>
                  </a>
                </Link>
              </NavItem>
            </NavList>
          </Nav>
        </HeaderTag>
      </FadeIn>
    </HeaderWrapper>
  )
}

export default Header
