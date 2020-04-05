import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  direction: ltr;
  position: relative;
  height: 64px;
  z-index: 1;
  width: 100%;
  background: linear-gradient(45deg, #5c0434, #000000d6);
  /* background: linear-gradient(45deg, ${props => props.theme.headerBg}, #000000d6); */
  margin: 0 auto;
  margin-bottom: 48px;
  box-shadow: ${props => props.theme.shadows[4]};
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
    margin: 2px 12px 0 0;
    display: inline-block;
    vertical-align: middle;
    font-size: 16px;
  }

  @media (max-width: 580px) {
    margin-left: 8px;
  }
`
export const Span = styled.span`
  font-size: 3.8rem;
  font-weight: bold;
  text-shadow: 0 1px 9px rgba(15,0,115,0.6);
  color: ${props => props.theme.error2};
  @media (max-width: 580px) {
    font-size: 3.3rem;
    align-items: flex-end;
  }
`

export const Logo = styled.h1`
  display: inline-block;
  margin-top: 10px;
  color: ${props => props.color || '#e6e6e6'} ;
  font-size: 3.5rem;
  font-family: 'Montserrat';
  text-align: center;
  text-shadow: 0 1px 35px rgba(5, 35, 10, 0.2);
  cursor: pointer;
  font-family: 'Montserrat';

  @media (max-width: 580px) {
    font-size: 3rem;
    align-items: flex-end;
  }

`
