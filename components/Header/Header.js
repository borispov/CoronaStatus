import { Button, Container, FadeIn } from '../S'
import { Coffee } from '../Icons/ThemeIcon'
import { HeaderWrapper, HeaderTag, Nav, Span, NavList, NavItem, Logo } from './Header.styled'
import Link from 'next/link'
import styled from 'styled-components'

const Header = ({ title, theme, isHeb, children }) => {
  const Tip = isHeb && 'תרומה לכפפות' || 'Gloves Tip'
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
                  <a>
                    <Button letterSpace small bg='error' hoverUp link>
                      <i> <Coffee /> </i>
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
