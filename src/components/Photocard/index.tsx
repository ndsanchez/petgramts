import React, { SetStateAction, useEffect, useRef, useState } from 'react'
import { Img, ImgWrapper, Button, BtnWrapper, Text } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useIntersectionObserver } from '../../Hooks/useIntersectionObserver'
import { useLocalStorage } from '../../Hooks/useLocalStorage'
import { useClickWithTimer } from '../../Hooks/useClickWithTimer'

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

  return (
    <>
      <ImgWrapper ref={ref}>
        {show && (
          <a href={`/?detail=${id}`}>
            <Img
              onDoubleClick={() => {
                setClicked(true)
                setILiked(true)
              }}
              src={src}
              alt='photocard'
            />
          </a>
        )}
      </ImgWrapper>
      {show && (
        <BtnWrapper>
          <Button
            clicked={clicked}
            onClick={() => {
              setClicked(true)
              setILiked(!iLiked)
            }}
          >
            {iLiked ? (
              <MdFavorite color='#eb3636cf' size={20} />
            ) : (
              <MdFavoriteBorder size={20} />
            )}
          </Button>
          <Text>{iLiked ? likes + 1 : likes} likes!</Text>
        </BtnWrapper>
      )}
    </>
  )
}

export { Photocard }
