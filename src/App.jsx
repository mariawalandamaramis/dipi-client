import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Landingpage from './pages/Landingpage'
import LayoutDashboard from './components/layoutdashboard/LayoutDashboard'
import Dashboard from './pages/Dashboard'
import DashoardInovasiku from './pages/DashoardInovasiku'
import DashboardDonasiku from './pages/DashboardDonasiku'
import DashboardProfile from './pages/DashboardProfile'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landingpage />} />
          <Route path='/dashboard' element={<LayoutDashboard />} > 
            <Route index element={<Dashboard />} />
            <Route path='inovasiku' element={<DashoardInovasiku />} />
            <Route path='donasiku' element={<DashboardDonasiku />} />
            <Route path='profile' element={<DashboardProfile />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App