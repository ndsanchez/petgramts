import React, { useEffect, useRef, useState } from 'react'

export const useIntersectionObserver = () => {
  const ref: any = useRef(null)
  const [show, setShow] = useState<boolean>(false)

  useEffect(() => {
    const callback = (entry: any, observer: any) => {
      const { isIntersecting } = entry[0]
      if (isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    }

    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : //@ts-ignore
          import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver(callback)
      observer.observe(ref.current)
    })
  }, [ref])

  return { show, ref }
}
