import styled from 'styled-components';

export const StyledBurger = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: auto;
  height: 2.4rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease-in-out;
  margin-top: 12px;
  &:focus {
    outline: none;
  }
  &:hover {
    transform: translateY(10%);
  }
  @media (max-width: 660px) {
    margin-top: 4px;
  }

  div {
    width: 3.2rem;
    height: 0.45rem;
    background: ${({ theme, open }) => open ? '#d9d9d9' : theme.white };
    border-radius: 10px;
    z-index: 10;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(34deg)' : 'rotate(0)'};
      box-shadow: ${props => props.theme.shadows[3]};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
      box-shadow: ${props => props.theme.shadows[3]};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-34deg)' : 'rotate(0)'};
      box-shadow: ${props => props.theme.shadows[3]};
    }
  }
`;
