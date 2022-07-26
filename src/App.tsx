import React from 'react'
import ListOfCategories from './components/ListOfCategories'
import { GlobalStyle } from './GlobalStyle'
import { ListOfPhotocards } from './components/ListOfPhotocards'
import { Logo } from './components/Logo'
import { PhotocardContainer } from './containers/PhotocardContainer'
import { Router } from '@reach/router'
import { Home } from './pages/Home'

const App = (): JSX.Element => {
  const urlParams = new URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <>
      <GlobalStyle />
      <Logo />

      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <PhotocardContainer path='/detail/:id' />
      </Router>
    </>
  )
}

export default App
