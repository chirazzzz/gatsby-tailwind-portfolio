import React from 'react'
import { render } from '@testing-library/react'

// Using data-testid
const Title = () => (
  <h1 data-testid="hero-title">React Testing Library is working!</h1>
)

it('displays the correct title', () => {
  const { getByTestId } = render(<Title />)
  // Assert
  expect(getByTestId('hero-title')).toHaveTextContent(
    'React Testing Library is working!'
  )
  // --> Test will pass
})
