/* global describe, test, afterEach, expect */
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

import { initialState } from 'commons/testUtils'
import * as sessionTypes from 'redux/types/sessionTypes'
import * as sessionActions from 'redux/actions/sessionActions'
import * as usersTypes from 'redux/types/usersTypes'
import * as usersActions from 'redux/actions/usersActions'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('session actions', () => {
  test('should create an action to checking login', () => {
    const user = { email: 'testing', password: 'testing' }
    const expectedAction = {
      type: sessionTypes.SESSION_CHECKING_LOGIN,
      payload: user,
    }
    expect(sessionActions.sessionCheckingLogin(user)).toEqual(expectedAction)
  })

  test('should create an action to register new user', () => {
    const user = { email: 'testing', password: 'testing' }
    const expectedAction = {
      type: sessionTypes.SESSION_REGISTER,
      payload: user,
    }
    expect(sessionActions.sessionRegister(user)).toEqual(expectedAction)
  })
})

describe('users actions', () => {
  test('should create an action to fetch users list', () => {
    const expectedAction = { type: usersTypes.USERS_FETCH_LIST }
    expect(usersActions.usersFetchList()).toEqual(expectedAction)
  })

  test('should create an action to fetch single user', () => {
    const expectedAction = { type: usersTypes.USERS_FETCH_USER }
    expect(usersActions.usersFetchUser()).toEqual(expectedAction)
  })
})

describe('session async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  test('should create actions to fetch and save user on context', () => {
    const user = { email: 'testing', password: 'testing' }
    const token = 'TestingToken'
    fetchMock.postOnce(`${process.env.REACT_APP_API_BASEURL}/login`, {
      token,
    })
    const expectedActions = [
      { type: sessionTypes.SESSION_CHECKING_LOGIN },
      { type: sessionTypes.SESSION_LOGIN_SUCCESS, payload: token },
    ]
    const store = mockStore(initialState)
    return store.dispatch(sessionActions.userLogin(user)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  test('should register a new user', () => {
    const user = { email: 'testing', password: 'testing' }
    const token = 'TestingToken'
    fetchMock.postOnce(`${process.env.REACT_APP_API_BASEURL}/register`, {
      token,
    })
    const expectedActions = [
      { type: sessionTypes.SESSION_REGISTER },
      { type: sessionTypes.SESSION_REGISTER_SUCCESS, payload: { token } },
    ]
    const store = mockStore(initialState)
    return store.dispatch(sessionActions.userRegister(user)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})

describe('users async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  test('should get first users list page', () => {
    const results = [
      { id: 1, name: 'test1' },
      { id: 2, name: 'test2' },
    ]
    fetchMock.getOnce(`${process.env.REACT_APP_API_BASEURL}/users?page=1`, {
      data: results,
    })
    const expectedActions = [
      { type: usersTypes.USERS_FETCH_LIST },
      { type: usersTypes.USERS_FETCH_LIST_SUCCESS, payload: { data: results } },
    ]
    const store = mockStore(initialState)
    return store.dispatch(usersActions.getUsersList(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  test('should fetch user details', () => {
    const user = {
      email: 'testing',
      first_name: 'testing',
      last_name: 'testing',
    }
    fetchMock.getOnce(`${process.env.REACT_APP_API_BASEURL}/users/1`, {
      data: user,
    })
    const expectedActions = [
      { type: usersTypes.USERS_FETCH_USER },
      { type: usersTypes.USERS_FETCH_USER_SUCCESS, payload: user },
    ]
    const store = mockStore(initialState)
    return store.dispatch(usersActions.getUser(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
