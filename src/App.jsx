import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Landingpage from './pages/Landingpage'
import Ajukaninovasi from './pages/Ajukaninovasi'


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landingpage />} />
          <Route path='/ajukaninovasi' element={<Ajukaninovasi />} />
        </Routes>
      </Router>
    </>
  )
}

export default App