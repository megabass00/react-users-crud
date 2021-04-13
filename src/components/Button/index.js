import { memo } from 'react'
import PropTypes from 'prop-types'
import { ButtonStyled } from './styles'

const Button = ({ children, className, onClick, stretch, disabled }) => (
  <ButtonStyled
    className={className}
    onClick={onClick}
    stretch={stretch}
    disabled={disabled}
  >
    {children}
  </ButtonStyled>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  stretch: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
}

Button.defaultProps = {
  onClick: null,
  stretch: false,
  disabled: false,
}

export default memo(Button)
