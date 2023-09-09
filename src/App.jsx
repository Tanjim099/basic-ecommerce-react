import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HomePage } from './pages/HomePage'
import { Product } from './pages/Product'
import { CustomRoute } from './pages/CustomRoute'

function App() {

  return (
    <>
      <CustomRoute />
    </>
  )
}

export default App
