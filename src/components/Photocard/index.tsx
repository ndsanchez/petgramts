import React, { useEffect, useRef, useState } from 'react'
import { Img, ImgWrapper, Button } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'
import { useIntersectionObserver } from '../../Hooks/useIntersectionObserver'

export const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

const Photocard = ({ src = DEFAULT_IMAGE, likes = 0 }) => {
  const { show, ref } = useIntersectionObserver()

  return (
    <>
      <ImgWrapper ref={ref}>
        {show && <Img src={src} alt='photocard' />}
      </ImgWrapper>
      {show && (
        <Button>
          <MdFavoriteBorder size={20} />
          {likes} likes!
        </Button>
      )}
    </>
  )
}

export { Photocard }
