import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Ruslugat from './Pages/Ruslugat.jsx/Ruslugat'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/ruslugat' element={<Ruslugat></Ruslugat>}></Route>
      
      </Routes>

    </div>
  )
}

export default App