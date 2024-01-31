import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SidebarDashboard = ({ openMenu }) => {
  const [activeMenu, setActiveMenu] = useState('/dashboard')
  const handleBackgroundMenu = (menu) => { setActiveMenu(menu) }

  return (
    <>
      <aside className='fixed top-0 left-0 w-64 z-40 h-screen'>
        <div className={` ${openMenu ? ('flex') : ('hidden')} md:flex flex-col justify-between bg-green-900 pb-6 pt-32 px-10   h-full overflow-y-auto`}>

          <div className='space-y-3'>

            <Link to={'/dashboard'}>
              <button
                onClick={() => handleBackgroundMenu('/dashboard')}
                className={`${activeMenu === '/dashboard' ? 'bg-orange-600' : 'bg-green-900'} flex gap-20 p-3 w-full rounded-xl`}>
                <div className='flex gap-3'>
                  <img src="/Home.svg" alt="" />
                  <p className='text-white text-base font-semibold'>Dashboard</p>
                </div>
                <div></div>
              </button>
            </Link>

            <Link to={'/dashboard/inovasiku'}>
              <button
                onClick={() => handleBackgroundMenu('/dashboard/inovasiku')}
                className={`${activeMenu === '/dashboard/inovasiku' ? 'bg-orange-600' : 'bg-green-900'} flex gap-20 p-3 w-full rounded-xl`}>
                <div className='flex gap-3'>
                  <img src="/inovasiku.svg" alt="" />
                  <p className='text-white text-base font-semibold'>Inovasiku</p>
                </div>
                <div></div>
              </button>
            </Link>

            <Link to={'/dashboard/donasiku'}>
              <button
                onClick={() => handleBackgroundMenu('/dashboard/donasiku')}
                className={`${activeMenu === '/dashboard/donasiku' ? 'bg-orange-600' : 'bg-green-900'} flex gap-20 p-3 w-full rounded-xl`}>
                <div className='flex gap-3'>
                  <img src="/diamond.svg" alt="" />
                  <p className='text-white text-base font-semibold'>Donasiku</p>
                </div>
                <div></div>
              </button>
            </Link>

            <Link to={'/dashboard/profile'}>
              <button
                onClick={() => handleBackgroundMenu('/dashboard/profile')}
                className={`${activeMenu === '/dashboard/profile' ? 'bg-orange-600' : 'bg-green-900'} flex gap-20 p-3 w-full rounded-xl`}>
                <div className='flex gap-3'>
                  <img src="/profile.svg" alt="" />
                  <p className='text-white text-base font-semibold'>Profile</p>
                </div>
                <div></div>
              </button>
            </Link>

          </div>


          <button className='flex p-3 w-full border-t-2'>
            <div className='flex gap-3'>
              <img src="/bx_log-out.svg" alt="" />
              <p className='text-white text-base font-semibold'>Logout</p>
            </div>
            <div></div>
          </button>

        </div>
      </aside>
    </>
  )
}

export default SidebarDashboard