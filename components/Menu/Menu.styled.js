import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background: linear-gradient(180deg,#364F9F, #000000ff); */
  background: linear-gradient(180deg, #3f060a, #000000d6);
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
  transform: ${({ open }) => open ?  'translateY(64px)' : 'translateY(-140%)'} translateX(50%);
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
    font-weight: bold;
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
`;
