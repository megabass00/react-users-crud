/* global describe, test, jest, expect */
import { render, screen, waitFor } from '@testing-library/react'
import { STATUS_MESSAGE_CLEAR_TIME } from 'commons/constants'
import StatusMessage from './index'

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
      timeout: STATUS_MESSAGE_CLEAR_TIME + 100,
    })
  })
})
