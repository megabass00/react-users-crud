/* global describe, test, jest, expect */
import { render, screen } from '@testing-library/react'
import Pagination from './index'

const defaultProps = {
  onPrev: jest.fn(),
  onNext: jest.fn(),
  currentPage: 1,
  totalResults: 100,
  totalPages: 10,
  perPage: 10,
}

describe('<Pagination />', () => {
  test('should renders without problems', () => {
    render(<Pagination {...defaultProps} />)
    expect(screen.getByTitle('ArrowLeft')).toBeInTheDocument()
    expect(screen.getByTitle('ArrowRight')).toBeInTheDocument()
  })

  test('should renders labels successfully', () => {
    render(<Pagination {...defaultProps} />)
    expect(screen.getByText('Page 1/10')).toBeInTheDocument()
    expect(screen.getByText('1 to 10 of 100')).toBeInTheDocument()
  })
})
