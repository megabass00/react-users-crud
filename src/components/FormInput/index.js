import { memo } from 'react'
import PropTypes from 'prop-types'

import FormValidationError from 'components/FormValidationError'
import { FormGroup, LabelStyled, InputStyled } from './styles'

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
    <FormValidationError name={name} error={error} />
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
