/* global describe, test, expect */
import * as sessionTypes from 'redux/types/sessionTypes'
import sessionReducer from 'redux/reducers/sessionReducer'
import * as usersTypes from 'redux/types/usersTypes'
import usersReducer from 'redux/reducers/usersReducer'
import rootReducer from 'redux/reducers'
import { initialState } from 'commons/testUtils'

describe('reducers', () => {
  test('should return the initial state', () => {
    expect(rootReducer(undefined, {})).toEqual(initialState)
  })

  test('should set toker and give authorization to user', () => {
    const expectedState = {
      ...initialState.session,
      isAuth: true,
      token: 'TestToken',
    }
    expect(
      sessionReducer(initialState.session, {
        type: sessionTypes.SESSION_LOGIN_SUCCESS,
        payload: { token: 'TestToken' },
      })
    ).toEqual(expectedState)
  })

  test('should update user', () => {
    const testState = {
      ...initialState.users,
      list: [{ id: 1, first_name: 'OldName' }],
    }
    const expectedState = {
      ...initialState.users,
      list: [{ id: 1, first_name: 'UpdatedName' }],
    }
    expect(
      usersReducer(testState, {
        type: usersTypes.USERS_UPDATE_USER_SUCCESS,
        payload: { id: 1, user: { id: 1, first_name: 'UpdatedName' } },
      })
    ).toEqual(expectedState)
  })
})
