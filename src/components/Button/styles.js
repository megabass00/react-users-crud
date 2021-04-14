import styled from 'styled-components'

export const ButtonStyled = styled.button`
  width: ${({ stretch }) => `${stretch ? '100%' : 'auto'}`};
  text-align: center;
  font-family: Rajdhani;
  font-size: 1rem;
  padding: 10px;
  background: #0077c8;
  border: none;
  color: #fff;
  transition: color 0.3s ease 0s, background 0.3s ease 0s;
  border-radius: 3px;
  text-transform: uppercase;
  cursor: pointer;

  :hover {
    color: #0077c8;
    background: #fff;
  }

  :focus {
    outline: 0;
  }

  :disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`
