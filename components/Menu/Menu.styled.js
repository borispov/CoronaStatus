import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${props => props.theme.primaryVariant};
  color: ${props => props.theme.onPrimary};
  height: auto;
  position: absolute;
  z-index: 999;
  top: 0;
  right: 10%;
  direction: rtl;
  width: fit-content;
  border-bottom-left-radius: 6px;
  border-bottom: 2px solid;
  border-bottom-color: {$props => props.theme.menuBorder};
  border-bottom-right-radius: 6px;
  transition: transform 0.22s ease-in-out;
  transform: ${({ open }) => open ?  'translateY(64px)' : 'translateY(-100%)'};

  .divv {
    z-index: 9999;
    display: flex:
    flex-direction: row;
    justify-content: flex-start;
    padding: 10px 6px;
    text-align: right;
  }

  span {
    margin-right: 18px;
    font-size: 12px;
    color: ${props => props.theme.menuColor};
    @media (max-width: 660px) {
      font-size: 10px;
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
