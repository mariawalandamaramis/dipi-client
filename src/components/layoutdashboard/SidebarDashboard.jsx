import Cookies from 'js-cookie'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const SidebarDashboard = ({ openMenu }) => {
  const location = useLocation()
  const [activeMenu, setActiveMenu] = useState(location.pathname)
  const handleBackgroundMenu = (menu) => { setActiveMenu(menu) }

  const alertLogout = () => {
    withReactContent(Swal).fire({
      title: "Yakin Ingin Logout ?",
      text: "Kamu tidak akan bisa mengakses halaman ini lagi!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, Logout!",
      cancelButtonText: "Ga jadi"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Berhasil Logout",
          text: "Sampai jumpa lagi!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
  }

  const handleLogout = () => {
    alertLogout()
    Cookies.remove('responLogin')
    setTimeout(() => {
      window.location.href = '/';
    }, 2000)
  }

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


          <button onClick={handleLogout} className='flex p-3 w-full border-t-2'>
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