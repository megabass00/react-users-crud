import PropTypes from 'prop-types'

import FormValidationError from 'components/FormValidationError'
import { FieldWrapper, LabelStyled, ValueStyled, InputStyled } from './styles'

const EditField = ({
  label,
  name,
  value,
  editing,
  register,
  validation,
  error,
}) => {
  return (
    <FieldWrapper>
      {label && <LabelStyled>{label}</LabelStyled>}
      {editing ? (
        <>
          <InputStyled
            type="text"
            name={name}
            defaultValue={value}
            {...register(name, validation)}
          />
          <FormValidationError name={name} error={error} />
        </>
      ) : (
        <ValueStyled>{value}</ValueStyled>
      )}
    </FieldWrapper>
  )
}

EditField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  editing: PropTypes.bool.isRequired,
  register: PropTypes.func.isRequired,
  validation: PropTypes.object,
  error: PropTypes.object,
}

EditField.defaultProps = {
  label: '',
  validation: {},
  error: {},
}

export default EditField
