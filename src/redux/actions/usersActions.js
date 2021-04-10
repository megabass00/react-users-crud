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
import {
  fetchUsersList,
  fetchUser,
  updateUser as updateUserAction,
  deleteUser as deleteUserAction,
} from 'redux/actions/usersActions'

const usersFetchList = () => ({
  type: USERS_FETCH_LIST,
})

const usersFetchListSuccess = (users) => ({
  type: USERS_FETCH_LIST_SUCCESS,
  payload: users,
})

const usersFetchListError = (error) => ({
  type: USERS_FETCH_LIST_ERROR,
  payload: error,
})

const usersFetchUser = () => ({
  type: USERS_FETCH_USER,
})

const usersFetchUserSuccess = (user) => ({
  type: USERS_FETCH_USER_SUCCESS,
  payload: user,
})

const usersFetchUserError = (error) => ({
  type: USERS_FETCH_USER_ERROR,
  payload: error,
})

const usersUpdateUser = () => ({
  type: USERS_UPDATE_USER,
})

const usersUpdateUserSuccess = (user) => ({
  type: USERS_UPDATE_USER_SUCCESS,
  payload: user,
})

const usersUpdateUserError = (error) => ({
  type: USERS_UPDATE_USER_ERROR,
  payload: error,
})

const usersDeleteUser = () => ({
  type: USERS_DELETE_USER,
})

const usersDeleteUserSuccess = (user) => ({
  type: USERS_DELETE_USER_SUCCESS,
  payload: user,
})

const usersDeleteUserError = (error) => ({
  type: USERS_DELETE_USER_ERROR,
  payload: error,
})

export const getUsersList = (page) => (dispatch, getState) => {
  dispatch(usersFetchList())
  fetchUsersList(page)
    .then((users) => dispatch(usersFetchListSuccess(users)))
    .catch((error) => dispatch(usersFetchListError(error)))
}

export const getUser = (id) => (dispatch, getState) => {
  dispatch(usersFetchUser())
  fetchUser(id)
    .then((user) => dispatch(usersFetchUserSuccess(user)))
    .catch((error) => dispatch(usersFetchUserError(error)))
}

export const updateUser = (id, user) => (dispatch, getState) => {
  dispatch(usersUpdateUser())
  updateUserAction(id, user)
    .then((user) => dispatch(usersUpdateUserSuccess(user)))
    .catch((error) => dispatch(usersUpdateUserError(error)))
}

export const deleteUser = (id) => (dispatch, getState) => {
  dispatch(usersDeleteUser())
  deleteUserAction(id)
    .then((user) => dispatch(usersDeleteUserSuccess(user)))
    .catch((error) => dispatch(usersDeleteUserError(error)))
}
