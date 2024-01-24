import React from 'react'
import { Link } from 'react-router-dom'

const HeaderDashboard = ({ openMenu, toggleMenu }) => {
  return (
    <>
      <nav class="fixed top-0 z-50 w-full">
        <div className='bg-white flex justify-between items-center border-b-2 p-6 md:px-10'>
          <div className='flex items-center gap-2'>
            <div className='flex md:hidden items-center border rounded-lg p-2'>
              <button onClick={toggleMenu}>
                {openMenu ? (<img src="/Close.svg" alt="" srcset="" />) : (<img src="/Menu.svg" alt="" srcset="" />)}
              </button>
            </div>
            <Link to={'/'}>
              <div><img className='w-24 md:w-32' src="LOGODIPI.png" alt="" srcset="" /></div>
            </Link>
          </div>
          <div className='flex items-center gap-2'>
            <div className='w-10 md:w-10 h-10 md:h-10'>
              <img className='w-full h-full rounded-full object-cover' src="/Hero.png" alt="" srcset="" />
            </div>
            <p className='hidden sm:flex text-base font-semibold'>Tralala Lulu</p>
          </div>
        </div>
      </nav>
    </>
  )
}

export default HeaderDashboard