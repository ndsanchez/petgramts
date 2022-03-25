import React from 'react'
import Category from '../Category'
import { Item, List } from './styles'

const ListOfCategories = (): JSX.Element => {
  return (
    <List>
      {[1, 2, 3, 4].map((category) => (
        <Item key={category}>
          <Category />
        </Item>
      ))}
    </List>
  )
}

export default ListOfCategories
