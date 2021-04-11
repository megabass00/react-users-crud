import { memo } from 'react'
import PropTypes from 'prop-types'
import { WrapperStyled, AvatarStyled } from './styles'

const Avatar = ({ src, alt }) => (
  <WrapperStyled>
    <AvatarStyled src={src} alt={alt} />
  </WrapperStyled>
)

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
}

Avatar.defaultProps = {
  alt: 'Avatars',
}

export default memo(Avatar)
