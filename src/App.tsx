import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Category from './components/Category'

const App = (): JSX.Element => {
  const [btnText, setBtnText] = useState('Say hello!')
  return (
    <>
      <h1 id='gretting'>Welcome Neil!</h1>
      <Category />
      <Button
        onClick={() => {
          setBtnText('Said hello!')
        }}
        variant='outlined'
      >
        {btnText}
      </Button>
    </>
  )
}

export default App
