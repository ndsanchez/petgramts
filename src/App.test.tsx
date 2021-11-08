import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

test('loads and display gretting', async () => {
  const { getByText } = render(<App />)

  const header = getByText(/welcome Neil/i)
  const button = getByText('Say hello!')
  expect(header).toBeInTheDocument()

  await fireEvent.click(button)

  expect(button).toHaveTextContent('Said hello!')
})
