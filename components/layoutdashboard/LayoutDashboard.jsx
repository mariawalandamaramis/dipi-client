import React, { useEffect, useState } from 'react'
import HeaderDashboard from './HeaderDashboard'
import SidebarDashboard from './SidebarDashboard'
import { Outlet } from 'react-router'

const LayoutDashboard = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu = () => { setOpenMenu(!openMenu) }
  const handleDefaultMenu = () => { setOpenMenu(false) }

  useEffect(() => {
    window.addEventListener('resize', handleDefaultMenu)
    return () => { window.removeEventListener('resize', handleDefaultMenu) }
  })

  return (
    <>
      <HeaderDashboard openMenu={openMenu} toggleMenu={toggleMenu} />
      <SidebarDashboard openMenu={openMenu} />
      <div className={`pt-12 mb-20 md:ml-64 ${openMenu ? ('blur-md') : ('')}`}>
        <div className='p-8 mt-10'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default LayoutDashboard