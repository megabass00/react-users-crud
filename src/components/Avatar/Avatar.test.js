/* global describe, test, expect */
import { render, screen } from '@testing-library/react'
import Avatar from './index'

const testSrc = 'https://reqres.in/img/faces/2-image.jpg'

describe('<Avatar />', () => {
  test('should renders without problems', () => {
    render(<Avatar src={testSrc} />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})
