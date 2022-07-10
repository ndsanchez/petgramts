import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { Item, List } from './styles'
import { categories } from '../../../api/db.json'

const ListOfCategories = (): JSX.Element => {
  const [showFixed, setShowFixed] = useState<boolean>(false)

  useEffect(() => {
    const onScroll = (e: Event) => {
      const newShowFixed = window.scrollY > 200

      newShowFixed !== showFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed: boolean = false) => (
    <List className={fixed ? 'fixed' : ''}>
      {categories.map((category: any) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

export default ListOfCategories
