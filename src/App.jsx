import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Landingpage from './pages/Landingpage'
import Ajukaninovasi_form from './pages/Ajukaninovasi_form'
import Ajukaninovasi from './pages/Ajukaninovasi'


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landingpage />} />
          <Route path='/ajukaninovasi' element={<Ajukaninovasi />} />
          <Route path='ajukaninovasi/ajukaninovasi-form' element={<Ajukaninovasi_form />} />
        </Routes>
      </Router>
    </>
  )
}

export default App