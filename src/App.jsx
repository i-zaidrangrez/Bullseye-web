import React from 'react'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <div className='h-screen'>
      <Navbar/>
      <Routes>
        <Route path='/' element={Hero} />
      </Routes>
    </div>
  )
}

export default App