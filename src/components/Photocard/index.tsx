import React, { useEffect, useRef, useState } from 'react'
import { Img, ImgWrapper, Button, BtnWrapper, Text } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useIntersectionObserver } from '../../Hooks/useIntersectionObserver'
import { useLocalStorage } from '../../Hooks/useLocalStorage'

export const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

const Photocard = ({ src = DEFAULT_IMAGE, likes = 0, id = 0 }) => {
  const key = `like-${id}`
  const [clicked, setClicked] = useState<boolean>(false)
  const [liked, setLiked] = useLocalStorage(key, false)

  const { show, ref } = useIntersectionObserver()

  useEffect(() => {
    if (true) {
      setTimeout(() => {
        setClicked(false)
      }, 300)
    }
  }, [clicked])

  return (
    <>
      <ImgWrapper ref={ref}>
        {show && (
          <>
            <Img
              onDoubleClick={() => {
                setClicked(true)
                setLiked(true)
              }}
              src={src}
              alt='photocard'
            />
          </>
        )}
      </ImgWrapper>
      {show && (
        <BtnWrapper>
          <Button
            clicked={clicked}
            onClick={() => {
              setClicked(true)
              setLiked(!liked)
            }}
          >
            {liked ? (
              <MdFavorite color='#eb3636cf' size={20} />
            ) : (
              <MdFavoriteBorder size={20} />
            )}
          </Button>
          <Text>{liked ? likes + 1 : likes} likes!</Text>
        </BtnWrapper>
      )}
    </>
  )
}

export { Photocard }
