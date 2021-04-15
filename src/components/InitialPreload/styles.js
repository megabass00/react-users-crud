import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  justify-items: center;
  background: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};
  font-family: Rajdhani;
`

export const CenteredContent = styled.div`
  text-align: center;
`
