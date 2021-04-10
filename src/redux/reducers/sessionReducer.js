import {
  SESSION_CHECKING_LOGIN,
  SESSION_LOGIN_SUCCESS,
  SESSION_LOGIN_ERROR,
} from 'redux/types/sessionTypes'

const INITIAL_STATE = {
  loading: false,
  isAuth: false,
  token: '',
  loggedUser: {},
}

const sessionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SESSION_CHECKING_LOGIN:
      return {
        ...state,
        loading: true,
      }

    case SESSION_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
      }

    case SESSION_LOGIN_ERROR:
      return {
        ...state,
        loading: false,
      }

    default:
      return state
  }
}

export default sessionReducer
