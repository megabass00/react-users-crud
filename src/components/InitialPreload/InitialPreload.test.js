/* global describe, test, expect */
import { screen } from '@testing-library/react'
import { renderWithRedux } from 'commons/testUtils'
import InitialPreload from './index'

describe('<InitialPreload />', () => {
  test('should renders without problems', () => {
    renderWithRedux(<InitialPreload />)
    expect(screen.getByText('Users CRUD')).toBeInTheDocument()
    expect(screen.getByText('loading...')).toBeInTheDocument()
  })

  test('should renders images', () => {
    renderWithRedux(<InitialPreload />)
    expect(screen.getByTitle('Logo')).toBeInTheDocument()
    expect(screen.getByTitle('Ball')).toBeInTheDocument()
  })
})
