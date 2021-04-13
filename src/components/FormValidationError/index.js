import PropTypes from 'prop-types'
import PrintError from './PrintError'

const FormValidationError = ({ name, error }) => (
  <>
    {error && error.type === 'required' && (
      <PrintError error={error} defaultMessage={`${name} is required`} />
    )}
    {error && error.type === 'minLength' && (
      <PrintError
        error={error}
        defaultMessage={`${name} does not have the minimum length`}
      />
    )}
    {error && error.type === 'pattern' && (
      <PrintError
        error={error}
        defaultMessage={`${name} does not have a valid format`}
      />
    )}
    {error && error.type === 'validate' && (
      <PrintError
        error={error}
        defaultMessage={`${name} has not passed the validation`}
      />
    )}
  </>
)

FormValidationError.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.shape({
    type: PropTypes.string,
  }).isRequired,
}

export default FormValidationError
