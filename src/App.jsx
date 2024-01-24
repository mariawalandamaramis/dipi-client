import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Landingpage from './pages/Landingpage'
import Ajukaninovasi from './pages/Ajukaninovasi'
import LayoutDashboard from './components/layoutdashboard/LayoutDashboard'
import Dashboard from './pages/Dashboard'
import DashoardInovasiku from './pages/DashoardInovasiku'
import DashboardDonasiku from './pages/DashboardDonasiku'
import DashboardProfile from './pages/DashboardProfile'
import DashoardInovasiku_update from './pages/DashoardInovasiku_update'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landingpage />} />
          <Route path='/ajukaninovasi' element={<Ajukaninovasi />} />
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