import PropTypes from 'prop-types'

import SvgArrowLeft from 'components/svg/SvgArrowLeft'
import SvgArrowRight from 'components/svg/SvgArrowRight'
import { NavButtonStyled } from './styles'

const NavButton = ({ className, direction, onClick, size }) => (
  <NavButtonStyled className={className} onClick={onClick}>
    {direction === 'left' ? (
      <SvgArrowLeft width={size} />
    ) : (
      <SvgArrowRight width={size} />
    )}
  </NavButtonStyled>
)

NavButton.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
  onClick: PropTypes.func,
  size: PropTypes.number,
  className: PropTypes.string,
}

NavButton.defaultProps = {
  onClick: null,
  size: 20,
}

export default NavButton
