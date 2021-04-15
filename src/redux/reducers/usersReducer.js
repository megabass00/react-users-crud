import {
  USERS_FETCH_LIST,
  USERS_FETCH_LIST_SUCCESS,
  USERS_FETCH_LIST_ERROR,
  USERS_SET_CURRENT_PAGE,
  USERS_FETCH_USER,
  USERS_FETCH_USER_SUCCESS,
  USERS_FETCH_USER_ERROR,
  USERS_UPDATE_USER,
  USERS_UPDATE_USER_SUCCESS,
  USERS_UPDATE_USER_ERROR,
  USERS_DELETE_USER,
  USERS_DELETE_USER_SUCCESS,
  USERS_DELETE_USER_ERROR,
  USERS_CLEAR_ERROR,
  USERS_RESET,
} from 'redux/types/usersTypes'

export const INITIAL_STATE = {
  list: [],
  currentUser: null,
  loading: false,
  error: null,
  currentPage: 1,
  totalResults: 0,
  totalPages: 0,
  perPage: 0,
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
        list: [...state.list, ...payload.data],
        currentPage: payload.page,
        totalResults: payload.total,
        totalPages: payload.total_pages,
        perPage: payload.per_page,
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

    case USERS_SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload,
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
        list: state.list.map((user) =>
          user.id === payload.id ? { ...user, ...payload.user } : user
        ),
      }

    case USERS_UPDATE_USER_ERROR:
      return {
        ...state,
        error: payload,
      }

    case USERS_DELETE_USER:
      return {
        ...state,
      }

    case USERS_DELETE_USER_SUCCESS:
      return {
        ...state,
        list: state.list.filter((user) => user.id !== payload),
      }

    case USERS_DELETE_USER_ERROR:
      return {
        ...state,
        loading: false,
      }

    case USERS_CLEAR_ERROR:
      return {
        ...state,
        error: null,
      }

    case USERS_RESET:
      return INITIAL_STATE

    default:
      return state
  }
}

export default usersReducer
