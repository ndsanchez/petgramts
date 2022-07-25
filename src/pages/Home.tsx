import React from 'react'
import ListOfCategories from '../components/ListOfCategories'
import { ListOfPhotocards } from '../components/ListOfPhotocards'

export const Home = ({ path, id }: any) => {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotocards categoryId={id} />
    </>
  )
}
