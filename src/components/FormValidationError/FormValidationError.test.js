/* global describe, test, expect */
import { render, screen } from '@testing-library/react'
import FormValidationError from './index'

const defaultProps = {
  name: 'TestName',
  error: {},
}

describe('<FormValidationError />', () => {
  test('should shows an required error', () => {
    const error = { type: 'required' }
    render(<FormValidationError {...defaultProps} error={error} />)
    expect(screen.getByText(/is required/)).toBeInTheDocument()
  })

  test('should shows an min legth error', () => {
    const error = { type: 'minLength' }
    render(<FormValidationError {...defaultProps} error={error} />)
    expect(
      screen.getByText(/does not have the minimum length/)
    ).toBeInTheDocument()
  })

  test('should shows an validation error', () => {
    const error = { type: 'validate' }
    render(<FormValidationError {...defaultProps} error={error} />)
    expect(
      screen.getByText(/has not passed the validation/)
    ).toBeInTheDocument()
  })
})
