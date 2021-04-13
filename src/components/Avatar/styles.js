import styled from 'styled-components'

export const WrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
`

export const AvatarStyled = styled.img`
  border-radius: 50%;
  ${({ size }) => {
    switch (size) {
      case 'sm':
        return 'height: 40px;'
      case 'md':
        return 'height: 100px;'
      case 'lg':
        return 'height: 150px;'
      default:
        return 'height: 40px;'
    }
  }}
`
