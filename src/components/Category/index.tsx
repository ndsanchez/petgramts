import React from 'react'
import { Anchor, Image } from './styles'

export const DEFAULT_IMAGE: string = 'https://i.imgur.com/dJa0Hpl.jpg'

const Category = ({
  cover = DEFAULT_IMAGE,
  emoji = '?',
  path,
}: any): JSX.Element => {
  return (
    <Anchor href={path}>
      <Image src={cover} alt='pet' />
      <span>{emoji}</span>
    </Anchor>
  )
}

export { Category }
