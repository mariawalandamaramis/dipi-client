import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Landingpage from './pages/Landingpage'
import LoginRegisterForm from './pages/LoginRegisterForm'
import SignUpForm from './pages/SignUpForm'
import DetailPageInovasi from './pages/DetailPageInovasi'
import ListInovasi from './components/ListInovasi'
import ListPageInovasi from './pages/ListPageInovasi'



const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landingpage />} />
          <Route path='/login' element={<LoginRegisterForm />} />
          <Route path='/signup' element={<SignUpForm />} />
          <Route path='/detailpage' element={<DetailPageInovasi />} />
          <Route path='/listpage' element={<ListPageInovasi />} />
        </Routes>
      </Router>
    </>
  )
}

export default App