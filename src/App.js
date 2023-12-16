import React from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import Dashboard from './Dashboard'
import About from './About'
import NotFound from './NotFound'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/About/:firstName' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App

