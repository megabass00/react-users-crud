import {
  SESSION_CHECKING_LOGIN,
  SESSION_LOGIN_SUCCESS,
  SESSION_LOGIN_ERROR,
  SESSION_REGISTER,
  SESSION_REGISTER_SUCCESS,
  SESSION_REGISTER_ERROR,
} from 'redux/types/sessionTypes'

export const sessionStorageTokenKey = 'token'

const oldToken = window.sessionStorage.getItem(sessionStorageTokenKey)
const INITIAL_STATE = {
  loading: false,
  isAuth: Boolean(oldToken) || false,
  token: oldToken,
  error: '',
  loggedUser: {},
}

const sessionReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case SESSION_CHECKING_LOGIN:
      return {
        ...state,
        loading: true,
        error: '',
      }

    case SESSION_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
        token: payload.token,
      }

    case SESSION_LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      }

    case SESSION_REGISTER:
      return {
        ...state,
        loading: true,
        error: '',
      }

    case SESSION_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
        token: payload.token,
      }

    case SESSION_REGISTER_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      }

    default:
      return state
  }
}

export default sessionReducer
