import {
  SESSION_CHECKING_LOGIN,
  SESSION_LOGIN_SUCCESS,
  SESSION_LOGIN_ERROR,
  SESSION_LOGOUT,
  SESSION_REGISTER,
  SESSION_REGISTER_SUCCESS,
  SESSION_REGISTER_ERROR,
  SESSION_CLEAR_ERROR,
} from 'redux/types/sessionTypes'
import { sessionStorageTokenKey } from 'redux/reducers/sessionReducer'
import { loginService, registerService } from 'redux/services/sessionService'
import { resetUsers } from 'redux/actions/usersActions'

export const sessionCheckingLogin = (user) => ({
  type: SESSION_CHECKING_LOGIN,
  payload: user,
})

export const sessionLoginSuccess = (user) => ({
  type: SESSION_LOGIN_SUCCESS,
  payload: user,
})

export const sessionLoginError = (error) => ({
  type: SESSION_LOGIN_ERROR,
  payload: error,
})

export const sessionLogOut = () => ({
  type: SESSION_LOGOUT,
})

export const sessionRegister = (user) => ({
  type: SESSION_REGISTER,
  payload: user,
})

export const sessionRegisterSuccess = (user) => ({
  type: SESSION_REGISTER_SUCCESS,
  payload: user,
})

export const sessionRegisterError = (error) => ({
  type: SESSION_REGISTER_ERROR,
  payload: error,
})

export const userLogin = (user) => (dispatch) =>
  new Promise((resolve, reject) => {
    dispatch(sessionCheckingLogin())
    loginService(user)
      .then((result) => {
        if (result.hasOwnProperty('error')) {
          dispatch(sessionLoginError(result.error))
          reject(result.error)
        } else {
          dispatch(sessionLoginSuccess(result.token))
          window.sessionStorage.setItem(sessionStorageTokenKey, result.token)
          resolve(result.token)
        }
      })
      .catch((error) => {
        dispatch(
          sessionLoginError('There was a problem connecting to the server')
        )
        reject(error)
      })
  })

export const logout = () => (dispatch) => {
  dispatch(resetUsers())
  dispatch(sessionLogOut())
  window.sessionStorage.removeItem(sessionStorageTokenKey)
}

export const userRegister = (user) => (dispatch) =>
  new Promise((resolve, reject) => {
    dispatch(sessionRegister())
    registerService(user)
      .then((result) => {
        if (result.hasOwnProperty('error')) {
          dispatch(sessionRegisterError(result.error))
          reject(result.error)
        } else {
          dispatch(sessionRegisterSuccess(result))
          window.sessionStorage.setItem(sessionStorageTokenKey, result.token)
          resolve(result)
        }
      })
      .catch((error) => {
        dispatch(
          sessionRegisterError('There was a problem connecting to the server')
        )
        reject(error)
      })
  })

export const clearError = () => (dispatch) =>
  dispatch({
    type: SESSION_CLEAR_ERROR,
  })
