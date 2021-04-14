/* global describe, test, expect */
import { render, screen } from '@testing-library/react'
import Preload from './index'

describe('<Preload />', () => {
  test('should renders without problems', () => {
    render(<Preload />)
    expect(screen.getByTitle('Preload')).toBeInTheDocument()
  })
})
