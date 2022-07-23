import React from 'react'
import { BtnWrapper, Button, Text } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

export const FavButton = ({ likes, iLiked, clicked, onClick }: any) => {
  return (
    <BtnWrapper>
      <Button clicked={clicked} onClick={onClick}>
        {iLiked ? (
          <MdFavorite color='#eb3636cf' size={20} />
        ) : (
          <MdFavoriteBorder size={20} />
        )}
      </Button>
      <Text>{likes} likes!</Text>
    </BtnWrapper>
  )
}
