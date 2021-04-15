/* global describe, test, expect */
import { screen } from '@testing-library/react'
import { renderWithRedux } from 'commons/testUtils'
import Preload from './index'

describe('<Preload />', () => {
  test('should renders without problems', () => {
    renderWithRedux(<Preload />)
    expect(screen.getByTitle('Preload')).toBeInTheDocument()
  })
})
