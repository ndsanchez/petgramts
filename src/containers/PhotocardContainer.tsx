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

export const PhotocardContainer = ({ id }: any) => {
  const { loading, error, data } = useQuery(GET_DETAIL, {
    variables: { id },
  })

  if (loading) {
    return <span>loading...</span>
  }

  if (error) {
    return <span>Error: {error}</span>
  }

  return <Photocard {...data?.photo} />
}
