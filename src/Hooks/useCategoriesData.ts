import { useEffect, useState } from 'react'

export const useCategoriesData = () => {
  const [categories, setCategories] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading((prev) => !prev)
    window
      .fetch(
        'https://petgram-server-alexander.mralexsaavedra.vercel.app/categories'
      )
      .then((res) => res.json())
      .then((response) => {
        setCategories(response)
        setLoading((prev) => !prev)
      })
  }, [])

  return { categories, loading }
}
