import React, { useEffect, useState } from 'react'
import { Photocard } from '../Photocard'
import { useQuery, gql } from '@apollo/client'

const GET_PHOTOCARDS = gql`
  query GetPhotocards($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`

export const ListOfPhotocards = ({ categoryId }: any) => {
  const [list, setList] = useState<any>([])
  const { data } = useQuery(GET_PHOTOCARDS, { variables: { categoryId } })

  // if (loading) return <span>loading...</span>
  // if (error) return <span>Error!</span>

  useEffect(() => setList(data?.photos), [data])

  return (
    <ul>
      {list &&
        list.map((photo: any) => <Photocard key={photo?.id} {...photo} />)}
    </ul>
  )
}
