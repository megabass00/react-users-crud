/* global describe, jest, test, expect */
import { fireEvent, render, screen } from '@testing-library/react'
import Button from './index'

describe('<Button />', () => {
  test('should renders without problems', () => {
    render(<Button>Test</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  test('should executes action on click', () => {
    const mockFn = jest.fn()
    render(<Button onClick={mockFn}>Test</Button>)
    fireEvent.click(screen.getByText('Test'))
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})
