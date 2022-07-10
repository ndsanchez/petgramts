import React, { useState } from 'react'
import Button from '@mui/material/Button'
import ListOfCategories from './components/ListOfCategories'
import { GlobalStyle } from './GlobalStyle'
import { Photocard } from './components/Photocard'
import { ListOfPhotocards } from './components/ListOfPhotocards'
import { Logo } from './components/Logo'

const App = (): JSX.Element => {
  const [btnText, setBtnText] = useState('Say hello!')
  return (
    <>
      <GlobalStyle />
      {/* <h1 id='gretting'>Welcome Neil!</h1> */}
      <Logo />
      <ListOfCategories />
      <ListOfPhotocards />
      {/* <Button
        onClick={() => {
          setBtnText('Said hello!')
        }}
        variant='outlined'
      >
        {btnText}
      </Button> */}
    </>
  )
}

export default App
