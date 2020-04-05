import styled from 'styled-components';

export const StyledBurger = styled.button`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: auto;
  height: 2.4rem;
  top: 60%;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  transform: translateY(-50%);

  @media (max-width: 660px) {
    margin-top: 4px;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 3.5rem;
    // height: 0.25rem;
    height: 0.45rem;
    background: ${({ theme, open }) => open ? '#d9d9d9' : theme.white };
    border-radius: 10px;
    z-index: 10;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
      box-shadow: ${props => props.theme.shadows[3]};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
      box-shadow: ${props => props.theme.shadows[3]};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
      box-shadow: ${props => props.theme.shadows[3]};
    }
  }
`;
