import { render, screen } from '@testing-library/react'
import { Photocard, DEFAULT_IMAGE } from './index'

describe('Photocard', () => {
  it('Render appropiately Photocard', () => {
    render(<Photocard />)
    expect(
      (screen.getByAltText('photocard') as HTMLImageElement).src
    ).toContain(DEFAULT_IMAGE)
  })
})
