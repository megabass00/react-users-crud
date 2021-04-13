import PropTypes from 'prop-types'

import SvgArrowLeft from 'components/svg/SvgArrowLeft'
import SvgArrowRight from 'components/svg/SvgArrowRight'
import { NavButtonStyled } from './styles'

const NavButton = ({ className, direction, onCLick, size }) => (
  <NavButtonStyled className={className} onClick={onCLick}>
    {direction === 'left' ? (
      <SvgArrowLeft width={size} />
    ) : (
      <SvgArrowRight width={size} />
    )}
  </NavButtonStyled>
)

NavButton.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
  onCLick: PropTypes.func,
  size: PropTypes.number,
  className: PropTypes.string,
}

NavButton.defaultProps = {
  onCLick: null,
  size: 20,
}

export default NavButton
