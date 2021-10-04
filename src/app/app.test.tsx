import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '.'

test('renders zappar link', () => {
  render(<App />)
  const linkElement = screen.getByText(
    /Zappar: Augmented, Virtual & Mixed Reality Solution/i
  )
  expect(linkElement).toBeInTheDocument()
})

test('renders allow camera button', () => {
  render(<App />)
  const linkElement = screen.getByText(/Allow Camera/i)
  expect(linkElement).toBeInTheDocument()
})
