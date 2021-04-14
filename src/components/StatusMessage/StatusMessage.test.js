/* global describe, test, jest, expect */
import { render, screen, waitFor } from '@testing-library/react'
import StatusMessage, { CLEAR_TIME } from './index'

const defaultProps = {
  type: 'info',
  message: 'TestMessage',
  onClear: jest.fn(),
}

describe('<StatusMessage />', () => {
  test('should renders without problems', () => {
    render(<StatusMessage {...defaultProps} />)
    expect(screen.getByText('TestMessage')).toBeInTheDocument()
  })

  test('should calls onClear function', async () => {
    const mockFn = jest.fn()
    render(<StatusMessage {...defaultProps} onClear={mockFn} />)
    await waitFor(() => expect(mockFn).toHaveBeenCalledTimes(1), {
      timeout: CLEAR_TIME + 100,
    })
  })
})
