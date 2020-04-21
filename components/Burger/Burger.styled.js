import styled from 'styled-components';

export const StyledBurger = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: auto;
  height: 1.4rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease-in-out;

  &:focus {
    outline: none;
  }
  &:hover {
    transform: translateY(10%);
  }
  @media (max-width: 660px) {
    margin-top: 0;
  }
  @media (min-width: 961px) {
    display: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme, open }) => open ? '#d9d9d9' : theme.white };
    border-radius: 10px;
    z-index: 10;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    @media (max-width: 660px) {
      margin-top: .25em;
      width: 1.65rem;
      height: 0.175rem;
    }
    :first-child {
      transform: ${({ open }) => open ? 'rotate(31deg)' : 'rotate(0)'};
      box-shadow: ${props => props.theme.shadows[3]};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(0px)' : 'translateX(0)'};
      box-shadow: ${props => props.theme.shadows[3]};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-31deg)' : 'rotate(0)'};
      box-shadow: ${props => props.theme.shadows[3]};
    }
  }
`;
