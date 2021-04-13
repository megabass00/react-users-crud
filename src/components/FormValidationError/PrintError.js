import PropTypes from 'prop-types'
import { SmallStyled } from './styles'

const PrintError = ({ error, defaultMessage }) =>
  error.message ? (
    <SmallStyled>{error.message}</SmallStyled>
  ) : (
    <SmallStyled>{defaultMessage}</SmallStyled>
  )

PrintError.propTypes = {
  defaultMessage: PropTypes.string,
  error: PropTypes.shape({
    message: PropTypes.string,
  }).isRequired,
}

PrintError.defaultProps = {
  defaultMessage: '',
}

export default PrintError
