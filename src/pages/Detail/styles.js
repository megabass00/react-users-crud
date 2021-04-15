import styled from 'styled-components'

export const SectionStyled = styled.section`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.textColor};
`

export const PreloadWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 80vh;
`
