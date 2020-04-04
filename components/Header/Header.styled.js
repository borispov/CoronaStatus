import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  direction: ltr;
  position: relative;
  height: 64px;
  z-index: 1;
  width: 100%;
  // background: linear-gradient(45deg, #5c0434, #000000d6);
  background: linear-gradient(45deg, ${props => props.theme.primaryColor}, #000000d6);
  border-bottom: 1px solid darkblue;
  margin: 0 auto;
  margin-bottom: 48px;
  box-shadow: 0 0.3px 0.9px rgba(0, 0, 0, 0.12), 0 1.6px 3.6px rgba(0, 0, 0, 0.12);
`

export const HeaderTag = styled.header`
  justify-content: space-between;
  align-items: center;
  max-width: 920px;
  margin: 0 auto;
  @media (max-width: 580px) {
    margin-left: 12px;
    margin-right: 12px;
    align-items: flex-end;
    padding-top: 4px;
  }
`

export const Nav = styled.nav`
  align-items: center;
  width: 100%;
`

export const NavList = styled.ul`
  justify-content: space-around;
  display: flex;
  align-items: center;
`

export const NavItem = styled.li`
  margin-top: 10px;
  margin-left: 40px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;

  i {
    width: 1.3rem;
    margin: 0px 6px 0 0;
    display: inline-block;
    vertical-align: middle;
    font-size: 16px;
  }

  @media (max-width: 580px) {
    margin-left: 8px;
  }
`

export const Logo = styled.h1`
  margin-top: 10px;
  color: #e6e6e6;
  font-size: 3.5rem;
  font-family: 'Montserrat';
  text-align: center;
  text-shadow: 0 1px 35px rgba(5, 35, 10, 0.2);
  cursor: pointer;
  font-family: 'Montserrat';

  @media (max-width: 580px) {
    font-size: 2.5rem;
    align-items: flex-end;
  }

`
