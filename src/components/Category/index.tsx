import React from 'react'
import { Skeleton } from '../Skeleton'
import { Anchor, Image, SkeletonWrapper } from './styles'

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
        <SkeletonWrapper>
          <Skeleton rounded />
        </SkeletonWrapper>
      ) : (
        <span>{emoji}</span>
      )}
    </Anchor>
  )
}

export { Category }
