import styled from 'styled-components';

export const StyledBurger = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  @media (max-width: 768px) {
    margin-top: 10px;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 2.5rem;
    // height: 0.25rem;
    height: 0.45rem;
    background: ${({ theme, open }) => open ? '#d9d9d9' : '#a1a1a1'};
    border-radius: 10px;
    z-index: 10;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;
