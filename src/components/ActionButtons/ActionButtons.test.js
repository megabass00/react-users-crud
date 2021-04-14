/* global describe, test, jest, expect */
import { render, screen, fireEvent } from '@testing-library/react'
import ActionButtons from './index'

describe('<ActionButtons />', () => {
  test('should renders without problems', () => {
    render(<ActionButtons />)
    expect(screen.getByTestId('wrapper')).toBeInTheDocument()
  })

  test('should renders 2 buttons', () => {
    render(<ActionButtons onEdit={jest.fn()} onRemove={jest.fn()} />)
    const elements = screen.getAllByRole('button')
    expect(elements.length).toBe(2)
  })

  test('should renders icons', () => {
    render(<ActionButtons onEdit={jest.fn()} onRemove={jest.fn()} />)
    expect(screen.getByTitle('Edit')).toBeInTheDocument()
    expect(screen.getByTitle('Trash')).toBeInTheDocument()
  })

  test('should works button actions', () => {
    const mockOnEdit = jest.fn()
    const mockOnRemove = jest.fn()
    render(<ActionButtons onEdit={mockOnEdit} onRemove={mockOnRemove} />)
    const elements = screen.getAllByRole('button')
    fireEvent.click(elements[0])
    fireEvent.click(elements[1])
    expect(mockOnEdit).toHaveBeenCalledTimes(1)
    expect(mockOnRemove).toHaveBeenCalledTimes(1)
  })
})
