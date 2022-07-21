import React, { useState } from 'react'
import Button from '@mui/material/Button'
import ListOfCategories from './components/ListOfCategories'
import { GlobalStyle } from './GlobalStyle'
import { Photocard } from './components/Photocard'
import { ListOfPhotocards } from './components/ListOfPhotocards'
import { Logo } from './components/Logo'
import { PhotocardContainer } from './containers/PhotocardContainer'

const App = (): JSX.Element => {
  const urlParams = new URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <>
      <GlobalStyle />
      <Logo />

      {detailId ? (
        <PhotocardContainer detailId={detailId} />
      ) : (
        <>
          <ListOfCategories />
          <ListOfPhotocards categoryId={3} />
        </>
      )}
    </>
  )
}

export default App
