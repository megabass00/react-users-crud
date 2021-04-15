import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  color: ${({ theme }) => theme.gray1};
`

export const Label = styled.span`
  color: ${({ theme }) => theme.gray1};
`
