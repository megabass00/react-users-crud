import styled from 'styled-components'

export const NavButtonStyled = styled.button`
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.gray1};
  transition: color 0.5s ease 0s;

  :hover {
    color: ${({ theme }) => theme.primaryColor};
  }
`
