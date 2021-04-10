import {
  USERS_FETCH_LIST,
  USERS_FETCH_LIST_SUCCESS,
  USERS_FETCH_LIST_ERROR,
  USERS_FETCH_USER,
  USERS_FETCH_USER_SUCCESS,
  USERS_FETCH_USER_ERROR,
  USERS_UPDATE_USER,
  USERS_UPDATE_USER_SUCCESS,
  USERS_UPDATE_USER_ERROR,
  USERS_DELETE_USER,
  USERS_DELETE_USER_SUCCESS,
  USERS_DELETE_USER_ERROR,
} from 'redux/types/usersTypes'

const INITIAL_STATE = {
  list: [],
  loading: false,
}

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERS_FETCH_LIST:
      return {
        ...state,
      }

    case USERS_FETCH_LIST_SUCCESS:
      return {
        ...state,
      }

    case USERS_FETCH_LIST_ERROR:
      return {
        ...state,
      }

    case USERS_FETCH_USER:
      return {
        ...state,
      }

    case USERS_FETCH_USER_SUCCESS:
      return {
        ...state,
      }

    case USERS_FETCH_USER_ERROR:
      return {
        ...state,
      }

    case USERS_UPDATE_USER:
      return {
        ...state,
      }

    case USERS_UPDATE_USER_SUCCESS:
      return {
        ...state,
      }

    case USERS_UPDATE_USER_ERROR:
      return {
        ...state,
      }

    case USERS_DELETE_USER:
      return {
        ...state,
      }

    case USERS_DELETE_USER_SUCCESS:
      return {
        ...state,
      }

    case USERS_DELETE_USER_ERROR:
      return {
        ...state,
      }

    default:
      return state
  }
}

export default usersReducer
