import styled, { css, keyframes } from 'styled-components';

const openStyle = css`
  @media (min-width: 961px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background: linear-gradient(180deg,#364F9F, #000000ff); */
  background: #3f172b;
  color: ${props => props.theme.onPrimary};
  height: auto;
  position: absolute;
  z-index: 999;
  top: 0;
  right: 50%;
  direction: rtl;
  width: 220px;
  border-bottom-left-radius: 6px;
  border-bottom: 2px solid;
  border-bottom-color: {$props => props.theme.menuBorder};
  border-bottom-right-radius: 6px;
  border-top: none;
  transition: transform 0.22s ease-in-out;
  opacity: ${({ open }) => open ? '1' : '0'};
  transform: ${({ open }) => open ?  'translateY(63px)' : 'translateY(-140%)'} translateX(50%);
  @media (max-width: 660px) {
    width: 100%;
  }

  .divv {
    z-index: 9999;
    display: flex:
    flex-direction: row;
    justify-content: flex-start;
    padding: 10px 6px;
    text-align: right;
    @media (max-width: 660px) {
      margin: 0 auto;
      padding: 16px;
      text-align: center;
    }
  }

  span {
    margin-right: 18px;
    margin-left: 18px;
    font-size: 12px;

    color: ${props => props.theme.menuColor};
    @media (max-width: 660px) {
      font-size: 12px;
    }
  }

  a {
    padding: 4px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0.15rem;
    color: #F1F1F1;
    text-decoration: none;
    transition: color 0.15s linear;
    @media (max-width: 660px) {
      font-size: 12px;
    }

    &:hover {
      color: ${({ theme }) => theme.menuHover};
    }
  }

`

const closeStyle = css`
  @media (max-width: 960px) {
    display: none;
  }
  display: flex;
  width: auto;
  flex-flow: row;
  justify-content: flex-start;
  display: flex;
  justify-content: space-around;
  margin: 12px 0 0;

  .divv {
    font-size: 16px;
    color: white;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.menuHover};
    }
  }

  a {
    font-family: 'Rubik';
    padding: 0px 20px;
    text-decoration: none;
    color: ${props => props.theme.light};
    transition: all 0.15s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.menuHover};
      text-shadow: 1px 2px 3px rgba(0,0,0,0.2) 1px 3px 0px rgba(0,0,0,0.46) 1px 4px 1px rgba(0,0,0,0.2);
    }

  }

  span { display: none; }

`

export const StyledMenu = styled.nav`
  @media (max-width: 960px) {
    ${openStyle}
  }
  @media (min-width: 961px) {
    ${closeStyle}
  }
`;
