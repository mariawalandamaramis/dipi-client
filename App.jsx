import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Landingpage from './pages/Landingpage'
import Ajukaninovasi from './pages/Ajukaninovasi'
import LayoutDashboard from './components/layoutdashboard/LayoutDashboard'
import Dashboard from './pages/Dashboard'
import DashoardInovasiku from './pages/DashoardInovasiku'
import DashboardDonasiku from './pages/DashboardDonasiku'
import DashboardProfile from './pages/DashboardProfile'
import DashoardInovasiku_update from './pages/DashoardInovasiku_update'
import LoginRegisterForm from './pages/LoginRegisterForm'
import SignUpForm from './pages/SignUpForm'
import DetailPageInovasi from './pages/DetailPageInovasi'
import ListPageInovasi from './pages/ListPageInovasi'
import Cookies from 'js-cookie'
import Ajukaninovasi_form from './pages/Ajukaninovasi_form'



const App = () => {

  // jika sudah Login, maka tidak bisa akses router ...
  const AlreadyLogin = (props) => {
    if (Cookies.get('responLogin') === undefined) { return props.children }
    else if (Cookies.get('responLogin') !== undefined) { return <Navigate to={'/'} /> }
  }

  // jika belum login, maka tidak bisa akses router ...
  const NotLogin = (props) => {
    if (Cookies.get('responLogin') === undefined) { return <Navigate to={'/'} /> }
    else if (Cookies.get('responLogin') !== undefined) { return props.children }
  }


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landingpage />} />
          <Route path='/login' element={<AlreadyLogin><LoginRegisterForm /></AlreadyLogin>} />
          <Route path='/signup' element={<AlreadyLogin><SignUpForm /></AlreadyLogin>} />
          <Route path='/detailpage' element={<DetailPageInovasi />} />
          <Route path='/listpage' element={<ListPageInovasi />} />
          <Route path='/ajukaninovasi' element={<Ajukaninovasi />} />
          <Route path='/ajukaninovasi/form' element={<Ajukaninovasi_form/>} />
          {/* <Route path='/dashboard' element={<NotLogin><LayoutDashboard /></NotLogin>} > */}
          <Route path='/dashboard' element={<LayoutDashboard />} >
            <Route index element={<Dashboard />} />
            <Route path='inovasiku' element={<DashoardInovasiku />} >
              <Route path=':id' element={<DashoardInovasiku_update />} />
            </Route>
            <Route path='donasiku' element={<DashboardDonasiku />} />
            <Route path='profile' element={<DashboardProfile />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App