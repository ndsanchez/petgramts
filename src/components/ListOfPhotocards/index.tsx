import React from 'react'
import { Photocard } from '../Photocard'

export const ListOfPhotocards = () => {
  return (
    <ul>
      {[1, 2, 3, 4, 5].map((id: number) => (
        <Photocard key={id} />
      ))}
    </ul>
  )
}
