import { memo } from 'react'
import PropTypes from 'prop-types'
import { FormGroup, LabelStyled, InputStyled, SmallStyled } from './styles'

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

const FormInput = ({
  label,
  name,
  placeholder,
  type,
  autoFocus,
  register,
  validation,
  error,
}) => (
  <FormGroup>
    {label && <LabelStyled htmlFor={name}>{label}</LabelStyled>}
    <InputStyled
      type={type}
      {...register(name, validation)}
      placeholder={placeholder}
      autoFocus={autoFocus}
    />
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
  </FormGroup>
)

FormInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  autoFocus: PropTypes.bool,
  register: PropTypes.func.isRequired,
  validation: PropTypes.object,
  error: PropTypes.object,
}

FormInput.defaultProps = {
  label: '',
  placeholder: '',
  type: 'text',
  autoFocus: false,
  validation: {},
  error: {},
}

export default memo(FormInput)
