import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { getUserByIdAPI } from '../redux/slice/profile-slice';

function Navbar() {

  const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  const responLoginCookie = Cookies.get('responLogin');
  const userId = responLoginCookie ? JSON.parse(responLoginCookie)?.user?.id : null;
  const dispatch = useDispatch()

  useEffect(() => {
    if (userId) {
      dispatch(getUserByIdAPI(userId));
    }
  }, [userId]);

  const user = useSelector(state => state.profile).userById.data

  return (
    <>
      <div className='sticky top-0 z-50'>

        <nav className='bg-white flex justify-between items-center border-b-2 p-6 md:px-20 lg:px-40'>

          <Link to={'/'}>
            <div><img className='w-20 md:w-44' src="/LOGODIPI.png" alt="" srcset="" /></div>
          </Link>

          <div className='flex justify-between items-center gap-x-8'>
            <div className='hidden md:flex items-center text-green-900 text-base font-bold'>
              <ul className='flex gap-x-6'>
                <Link to={'/inovasi'}><li className='hover:underline underline-offset-8'>Daftar Inovasi Aktif</li></Link>
                <Link to={'/ajukaninovasi'}><li className='hover:underline underline-offset-8'>Ajukan Inovasi</li></Link>
              </ul>
            </div>
            {
              Cookies.get('responLogin') ? (
                <Link to={'/dashboard'}>
                  <div className='w-10 md:w-10 h-10 md:h-10'>
                    <img className='w-full h-full rounded-full object-cover' src={user?.profile || "BlankData.jpg"} alt="" srcset="" />
                  </div>
                </Link>
              ) : (
                <Link to="/login">
                  <div>
                    <button className='bg-orange-600 h-10 rounded-lg py-4 px-3.5 text-white text-sm font-black hidden md:flex items-center'>Login</button>
                  </div>
                </Link>
              )
            }
            <div className='md:hidden flex items-center gap-4'>
              <button onClick={toggleMenu}>
                {openMenu ? (<img src="/Close.svg" alt="" srcSet="" />) : (<img src="/Menu.svg" alt="" srcSet="" />)}
              </button>
            </div>
          </div>

        </nav>

        {/* menu when screen mobile */}
        {openMenu && (
          <div className='w-full absolute bg-white md:hidden border-b-2'>
            <ul className='text-center text-base font-semibold'>
              <Link to={'/inovasi'}><li className='py-6 border-b-2'>Daftar Inovasi Aktif</li></Link>
              <Link to={'/ajukaninovasi'}><li className='py-6 border-b-2'>Ajukan Inovasi</li></Link>
            </ul>
            <div className={`${Cookies.get('responLogin') ? ('hidden') : ('flex')} items-center justify-center p-6 mt-20`}>
              <Link to={'/login'} className='w-full'>
                <button className='bg-orange-700 w-full h-10 rounded-lg py-4 px-3.5 text-white text-sm font-black flex items-center justify-center'>Login</button>
              </Link>
            </div>
          </div>
        )}

      </div>
    </>
  )
}

export default Navbar