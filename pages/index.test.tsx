import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a greeting', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Welcome to Next.ts/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
