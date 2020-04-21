import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  direction: ltr;
  position: relative;
  z-index: 1;
  width: 100%;
  background: linear-gradient(45deg, #5c0434, #000000d6);
  /* background: linear-gradient(45deg, ${props => props.theme.headerBg}, #000000d6); */
  margin: 0 auto;
  box-shadow: ${props => props.theme.shadows[4]};
`

export const HeaderTag = styled.header`
  max-width: 60em;
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
  height: 100%;
  justify-content: space-around;
  display: flex;
  align-items: center;
`

export const NavItem = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;

  i {
    width: 1.3em;
    margin: 2px 12px 0 0;
    display: inline-block;
    vertical-align: middle;
    font-size: 1rem;
  }

  @media (max-width: 580px) {
    margin-left: 8px;
  }
`
export const Span = styled.span`
  font-size: inherit;
  font-weight: bold;
  text-shadow: 0 1px 9px rgba(15,0,115,0.6);
  color: ${props => props.theme.error2};
  align-items: flex-end;
`

export const Logo = styled.h1`
  color: ${props => props.color || '#e6e6e6'} ;
  font-size: 2.0rem;
  font-family: 'Rubik';
  text-shadow: 0 1px 35px rgba(5, 35, 10, 0.2);
  cursor: pointer;
  padding: 0;
  margin: 0;

  @media (max-width: 580px) {
    font-size: 2.0rem;
    align-items: flex-end;
  }

`
