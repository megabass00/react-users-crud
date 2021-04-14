/* global describe, test, expect */
import { render, screen } from '@testing-library/react'
import InitialPreload from './index'

describe('<InitialPreload />', () => {
  test('should renders without problems', () => {
    render(<InitialPreload />)
    expect(screen.getByText('Users CRUD')).toBeInTheDocument()
    expect(screen.getByText('loading...')).toBeInTheDocument()
  })

  test('should renders images', () => {
    render(<InitialPreload />)
    expect(screen.getByTitle('Logo')).toBeInTheDocument()
    expect(screen.getByTitle('Ball')).toBeInTheDocument()
  })
})
