/* global describe, test, expect */
import * as sessionTypes from 'redux/types/sessionTypes'
import sessionReducer from 'redux/reducers/sessionReducer'
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
})
