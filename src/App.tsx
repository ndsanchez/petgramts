import React from 'react'
import { GlobalStyle } from './GlobalStyle'
import { Logo } from './components/Logo'
import { Router } from '@reach/router'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Logo />

      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:id' />
      </Router>
    </>
  )
}

export default App
