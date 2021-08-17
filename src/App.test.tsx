import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

test('loads and display gretting', async () => {
  render(<App />)

  const header = screen.getByText(/welcome Neil/i)
  expect(header).toBeInTheDocument()
})
