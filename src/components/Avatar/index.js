import { memo } from 'react'
import PropTypes from 'prop-types'
import { WrapperStyled, AvatarStyled } from './styles'

const Avatar = ({ src, alt, size }) => (
  <WrapperStyled>
    <AvatarStyled src={src} alt={alt} size={size} />
  </WrapperStyled>
)

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
}

Avatar.defaultProps = {
  alt: 'Avatars',
  size: 'sm',
}

export default memo(Avatar)
