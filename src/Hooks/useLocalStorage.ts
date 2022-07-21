import React, { useState } from 'react'

export const useLocalStorage = (key: string, initialValue: any) => {
  const [storedValued, setValue] = useState<any>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  const setLocalStorage = (value: any) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setValue(value)
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValued, setLocalStorage]
}
