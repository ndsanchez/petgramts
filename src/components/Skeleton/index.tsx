import React from 'react'
import { Div } from './styles'

interface IProps {
  height?: number
  rounded?: boolean
}

export const Skeleton = ({ height = 20, rounded = false }: IProps) => {
  return <Div height={height} rounded={rounded} />
}
