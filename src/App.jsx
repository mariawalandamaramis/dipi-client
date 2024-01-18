import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Landingpage from './pages/Landingpage'
import LoginRegisterForm from './pages/LoginRegisterForm'
import SignUpForm from './pages/SignUpForm'


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landingpage />} />
          <Route path='/login' element={<LoginRegisterForm />} />
          <Route path='/signup' element={<SignUpForm />} />
        </Routes>
      </Router>
    </>
  )
}

export default App