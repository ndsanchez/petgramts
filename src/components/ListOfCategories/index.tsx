import React from 'react'
import { Category } from '../Category'
import { Item, List } from './styles'
import { categories } from '../../../api/db.json'

const ListOfCategories = (): JSX.Element => {
  return (
    <List>
      {categories.map((category: any) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  )
}

export default ListOfCategories
