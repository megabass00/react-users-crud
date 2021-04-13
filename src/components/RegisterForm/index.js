import { useRef, memo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

import { userRegister, clearError } from 'redux/actions/sessionActions'
import FormInput from 'components/FormInput'
import Preload from 'components/Preload'
import StatusMessage from 'components/StatusMessage'

import { Wrapper, Title, ButtonStyled } from './styles'

const RegisterForm = ({
  userRegister,
  isSubmitting,
  registerError,
  clearError,
}) => {
  const history = useHistory()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const {
    email: emailError,
    password: passwordError,
    confirmPassword: confirmPasswordError,
  } = errors

  const password = useRef({})
  password.current = watch('password', '')

  const onSubmit = ({ email, password }) => {
    userRegister({ email, password }).then(() => history.push('/users'))
  }

  return (
    <Wrapper>
      <Title>Create account with your e-mail</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          autoFocus
          name="email"
          type="email"
          label="E-Mail"
          placeholder="Enter your email..."
          register={register}
          validation={{
            required: true,
            pattern: {
              value: /[a-z0-9]+@[a-z0-9]+\.[a-z0-9]{2,3}/,
            },
          }}
          error={emailError}
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          placeholder="Enter your password..."
          register={register}
          validation={{ required: true, minLength: 8 }}
          error={passwordError}
        />
        <FormInput
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          placeholder="Repeat your password..."
          register={register}
          validation={{
            required: true,
            minLength: 8,
            validate: (value) =>
              value === password.current || 'The passwords do not match',
          }}
          error={confirmPasswordError}
        />
        <ButtonStyled disabled={Boolean(isSubmitting)} stretch>
          Register Now
        </ButtonStyled>
      </form>
      {isSubmitting && <Preload message="Registering you in system..." />}
      {registerError && (
        <StatusMessage
          type="error"
          message={registerError}
          onClear={clearError}
        />
      )}
    </Wrapper>
  )
}

RegisterForm.propTypes = {
  userRegister: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  registerError: PropTypes.string.isRequired,
  clearError: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  isSubmitting: state.session.loading,
  registerError: state.session.error,
})

const mapDispatchToProps = (dispatch) => ({
  userRegister: (user) => dispatch(userRegister(user)),
  clearError: (user) => dispatch(clearError(user)),
})

const RegisterFormConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterForm)
export default memo(RegisterFormConnected)
