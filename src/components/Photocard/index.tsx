import React, { useEffect, useRef, useState } from 'react'
import { Img, ImgWrapper, Button } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useIntersectionObserver } from '../../Hooks/useIntersectionObserver'

export const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

const Photocard = ({ src = DEFAULT_IMAGE, likes = 0, id = 0 }) => {
  const key = `like-${id}`
  const [liked, setLiked] = useState<boolean>(
    window.localStorage.getItem(key) === 'true' || false
  )
  const { show, ref } = useIntersectionObserver()

  const setLocalStorage = (value: any) => {
    try {
      window.localStorage.setItem(key, value)
      setLiked(value)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <ImgWrapper ref={ref}>
        {show && (
          <Img
            onDoubleClick={() => setLocalStorage(true)}
            src={src}
            alt='photocard'
          />
        )}
      </ImgWrapper>
      {show && (
        <Button onClick={() => setLocalStorage(!liked)}>
          {liked ? (
            <MdFavorite color='#eb3636cf' size={20} />
          ) : (
            <MdFavoriteBorder size={20} />
          )}
          {liked ? likes + 1 : likes} likes!
        </Button>
      )}
    </>
  )
}

export { Photocard }
