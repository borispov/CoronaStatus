import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // background: ${props => props.theme.menuBg};
  background: linear-gradient(45deg, #5c0434, #000000d6);
  height: auto;
  position: absolute;
  z-index: 999;
  top: 0;
  right: 0;
  border-bottom-left-radius: 6px;
  border-bottom: 2px solid;
  border-bottom-color: {$props => props.theme.menuBorder};
  border-bottom-right-radius: 6px;
  transition: transform 0.22s ease-in-out;
  transform: ${({ open }) => open ?  'translateY(64px)' : 'translateY(-120%)'};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  .divv {
    z-index: 9999;
    display: flex:
    flex-direction: row;
    justify-content: flex-start;
    padding: 10px 6px;
  }

  span {
    margin-right: 18px;
    font-size: 14px;
    color: ${props => props.theme.menuColor};
  }

  a {
    padding: 4px;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 0.15rem;
    color: ${props => props.theme.menuColor};
    text-decoration: none;
    transition: color 0.15s linear;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.menuHover};
    }
  }
`;
