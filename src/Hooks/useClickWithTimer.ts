import React, { SetStateAction, useEffect, useState } from 'react'

export const useClickWithTimer = (
  time: number,
  initialValue: boolean
): [boolean, React.Dispatch<SetStateAction<boolean>>] => {
  const [clicked, setClicked] = useState<boolean>(initialValue)

  useEffect(() => {
    if (clicked) {
      setTimeout(() => {
        setClicked(false)
      }, time)
    }
  }, [clicked])

  return [clicked, setClicked]
}
