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
  currentUser: null,
  loading: false,
  error: null,
  currentPage: 1,
  totalResults: 0,
  totalPages: 0,
}

const usersReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case USERS_FETCH_LIST:
      return {
        ...state,
        loading: true,
      }

    case USERS_FETCH_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        list: payload.data,
        currentPage: payload.page,
        totalResults: payload.total,
        totalPages: payload.total_pages,
      }

    case USERS_FETCH_LIST_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
        currentPage: 1,
        totalResults: 0,
        totalPages: 0,
      }

    case USERS_FETCH_USER:
      return {
        ...state,
        loading: true,
      }

    case USERS_FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: payload,
      }

    case USERS_FETCH_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
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
