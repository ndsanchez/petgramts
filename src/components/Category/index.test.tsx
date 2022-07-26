import { render, screen } from '@testing-library/react'
import { Category, DEFAULT_IMAGE } from '.'

describe('Category', () => {
  it('render appropiately', () => {
    render(<Category cover={DEFAULT_IMAGE} />)
    expect((screen.getByAltText('pet') as HTMLImageElement).src).toContain(
      DEFAULT_IMAGE
    )
  })
})
