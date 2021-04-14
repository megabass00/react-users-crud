/* global describe, test, jest, expect */
import { render, screen } from '@testing-library/react'
import FormInput from './index'

const defaultProps = {
  label: 'TestLabel',
  name: 'TestName',
  type: 'text',
  value: 'TestValue',
  placeholder: 'TestPlaceholder',
  autoFocus: false,
  register: jest.fn(),
  error: {},
}

describe('<FormInput />', () => {
  test('should renders without problems', () => {
    render(<FormInput {...defaultProps} />)
    expect(screen.getByText('TestLabel')).toBeInTheDocument()
  })

  test('should works placeholder prop', () => {
    render(<FormInput {...defaultProps} />)
    expect(screen.getByPlaceholderText('TestPlaceholder')).toBeInTheDocument()
  })
})
