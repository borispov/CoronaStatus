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
  direction: ${props => props.locale === 'he' ? 'rtl' : 'ltr'};
  width: 440px;
  border-bottom-left-radius: 6px;
  border-bottom: 2px solid;
  border-bottom-color: {$props => props.theme.menuBorder};
  border-bottom-right-radius: 6px;
  border-top: none;
  transition: transform 0.22s ease-in-out;
  opacity: ${({ open }) => open ? '1' : '0'};
  transform: ${({ open }) => open ?  'translateY(40px)' : 'translateY(-140%)'} translateX(50%);
  @media (max-width: 660px) {
    width: 100%;
    transform: ${({ open }) => open ?  'translateY(40px)' : 'translateY(-140%)'} translateX(50%);
  }

  .divv {
    z-index: 9999;
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 1em;
  }

  span {
    font-size: 12px;
    color: ${props => props.theme.menuColor};
    @media (max-width: 660px) {
      font-size: 18px;
      padding: 0 ${({locale}) => locale == 'he' ? '0 0 1em' : '1em 0 0'};
    }
  }

  a {
    display: flex;
    justify-content: flex-start;
    width: 150px;
    padding: 1em;
    cursor: pointer;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.15rem;
    color: #F1F1F1;
    text-decoration: none;
    transition: color 0.15s linear;
    @media (max-width: 660px) {
      font-size: 22px;
      padding: 12px;
    }

    &:hover {
      color: ${({ theme }) => theme.kofi};
    }
  }

`

const closeStyle = css`
  @media (max-width: 960px) {
    display: none;
  }
  // width: auto;
  justify-content: flex-start;
  display: flex;
  margin: 0.125rem 0 0;

  .divv {
    font-size: 1rem;
    color: white;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.error2};
    }
  }

  a {
    font-family: 'Rubik';
    font-size: 1rem;
    padding: 1rem 2em;
    text-decoration: none;

    color: ${props => props.theme.light};
    text-shadow: 1px 2px 3px rgba(0,0,0,0.2) 1px 3px 0px rgba(0,0,0,0.46) 1px 4px 1px rgba(0,0,0,0.2);
    transition: all 0.15s ease-in-out;
    position: relative;

    &:hover {
      color: ${({ theme }) => theme.error2};

      &:after {
        transform: scale(1);
      }

    }

    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 4px;
      left: 0;
      right: 0;
      bottom: 0;
      background: ${({ theme }) => theme.error2};
      transform: scale(0);
      transform-origin: 50% 50%;
      transition: all .2s ease-in-out
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
