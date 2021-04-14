/* global describe, test, jest, expect */
import { render, screen } from '@testing-library/react'
import EditField from './index'

const defaultProps = {
  label: 'TestLabel',
  name: 'TestName',
  value: 'TestValue',
  editing: false,
  register: jest.fn(),
  error: {},
}

describe('<EditField />', () => {
  test('should renders without problems', () => {
    render(<EditField {...defaultProps} />)
    expect(screen.getByText('TestLabel')).toBeInTheDocument()
  })

  test('should shows an input when is editing', () => {
    render(<EditField {...defaultProps} editing={true} />)
    expect(screen.getByDisplayValue('TestValue')).toBeInTheDocument()
  })
})
