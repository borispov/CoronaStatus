import React from 'react'
import styled from 'styled-components'
import Container from './Container'
import Button from './Button'
// import Logo from '../assets/icons/logo_transparent.png'

const Wrap = styled.div`
  direction: ltr;
  position: relative;
  height: 82px;
  width: 100%;
  background: linear-gradient(45deg, #5c0434, #000000d6);
  border-bottom: 1px solid darkblue;
  margin: 0 auto;
  margin-bottom: 48px;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const List = styled.ul`
  display: flex;
align-items: center;
`

const Item = styled.li`
  margin-top: 20px;
  margin-left: 40px;
  list-style: none;
`

const Side = styled.div`
  display: flex;
  margin-top: 20px;
`

const Title = styled.h1`
  margin-top: 20px;
  color: #e6e6e6;
  font-size: 3.5rem;
  font-family: monospace;
  text-align: center;
  text-shadow: 0 1px 35px rgba(5, 35, 10, 0.2);
`


export default ({ title, children }) => (
  <Wrap>
    <div style={{ maxWidth: '820px', margin: '0 auto' }}>
      <Header>
        <Nav>
          <List>
            <Title>{title}</Title>
            <Item>
              <a href='https://covid19.borisky.me/coffee-break'>
                <Button bold small bgColor='#c82333'>Buy Me A Coffee</Button>
              </a>
            </Item>
          </List>

          <Side> { children } </Side>

        </Nav>
      </Header>
    </div>
  </Wrap>
)
