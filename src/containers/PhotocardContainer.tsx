import React, { useEffect } from 'react'
import { gql, useQuery } from '@apollo/client'
import { Photocard } from '../components/Photocard'

const GET_DETAIL = gql`
  query getDetail($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`

interface IProps {
  detailId: string
}

export const PhotocardContainer = ({ detailId }: IProps) => {
  const { loading, error, data } = useQuery(GET_DETAIL, {
    variables: { id: detailId },
  })

  if (loading) {
    return <span>loading...</span>
  }

  if (error) {
    return <span>Error: {error}</span>
  }

  return <Photocard {...data?.photo} />
}
