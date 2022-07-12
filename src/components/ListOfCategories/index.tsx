import React, { useEffect, useState } from 'react'
import { useCategoriesData } from '../../Hooks/useCategoriesData'
import { Category } from '../Category'
import { Item, List } from './styles'

const ListOfCategories = (): JSX.Element => {
  const [showFixed, setShowFixed] = useState<boolean>(false)
  const { categories, loading } = useCategoriesData()

  useEffect(() => {
    const onScroll = (e: Event) => {
      const newShowFixed = window.scrollY > 200

      newShowFixed !== showFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed: boolean = false) => (
    <List fixed={fixed}>
      {loading ? (
        <>
          {[1, 2, 3, 4, 5, 6, 7].map((category: any) => (
            <Item key={category.id}>
              <Category {...category} />
            </Item>
          ))}
        </>
      ) : (
        <>
          {categories.map((category: any) => (
            <Item key={category.id}>
              <Category {...category} />
            </Item>
          ))}
        </>
      )}
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
