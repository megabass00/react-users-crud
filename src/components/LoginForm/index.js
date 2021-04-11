import { memo } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

import { userLogin, clearError } from 'redux/actions/sessionActions'
import FormInput from 'components/FormInput'
import Preload from 'components/Preload'
import StatusMessage from 'components/StatusMessage'

import { Wrapper, Title, ButtonStyled } from './styles'

const LoginForm = ({ userLogin, isSubmitting, loginError, clearError }) => {
  const history = useHistory()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const { email: emailError, password: passwordError } = errors

  const onSubmit = ({ email, password }) => {
    userLogin({ email, password })
      .then(() => {
        history.push('/users')
      })
      .catch((err) => console.log(err))
  }

  return (
    <Wrapper>
      <Title>Login with your email</Title>
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
          error={emailError || {}}
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          placeholder="Enter your password..."
          register={register}
          validation={{ required: true, minLength: 8 }}
          error={passwordError || {}}
        />
        <ButtonStyled stretch>Login</ButtonStyled>
      </form>
      {isSubmitting && <Preload message="Checking your credentials..." />}
      {loginError && (
        <StatusMessage type="error" message={loginError} onClear={clearError} />
      )}
    </Wrapper>
  )
}

LoginForm.propTypes = {
  userLogin: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  loginError: PropTypes.string.isRequired,
  clearError: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  isSubmitting: state.session.loading,
  loginError: state.session.error,
})

const mapDispatchToProps = (dispatch) => ({
  userLogin: (user) => dispatch(userLogin(user)),
  clearError: (user) => dispatch(clearError(user)),
})

const LoginFormConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)
export default memo(LoginFormConnected)
