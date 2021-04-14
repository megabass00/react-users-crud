/* global describe, test,  expect */
import { render, screen } from '@testing-library/react'
import NabButton from './index'

describe('<NabButton />', () => {
  test('should renders without problems', () => {
    render(<NabButton direction="left" />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  test('should renders left icon', () => {
    render(<NabButton direction="left" />)
    expect(screen.getByTitle('ArrowLeft')).toBeInTheDocument()
  })

  test('should renders right icon', () => {
    render(<NabButton direction="right" />)
    expect(screen.getByTitle('ArrowRight')).toBeInTheDocument()
  })
})
