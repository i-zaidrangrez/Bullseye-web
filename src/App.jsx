import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Crimes from './pages/Crimes'
import Profile from './pages/Profile'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/crimes' element={<Crimes/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </div>
  )
}

export default App