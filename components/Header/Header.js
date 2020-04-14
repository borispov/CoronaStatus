import { Button, Container, FadeIn } from '../S'
import { Coffee } from '../Icons/ThemeIcon'
import { HeaderWrapper, HeaderTag, Nav, Span, NavList, NavItem, Logo } from './Header.styled'
import Link from 'next/link'
import styled from 'styled-components'

const Header = ({ title, theme, isHeb, children }) => {
  const Tip = isHeb && '- השאר טיפ ל' || 'Tip Jar'
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
                { isHeb && 
                  <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap" rel="stylesheet"/>
                }
                <Link href='/Coffee'>
                  <a>
                    <Button
                        KoFi
                        hoverUp
                        hoverColor='error2'
                        fontFamily={isHeb && 'Rubik' || 'Quicksand'}
                      >
                      <img height='36' style={{ height: '36px', border: '0px' }} src='./kofi.png' alt='Buy Me A Coffee @ ko-fi.com'/>
                      {Tip}
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
