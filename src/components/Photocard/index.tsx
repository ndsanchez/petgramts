import React, { useCallback, useEffect } from 'react'
import { Img, ImgWrapper } from './styles'
import { useIntersectionObserver } from '../../Hooks/useIntersectionObserver'
import { useLocalStorage } from '../../Hooks/useLocalStorage'
import { useClickWithTimer } from '../../Hooks/useClickWithTimer'
import { FavButton } from '../FavButton'
import { useMutation, gql } from '@apollo/client'

const LIKE_ANONYMOUS_PHOTO = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id
      likes
      liked
    }
  }
`

export const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

const Photocard = ({
  src = DEFAULT_IMAGE,
  likes = 0,
  id = 0,
  liked = false,
}) => {
  const key = `like-${id}`
  const [clicked, setClicked] = useClickWithTimer(300, false)
  const [iLiked, setILiked] = useLocalStorage(key, liked)
  const { show, ref } = useIntersectionObserver()
  const [likePhoto, { data, loading, error }] =
    useMutation(LIKE_ANONYMOUS_PHOTO)

  const onClick = useCallback(() => {
    !iLiked && likePhoto({ variables: { input: { id } } })
    setClicked(true)
    setILiked(!iLiked)
  }, [likePhoto, iLiked])

  return (
    <>
      <ImgWrapper ref={ref}>
        {show && (
          <a href={`/detail/${id}`}>
            <Img src={src} alt='photocard' />
          </a>
        )}
      </ImgWrapper>

      {show && (
        <FavButton
          likes={likes}
          iLiked={iLiked}
          clicked={clicked}
          onClick={onClick}
        />
      )}
    </>
  )
}

export { Photocard }
