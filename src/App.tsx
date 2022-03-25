import React, { useState } from 'react'
import Button from '@mui/material/Button'
import ListOfCategories from './components/ListOfCategories'

const App = (): JSX.Element => {
  const [btnText, setBtnText] = useState('Say hello!')
  return (
    <>
      <h1 id='gretting'>Welcome Neil!</h1>
      <ListOfCategories />
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
