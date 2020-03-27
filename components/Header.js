import React from 'react'
import styled from 'styled-components'
import Container from './Container'
import Button from './Button'
import Coffee from '../public/coffee.svg'
import Link from 'next/link'

const CoffeeIcon = styled(Coffee)`
  width: 1.5rem;
  height: 1.5rem;
  margin: 0px 6px 0 0;
  display: inline-block;
  font-size: 14px;
  padding-top: 4px;
`

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
  align-items: center;
  @media (max-width: 768px) {
    margin-left: 12px;
    margin-right: 12px;
  }
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`

const List = styled.ul`
  display: flex;
  align-items: center;
`

const Item = styled.li`
  margin-top: 20px;
  margin-left: 40px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    margin-left: 12px;
  }
`

const Side = styled.div`
  display: flex;
  margin-top: 20px;
`

const Title = styled.h1`
  margin-top: 20px;
  color: #e6e6e6;
  font-size: 3.5rem;
  font-family: 'Montserrat';
  text-align: center;
  text-shadow: 0 1px 35px rgba(5, 35, 10, 0.2);
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const Href = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: ${props => props.theme.btnColor};
`


export default ({ title, children, isHeb, theme }) => (
  <Wrap>
    <div style={{ maxWidth: '820px', margin: '0 auto' }}>
      <Header>
        <Nav>
          <List>
            <Title>{'C19feed'}</Title>
            <Item>
              <Link href={{
                pathname: '/Coffee',
                query: { isHeb: 'false' }
              }}>
                <Button small bgColor='#c82333' link>
                <CoffeeIcon />
                  Buy Me A Coffix
                </Button>
              </Link>
            </Item>
          </List>

          <Side> { children } </Side>

        </Nav>
      </Header>
    </div>
  </Wrap>
)
