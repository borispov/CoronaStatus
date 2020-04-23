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
  padding: 0.25em;
  header: 40px;
`

export const HeaderTag = styled.header`
  max-width: 60em;
  margin: 0 auto;
  @media (max-width: 580px) {
    margin-left: 12px;
    margin-right: 12px;
    // align-items: flex-end;
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
  @media only screen and (max-width: 660px) {
    justify-content: space-between;
  }
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
  @media(max-width: 660px) {
    display: ${props => props.kofi ? 'none' : ''};
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
    font-size: 1.75rem;
    align-items: flex-end;
  }
`

export const LangContainer = styled.div`
  display: flex;
  padding: .5em;
  border-radius: 16px;
  justify-content: space-between;
  max-width: 160px;
`

export const LangText = styled.div`
  display: inline-block;
  font-size: .875rem;
  padding: .125em .25em;
  color: ${({ theme }) => theme.purpleComp};
  font-family: Quicksand;
  font-weight: 700;
  align-self: center;
  position: relative;
  margin-left: .55em;
  letter-spacing: 0.2px;
  cursor: pointer;
  &:after {
    content: '';
    position: absolute;
    bottom: -.25em;
    right: 0;
    left: 0;
    height: 2px;
    border-radius: 4px;
    background: ${({ theme }) => theme.error2};
    opacity: ${({ active }) => active ? '1' : '0'};
    transition: opactiy .3s ease-in;
  }

  &:hover {
    color: white;
  }
`

export const DropdownContainer = styled.div`
  position: relative;
  background: ${({ theme }) => theme.primaryLight};
  color: ${({ theme }) => theme.onPrimary};
  padding: .25em .5em;
  cursor: pointer;
`

export const DropdownFlex = styled.div`
  display: flex;
`

export const DropdownContent = styled.div`
  display: ${({ open }) => open ? 'block' : 'none'};
  position: absolute;
  font-size: .875rem;
  min-width: 120px;
  max-width: 150px;
  right: 0;
  padding-top: .25rem;
  z-index: 1;
  overflow: auto;
  box-shadow: ${({ theme }) => theme.shadows[1]};
  background: ${({ theme }) => theme.primaryLight};
  color: ${({ theme }) => theme.onPrimary};
`
