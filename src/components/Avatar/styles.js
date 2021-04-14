import styled from 'styled-components'
import { MEDIAQUERIES, AVATAR_SIZES } from 'styles'

const getAvatarSize = (size, mediaQuery) => `
  width: ${AVATAR_SIZES[mediaQuery][size]}px;
  height: ${AVATAR_SIZES[mediaQuery][size]}px;
`

export const WrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
`

export const AvatarStyled = styled.img`
  border-radius: 50%;
  object-fit: cover;

  ${(props) => getAvatarSize(props.size, 'mobile')}

  ${MEDIAQUERIES.tablet} {
    ${(props) => getAvatarSize(props.size, 'tablet')}
  }

  ${MEDIAQUERIES.desktop} {
    ${(props) => getAvatarSize(props.size, 'desktop')}
  }
`
