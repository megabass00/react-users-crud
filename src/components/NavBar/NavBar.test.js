/* global describe, test, expect */
import { screen } from '@testing-library/react'
import { renderWithRedux, initialState } from 'commons/testUtils'
import NavBar from './index'

describe('<NavBar />', () => {
  test('should renders with initialState', () => {
    renderWithRedux(<NavBar />, { initialState })
    expect(screen.getByText('Users CRUD')).toBeInTheDocument()
    expect(screen.getByText('Register')).toBeInTheDocument()
    expect(screen.getByText('Login')).toBeInTheDocument()
  })

  test('should renders logo', () => {
    renderWithRedux(<NavBar />, { initialState })
    expect(screen.getByTitle('Logo')).toBeInTheDocument()
  })

  test('when is authorized should shows logout button', () => {
    const testState = {
      ...initialState,
      session: {
        ...initialState.session,
        isAuth: true,
      },
    }
    renderWithRedux(<NavBar />, {
      testState,
    })

    // fireEvent.click(getByText('LOGOUT'))
    expect(screen.getByText(/Login/)).toBeInTheDocument()
  })
})
