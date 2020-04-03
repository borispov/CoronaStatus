import { Button, Container, FadeIn } from '../S'
import { Coffee } from '../Icons/ThemeIcon'
import { HeaderWrapper, HeaderTag, Nav, NavList, NavItem, Logo } from './Header.styled'
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
                <a>
                  <Logo>{title}</Logo>
                </a>
              </Link>
              <NavItem>
                <Link href='/Coffee'>
                  <a>
                    <Button small bgColor='#c82333' link>
                      <i> <Coffee /> </i>
                      {Tip}
                    </Button>
                  </a>
                </Link>
              </NavItem>
              {children}

              {/*
                { props.children.map(each => ( <li className="nav__item" style={{marginLeft: '15px'}}>{each}</li> )) } 
              */}
            </NavList>
          </Nav>
        </HeaderTag>
      </FadeIn>
    </HeaderWrapper>
  )
}

export default Header
