import React, { useState } from 'react'

function Navbar() {

  const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <>
      <div className='sticky top-0 z-50'>

        <nav className='bg-white flex justify-between items-center border-b-2 p-6 md:px-20 lg:px-40'>

          <div>
            <img className='w-20 md:w-44' src="LOGODIPI.png" alt="" srcset="" />
          </div>

          <div className='flex justify-between items-center gap-x-8'>
            <div className='hidden md:flex items-center text-base font-semibold'>
              <ul className='flex gap-x-6'>
                <li>Daftar Inovasi Aktif</li>
                <li>Ajukan Inovasi</li>
              </ul>
            </div>
            <div>
              <button className='bg-orange-600 h-10 rounded-lg py-4 px-3.5 text-white text-sm font-black hidden md:flex items-center'>Login</button>
            </div>
            <div className='md:hidden flex items-center'>
              <button onClick={toggleMenu}>
                {openMenu ? (<img src="Close.svg" alt="" srcset="" />) : (<img src="Menu.svg" alt="" srcset="" />)}
              </button>
            </div>
          </div>

        </nav>

        {/* menu when screen mobile */}
        {openMenu && (
          <div className='w-full absolute bg-white md:hidden border-b-2'>
            <ul className='text-center text-base font-semibold'>
              <li className='py-6 border-b-2'>Daftar Inovasi Aktif</li>
              <li className='py-6 border-b-2'>Ajukan Inovasi</li>
            </ul>
            <div className='flex items-center justify-center p-6 mt-20'>
              <button className='bg-orange-700 w-full h-10 rounded-lg py-4 px-3.5 text-white text-sm font-black flex items-center justify-center'>Login</button>
            </div>
          </div>
        )}

      </div>
    </>
  )
}

export default Navbar