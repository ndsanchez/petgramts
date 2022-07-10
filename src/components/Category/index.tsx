import React from 'react'
import { Skeleton } from '../Skeleton'
import { Anchor, Image } from './styles'

export const DEFAULT_IMAGE: string = 'https://i.imgur.com/dJa0Hpl.jpg'

const Category = ({
  cover = DEFAULT_IMAGE,
  emoji = '?',
  path,
}: any): JSX.Element => {
  return (
    <Anchor href={path}>
      {cover === DEFAULT_IMAGE ? (
        <Skeleton height={75} rounded />
      ) : (
        <Image src={cover} alt='pet' />
      )}
      {emoji === '?' ? (
        <div
          style={{
            width: 20,
            margin: '0 auto',
            marginBottom: 10,
            marginTop: 5,
          }}
        >
          <Skeleton rounded />
        </div>
      ) : (
        <span>{emoji}</span>
      )}
    </Anchor>
  )
}

export { Category }
