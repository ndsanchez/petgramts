import React from 'react'
import ListOfCategories from '../components/ListOfCategories'
import { ListOfPhotocards } from '../components/ListOfPhotocards'
import { Photocard } from '../components/Photocard'

export const Home = ({ path, id }: any) => {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotocards categoryId={id} />
    </>
  )
}
