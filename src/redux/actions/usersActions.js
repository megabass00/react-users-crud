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
  USERS_RESET,
} from 'redux/types/usersTypes'
import {
  fetchUsersListService,
  fetchUserService,
  updateUserService,
  deleteUserService,
} from 'redux/services/usersService'

export const usersFetchList = () => ({
  type: USERS_FETCH_LIST,
})

export const usersFetchListSuccess = (users) => ({
  type: USERS_FETCH_LIST_SUCCESS,
  payload: users,
})

export const usersFetchListError = (error) => ({
  type: USERS_FETCH_LIST_ERROR,
  payload: error,
})

export const usersSetCurrentPage = (page) => ({
  type: USERS_SET_CURRENT_PAGE,
  payload: page,
})

export const usersFetchUser = () => ({
  type: USERS_FETCH_USER,
})

export const usersFetchUserSuccess = (user) => ({
  type: USERS_FETCH_USER_SUCCESS,
  payload: user,
})

export const usersFetchUserError = (error) => ({
  type: USERS_FETCH_USER_ERROR,
  payload: error,
})

export const usersUpdateUser = () => ({
  type: USERS_UPDATE_USER,
})

export const usersUpdateUserSuccess = (id, user) => ({
  type: USERS_UPDATE_USER_SUCCESS,
  payload: { id, user },
})

export const usersUpdateUserError = (error) => ({
  type: USERS_UPDATE_USER_ERROR,
  payload: error,
})

export const usersDeleteUser = () => ({
  type: USERS_DELETE_USER,
})

export const usersDeleteUserSuccess = (user) => ({
  type: USERS_DELETE_USER_SUCCESS,
  payload: user,
})

export const usersDeleteUserError = (error) => ({
  type: USERS_DELETE_USER_ERROR,
  payload: error,
})

export const getUsersList = (page) => (dispatch, getState) => {
  // if (page <= 0) return []
  // const { perPage, list } = getState().users
  // if (list.length >= perPage * page) {
  //   const end = perPage * page
  //   const start = end - perPage
  //   const sliceList = list.slice(start, end)
  //   console.log('*** sliceList', sliceList)
  //   return sliceList
  // }
  return new Promise((resolve, reject) => {
    dispatch(usersFetchList())
    fetchUsersListService(page)
      .then((results) => {
        dispatch(usersFetchListSuccess(results))
        resolve(results.data)
      })
      .catch((error) => {
        dispatch(usersFetchListError(error))
        reject(error)
      })
  })
}

export const setCurrentPage = (page) => (dispatch) =>
  dispatch(usersSetCurrentPage(page))

export const getUser = (id) => (dispatch) =>
  new Promise((resolve, reject) => {
    dispatch(usersFetchUser())
    fetchUserService(id)
      .then((result) => {
        dispatch(usersFetchUserSuccess(result.data))
        resolve(result.data)
      })
      .catch((error) => {
        dispatch(usersFetchUserError(error))
        reject(error)
      })
  })

export const updateUser = (id, user) => (dispatch) =>
  new Promise((resolve, reject) => {
    dispatch(usersUpdateUser())
    updateUserService(id, user)
      .then((result) => {
        dispatch(usersUpdateUserSuccess(id, user))
        resolve(result.updatedAt)
      })
      .catch((error) => {
        dispatch(usersUpdateUserError(error))
        reject(error)
      })
  })

export const deleteUser = (id) => (dispatch) =>
  new Promise((resolve, reject) => {
    dispatch(usersDeleteUser())
    deleteUserService(id)
      .then(() => {
        dispatch(usersDeleteUserSuccess())
        resolve()
      })
      .catch((error) => {
        dispatch(usersDeleteUserError(error))
        reject(error)
      })
  })

export const resetUsers = () => (dispatch) =>
  dispatch({
    type: USERS_RESET,
  })
