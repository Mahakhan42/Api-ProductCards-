import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import './App.css'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { ShowDetails } from './pages/ShowDetails'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Signup/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/ShowDetails/:id' element={<ShowDetails />} />

      </Routes>
    </div>
  )
}

export default App
